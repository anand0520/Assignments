import { useLocation } from "react-router-dom";

function BookingSuccess() {
  const { state } = useLocation();

  return (
    <div>
      <h2>✅ Seat Booked Successfully!</h2>

      <p><strong>Booking ID:</strong> {state.bookingId}</p>
      <p><strong>Movie:</strong> {state.movie}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
}

export default BookingSuccess;
