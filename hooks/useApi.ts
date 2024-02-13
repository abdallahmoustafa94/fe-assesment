import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1/" }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: (params) => `https://mocki.io/v1/${params}`,
    }),
  }),
});

export const { useFetchDataQuery } = api;
export default api;
