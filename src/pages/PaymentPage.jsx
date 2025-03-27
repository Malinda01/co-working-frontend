import { useState } from "react";
import CardInput from "../components/CardInput";
import PaymentSummary from "../components/PaymentSummary";
import { validateCard, createPayment } from "../api/paymentApi";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [cardDetails, setCardDetails] = useState(null);
  const navigate = useNavigate();

  const handleCardSubmit = async (details) => {
    try {
      const isValid = await validateCard(details);
      if (isValid) {
        setCardDetails(details);
      } else {
        alert("Invalid card details or insufficient funds!");
      }
    } catch (error) {
      console.error("Error validating card:", error);
      alert("An error occurred while validating the card. Please try again.");
    }
  };

  const handleConfirmPayment = async () => {
    const paymentData = {
      cardDetails,
      // bookingId: 101, // Example Booking ID
      // userId: 5, // Example User ID
      amount: cardDetails.amount,
    };

    const response = await createPayment(paymentData);
    if (response) {
      alert("Payment Successful!");
      navigate("/confirmPayment"); // Redirect to confirmation page
    } else {
      alert("Payment Failed!");
    }
  };

  return (
    <div>
      {!cardDetails ? (
        <CardInput onSubmit={handleCardSubmit} />
      ) : (
        <PaymentSummary details={cardDetails} onConfirm={handleConfirmPayment} />
      )}
    </div>
  );
};

export default PaymentPage;
