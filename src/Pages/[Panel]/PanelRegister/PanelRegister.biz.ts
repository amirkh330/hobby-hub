import { CallApi, CallApiHost } from "@/settings/axiosConfig";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export const usePanelRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    const newData = {
      ...data,
      latitude: data.map.lat,
      longitude: data.map.lng,
    };
    delete newData.map;
    CallApiHost.post("/hosts/_register", newData)
      .then(() => {
        navigate("/panel/register/success");
      })
      .catch(() => setLoading(false));
  };
  return { errors, onSubmit, register, handleSubmit, control, loading };
};

const schema = yup.object().shape({
  title: yup.string().required("عنوان الزامی است."),
  address: yup.string().required("آدرس الزامی است."),
  districtId: yup
    .number()
    .typeError("شناسه منطقه باید عدد باشد.")
    .required("شناسه منطقه الزامی است."),
  map: yup.object().shape({}).required("نقشه الزامی است"),
  // latitude: yup
  //   .number()
  //   .typeError("عرض جغرافیایی باید عدد باشد.")
  //   .required("عرض جغرافیایی الزامی است."),
  // longitude: yup
  //   .number()
  //   .typeError("طول جغرافیایی باید عدد باشد.")
  //   .required("طول جغرافیایی الزامی است."),
  ownerMobileNumber: yup
    .string()
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست.")
    .required("شماره موبایل مالک الزامی است."),
  ownerFullName: yup.string().required("نام ونام خانوادگی مالک الزامی است."),
  phoneNumber: yup.string().required("شماره تلفن الزامی است."),
  ownerNationalNumber: yup
    .string()
    .length(10, "کد ملی باید ۱۰ رقم باشد.")
    .required("کد ملی الزامی است."),
  sheba: yup
    .string()
    // .matches(/^IR\d{24}$/, "شماره شبا معتبر نیست.")
    .required("شماره شبا الزامی است."),
});
