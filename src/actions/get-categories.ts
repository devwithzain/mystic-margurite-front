const apiUrl = `https://freequote4financialprotection.com/backend/api/categories`;

const getCategories = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getCategories;