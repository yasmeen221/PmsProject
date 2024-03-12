import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
const URL = import.meta.env.VITE_API_URL
export const usersApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers, { getState }) => {
      const cookie = new Cookies();
      let token = cookie.get("userToken");
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      // console.log(headers.get("authorization"))
      return headers
    },
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/user",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    editRemoteUser: builder.mutation({
      query: (user) => ({
        url: `/user/edit/${user._id}`,
        method: "POST",
        body: {
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email,
          position: user.position,
          level: user.level,
          role: user.role,
          team: user.team,
        },
        
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/delete/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const {
  // useGetUsersQuery,
  // useAddUserMutation,
  // useEditUserMutation,
  // useDeleteUserMutation,
  useGetUsersQuery,
  useAddUserMutation,
  useEditRemoteUserMutation,
  useDeleteUserMutation
} = usersApiSlice;
