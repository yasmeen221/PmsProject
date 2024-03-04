import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = import.meta.env.VITE_API_URL;
export const apiLoginSlice = createApi({
  reducerPath: "apiLogin",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        url: "auth/login", //end point for add //true
        method: "POST",
        body:  user, //body of request
      }),
    }),
  }),
});
export const { useLoginUserMutation } = apiLoginSlice;
