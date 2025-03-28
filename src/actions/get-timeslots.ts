const apiUrl = `http://127.0.0.1:8000/api/timeslots`;

const getTimeSlots = async () => {
   try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
   } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
   }
};

export default getTimeSlots;