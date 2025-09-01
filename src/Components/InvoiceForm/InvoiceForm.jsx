import { useSelector, useDispatch } from 'react-redux'
import { X } from 'lucide-react'
import "./InvoiceForm.css";
import {toggleFormVisibility} from '../../Slices/FormVisibilitySlice.jsx';

function InvoiceForm() {
    const isFormVisible = useSelector((state) => state.formVisibility.isFormVisible);
    const dispatch = useDispatch();

  if (!isFormVisible) return null; // cleaner conditional rendering

  return (
    <div className="invoice-form-container">
      <div className="top-bar">
        <h3>New Invoice</h3>
              <X color="#ffffff" strokeWidth={2.25} style={{cursor : "pointer"}} onClick={() => dispatch(toggleFormVisibility({"isFormVisible" : false}))}/>
      </div>
    </div>
  );
}

export default InvoiceForm;