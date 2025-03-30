import { CallApi } from "@/settings/axiosConfig";
import { phoneRegex } from "@/utils/Regex/Regex";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useEventReserve = () => {
  const navigate = useNavigate();
  const { timeId, eventId, dateId } = useParams();
  const [value, setValue] = useState<string>("");
  const [errMsg, setErrMsg] = useState<boolean>(false);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [phoneNumberList, setPhoneNumberList] = useState<string[]>([]);

  const handleDeletePhoneNumber = (index: number) => {
    const updatedPhoneNumbers = [...phoneNumberList];
    updatedPhoneNumbers.splice(index, 1);
    setPhoneNumberList(updatedPhoneNumbers);
  };

  const handleAddPhoneNumber = () => {
    if (phoneRegex.test(value)) {
      setValue("");
      setPhoneNumberList((_phoneNumberList)=>([..._phoneNumberList, value]));
    } else {
      setErrMsg(true);
    }
  };

  const handleSubmit = () => {
    setBtnLoading(true);
    CallApi.post(`/events/${eventId}/dates/${dateId}/times/${timeId}/orders`, {
      phoneNumbers: phoneNumberList,
    })
      .then(({ data }) => {
        navigate(`/payment-preview/${data}`);
      })
      .finally(() => {
        setBtnLoading(false);
      });
  };
  return {
    errMsg,
    btnLoading,
    setErrMsg,
    phoneNumberList,
    value,
    setValue,
    handleDeletePhoneNumber,
    handleAddPhoneNumber,
    handleSubmit,
  };
};
