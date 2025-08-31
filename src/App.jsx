import './App.css';
import Header from './Components/Header/Header.jsx';
import InvoiceForm from './Components/InvoiceForm/InvoiceForm.jsx';
import InvoiceList from './Components/InvoiceList/InvoiceList.jsx';
function App() {
  return <div className="App">
    <Header />
    <InvoiceList />
    <InvoiceForm />
  </div>;
}

export default App;