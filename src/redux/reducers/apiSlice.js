import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://redux-cms.iran.liara.run/api/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
        }),
        getCourses: builder.query({
            query: () => 'courses',
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `courses/${id}`,
                method: 'DELETE',
            }),
        }),
        getArticles: builder.query({
            query: () => 'articles',
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetCoursesQuery,
    useGetArticlesQuery,
    useDeleteUserMutation,
    useDeleteCourseMutation,
} = apiSlice;
