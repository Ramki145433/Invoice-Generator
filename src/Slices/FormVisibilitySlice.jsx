import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isFormVisible: false
};

const formVisibilitySlice = createSlice({
    name: 'formVisibility',
    initialState,
    reducers: {
        toggleFormVisibility: (state) => {
            state.isFormVisible = !state.isFormVisible;
        }
    }
});

export const { toggleFormVisibility } = formVisibilitySlice.actions;
export default formVisibilitySlice.reducer;