import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "INV" + 1234, // has to show on UI
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
            const payload = action.payload;
            console.log("Adding invoice with payload:", payload);

            // Calculate total amount
            const totalAmount = payload.items.reduce(
                (sum, item) => sum + (Number(item.qty) * Number(item.price)),
                0
            );

            // Generate a unique invoice ID
            const id = "INV" + Math.floor(1000 + Math.random() * 9000).toString();

            // Map items to match state structure
            const itemsList = payload.items.map(item => ({
                itemName: item.name,
                quantity: Number(item.qty),
                price: Number(item.price)
            }));

            // Build the invoice object to match state structure
            const newInvoice = {
                id,
                invoiceStatus: "Pending",
                itemsList,
                totalAmount,
                billFrom: {
                    streetAddress: payload.billFrom.street,
                    city: payload.billFrom.city,
                    postCode: payload.billFrom.postCode,
                    country: payload.billFrom.country
                },
                billTo: {
                    clientName: payload.billTo.name,
                    clientEmail: payload.billTo.email,
                    streetAddress: payload.billTo.street,
                    city: payload.billTo.city,
                    postCode: payload.billTo.postCode,
                    country: payload.billTo.country,
                    date: payload.invoiceDate,
                    paymentTenure: Number(payload.paymentTerms),
                    projectDescription: payload.projectDescription
                }
            };

            state.push(newInvoice);
        }
    }
});

export const { addInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;