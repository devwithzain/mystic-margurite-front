const apiUrl = `https://freequote4financialprotection.com/backend/api/categories`;
const getCategory = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getCategory;