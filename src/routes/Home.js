import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

import HomeItem from "../components/Homeitem";
import { useState } from "react";

const Home = () => {
  const search = useOutletContext();
  const items = useSelector((store) => store.Allitems);
  return (
    <main>
      <div className="items-container">
        {items
          .filter((data) => data.company.toLowerCase().includes(search))
          .map((item) => (
            <HomeItem key={item.id} items={item} />
          ))}
      </div>
    </main>
  );
};

export default Home;
