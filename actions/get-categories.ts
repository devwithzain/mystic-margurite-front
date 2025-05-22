const apiUrl = `https://mysticmarguerite.com/new/backend/api/categories`;

const getCategories = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getCategories;