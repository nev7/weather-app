import type { FetchApiOptions } from "@/types/fetchApiTypes";

export const client = {
  async getRequest(url: string, options: FetchApiOptions) {
    const response = await fetch(url, options);
    return response;
  },
};
