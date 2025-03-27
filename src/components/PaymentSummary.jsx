export default function PaymentSummary({ details, onConfirm }) {
  if (!details) {
    return <p>Loading...</p>; // Handle undefined details
  }

  return (
    <div>
      <h2>Payment Summary</h2>
      <p>Card: **** **** **** {details.cardNumber?.slice(-4)}</p>
      <p>Amount: ${details.amount}</p>
      <button onClick={onConfirm}>Confirm Payment</button>
    </div>
  );
}