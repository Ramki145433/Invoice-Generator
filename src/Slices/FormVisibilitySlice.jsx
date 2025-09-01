import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isFormVisible: false
};

const formVisibilitySlice = createSlice({
    name: 'formVisibility',
    initialState,
    reducers: {
        toggleFormVisibility: (state, action) => {
            console.log("Toggling form visibility with payload:", action.payload);
            if (action.payload && typeof action.payload.isFormVisible === 'boolean') {
                state.isFormVisible = action.payload.isFormVisible;
            } else {
                console.warn("Invalid payload for toggleFormVisibility:", action.payload);
            }
            console.log("Form visibility is now:", state.isFormVisible);
        }
    }
});

export const { toggleFormVisibility } = formVisibilitySlice.actions;
export default formVisibilitySlice.reducer;