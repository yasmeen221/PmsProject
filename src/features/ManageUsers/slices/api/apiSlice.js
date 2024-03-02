import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://innovapms.onrender.com/api/v1/user",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    editUser: builder.mutation({
      query: (user) => ({
        url: `/users/edit/${user.id}`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const {useGetUsersQuery, useAddUserMutation ,useEditUserMutation , useDeleteUserMutation}=apiSlice