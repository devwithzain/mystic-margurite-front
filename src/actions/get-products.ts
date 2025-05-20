const apiUrl = `https://mysticmarguerite.com/new/backend/api/products`;

const getProducts = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getProducts;