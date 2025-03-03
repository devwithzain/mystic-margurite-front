const apiUrl = `http://127.0.0.1:8000/api/user/orders`;

const getOrders = async (token: string | undefined | null) => {
   try {
      const response = await fetch(apiUrl, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      const data = await response.json();
      return data;
   } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
   }
};

export default getOrders;