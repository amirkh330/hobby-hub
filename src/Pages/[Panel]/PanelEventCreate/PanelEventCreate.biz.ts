import { CallApi, PostApi } from "@/settings/axiosConfig";
import { IScenario } from "@/types/responses/ResponsesTypes";
import { yupResolver } from "@hookform/resolvers/yup";
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
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (e: any) => {
    console.log('e:', e)
    // const formData = new FormData();
    // Object.keys(data).forEach((key) => {
    //   const typedKey = key as keyof FormData;
    //   if (typedKey === "avatarFile" && data[typedKey] instanceof File) {
    //     formData.append(key, data[typedKey]);
    //   } else {
    //     formData.append(key, data[typedKey] as string);
    //   }
    // });


    setLoading(true);
    const newData = {
      latitude: e.location.lat,
      longitude: e.location.lng,
      address: e.address,
      category: e.category,
      description: e.description,
      datetime: e.date,
      title: e.title,
      recurrence: "ONE_TIME",
    };
    
    console.log('newData:', newData)
    CallApi.post("/event/", newData)
      .then(() => {
        // navigate("/hobby-list");
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
    handleSubmit,
  };
};

const schema = yup.object().shape({
  title: yup.string().required(""),
  recurrence: yup.string().required(""),
  category: yup.string().required(""),
  location: yup.object().required("please insert location"),
  address: yup.string().required(""),
  // upload: yup.array().required(""),
  date: yup.string().required("please insert date"),
  description: yup.string().required(""),
});
