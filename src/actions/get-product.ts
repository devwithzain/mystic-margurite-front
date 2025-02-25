const apiUrl = `https://freequote4financialprotection.com/backend/api/product`;
const getProduct = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getProduct;