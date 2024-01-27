"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import { useState } from "react";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Link from "next/link";
import { PlaceInfoProps } from "@feature/place/type";
import DELETE from "@api/place/scrapped/delete/[id]/route";
import POST from "@api/place/scrapped/add/[id]/route";

export default function PlaceInfoTop({
  id,
  variant,
  direction,
  size,
  placeName,
  placeImg,
  category,
  location,
  scrapped,
  onClick,
  className,
  imgClassName,
}: PlaceInfoProps) {
  //scrap 유무를 default useState 값으로 설정
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const handleScrap = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsScrapped((prev) => !prev);
    const id = 1; // 나중에 api 연결 더 하고나면 삭제
    if (isScrapped) {
      await DELETE({ params: { id } });
    } else {
      await POST({ params: { id } });
    }
  };
  return (
    <Link
      href={{
        pathname:
          variant === "main"
            ? `/place/${category === "카페" ? "cafe" : "restaurant"}/${id}`
            : `/record/select/${id}`,
        query: { category, name: placeName },
      }}
    >
      <div
        className={twMerge(
          "w-full relative",
          direction === "horizontal" && "flex items-center",
          className
        )}
        onClick={onClick}
      >
        <div
          className={twMerge(
            "w-full h-[16rem] relative",
            direction === "horizontal" && "w-[8rem] h-[8rem] mr-[1.6rem]"
          )}
        >
          <Image
            src={placeImg[0]}
            alt="공간 사진"
            fill
            sizes="100vw"
            className={twMerge("rounded-[8px]", imgClassName)}
          />
        </div>
        <div
          className={twMerge("flex-col", size === "normal" ? "relative" : null)}
        >
          {direction === "vertical" && !isScrapped && (
            <ScrapLine
              color={size === "small" ? "white" : undefined}
              className="absolute cursor-pointer right-[0.8rem] top-[1.6rem]"
              onClick={handleScrap}
            />
          )}
          {direction === "vertical" && isScrapped && (
            <ScrapFill
              color={size === "small" ? "white" : undefined}
              className="absolute cursor-pointer right-[0.8rem] top-[1.6rem]"
              onClick={handleScrap}
            />
          )}
          <div
            className={twMerge(
              direction === "vertical" && "w-[90%] pt-[1.6rem]",
              size === "normal" ? "headline2" : "headline3"
            )}
          >
            <span>{placeName}</span>
            <div className="flex mt-[0.8rem]">
              <span
                className={twMerge(
                  "text-text-gray-6",
                  size === "normal" ? "body2-semibold" : "body3-semibold"
                )}
              >
                {category}
              </span>
              <Line className="mx-[0.8rem]" />
              <span
                className={twMerge(
                  "text-text-gray-5",
                  size === "normal" ? "body2-medium" : "body3-medium"
                )}
              >
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
