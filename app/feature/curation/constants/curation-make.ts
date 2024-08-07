export const CURATION_MAKE_CATEGORY: { [key: string]: string } = {
  purpose: "방문목적",
  mood: "공간의 무드",
  music: "배경음악",
  interior: "인테리어",
};

export const CURATION_MAKE_KEYWORD: { [key: string]: string[] } = {
  방문목적: [
    "연인과의 데이트",
    "친구/가족과의 만남",
    "작업/공부/책",
    "비즈니스",
    "가족모임",
  ],
  "공간의 무드": [
    "대화에 집중할 수 있는",
    "왁자지껄 떠들 수 있는",
    "문화예술을 즐길 수 있는",
  ],
  배경음악: ["배경음악 없음", "잔잔한 음악", "큰 음악"],
  인테리어: [
    "아담한 공간",
    "넓은 공간",
    "무채색",
    "우드톤",
    "따뜻한 조명",
    "통창뷰",
    "포토스팟",
    "테라스 및 야외좌석",
    "엔틱한",
    "모던한",
  ],
};
