import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface WaitlistPayload {
  email: string;
}

export const useJoinWaitlist = () => {
    return useMutation({
        mutationFn: async (payload: WaitlistPayload) => {
            const { data } = await axiosInstance.post("/users/join_waitlist/", payload);
            return data
        }
    })
}