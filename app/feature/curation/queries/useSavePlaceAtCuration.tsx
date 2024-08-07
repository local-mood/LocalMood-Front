"use client";

import revalidateHomeRecommend from "@/feature/place/actions/revalidateHomeRecommend";
import revalidateScrapSpace from "@/feature/place/actions/revalidateScrapSpace";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import revalidateCurationDetail from "../actions/revalidateCurationDetail";
import { useSearchParams } from "next/navigation";

async function savePlaceAtCuration(data: {
  curationId: number;
  spaceId: number;
}) {
  const res = await fetch(
    `/api/curation/save/${data.curationId}/${data.spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (res.status === 400) {
    throw new Error("Error Occured");
  }
  return;
}

const revalidateRelatedData = () => {
  revalidateHomeRecommend();
  revalidateScrapSpace();
  revalidateCurationDetail();
};

export default function useSavePlaceAtCuration(spaceId: number) {
  const queryClient = useQueryClient();

  const searchParams = useSearchParams();

  const keywordData = searchParams.get("keyword") && {
    sortState: searchParams.get("sort"),
    keyword: searchParams.get("keyword"),
  };

  const textData = searchParams.get("search_query") && {
    sortState: searchParams.get("sort"),
    name: searchParams.get("search_query"),
  };

  return useMutation({
    mutationKey: ["savePlaceAtCuration"],
    mutationFn: savePlaceAtCuration,
    onSuccess: () => {
      revalidateRelatedData();
      queryClient.invalidateQueries({
        queryKey: ["getMyCuration"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getPlaceScrapState", spaceId],
      });
      if (searchParams.get("search_query")) {
        queryClient.invalidateQueries({
          queryKey: ["getTextSearchPlaceData", textData],
        });
      }
      if (searchParams.get("keyword")) {
        queryClient.invalidateQueries({
          queryKey: ["getKeywordSearchPlaceData", keywordData],
        });
      }
    },
  });
}
