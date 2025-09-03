import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./InvoiceList.css";

function InvoiceList() {
    const invoices = useSelector((state) => state.invoices);
    const navigate = useNavigate();

    const handleCardClick = (invoiceId) => {
        navigate(`/${invoiceId}`);
    };

    return (
        <div className="invoice-list-container">
            {invoices.length !== 0 ? invoices.map((invoice) => (
                <div
                    className="invoice-card"
                    key={invoice.id}
                    onClick={() => handleCardClick(invoice.id)}
                    style={{ cursor: "pointer" }}
                >
                    <div className="invoice-card-left">
                        <p>{invoice.id}</p>
                        <p>{invoice.billTo.date}</p>
                        <p>{invoice.billTo.clientName}</p>
                    </div>
                    <div className="invoice-card-right">
                        <p className="invoice-amount">${invoice.totalAmount}</p>
                        <p className={`status ${invoice.invoiceStatus.toLowerCase()}`}>{invoice.invoiceStatus}</p>
                        <div className="arrow-right">&#8250;</div>
                    </div>
                </div>
            )) : <p className="no-invoices">No Invoices</p>}
        </div>
    );
}

export default InvoiceList;