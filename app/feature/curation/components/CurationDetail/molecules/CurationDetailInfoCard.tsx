import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Image from "next/image";
import { forwardRef } from "react";
import { CurationPlaceProps } from "@feature/curation/type";
import LinkLayout from "@common/components/layout/Link/LinkLayout";
import PlaceInfoCardBottom from "@feature/place/components/PlaceInfo/molecules/PlaceInfoCardBottom";
import SliderLayout from "@common/components/layout/Slider/SliderLayout";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import revalidateScrapSpace from "@feature/place/actions/revalidateScrapSpace";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";
import { useSetRecoilState } from "recoil";
import { myCurationModalInfoSelector } from "@common/state/myCurationModal";
import { toastInfoSelector } from "@common/state/toast";
import { validateLoggedIn } from "@common/utils/validate/validateLoggedIn";

//Molecule
const CurationDetailInfoCard = forwardRef<
  HTMLDivElement,
  CurationPlaceProps & {
    variant: string;
    curationId: number;
  }
>(({ ...props }, ref) => {
  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);
  const setToast = useSetRecoilState(toastInfoSelector);

  const purposeArray = props.purpose ? props.purpose.split(",") : [];
  const interiorArray = props.interior ? props.interior.split(",") : [];
  const moodArray = props.mood ? props.mood.split(",") : [];
  const bestMenuArray = props.bestMenu ? props.bestMenu.split(",") : [];

  const deleteScrap = async () => {
    const res = await fetch("/api/curation/delete/space", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        curationId: props.curationId,
        spaceId: props.id,
      }),
    });
    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateMyCuration();
    revalidateScrapSpace();
    revalidatePlaceDetail();
  };

  const handleScrapState = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    if ((await validateLoggedIn()) === false) {
      location.replace("/login");
    } else {
      if (props.variant === "my") {
        setToast({
          open: true,
          text: "스크랩이 해제되었습니다",
        });
        if ((await deleteScrap()) === 200) {
          revalidateRelatedData();
        } else {
          alert("스크랩 해제 중 오류가 발생했습니다");
        }
      } else {
        setToast({
          open: true,
          text: "저장할 큐레이션을 선택해주세요",
        });
        setMyCurationModal({
          open: true,
          spaceId: props.id,
        });
      }
    }
  };
  return (
    <>
      <div className="w-full pt-[13rem]" ref={ref}>
        <SliderLayout>
          <div className="flex gap-[0.8rem] mr-[0.8rem]">
            {props.imageUrls?.map((url, i) => (
              <div key={url + i} className="relative w-[28rem] h-[28rem]">
                <Image
                  src={url}
                  alt="장소 사진"
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  className="rounded-[8px] object-cover"
                />
              </div>
            ))}
          </div>
        </SliderLayout>
        <div className="mb-[-9rem]">
          <div className="w-full pr-[1.9rem]">
            <div className="pt-[2rem] flex justify-between ">
              <div>
                <div className="flex items-center gap-[0.4rem] text-black headline2-semibold">
                  {props.name}
                  <div className="px-[0.6rem] py-[0.4rem]">
                    <LinkLayout routeUrl={`/place/${props.id}`}>
                      <ArrowIcon />
                    </LinkLayout>
                  </div>
                </div>
                <div className="flex items-center gap-[0.8rem] pt-[0.8rem]">
                  <div className="body3-semibold text-text-gray-6">
                    {props.type === "RESTAURANT" ? "음식점" : "카페"}
                  </div>
                  <div className="w-[0.1rem] h-[1.2rem] bg-text-gray-4"></div>
                  <div className="body3-medium text-text-gray-5">
                    {props.address}
                  </div>
                </div>
              </div>
              {props.isScraped ? (
                <ScrapFill onClick={handleScrapState} />
              ) : (
                <ScrapLine onClick={handleScrapState} />
              )}
            </div>
            <PlaceInfoCardBottom
              type={props.type}
              purpose={purposeArray}
              interior={interiorArray}
              mood={moodArray}
              bestMenu={bestMenuArray}
              keywordCategoryNum={3}
              bottomClassName="border-[0.1rem] border-line-gray-3 rounded-[8px] p-[1.6rem] flex-col"
            />
          </div>
        </div>
      </div>
    </>
  );
});

CurationDetailInfoCard.displayName = "CurationDetailInfoCard";

export default CurationDetailInfoCard;