"use client";

import Search from "@common/assets/icons/search/search.svg";
import Delete from "@common/assets/icons/close/close-gray.svg";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function PlaceSearchBar() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setSearchText(newText);
  };
  const handleTextDelete = () => {
    setSearchText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/record/search");
    }
  };

  return (
    <div className="flex w-full h-[4rem] pl-[1.2rem] pr-[0.6rem] py-[0.8rem] justify-between items-center relative self-stretch bg-background-gray-1 rounded-[1000px] gap-[0.8rem]">
      <div className="flex w-full items-center gap-[0.8rem]">
        <div>
          <Search />
        </div>
        <input
          className="body2-medium placeholder:text-text-gray-6 w-full bg-background-gray-1 outline-none"
          value={searchText}
          placeholder="공간 이름을 검색해보세요"
          onChange={handleSearchTextChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <Delete onClick={handleTextDelete} />
      </div>
    </div>
  );
}