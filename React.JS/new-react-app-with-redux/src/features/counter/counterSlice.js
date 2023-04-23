const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: 0
}


export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducer:{
        increment:(state) => {
            state.value += 1;
        }
    }
})