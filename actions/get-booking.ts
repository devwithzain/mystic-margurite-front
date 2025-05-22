const apiUrl = `https://mysticmarguerite.com/new/backend/api/admin/booking`;

const getBooking = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getBooking;