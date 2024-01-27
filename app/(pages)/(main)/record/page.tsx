import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import GetPlaceScrapped from "@feature/place/queries/getPlaceScrapped";
import PlaceSearchBar from "@feature/record/components/PlaceSearch/PlaceSearchBar";

export default async function Record() {
  const RECORD_DUMMY = [
    {
      id: 0,
      placeName: "피오니",
      placeImg: [
        "https://cdn.pixabay.com/photo/2015/04/13/06/23/cake-720073_1280.jpg",
      ],
      category: "카페",
      location: "마포구 연남동",
      scrapped: false,
    },
    {
      id: 1,
      placeName: "리차드하우스연남",
      placeImg: [
        "https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612_1280.jpg",
      ],
      category: "양식",
      location: "마포구 망원동",
      scrapped: false,
    },
    {
      id: 2,
      placeName: "산더미불고기",
      placeImg: [
        "https://cdn.pixabay.com/photo/2017/07/19/03/13/pot-2517765_1280.jpg",
      ],
      category: "한식",
      location: "마포구 어울마당로",
      scrapped: false,
    },
    {
      id: 3,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://cdn.pixabay.com/photo/2018/01/15/04/57/food-3083223_1280.jpg",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
    },
    {
      id: 4,
      placeName: "일쩜오플로어",
      placeImg: [
        "https://cdn.pixabay.com/photo/2018/04/05/17/31/coffee-3293499_1280.jpg",
      ],
      category: "카페",
      location: "마포구 염리동",
      scrapped: false,
    },
    {
      id: 5,
      placeName: "팽페르뒤",
      placeImg: [
        "https://cdn.pixabay.com/photo/2017/01/15/18/54/bahamas-1982413_1280.jpg",
      ],
      category: "카페",
      location: "마포구 성산제1동",
      scrapped: false,
    },
  ];
  const scrappedPlace = await GetPlaceScrapped();
  console.log(scrappedPlace);

  return (
    <div>
      <div className="w-full h-[10.6rem] flex px-[2rem] pt-[3.8rem] pb-[1.2rem] justify-between items-center">
        <div className="max-w-[33.5rem] h-[5.3rem] headline1-semibold text-black grow shrink-0 basis-0">
          <div>
            기록을 남길 공간을 <br />
            선택해주세요
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start pl-[2rem] pr-[1.9rem] pt-[6rem] gap-[1.6rem] text-black headline2-semibold">
        공간 검색하기
        <PlaceSearchBar />
      </div>
      <div className="w-full flex justify-between items-center pl-[2rem] pr-[1.5rem] pt-[4.4rem] text-black headline2-semibold">
        <span>스크랩한 공간</span>
        <LinkLayout routeUrl="/record/scrapped/more">
          <span className="text-text-gray-6 body2-semibold">더보기</span>
        </LinkLayout>
      </div>
      <div className="flex overflow-x-scroll px-[2rem] pt-[1.6rem] gap-[0.8rem] overflow-y-hidden">
        {RECORD_DUMMY.map((props, index) => (
          <div key={index}>
            <PlaceInfoMain
              variant="record"
              {...props}
              className="w-[16.3rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
