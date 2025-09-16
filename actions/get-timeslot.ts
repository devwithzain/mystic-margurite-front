const apiUrl = `http://127.0.0.1:8000/api/timeslot`;

const getTimeSlot = async (id: string) => {
   try {
      const response = await fetch(`${apiUrl}/${id}`);
      const data = await response.json();
      return data;
   } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
   }
};

export default getTimeSlot;