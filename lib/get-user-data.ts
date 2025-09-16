import axios from "axios";
import { cookies } from "next/headers";

export const getUserData = async (tokenName: string) => {
   const cookieStore = cookies();
   const token = (await cookieStore).get(tokenName)?.value;

   if (!token) {
      console.warn("No auth token found in cookies");
      return null;
   }

   try {
      const response = await axios.get("http://127.0.0.1:8000/api/profile", {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      return response.data.data;
   } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
   }
};
