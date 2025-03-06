const apiUrl = `https://freequote4financialprotection.com/backend/api/requestService`;

const getRequestService = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getRequestService;