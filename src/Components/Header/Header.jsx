import "./Header.css";
import { Funnel, CirclePlus } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux';
import{toggleFormVisibility} from '../../Slices/FormVisibilitySlice.jsx';

function Header() {
    const invoices = useSelector((state) => state.invoices);
    console.log(invoices);
    const dispatch = useDispatch();
    return <header className="App-header">
        <div className="header-content-left">
            <h3>Invoices</h3>
            <p>There are {invoices.length} Total invoices</p>
        </div>
        <div className="header-content-right">
            <Funnel size={24} strokeWidth={1.5} style={{ color: "white" }} />
            <p>Filter by Status</p>
            <div className="add-new-invoice" onClick={() => dispatch(toggleFormVisibility())}>
                <CirclePlus size={24} color="#ffffff" strokeWidth={1.5} />
                <p>New Invoice</p>
            </div>
        </div>
  </header>;
}

export default Header;