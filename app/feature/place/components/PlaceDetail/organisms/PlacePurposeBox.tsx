import BookIcon from "@/common/assets/icons/book/BookIcon";
import BusinessIcon from "@/common/assets/icons/business/BusinessIcon";
import ChatIcon from "@/common/assets/icons/chat/ChatIcon";
import HeartIcon from "@/common/assets/icons/heart/HeartIcon";
import UserDoubleIcon from "@/common/assets/icons/user/UserDoubleIcon";
import HashTag from "@/common/components/ui/text/HashTag";

interface PlacePurposeBoxProps {
  purpose: string;
}

//Molecule
export default function PlacePurposeBox({ purpose }: PlacePurposeBoxProps) {
  const returnPurposeIcon = (purpose: string) => {
    if (purpose === "연인과의 데이트") return <HeartIcon color="#F670C7" />;
    if (purpose === "친구와의 만남" || purpose === "친구/가족과의 만남")
      return <ChatIcon color="#FDB022" />;
    if (purpose === "가족모임") return <UserDoubleIcon color="#9B8AFB" />;
    if (purpose === "작업/공부/책") return <BookIcon />;
    if (purpose === "비즈니스")
      return <BusinessIcon color="#0BA5EC" color2="#0BA5EC80" />;
  };

  return (
    <div className="w-[48%] flex flex-col items-center p-[1.2rem] bg-white rounded-[8px]">
      {returnPurposeIcon(purpose)}
      <div className="mt-[0.8rem]">
        <HashTag
          mainText={" " + purpose}
          mainTextClassName="body1"
          tagClassName="body1"
        />
      </div>
    </div>
  );
}
