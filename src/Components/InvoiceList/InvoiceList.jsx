import {useSelector} from "react-redux"
import "./InvoiceList.css"

function InvoiceList() {
    const invoices = useSelector((state) => state.invoices);
    console.log(invoices);
    return <div className="invoice-list-container">
        {
            invoices.map((invoice) => (
                <div className="invoice-card" key={invoice.id}>
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
            ))
        }
    </div>
}

export default InvoiceList