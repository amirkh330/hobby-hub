import { CallApiHost } from "@/settings/axiosConfig";
import { IScenario } from "@/types/responses/ResponsesTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = () => {};
  return { handleSubmit, onSubmit, control, errors, register };
};

const schema = yup.object().shape({
  title: yup.string().required(""),
  category: yup.string().required(""),
  location: yup.string().required(""),
  address: yup.string().required(""),
  date: yup.string().required(""),
  description: yup.string().required("آدرس الزامی است."),
});
