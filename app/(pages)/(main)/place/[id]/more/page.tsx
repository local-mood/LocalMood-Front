import BookIcon from "@common/assets/icons/book/BookIcon";
import BusinessIcon from "@common/assets/icons/business/BusinessIcon";
import ChatIcon from "@common/assets/icons/chat/ChatIcon";
import Heart from "@common/assets/icons/heart/HeartIcon";
import Divider from "@common/components/ui/divider/Divider";
import GraphGage from "@common/components/ui/graph/GraphGage/GraphGage";
import BasicTopBar from "@common/components/ui/topBar/BasicTopBar/BasicTopBar";
import PlaceDetailMoreReviews from "@feature/place/components/PlaceDetail/PlaceDetailMoreReviews";
import GetPlaceDetail from "@feature/place/queries/getPlaceDetail";
import GetPlaceReview from "@feature/place/queries/getPlaceReview";

export default async function PlaceDetailMore({
  params: { id },
}: {
  params: { id: number };
}) {
  const reviewData = await GetPlaceReview(id);
  const detailData = await GetPlaceDetail(id);
  return (
    <div className="pb-[14.2rem]">
      <BasicTopBar color="#9E9E9E" className="" />
      <section className="px-[2rem] mt-[1.2rem]">
        <div className="headline1 text-black">
          {detailData.info.name}의 공간기록
        </div>
        <div className="pt-[1.2rem] pb-[4rem]">
          {detailData.info.purpose.map((li: any, i: number) => (
            <GraphGage
              key={li.comment}
              icon={<Heart color={li.color} color2={li.color2} />}
              evaluation={li.comment}
              percentage={li.percentage}
              className={i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"}
            />
          ))}
        </div>
      </section>
      <Divider className="bg-line-gray-3 h-[0.4rem]" />
      <PlaceDetailMoreReviews reviews={reviewData.reviews} />
    </div>
  );
}