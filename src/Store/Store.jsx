import {configureStore} from '@reduxjs/toolkit';
import invoiceReducer from '../Slices/InvoiceSlice.jsx';
import formVisibilityReducer from '../Slices/FormVisibilitySlice.jsx';

const store = configureStore({
    reducer : {
        invoices: invoiceReducer,
        formVisibility: formVisibilityReducer
    }
});

export default store;