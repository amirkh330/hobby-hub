import { CallApiHost } from "@/settings/axiosConfig";
import { IScenario } from "@/types/responses/ResponsesTypes";
import { useEffect, useState } from "react";

interface ICreateSans {
  date: string;
  basePrice: any;
  discountPercent: number;
  capacity: number;
  from: string;
  to: string;
}
export const usePanelEventCreate = () => {
  const [scenarios, setScenarios] = useState<IScenario[]>([]);
  const [activeScenarios, setActiveScenarios] = useState<
    IScenario | undefined
  >();
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    CallApiHost("/games/mafia/scenarios")
      .then(({ data }) => setScenarios(data))
      .finally(() => setLoading(false));
  }, []);

  return { scenarios, loading, activeScenarios, setActiveScenarios };
};
