// import { createContext, ReactNode, useContext, useState } from "react"
// import { FoodCart } from "../components/Foodcart"
// import { useLocalStorage } from "../hooks/UseLocalStorage"

// type FoodCartProviderProps = {
//   children: ReactNode
// }

// type CartItem = {
//   id: number
//   quantity: number
// }

// type FoodCartContext = {
//   openCart: () => void
//   closeCart: () => void
//   getItemQuantity: (id: number) => number
//   increaseCartQuantity: (id: number) => void
//   decreaseCartQuantity: (id: number) => void
//   removeFromCart: (id: number) => void
//   cartQuantity: number
//   cartItems: CartItem[]
// }

// const FoodCartContext = createContext({} as FoodCartContext)

// export function useFoodCart() {
//   return useContext(FoodCartContext)
// }
// export function FoodCartProvider({ children }: FoodCartProviderProps) {
//   const [isOpen, setIsOpen] = useState(false)
//   const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
//     "food-cart",
//     []
//   )

//   const cartQuantity = cartItems.reduce(
//     (quantity, item) => item.quantity + quantity,
//     0
//   )

//   const openCart = () => setIsOpen(true)
//   const closeCart = () => setIsOpen(false)
//   function getItemQuantity(id: number) {
//     return cartItems.find(item => item.id === id)?.quantity || 0
//   }
//   function increaseCartQuantity(id: number) {
//     setCartItems(currItems => {
//       if (currItems.find(item => item.id === id) == null) {
//         return [...currItems, { id, quantity: 1 }]
//       } else {
//         return currItems.map(item => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity + 1 }
//           } else {
//             return item
//           }
//         })
//       }
//     })
//   }
//   function decreaseCartQuantity(id: number) {
//     setCartItems(currItems => {
//       if (currItems.find(item => item.id === id)?.quantity === 1) {
//         return currItems.filter(item => item.id !== id)
//       } else {
//         return currItems.map(item => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity - 1 }
//           } else {
//             return item
//           }
//         })
//       }
//     })
//   }
//   function removeFromCart(id: number) {
//     setCartItems(currItems => {
//       return currItems.filter(item => item.id !== id)
//     })
//   }

//   return (
//     <FoodCartContext.Provider
//       value={{
//         getItemQuantity,
//         increaseCartQuantity,
//         decreaseCartQuantity,
//         removeFromCart,
//         openCart,
//         closeCart,
//         cartItems,
//         cartQuantity,
//       }}
//     >
//       {children}
//       <FoodCart isOpen={isOpen} />
//     </FoodCartContext.Provider>
//   )
// }
