/* import { createSlice } from "@reduxjs/toolkit";


// بازیابی آیتم‌های ذخیره‌شده در localStorage یا استفاده از مقادیر پیش‌فرض
const initialState = {
    items: JSON.parse(localStorage.getItem("basketItems")) || [],
   
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            const alreadyExist = state.items.some((_item) => _item.id === item.id);

            if (alreadyExist) {
                state.items = state.items.map((_item) => {
                    if (_item.id === item.id) {
                        return {
                            ..._item,
                            quantity: _item.quantity + 1,
                        };
                    }
                    return _item;
                });
            } else {
                state.items = [...state.items, { ...item, quantity: 1 }];
            }
            

            // ذخیره در localStorage بعد از هر تغییر
            localStorage.setItem("basketItems", JSON.stringify(state.items));
            
        },
        removeItem(state, action) {
            const item = action.payload;
            const itemToRemove = state.items.find((_item) => _item.id === item.id);

            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    state.items = state.items.map((_item) => {
                        if (_item.id === item.id) {
                            return {
                                ..._item,
                                quantity: _item.quantity - 1,
                            };
                        }
                        return _item;
                    });
                } else {
                    state.items = state.items.filter((_item) => _item.id !== item.id);
                }
                

                // ذخیره در localStorage بعد از هر تغییر
                localStorage.setItem("basketItems", JSON.stringify(state.items));
                
            }
        },
    },
});

const { actions, reducer } = basketSlice;
export const { addItem, removeItem } = actions;
export const basketState = (state) => state.basket;
export default reducer;

 */
import { createSlice } from "@reduxjs/toolkit";

// بازیابی آیتم‌های ذخیره‌شده در localStorage یا استفاده از مقادیر پیش‌فرض
const initialState = {
    items: JSON.parse(localStorage.getItem("basketItems")) || [],
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            const alreadyExist = state.items.some((_item) => _item.id === item.id);

            if (!alreadyExist) {
                state.items = [...state.items, { ...item, quantity: 1 }];
            }

            // ذخیره در localStorage بعد از هر تغییر
            localStorage.setItem("basketItems", JSON.stringify(state.items));
        },
        removeItem(state, action) {
            const item = action.payload;
            const itemToRemove = state.items.find((_item) => _item.id === item.id);

            if (itemToRemove) {
                state.items = state.items.filter((_item) => _item.id !== item.id);
                
                // ذخیره در localStorage بعد از هر تغییر
                localStorage.setItem("basketItems", JSON.stringify(state.items));
            }
        },
    },
});

const { actions, reducer } = basketSlice;
export const { addItem, removeItem } = actions;
export const basketState = (state) => state.basket;
export default reducer;
