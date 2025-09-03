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
        </div>
    );
}

export default DetailedInvoice;