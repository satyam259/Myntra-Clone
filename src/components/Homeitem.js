import { useDispatch, useSelector } from "react-redux";
// import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { BagActions } from "../store/bagSlice";
const HomeItem = ({ items }) => {
  const Dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const elementsFound = bagItems.indexOf(items.id) >= 0;

  const handleAddToBag = () => {
    Dispatch(BagActions.addTobag(items.id));
  };
  const handleRemove = () => {
    Dispatch(BagActions.removeFrombag(items.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={items.image} alt="item image" />
      <div className="rating">{items.rating.stars}</div>
      <div className="company-name">{items.company}</div>
      <div className="item-name">{items.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {items.current_price}</span>
        <span className="original-price">Rs {items.original_price}</span>
        <span className="discount">({items.discount_percentage}% OFF)</span>
      </div>
      {elementsFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
