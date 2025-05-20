const apiUrl = `https://mysticmarguerite.com/new/backend/api/blog`;

const getBlog = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getBlog;