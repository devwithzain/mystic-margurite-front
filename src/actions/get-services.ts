const apiUrl = `https://freequote4financialprotection.com/backend/api/services`;

const getServices = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getServices;