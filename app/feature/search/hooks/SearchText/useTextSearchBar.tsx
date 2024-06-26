"use client";

import { useState } from "react";

export default function useTextSearchBar() {
  const [searchText, setSearchText] = useState("");
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleSearchText = (text: string) => {
    setSearchText(text);
  };

  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return {
    searchText,
    tabIndex,
    handlers: {
      handleSearchText,
      handleTabIndex,
    },
  };
}
