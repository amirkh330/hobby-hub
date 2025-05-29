import { CallApi, PostApi } from "@/settings/axiosConfig";
import { IScenario } from "@/types/responses/ResponsesTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

interface ICreateSans {
  date: string;
  basePrice: any;
  discountPercent: number;
  capacity: number;
  from: string;
  to: string;
}
export const usePanelEventCreate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    CallApi.get("/event/selection-items/category/").then((res) => {
      setCategoryList(res.data);
    });
  }, []);
  const onSubmit = (data: any) => {
    setLoading(true);

    const formData = new FormData();

    formData.append("latitude", data.location.lat);
    formData.append("longitude", data.location.lng);
    formData.append("address", data.address);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("datetime", data.date);
    formData.append("title", data.title);
    formData.append("attachment", data.attachment, data.attachment.name);

    formData.append("recurrence", data.recurrence);

    CallApi.post("/event/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        navigate("/hobby-list");
      })
      .finally(() => setLoading(false));
  };
  return {
    errors,
    loading,
    control,
    setValue,
    onSubmit,
    register,
    getValues,
    handleSubmit,
    categoryList,
  };
};

const schema = yup.object().shape({
  title: yup.string().required(""),
  recurrence: yup.string().required(""),
  category: yup.string().required(""),
  location: yup.object().required("please insert location"),
  address: yup.string().required(""),
  attachment: yup
    .mixed()
    .test("file", "", (value) => {
      if (!value) return true; // allow empty values
      if (!(value instanceof File)) return false; // check if value is an instance of File
      return true;
    })
    .required("please insert image"),
  date: yup.string().required("please insert date"),
  description: yup.string().required(""),
});
