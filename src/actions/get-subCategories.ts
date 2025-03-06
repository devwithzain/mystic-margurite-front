const apiUrl = `https://freequote4financialprotection.com/backend/api/subcategories`;
const getSubCategories = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getSubCategories;