import AddFillIcon from "@common/assets/icons/add/AddFillIcon";
import Button from "@common/components/ui/buttons/Button/Button";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

interface PhotoUploadProps {
  cafeKeywordData: { [key: string]: string | Array<string> };
  handleImage: (url: File) => void;
  handleIndicatorIndex: (index: number) => void;
}

export default function PhotoUpload({
  cafeKeywordData,
  handleImage,
  handleIndicatorIndex,
}: PhotoUploadProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>([]);
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleImage(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          if (image.length === 2) {
            return;
          } else {
            setImage((prev: any) => {
              return [...prev, reader.result];
            });
          }
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddImageClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleRecordUploadClick = () => {
    handleIndicatorIndex(3);
  };
  return (
    <>
      <div className="inline-flex flex-col items-start pt-[14.8rem] pl-[2rem] gap-[1.2rem]">
        <div className="flex items-start gap-[0.6rem] headline3-semibold">
          <div className="text-black">사진올리기</div>
          <div className="text-text-gray-6">
            {cafeKeywordData.images.length}/2
          </div>
        </div>
        <div className="flex flex-wrap gap-[0.7rem] pr-[2rem]">
          {image &&
            image.map((img: any, i: any) => (
              <div
                key={img + i}
                className="relative w-[16.4rem] h-[16.4rem] p-[6.2rem] rounded-[10px] border border-solid border-1px border-line-gray-3"
              >
                <Image
                  src={img}
                  alt="방문 사진"
                  fill
                  className="rounded-[10px]"
                />
              </div>
            ))}
          {cafeKeywordData.images.length < 2 && (
            <div className="w-[16.4rem] h-[16.4rem] p-[6.2rem] border border-solid border-1px border-line-gray-3 rounded-[10px]">
              <input
                ref={fileInput}
                type="file"
                accept="image/*"
                className="hidden w-full h-full"
                onChange={handleImageUpload}
              />
              <AddFillIcon onClick={handleAddImageClick} />
            </div>
          )}
        </div>
        <div className="fixed h-[15.5rem] bottom-0 bg-white">
          <Button onClick={handleRecordUploadClick}>기록올리기</Button>
        </div>
      </div>
    </>
  );
}