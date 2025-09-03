import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { X, Trash2 } from 'lucide-react'
import "./InvoiceForm.css";
import { toggleFormVisibility } from '../../Slices/FormVisibilitySlice.jsx';
import {addInvoice} from '../../Slices/InvoiceSlice.jsx';

function InvoiceForm() {
    const isFormVisible = useSelector((state) => state.formVisibility.isFormVisible);
    const dispatch = useDispatch();

    const [items, setItems] = useState([]);

    // Add state for form fields
    const [billFrom, setBillFrom] = useState({
        street: "",
        city: "",
        postCode: "",
        country: ""
    });
    const [billTo, setBillTo] = useState({
        name: "",
        email: "",
        street: "",
        city: "",
        postCode: "",
        country: ""
    });
    const [invoiceDate, setInvoiceDate] = useState("");
    const [paymentTerms, setPaymentTerms] = useState("30");
    const [projectDescription, setProjectDescription] = useState("");

    const handleAddItem = () => {
        setItems([...items, { name: "", qty: 1, price: 0 }]);
    };

    const handleRemoveItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const handleChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };

    // Handlers for form fields
    const handleBillFromChange = (field, value) => {
        setBillFrom({ ...billFrom, [field]: value });
    };

    const handleBillToChange = (field, value) => {
        setBillTo({ ...billTo, [field]: value });
    };

    const handleCreateInvoice = () => {
        const invoicePayload = {
            billFrom,
            billTo,
            invoiceDate,
            paymentTerms,
            projectDescription,
            items
        };
        dispatch(addInvoice(invoicePayload));
        dispatch(toggleFormVisibility({ isFormVisible: false }));
        // Optionally reset form fields here
        setBillFrom({ street: "", city: "", postCode: "", country: "" });
        setBillTo({ name: "", email: "", street: "", city: "", postCode: "", country: "" });
        setInvoiceDate("");
        setPaymentTerms("30");
        setProjectDescription("");
        setItems([]);
    };

    if (!isFormVisible) return null; // cleaner conditional rendering

    return (
        <div className="invoice-form-container">
            <div className="top-bar">
                <h3>New Invoice</h3>
                <X color="#ffffff" strokeWidth={2.25} style={{cursor : "pointer"}} onClick={() => dispatch(toggleFormVisibility({"isFormVisible" : false}))}/>
            </div>
            <p className="bill-text">Bill From</p>
            <div className="bill-from-section">
                <div className="street-address">
                    <input
                        type="text"
                        placeholder="Street Address"
                        value={billFrom.street}
                        onChange={e => handleBillFromChange("street", e.target.value)}
                    />
                </div>
                <div className="city-postcode-country">
                    <input
                        type="text"
                        placeholder="City"
                        value={billFrom.city}
                        onChange={e => handleBillFromChange("city", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Post Code"
                        value={billFrom.postCode}
                        onChange={e => handleBillFromChange("postCode", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        value={billFrom.country}
                        onChange={e => handleBillFromChange("country", e.target.value)}
                    />
                </div>
            </div>
            <p className="bill-text">Bill To</p>
            <div className="bill-to-section">
                <div className="client-details">
                    <input
                        type="text"
                        placeholder="Client's Name"
                        value={billTo.name}
                        onChange={e => handleBillToChange("name", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Client's Email"
                        value={billTo.email}
                        onChange={e => handleBillToChange("email", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Street Address"
                        value={billTo.street}
                        onChange={e => handleBillToChange("street", e.target.value)}
                    />
                </div>
                <div className="city-postcode-country">
                    <input
                        type="text"
                        placeholder="City"
                        value={billTo.city}
                        onChange={e => handleBillToChange("city", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Post Code"
                        value={billTo.postCode}
                        onChange={e => handleBillToChange("postCode", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        value={billTo.country}
                        onChange={e => handleBillToChange("country", e.target.value)}
                    />
                </div>
                <div className="invoice-date-payment-terms">
                    <input
                        type="date"
                        placeholder="Invoice Date"
                        className="invoice-date"
                        value={invoiceDate}
                        onChange={e => setInvoiceDate(e.target.value)}
                    />
                    <select
                        className="payment-terms"
                        value={paymentTerms}
                        onChange={e => setPaymentTerms(e.target.value)}
                    >
                        <option value="30">Next 30 Days</option>
                        <option value="60">Next 60 Days</option>
                    </select>
                </div>
                <div className="project-description">
                    <input
                        type="text"
                        placeholder="Project Description"
                        value={projectDescription}
                        onChange={e => setProjectDescription(e.target.value)}
                    />
                </div>
            </div>
            <div className="item-list-section">
                <p>Item List</p>
                {items.map((item, index) => (
                    <div className="item-list-headers" key={index}>
                        <div className="item-list-header">
                            <input
                                type="text"
                                placeholder="Item Name"
                                className="item-name"
                                value={item.name}
                                onChange={(e) => handleChange(index, "name", e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Qty."
                                className="item-qty"
                                value={item.qty}
                                onChange={(e) => handleChange(index, "qty", e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                className="item-price"
                                value={item.price}
                                onChange={(e) => handleChange(index, "price", e.target.value)}
                            />
                        </div>
                        <div className="item-list-header-right">
                            <p className="total-amount">
                                ${(item.qty * item.price).toFixed(2)}
                            </p>
                            <div onClick={() => handleRemoveItem(index)} style={{cursor : "pointer"}}>
                                <Trash2 color="#fafafa" />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="add-new-item" onClick={handleAddItem}>+ Add New Item</div>
                <div className="form-buttons">
                    <button onClick={() => dispatch(toggleFormVisibility({"isFormVisible" : false}))}>Cancel</button>
                    <button type="button" onClick={handleCreateInvoice}>Create Invoice</button>
                </div>
            </div>
        </div>
    );
}

export default InvoiceForm;