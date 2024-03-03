import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = import.meta.env.VITE_API_URL;
export const apiRestPassSlice = createApi({
  reducerPath: "apiResetPassword",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),

  endpoints: (builder) => ({
    setPassword: builder.mutation({
      query: (pass) => ({
        url: `/auth/set-password/${pass.passwordSetToken}`, //end point for add //true
        method: "POST",
        body: { password: pass.password,
          confirmPassword: pass.confirmPassword }, //body of request
      }),
      
    }),
 
   
  }),
});
export const {useSetPasswordMutation} = apiRestPassSlice;
