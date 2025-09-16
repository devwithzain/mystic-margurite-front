const apiUrl = `http://127.0.0.1:8000/api/blog`;

const getBlog = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getBlog;