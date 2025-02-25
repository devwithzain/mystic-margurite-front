const apiUrl = `https://freequote4financialprotection.com/backend/api/requestServices`;

const getRequestServices = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getRequestServices;