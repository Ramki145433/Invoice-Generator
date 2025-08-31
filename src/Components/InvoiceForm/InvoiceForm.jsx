import { useSelector } from 'react-redux'
import { X } from 'lucide-react'
import "./InvoiceForm.css";

function InvoiceForm() {
    const isFormVisible = useSelector((state) => state.formVisibility.isFormVisible);
    console.log(isFormVisible);
    {
        return isFormVisible &&
        <div className="invoice-form-container">
            <div className="top-bar">
                    <h3>New Invoice</h3>
                    <X color="#ffffff" strokeWidth={2.25} />
            </div>
        </div>
   }
}

export default InvoiceForm;