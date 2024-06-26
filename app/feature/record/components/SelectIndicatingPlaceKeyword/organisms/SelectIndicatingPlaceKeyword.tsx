import RecordPageBookTopBar from "@/feature/record/components/RecordPageBook/organisms/RecordPageBookTopBar";
import PlaceIndicatingKeywordContent from "./PlaceIndicatingKeywordContent";

interface SelectKeyword {
  placeType: string;
  name: string;
  cafeKeywordData: {
    [key: string]: string | Array<string>;
  };
  restaurantKeywordData: {
    [key: string]: string | Array<string>;
  };
  handleKeyword: (category: string, keyword: string) => void;
  indicatorIndex: number;
  handleIndicatorIndex: (index: number) => void;
}

//Organism
export default function SelectIndicatingPlaceKeyword({
  placeType,
  name,
  cafeKeywordData,
  restaurantKeywordData,
  handleKeyword,
  indicatorIndex,
  handleIndicatorIndex,
}: SelectKeyword) {
  return (
    <div className="absolute w-full top-0">
      <RecordPageBookTopBar
        indicatorIndex={indicatorIndex}
        handleIndicatorIndex={handleIndicatorIndex}
        text={`${name}를 나타내는 키워드를 골라주세요`}
      />
      <PlaceIndicatingKeywordContent
        placeType={placeType}
        cafeKeywordData={cafeKeywordData}
        restaurantKeywordData={restaurantKeywordData}
        handleKeyword={handleKeyword}
      />
    </div>
  );
}
