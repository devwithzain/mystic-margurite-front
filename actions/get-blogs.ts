const apiUrl = `https://mysticmarguerite.com/new/backend/api/blogs`;

const getBlogs = async () => {
   const response = await fetch(apiUrl, {
      next: { revalidate: 60 },
   });
   return response.json();
};

export default getBlogs;