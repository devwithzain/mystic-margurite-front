const apiUrl = `https://mysticmarguerite.com/new/backend/api/admin/bookings`;

const getBookings = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBookings;