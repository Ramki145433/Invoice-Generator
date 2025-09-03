import "./DetailedInvoice.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate} from "react-router-dom";
import { Download } from "lucide-react";
import { deleteInvoice, markAsPaid} from '../../Slices/InvoiceSlice.jsx';

function DetailedInvoice() {
    const invoices = useSelector((state) => state.invoices);
    const { invoiceId } = useParams();
    const invoice = invoices.find((inv) => inv.id === invoiceId);
    console.log(invoice.invoiceStatus);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteInvoice({ "invoiceId": invoiceId }));
        navigate("/");
    };

    return (
        <div className="detailed-invoice">
            <div className="top-bar">
                {/* <button className="go-back-button" onClick={() => window.history.back()}>Go Back</button> */}
                <div className={`top-bar-left ${invoice.invoiceStatus.toLowerCase()}`}>
                    <p>Status</p>
                    <span className={`status-indicator ${invoice.invoiceStatus.toLowerCase()}`}>
                        <p>{invoice.invoiceStatus}</p>
                    </span>
                </div>
                <div className="action-buttons">
                    <div className="download-button">
                        <Download color="#ffffff" />
                        <p>Download</p>
                    </div>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button" onClick={handleDelete}>Delete</button>
                    <button className="mark-paid-button" onClick={() => dispatch(markAsPaid({"invoiceId" : invoiceId}))}>Mark as Paid</button>
                </div>
            </div>
            <div className="invoice-details">
                <div className="first-section">
                    <div className="first-left">
                        <p className="invoice-id">#{invoice.id}</p>
                        <p className="project-description">{invoice.billTo.projectDescription}</p>
                    </div>
                    <div id="first-right">
                        <p className="sender-address">{invoice.billFrom.streetAddress}</p>
                        <p className="sender-city">{invoice.billFrom.city}</p>
                        <p className="sender-postcode">{invoice.billFrom.postCode}</p>
                        <p className="sender-country">{invoice.billFrom.country}</p>
                    </div>
                </div>
                <div className="second-section">
                    <div className="second-left">
                        <p style={{color : "#72798f"}}>Invoice Date</p>
                        <p style={{fontWeight : 600}}>{invoice.billTo.date}</p>
                        <p style={{ color: "#72798f" }}>Payment Terms</p>
                        <p style={{fontWeight : 600}}>{invoice.billTo.paymentTenure} Days</p>
                    </div>
                    <div className="second-middle">
                        <p style={{ color: "#72798f" }}>Bill To</p>
                        <p style={{fontWeight : 600}}>{invoice.billTo.clientName}</p>
                        <p style={{ color: "#72798f" }}>{invoice.billTo.streetAddress}</p>
                        <p style={{ color: "#72798f" }}>{invoice.billTo.city}</p>
                        <p style={{ color: "#72798f" }}>{invoice.billTo.postCode}</p>
                        <p style={{ color: "#72798f" }}>{invoice.billTo.country}</p>
                    </div>
                    <div className="second-right">
                        <p style={{ color: "#72798f" }}>Sent to</p>
                        <p style={{fontWeight : 600}}>{invoice.billTo.clientEmail}</p>
                    </div>
                </div>
                <div className="third-section">
                    {
                        invoice.itemsList.map((item, index) => (
                            <div className="item-row" key={index}>
                                <div className="item-name">
                                    <p style={{marginBottom : "1rem"}}>Item Name</p>
                                    <p>{item.itemName}</p>
                                </div>
                                <div className="item-quantity">
                                    <p style={{marginBottom : "1rem"}}>QTY</p>
                                    <p>{item.quantity}</p>
                                </div>
                                <div className="item-price">
                                    <p style={{marginBottom : "1rem"}}>Price</p>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>
                                <div className="item-total">
                                    <p style={{marginBottom : "1rem"}}>Total</p>
                                    <p>${(item.quantity * item.price).toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="fourth-section">
                    <p className="amount-due-label">Amount Due</p>
                    <p className="amount-due-value">${invoice.totalAmount.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailedInvoice;