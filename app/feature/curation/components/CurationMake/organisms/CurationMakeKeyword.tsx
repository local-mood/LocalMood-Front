import React, { useState } from "react";
import ArrowDownIcon from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUpIcon from "@common/assets/icons/arrow/ArrowUp";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import {
  CURATION_MAKE_CATEGORY,
  CURATION_MAKE_KEYWORD,
} from "@feature/curation/constants/curation-make";
import Button from "@common/components/ui/buttons/Button/Button";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import { useSetRecoilState } from "recoil";
import { toastInfoSelector } from "@common/state/toast";

interface CurationMakeKeywordProps {
  curationMakeData: {
    curation_name: string;
    open: boolean;
    keyword: { [key: string]: string };
  };
  resetCurationMakeData: () => void;
  closeModal: () => void;
  onClick?: (category: string, keyword: string) => void;
}

export default function CurationMakeKeyword({
  curationMakeData,
  resetCurationMakeData,
  closeModal,
  onClick,
}: CurationMakeKeywordProps) {
  const setToast = useSetRecoilState(toastInfoSelector);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const handleKeywordFilterClick = (category: string, keyword: string) => {
    onClick && onClick(category, keyword);
  };

  const isSubmitEnabled = (
    curationMakeData: CurationMakeKeywordProps["curationMakeData"]
  ) => {
    const isTitleEntered = curationMakeData.curation_name.trim() !== "";
    const selectedFiltersCount = Object.keys(curationMakeData.keyword).filter(
      (k) => curationMakeData.keyword[k].length > 0
    ).length;

    return isTitleEntered && selectedFiltersCount >= 2;
  };

  const getConcatenatedKeywords = (keywords: { [key: string]: string }) => {
    const concatenatedKeywords = Object.values(keywords)
      .filter((value) => value.length > 0)
      .join(", ");
    return concatenatedKeywords;
  };

  const getSendingCurationData = () => {
    return {
      title: curationMakeData.curation_name,
      keyword: getConcatenatedKeywords(curationMakeData.keyword),
      privacy: curationMakeData.open,
    };
  };

  const handleButtonClick = async () => {
    setToast({
      open: true,
      text: "큐레이션이 생성되었습니다",
    });
    closeModal();
    const dataCurationMake = getSendingCurationData();
    const res = await fetch("/api/curation/make", {
      method: "POST",
      body: JSON.stringify(dataCurationMake),
    });
    if (res.status === 200) {
      resetCurationMakeData();
      revalidateMyCuration();
    } else alert("큐레이션 생성 중 에러가 발생했습니다!");
    return;
  };

  //Organism
  return (
    <div className="pb-[21.1rem]">
      <div className="w-full pb-[1.2rem] border-b border-text-gray-3">
        <div className="flex items-center justify-between flex-start">
          <div className="flex gap-[0.6rem]">
            <div className="flex headline3-semibold">
              <span className="text-primary-normal">#&nbsp;</span>
              <span>대표키워드 설정</span>
            </div>
            <span className="headline3-semibold text-text-gray-6">
              {
                Object.keys(curationMakeData.keyword).filter(
                  (k) => curationMakeData.keyword[k].length > 0
                ).length
              }
              /2
            </span>
          </div>
          <div
            className="flex w-[3rem] h-[1.6rem] items-center justify-end pr-[0.1rem]"
            onClick={toggleExpansion}
          >
            <div>{isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}</div>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="pt-[3.2rem] flex flex-col items-start">
          {Object.keys(CURATION_MAKE_CATEGORY).map((category) => (
            <div key={category}>
              <div className="headline3-semibold mb-[4rem]">
                <div>{CURATION_MAKE_CATEGORY[category]}</div>
                <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
                  {CURATION_MAKE_KEYWORD[CURATION_MAKE_CATEGORY[category]].map(
                    (keyword) => (
                      <Filter
                        key={keyword}
                        label={keyword}
                        selected={
                          curationMakeData.keyword[category] === keyword
                        }
                        onClick={() =>
                          handleKeywordFilterClick(category, keyword)
                        }
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="absolute w-full px-[2rem] bottom-0 left-0 bg-white h-[7.4rem]">
        <Button
          onClick={handleButtonClick}
          disabled={!isSubmitEnabled(curationMakeData)}
          className="w-full"
        >
          완료
        </Button>
      </div>
    </div>
  );
}