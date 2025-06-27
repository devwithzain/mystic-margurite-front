import toast from "react-hot-toast";
import { getData } from "./get-zoom-token";

export const generateZoomMeetingLink = async (sessionName: string) => {
   try {
      const res = await getData(sessionName);
      const { token } = res.data;

      const meetingLink = `${window.location.origin}/call/${sessionName}`;
      return { meetingLink, token };
   } catch (err) {
      console.error("Error generating Zoom JWT:", err);
      toast.error("Failed to create Zoom session");
      throw err;
   }
};