"use client";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import SearchBar from "@feature/search/components/SearchBar/SearchBar";
import { Suspense } from "react";

export default function RecordSearch() {
  const RECORD_DUMMYLIST = [
    {
      id: 0,
      placeName: "치즈케이크",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
    },
    {
      id: 1,
      placeName: "피자치킨파스타",
      placeImg: [
        "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
      ],
      category: "양식",
      location: "마포구 망원동",
      scrapped: false,
    },
    {
      id: 2,
      placeName: "김치찌개김밥",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "한식",
      location: "마포구 망원동",
      scrapped: false,
    },
    {
      id: 3,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
    },
    {
      id: 4,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
    },
    {
      id: 5,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
    },
  ];

  return (
    <>
      <div>
        <BasicTopBar color="#9E9E9E">
          <Suspense fallback={null}>
            <SearchBar
              variant="record"
              placeholder="공간 이름을 검색해보세요"
            />
          </Suspense>
        </BasicTopBar>
        <div className="inline-flex flex-col items-start gap-[0.8rem] px-[2rem] pt-[1.6rem]">
          {RECORD_DUMMYLIST.map((props, index) => (
            <div key={index}>
              <PlaceInfoMain direction="horizontal" {...props} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}