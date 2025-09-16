const apiUrl = `http://127.0.0.1:8000/api/admin/bookings`;

const getBookings = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBookings;