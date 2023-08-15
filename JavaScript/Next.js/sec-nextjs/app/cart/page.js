export default function Cart() {
  let cartbox = ["Tomamtoes", "Pasta"];
  return (
    <div>
      <h4>Cart</h4>
      <CartItem item={cartbox[0]}></CartItem>
      <CartItem item={cartbox[1]}></CartItem>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
