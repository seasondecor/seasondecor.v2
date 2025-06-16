import { useMutation } from "@tanstack/react-query";
import BaseRequest from "@/config/axios.config";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

const SUB_URL = `api/Auth`;

export function useVerify() {
  return useMutation({
    mutationKey: ["verify"],
    mutationFn: async (data: { email: string; code: string }) => {
      nProgress.start();
      try {
        const response = await BaseRequest.Post(
          `/${SUB_URL}/verify-email`,
          data
        );
        return response;
      } catch (error) {
        nProgress.done();
        throw error;
      } finally {
        nProgress.done();
      }
    },
  });
}
