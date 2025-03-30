import { CallApiHost } from "@/settings/axiosConfig";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

interface ICreateSans {
  date: string;
  basePrice: any;
  discountPercent: number;
  capacity: number;
  from: string;
  to: string;
}
export const usePanelEventAddSans = ({
  eventId,
  onClose
}: {
  eventId: number | undefined;
  onClose: () => void;
}) => {
  const [loadingButton, setLoadingButton] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateSans>();

  const onSubmit = (data: ICreateSans) => {
    setLoadingButton(true);
    CallApiHost.post(`/events/${eventId}/times`, data)
      .then(() => {
        toast({
          title: "سانس با موفقیت اضافه شد!",
          status: "success",
          duration: 3000,
          position: "top",
        });
        onClose()
      })
      .finally(() => {
        setLoadingButton(false);
      });
  };

  return {
    control,
    errors,
    loadingButton,
    onSubmit,
    handleSubmit,
  };
};
