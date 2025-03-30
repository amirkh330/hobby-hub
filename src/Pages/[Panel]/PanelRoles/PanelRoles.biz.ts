import { CallApiHost } from "@/settings/axiosConfig";
import { IScenarioCharacter } from "@/types/responses/ResponsesTypes";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const usePanelRoles = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [approveCount, setApproveCount] = useState<number>(0);
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [characters, setCharactersList] = useState<IScenarioCharacter[]>([]);

  useEffect(() => {
    setLoading(true);
    CallApiHost.get(`/game-sessions/${gameId}/mafia/characters`)
      .then(({ data }) => {
        setCharactersList(data);
      })
      .finally(() => {
        setLoading(false);
      });

    CallApiHost.get(`/game-sessions/${gameId}`).then(({ data }) => {
      setApproveCount(data.approvedParticipantsCount);
    });
  }, []);

  const [selectedIds, setSelectedIds] = useState<any>({}); // ذخیره آی‌دی‌ها و شمارنده‌ها
  const tost = useToast();
  const handleIncrement = (character: IScenarioCharacter) => {
    if (!character.canBeUsedMultipleTime && selectedIds[character.id] == 1) {
      return tost({
        title: "شما قبلا این نقش را انتخاب کرده‌اید",
        description: `امکان چند بار استفاده از ${character.title} وجود ندارد`,
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
    setSelectedIds((prevState: any) => {
      const newState = { ...prevState };
      newState[character.id] = (newState[character.id] || 0) + 1; // افزایش شمارنده
      return newState;
    });
  };

  const handleDecrement = (character: IScenarioCharacter) => {
    setSelectedIds((prevState: any) => {
      const newState = { ...prevState };
      if (newState[character.id]) {
        newState[character.id] -= 1; // کاهش شمارنده
        if (newState[character.id] <= 0) {
          delete newState[character.id]; // اگر شمارنده به صفر برسد، آی‌دی حذف می‌شود
        }
      }
      return newState;
    });
  };

  const handleNextStep = () => {
    setLoadingButton(true);
    CallApiHost.post(
      `/game-sessions/${gameId}/mafia/characters/_choose`,
      selectedIds
    )
      .then(({ data }) => {
        setConfirm(true);
      })
      .finally(() => {
        setLoadingButton(false);
      });
  };

  const handleStartGame = () => {
    setLoadingButton(true);
    CallApiHost.post(`/game-sessions/${gameId}/_start`, {
      selectedIds,
    })
      .then(({ data }) => {
        navigate(`/panel/games/${gameId}/start`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    characters,
    loading,
    confirm,
    setConfirm,
    handleNextStep,
    handleStartGame,
    handleDecrement,
    handleIncrement,
    setSelectedCount,
    selectedCount,
    approveCount,
    selectedIds,
    loadingButton,
  };
};
