const apiUrl = `https://mysticmarguerite.com/new/backend/api/timeslots`;

const getTimeSlots = async (token: string | undefined | null) => {
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

export default getTimeSlots;