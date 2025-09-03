import './App.css';
import Header from './Components/Header/Header.jsx';
import InvoiceForm from './Components/InvoiceForm/InvoiceForm.jsx';
import InvoiceList from './Components/InvoiceList/InvoiceList.jsx';
import DetailedInvoice from './Components/DetailedInvoice/DetailedInvoice.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/:invoiceId" element={<DetailedInvoice />} />
        </Routes>
        <InvoiceForm />
      </Router>
    </div>
  );
}

export default App;