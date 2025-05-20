const apiUrl = `https://mysticmarguerite.com/new/backend/api/users`;

const getUsers = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getUsers;