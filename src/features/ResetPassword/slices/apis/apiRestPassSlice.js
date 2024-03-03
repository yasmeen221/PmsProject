import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = import.meta.env.VITE_API_URL;
export const apiRestPassSlice = createApi({
  reducerPath: "apiResetPassword",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),

  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (pass) => ({
        url: "/", //end point for add //true
        method: "POST",
        body: { pass }, //body of request
      }),
      
    }),
 
   
  }),
});
export const {useResetPasswordMutation} = apiRestPassSlice;
