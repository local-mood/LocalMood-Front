import BackIcon from "@common/assets/icons/arrow/arrow-left.svg";
import ShareIcon from "@common/assets/icons/share/share.svg";
import MenuIcon from "@common/assets/icons/menu/menu.svg";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import { curationDetailCardList } from "@feature/curation/dummyList";

interface CurationTopAppBarProps {
  variant: string | undefined;
  mainText: string | undefined;
  hashTags: string[] | undefined;
}

export default function CurationTopAppBar({
  variant,
  mainText,
  hashTags,
}: CurationTopAppBarProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // 이전 페이지로 이동
  };
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition >= 370) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`w-full ${scroll ? "fixed top-0 bg-white z-50" : ""}`}>
        <div
          className={`h-[5.4rem] px-[2rem] py-[1.8rem] ${
            scroll ? "" : "pt-[5.3rem]"
          }`}
        >
          {scroll ? (
            // 스크롤 시
            <div className="flex flex- start items-center justify-between">
              <div className="flex items-center" onClick={handleBackClick}>
                <BackIcon />
                <div className="w-[23.5rem] overflow-hidden whitespace-nowrap overflow-ellipsis text-black headline3-semibold">
                  {mainText}
                </div>
              </div>
              <div className="flex gap-[0.8rem]">
                {variant === "others" ? (
                  <>
                    <ScrapLine />
                    <ShareIcon />
                  </>
                ) : (
                  <>
                    <ShareIcon />
                    <MenuIcon />
                  </>
                )}
              </div>
            </div>
          ) : (
            // 스크롤 안 할 시
            <div>
              <div className="flex items-center justify-between">
                <div className="pr-[25.5rem]" onClick={handleBackClick}>
                  <BackIcon />
                </div>
                <div className="flex gap-[0.8rem]">
                  {variant === "others" ? (
                    <>
                      <ScrapLine />
                      <ShareIcon />
                    </>
                  ) : (
                    <>
                      <ShareIcon />
                      <MenuIcon />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {scroll && (
          <div className="w-full overflow-x-scroll flex flex-start pl-[2rem] py-[0.4rem] gap-[0.8rem] bg-white">
            {curationDetailCardList.map((item, index) => (
              <Filter
                key={index}
                photo={item.placePhoto}
                label={item.placeName}
                className="whitespace-nowrap"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}