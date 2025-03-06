const apiUrl = `https://freequote4financialprotection.com/backend/api/blogs`;

const getBlogs = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBlogs;