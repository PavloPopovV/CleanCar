import React, { useState } from "react";
import { price } from "../../../data/price";
import PriceItem from "../PriceItem";
import PriceTab from "../PriceTab";
import { PriceTabList } from "./styles";

export default function PriceList() {
  const [activeTabId, setActiveTabId] = useState(price[0].id);

  const handleTabClick = (id) => {
    setActiveTabId(id);
  };
  const activeTab = price.find((tab) => tab.id === activeTabId);

  return (
    <>
      <PriceTabList>
        {price.map((tab) => (
          <PriceTab
            key={tab.id}
            data={tab}
            isActive={tab.id === activeTabId}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </PriceTabList>
      <PriceItem data={activeTab} />
    </>
  );
}
