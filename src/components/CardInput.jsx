import { useState } from "react";

const CardInput = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ cardNumber, cvv, amount: parseFloat(amount) });
  };

  return (
    <div>
      <h2>Enter Card Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Validate Card</button>
      </form>
    </div>
  );
};

export default CardInput;
