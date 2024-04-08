import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((state) => state.bag);
  const Items = useSelector((state) => state.Allitems);
  const finalItems = Items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const COVINIENCE_FEE = 99;
  let totalPrice = bagItems.length;
  let totalMRP = 0;
  let totaldiscount = 0;

  finalItems.filter((bagitems) => {
    totalMRP += bagitems.original_price;
    totaldiscount += bagitems.original_price - bagitems.current_price;
  });
  let finalPayments = totalMRP - totaldiscount + COVINIENCE_FEE;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ( Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            {totaldiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹ {COVINIENCE_FEE}</span>
        </div>  
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">{finalPayments}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
