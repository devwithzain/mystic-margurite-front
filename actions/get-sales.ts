const apiUrl = `https://mysticmarguerite.com/new/backend/api/admin/orders`;

const getSales = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getSales;