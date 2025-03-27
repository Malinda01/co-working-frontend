import axios from "axios";

const API_BASE_URL1 = "http://localhost:8080/api/bank"; // Adjust if needed

export const validateCard = async (cardDetails) => {
  try {
    const response = await axios.post(`${API_BASE_URL1}/validate`, cardDetails);
    return response.data;
  } catch (error) {
    console.error("Card validation failed:", error);
    return false;
  }
};

const API_BASE_URL2 = "http://localhost:8080/payments";
export const createPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL2}/create`, paymentData);
    console.log("Payment Response:", response); // Log the full response
    return response.data;
  } catch (error) {
    console.error("Payment creation failed:", error.response ? error.response.data : error.message);
    return null;
  }
};
