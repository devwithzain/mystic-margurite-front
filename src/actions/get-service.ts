const apiUrl = `https://freequote4financialprotection.com/backend/api/service`;

const getService = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getService;