import {createSlice} from "@reduxjs/toolkit"
import cartitems from '../../cartItems'
const initialState = {
    cartItems: cartitems,
    amount: 0,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
})
export default cartSlice.reducer