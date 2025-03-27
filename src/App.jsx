import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentPage from "./pages/PaymentPage.jsx";
import ConfirmPayment from "./pages/ConfirmPayment.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/confirm" element={<ConfirmPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
