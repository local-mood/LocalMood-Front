"use client";

import { CurationDetailResponse } from "@/feature/curation/queries/dto/curation-detail";
import { useInView } from "react-intersection-observer";
import Divider from "@/common/components/ui/divider/Divider";
import CurationBanner from "../organisms/CurationBanner";
import NoSavedPlace from "../organisms/NoSavedPlace";
import CurationTopAppBar from "../organisms/CurationTopAppBar";
import CurationDetailPlaceCardList from "../organisms/CurationDetailPlaceCardList";

interface CurationDetailProps {
  id: number;
  curationDetail: CurationDetailResponse;
}

//Template
export default function CurationDetail({
  id,
  curationDetail,
}: CurationDetailProps) {
  const [inViewRef, inView] = useInView({
    threshold: 1,
  });

  return (
    <>
      <header className="w-[100%] h-[18.8rem] bg-background-secondary-normal">
        <CurationTopAppBar
          inView={inView}
          text={curationDetail.title}
          curationId={id}
          curationDetail={curationDetail}
          variant={curationDetail.variant}
        />
      </header>
      <CurationBanner
        id={id}
        createdDate={curationDetail.createdDate}
        keyword={curationDetail.keyword}
        title={curationDetail.title}
        variant={curationDetail.variant}
        privacy={curationDetail.privacy}
        author={curationDetail.author}
      />
      <Divider className="w-full h-[4px] bg-line-gray-3" />
      {curationDetail.spaceDetails && (
        <CurationDetailPlaceCardList
          ref={inViewRef}
          inView={inView}
          curationId={id}
          curationDetail={curationDetail}
        />
      )}
      {curationDetail.spaceDetails.length === 0 && <NoSavedPlace />}
    </>
  );
}
