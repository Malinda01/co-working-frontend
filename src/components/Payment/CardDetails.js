import { useState } from "react";
import axios from "../../api/axiosInstance";

const CardDetails = ({ onSuccess }) => {
    // State variables to store user input and error messages.
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent for resubmision
    try {
        // Sends a request to validate the card by calling the /bank/validate-card endpoint
      const response = await axios.post("/bank/validate-card", {
        cardNumber,
        cvv,
        amount: parseFloat(amount), //Converts amount to a number using parseFloat().
      });

    //   If the validation is successful, it calls onSuccess, passing the card details.
      if (response.data.status === "valid") {
        onSuccess(cardNumber, amount);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Validation failed. Please check your details.");
    }
  };

  return (
    <div>
      <h2>Enter Card Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
        <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <button type="submit">Proceed</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CardDetails;
