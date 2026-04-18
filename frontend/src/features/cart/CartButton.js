import { useSelector } from "react-redux";
import CardIcon from "../../shared/ui/icons/CartIcon/CartIcon";

function CartButton() {
  const items = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.users.user);
  if (!user) return null;
  return (
    <div className="relative">
      <CardIcon />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
          {items.length}
        </span>
      )}
    </div>
  );
}

export default CartButton;
