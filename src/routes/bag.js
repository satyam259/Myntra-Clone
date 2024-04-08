import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
// import { useSelector } from "react-redux";
const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.Allitems);

  const finalItems = items.filter((item) => {
    const ItemIndex = bagItems.indexOf(item.id);
    return ItemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
