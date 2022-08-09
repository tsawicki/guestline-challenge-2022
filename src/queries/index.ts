import { useMemo } from "react";
import axios from "axios";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
  GenericHotelInfo,
  HotelDetailsInfo,
  Hotel as HotelType,
} from "../types";

const getHotelsList = (): Promise<Array<GenericHotelInfo>> =>
  axios
    .get("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
    .then((response) => response.data);

const getHotelDetails = (id: string): Promise<HotelDetailsInfo> =>
  axios
    .get(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`)
    .then((response) => ({ id, ...response.data }));

const useGetHotelsList = () => useQuery(["hotels"], () => getHotelsList());

const useGetHotelsDetails = (ids: Array<string>) =>
  useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["hotels", id],
        queryFn: () => getHotelDetails(id),
      };
    }),
  });

export const useHotelsData = () => {
  const { data: hotelsData = [], isLoading: isLoadingList } =
    useGetHotelsList();
  const hotelsDetailsData = useGetHotelsDetails(hotelsData.map(({ id }) => id));
  const hotelsDetails = hotelsDetailsData.map((d) => d.data);
  const hotelsDetailsLoading = hotelsDetailsData.some((d) => d.isLoading);
  const isLoading = isLoadingList || hotelsDetailsLoading;

  const hotels: Array<HotelType> = useMemo(() => {
    return hotelsData.map((hotel) => {
      const details = hotelsDetails.find((details) => details?.id === hotel.id);
      return {
        ...hotel,
        rooms: details?.rooms || [],
        ratePlans: details?.ratePlans || [],
      };
    });
  }, [hotelsData, hotelsDetails]);

  return { hotels, isLoading };
};
