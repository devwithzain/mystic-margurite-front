const apiUrl = `https://mysticmarguerite.com/new/backend/api/blogs`;

const getBlogs = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBlogs;