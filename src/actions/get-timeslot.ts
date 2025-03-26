const apiUrl = `http://127.0.0.1:8000/api/timeslot`;

const getTimeSlot = async (id: string, token: string | undefined | null) => {
   try {
      const response = await fetch(`${apiUrl}/${id}`, {
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

export default getTimeSlot;