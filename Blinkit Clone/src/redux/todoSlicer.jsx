import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("todos/fetchTodo", async () => {
  const response = await fetch("http://localhost:2005/Data");
  return response.json();
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    cart: {}, // Cart state
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (state.cart[item.id]) {
        state.cart[item.id].quantity += 1; // Increase quantity if item exists
      } else {
        state.cart[item.id] = { ...item, quantity: 1 }; // Add new item
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      if (state.cart[id]) {
        if (state.cart[id].quantity > 1) {
          state.cart[id].quantity -= 1; // Decrease quantity
        } else {
          delete state.cart[id]; // Remove item if quantity reaches 0
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart } = todoSlice.actions;
export default todoSlice.reducer;
