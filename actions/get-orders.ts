const apiUrl = `http://127.0.0.1:8000/api/admin/orders`;

const getorders = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getorders;