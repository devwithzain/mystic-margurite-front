const apiUrl = `https://freequote4financialprotection.com/backend/api/users`;

const getUsers = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getUsers;