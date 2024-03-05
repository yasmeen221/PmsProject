import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = import.meta.env.VITE_API_URL
export const usersApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
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
      query: (user,...updateData) => ({
        url: `/user/edit/${user._id}`,
        method: "POST",
        body: updateData
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
