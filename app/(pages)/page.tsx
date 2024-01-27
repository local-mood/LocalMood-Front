import HomeHeader from "@common/components/layout/Header/HomeHeader";
import Footer from "@common/components/layout/Footer/Footer";
import PlaceHomeSlider from "@feature/place/components/PlaceHomeSlider/PlaceHomeSlider";
import HomeBanner from "./components/HomeBanner";
import CurationHomePopular from "@feature/curation/components/CurationHomePopular/CurationHomePopular";
import GetRandomCuration from "@feature/curation/queries/getRandomCuration";
import GetRandomPlaces from "@feature/place/queries/getRandomPlaces";

export default async function Home() {
  const PLACE_PURPOSE = [
    "연인과의 데이트",
    "친구와의 만남",
    "왁자지껄 떠들기 좋은",
    "대화에 집중할 수 있는",
  ];
  //장소 get api 데이터로 대체(server side - fetch)
  const randomPlace = await GetRandomPlaces();
  const PLACE_DUMMY = [
    {
      id: 0,
      placeName: "나이스워크투데이",
      placeImg: [
        "https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg",
      ],
      category: "카페",
      location: "마포구 망원동",
      scrapped: false,
      tags: {
        interior: ["통창뷰", "넓은 공간"],
      },
    },
    {
      id: 1,
      placeName: "셀렉티드 커피앤스윗츠",
      placeImg: [
        "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg",
      ],
      category: "카페",
      location: "마포구 염리동",
      scrapped: true,
      tags: {
        interior: ["아담한 공간", "무채색"],
      },
    },
  ];
  const PLACE_DUMMY2 = [
    {
      id: 0,
      placeName: "컵스커피",
      placeImg: [
        "https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282313_1280.jpg",
      ],
      category: "카페",
      location: "마포구 염리동",
      scrapped: false,
      tags: {
        interior: ["포토스팟", "엔틱한"],
      },
    },
    {
      id: 1,
      placeName: "아크",
      placeImg: [
        "https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_1280.jpg",
      ],
      category: "카페",
      location: "마포구 신수동",
      scrapped: true,
      tags: {
        interior: ["넓은 공간", "우드톤"],
      },
    },
  ];

  const PLACE_DUMMY3 = [
    {
      id: 0,
      placeName: "OSDS 연남",
      placeImg: [
        "https://cdn.pixabay.com/photo/2021/02/02/02/34/cafe-5972490_1280.jpg",
      ],
      category: "카페",
      location: "마포구 연남동",
      scrapped: false,
      tags: {
        interior: ["포토스팟", "엔틱한"],
      },
    },
    {
      id: 1,
      placeName: "어글리 베이커리",
      placeImg: [
        "https://cdn.pixabay.com/photo/2019/09/12/18/29/street-cafe-4472312_1280.jpg",
      ],
      category: "카페",
      location: "마포구 신수동",
      scrapped: true,
      tags: {
        interior: ["넓은 공간", "우드톤"],
      },
    },
  ];

  const PLACE_DUMMY4 = [
    {
      id: 0,
      placeName: "조앤도슨",
      placeImg: [
        "https://cdn.pixabay.com/photo/2019/12/15/18/08/cats-cafe-4697753_1280.jpg",
      ],
      category: "카페",
      location: "마포구 서강동",
      scrapped: false,
      tags: {
        interior: ["따뜻한 조명", "엔틱한"],
      },
    },
    {
      id: 1,
      placeName: "오퍼카페",
      placeImg: [
        "https://cdn.pixabay.com/photo/2022/10/14/07/12/muslim-7520627_1280.jpg",
      ],
      category: "카페",
      location: "마포구 연남동",
      scrapped: true,
      tags: {
        interior: ["넓은 공간", "우드톤"],
      },
    },
  ];

  const PLACE_DUMMY5 = [
    {
      id: 0,
      placeName: "일쩜오플로어",
      placeImg: [
        "https://cdn.pixabay.com/photo/2018/04/05/17/31/coffee-3293499_1280.jpg",
      ],
      category: "카페",
      location: "마포구 염리동",
      scrapped: false,
      tags: {
        interior: ["테라스 및 야외좌석", "모던한"],
      },
    },
    {
      id: 1,
      placeName: "팽페르뒤",
      placeImg: [
        "https://cdn.pixabay.com/photo/2017/01/15/18/54/bahamas-1982413_1280.jpg",
      ],
      category: "카페",
      location: "마포구 성산제1동",
      scrapped: true,
      tags: {
        interior: ["넓은 공간", "우드톤"],
      },
    },
  ];
  return (
    <>
      <HomeHeader />
      <HomeBanner />
      <div className="pb-[12.3rem] pt-[4rem]">
        <PlaceHomeSlider
          mainText={PLACE_PURPOSE[0]}
          subText="를 위한 공간"
          placeList={PLACE_DUMMY}
        ></PlaceHomeSlider>
        <PlaceHomeSlider
          mainText={PLACE_PURPOSE[1]}
          subText="을 위한 공간"
          placeList={PLACE_DUMMY2}
        />
        <CurationHomePopular
          mainText="마포구 인기 큐레이션"
          subText="더보기"
          curationList={await GetRandomCuration()}
        />
        <PlaceHomeSlider
          mainText={PLACE_PURPOSE[2]}
          subText="공간"
          placeList={PLACE_DUMMY3}
        />
        <PlaceHomeSlider
          mainText={PLACE_PURPOSE[3]}
          subText="공간"
          placeList={PLACE_DUMMY4}
        />
      </div>
      <Footer />
    </>
  );
}
