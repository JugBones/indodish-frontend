import { Offcanvas, Stack } from "react-bootstrap"
import { useFoodCart } from "../context/FoodCartContext"
import { formatCurrency } from "../utility/Currencyformat"
import { CartItem } from "./Cartitem"
import storeItems from "../database/items.json"

type FoodCartProps = {
  isOpen: boolean
}

export function FoodCart({ isOpen }: FoodCartProps) {
  const { closeCart, cartItems } = useFoodCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}