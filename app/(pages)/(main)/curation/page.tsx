"use client";

import React, { useEffect, useState } from "react";
import Tab from "@common/components/ui/tab/Tab";
import CurationMain from "@feature/curation/components/CurationMain/CurationMain";
import CurationScrapped from "@feature/curation/components/CurationScrapped/CurationScrapped";
import UseCuration from "@feature/curation/useCuration";
import CurationMakeButton from "@feature/curation/components/CurationButton/CurationMakeButton";
import CurationMakeModal from "@feature/curation/components/CurationMake/CurationMakeModal";

export default function CurationPage() {
  const { tabIndex, isCurationMakeOpen, handlers } = UseCuration();
  const [myCuration, setMyCuration] = useState(null);
  const [scrappedCuration, setScrappedCuration] = useState(null);
  const CurationTabSections = [
    {
      text: "내 큐레이션",
    },
    {
      text: "스크랩",
    },
  ];
  const MY_CURATION_DUMMY = [
    {
      id: 0,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2017/01/15/18/54/bahamas-1982413_1280.jpg",
      ],
      author: "김현민",
      title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      spaceCount: 9,
    },
    {
      id: 1,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2020/02/17/19/06/restaurant-4857484_1280.jpg",
      ],
      author: "김현민",
      title: "연초 모임에 딱 좋은 공간",
      keyword: ["연초모임", "연말모임"],
      scrapped: true,
      spaceCount: 10,
    },
    {
      id: 2,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2019/02/08/22/28/valentines-day-3984154_1280.jpg",
      ],
      author: "김현민",
      title: "화이트데이에 즐기기 좋은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "화이트데이"],
      scrapped: true,
      spaceCount: 12,
    },
    {
      id: 3,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
      ],
      author: "김현민",
      title: "친구들과 즐길 수 있는 공간",
      keyword: ["친구들", "모임"],
      scrapped: true,
      spaceCount: 1,
    },
  ];

  const SCRAPPED_DUMMY = [
    {
      id: 0,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282313_1280.jpg",
      ],
      author: "김현민",
      title: "다가오는 발렌타인데이에 맞는 공간들",
      keyword: ["연인과의 데이트", "크리스마스"],
      scrapped: true,
      spaceCount: 9,
    },
    {
      id: 1,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg",
      ],
      author: "김현민",
      title: "크리스마스",
      keyword: ["연초모임", "연말모임"],
      scrapped: true,
      spaceCount: 10,
    },
    {
      id: 2,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg",
      ],
      author: "김현민",
      title: "흔하지 않은 마포구 데이트 코스",
      keyword: ["연인과의 데이트", "화이트데이"],
      scrapped: true,
      spaceCount: 12,
    },
    {
      id: 3,
      variant: "my" as "my" | "others" | undefined,
      image: [
        "https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg",
      ],
      author: "김현민",
      title: "친구들과 즐길 수 있는 공간",
      keyword: ["친구들", "모임"],
      scrapped: true,
      spaceCount: 1,
    },
  ];
  useEffect(() => {
    fetch("api/curation/my").then((res) =>
      res.json().then((data) => {
        setMyCuration(data);
      })
    );
    fetch("api/curation/scrap").then((res) =>
      res.json().then((data) => {
        setScrappedCuration(data);
      })
    );
  }, []);
  console.log(myCuration);
  console.log(scrappedCuration);
  return (
    <div className="Curation h-[100vh] overflow-hidden">
      <header>
        <div className="w-full h-[7.8rem] pt-[3.8rem] pr-[2rem] pb-[1.2rem] pl-[2rem]">
          <span className="headline1 text-black">큐레이션</span>
        </div>
      </header>
      <Tab sections={CurationTabSections} onChange={handlers.handleTabIndex} />
      <div className="h-full px-[2rem] pb-[18.2rem] bg-background-gray-2 items-center overflow-y-scroll">
        {tabIndex === 0 && (
          <div className="flex items-center justify-between pb-[0.6rem] pt-[2rem]">
            <div className="flex body1 text-text-gray-8 items-center">
              총 <p className="text-black">&nbsp;{MY_CURATION_DUMMY.length}</p>{" "}
              개
            </div>
            <div onClick={() => handlers.handleCurationMakeOpen(true)}>
              <CurationMakeButton />
            </div>
          </div>
        )}
        {tabIndex === 0 &&
          MY_CURATION_DUMMY.map((props) => (
            <div key={props.author + props.id} className="mb-[1.2rem]">
              <CurationMain {...props} />
            </div>
          ))}
        <div className="pt-[2rem] pb-[6rem]">
          {tabIndex === 1 &&
            SCRAPPED_DUMMY.map((props) => (
              <div key={props.author + props.id} className="mb-[1.6rem]">
                <CurationScrapped {...props} />
              </div>
            ))}
        </div>
      </div>
      <CurationMakeModal
        isOpen={isCurationMakeOpen}
        handleOpen={handlers.handleCurationMakeOpen}
      />
    </div>
  );
}
