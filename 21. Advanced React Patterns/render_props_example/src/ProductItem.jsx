export default function ProductItem({ item }) {
  return (
    <li>
      <div className="boxHeader">
        <h3>{item.productTitle}</h3>
        <h3>${item.productPrice}</h3>
      </div>
      <div className="boxContent">{item.productContent}</div>
    </li>
  );
}
