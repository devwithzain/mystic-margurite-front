const apiUrl = `http://127.0.0.1:8000/api/blogs`;

const getBlogs = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBlogs;