import { CallApi } from "@/settings/axiosConfig";
import { useCallback, useEffect, useState } from "react";

export const useHobbyMap = () => {
  const [eventListPoint, setEventListPoint] = useState<any>([]);
  const [mapBounds, setX] = useState<{
    minLat?: number;
    maxLat?: number;
    minLng?: number;
    maxLng?: number;
  }>();

  const setMapBounds = useCallback((bounds: any) => {
    setX(bounds);
    // setX((prev) => {
    //   if (
    //     prev?.minLat === bounds.minLat &&
    //     prev?.maxLat === bounds.maxLat &&
    //     prev?.minLng === bounds.minLng &&
    //     prev?.maxLng === bounds.maxLng
    //   ) {
    //     console.log("bounds:", bounds);

    //     return prev; // Don't update if same
    //   }
    //   return bounds;
    // });
  }, []);

  useEffect(() => {
    CallApi.get(
      `event/?max_latitude=${mapBounds?.maxLat}&max_longitude=${mapBounds?.maxLng}
        &min_latitude=${mapBounds?.minLat}&min_longitude=${mapBounds?.minLng}`,
      {}
    ).then((res) => {
      setEventListPoint(res?.data?.results);
    });
  }, [mapBounds]);

  return { setMapBounds, eventListPoint };
};
