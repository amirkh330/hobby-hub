import { CallApi } from "@/settings/axiosConfig";
import { IEventItem } from "@/types/responses/ResponsesTypes";
import { useEffect, useState } from "react";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { DateObject } from "react-multi-date-picker";
import { useSearchParams } from "react-router-dom";

export const useEvents = () => {
  const [eventList, setEventList] = useState<IEventItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams(); // خواندن پارامترها از URL
  const queryTime = searchParams.get("date");
  const time = new DateObject(queryTime!)
    .convert(gregorian, gregorian_en)
    .format("YYYY-MM-DD");

  const queryType = searchParams.get("games");
  const districts = searchParams.get("districts");

  const params = new URLSearchParams({
    page: String(page),
    pageSize: "4",
    ...(queryTime && { date: time }),
    ...(queryType && { games: queryType }),
    ...(districts && { districts: districts }),
  });

  useEffect(() => {
    setLoading(true);
    CallApi.get(`event/`)
      // CallApi.get(`event/attendee/_filter?${params}`)
      .then(({ data }) => {
        if (data.page_count === 1) {
          return setEventList(data.results);
        }
        // page === 1
        //   ? setEventList(data.items)
        //   : setEventList((prev) => [...prev, ...data.items]);

        setTotal(data.count);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [queryType, time, page, districts]);

  const [list, setList] = useState([]);

  // useEffect(() => {
  //   CallApi.get("/cms/slider-items").then(({ data }) => {
  //     setList(data);
  //   });
  // }, []);

  return { eventList, loading, total, setPage, page, list };
};
