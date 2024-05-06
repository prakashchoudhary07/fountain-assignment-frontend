"use client";
import useSWR from "swr";
import { API_SERVICE_URL } from "@/app/constants/url";
import { fetcher } from "@/utils/swr";

const PROFILE_API_URL = API_SERVICE_URL + "/api/v1/users/profile";

export default function useProfile() {
  const { data, error, isLoading } = useSWR(PROFILE_API_URL, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
