const apiUrl = `https://mysticmarguerite.com/new/backend/api/timeslots`;

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