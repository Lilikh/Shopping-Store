import { createContext, useContext,useState, ReactNode } from "react";
import SideBar from "../components/sideBar";
import { useLocaStorage } from "../hooks/useLocalStorage";
type cartContext={
    openCart:()=>void
    closeCart:()=>void
    getItem:(id:number)=>number
    increaseItem:(id:number)=>void
    decreaseItem:(id:number)=>void
    removeItem:(id:number)=>void
    cartQty:number
    cartItems:createItem[]

}
type createItem={
    id:number
    qty:number
}
type cartProviderProp={
    children:ReactNode
}
const cartContext=createContext({} as cartContext)

export function useCartContext() {
    return useContext(cartContext);
}
export function CartProvider({children}:cartProviderProp){
    const[isOpen, setIsOpen]=useState(false);
    const[cartItems, setCartItems]=useLocaStorage<createItem[]>('shopping cart',
        []);

    const cartQty=cartItems.reduce((qty,item)=>item.qty+qty, 0)

    const openCart=()=>setIsOpen(true)
    const closeCart=()=>setIsOpen(false)
    function getItem(id:number){
        return cartItems.find((item)=>item.id === id) ?.qty || 0
    }
    function increaseItem(id:number){
        setCartItems((currItems)=>{
            if(currItems.find((item)=>item.id===id) == null){
                return [...currItems, {id, qty:1}]
            }else{
                return currItems.map((item)=>{
                    if(item.id===id){
                        return {...item, qty: item.qty+1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function decreaseItem(id:number){
        setCartItems((currItems)=>{
            if(currItems.find((item)=>item.id===id)?.qty===1){
                return currItems.filter((item)=>item.id !==id)
            }else{
                return currItems.map((item)=>{
                    if(item.id===id){
                        return {...item, qty: item.qty-1}
                    }else{
                        return item
                    }
                })
            }

        })
    }
    function removeItem(id:number){
        setCartItems(currItems=>currItems.filter((item)=>item.id!==id))
    }

   
    return (
    <cartContext.Provider value={{
        getItem,increaseItem,
        decreaseItem,removeItem, 
        cartQty, cartItems,
        openCart, closeCart }}>
             {children}
             <SideBar isOpen={isOpen} />
            </cartContext.Provider>
)}