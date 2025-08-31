import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "INV" + Math.floor(1000 + Math.random() * 9000).toString(), // has to show on UI
        invoiceStatus: "Pending", // has to show on UI
        itemsList: [
            {
                itemName: "Website Design",
                quantity: 1,
                price: 3000
            }
        ],
        totalAmount: 3000, // has to show on UI
        billFrom : {
            streetAddress: "Balaji Nagar, Near SBI Bank",
            city: "Bangalore",
            postCode: "560045",
            country: "India"
        },
        billTo : {
            clientName: "Ramki", // has to show on UI
            clientEmail: "Ram123@gmail.com",
            streetAddress: "Rama Nagar, Near ICICI Bank",
            city: "Vijayawada",
            postCode: "520010",
            country: "India",
            date: new Date().toISOString().split('T')[0],
            paymentTenure: 30, // default 30 days, has to show on UI
            projectDescription: "Payment for website design"
        }
    }
]

const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        addInvoice: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;