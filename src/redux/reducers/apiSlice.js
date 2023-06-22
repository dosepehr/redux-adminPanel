import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://redux-cms.iran.liara.run/api/',
    }),
    tagTypes: ['BLOG', 'USER', 'COURSE'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
            providesTags: (result = [], error, arg) => [
                'USER',
                ...result.map(({ id }) => ({ type: 'USER', id })),
            ],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['USER'],
        }),
        getCourses: builder.query({
            query: () => 'courses',
            providesTags: (result = [], error, arg) => [
                'COURSE',
                ...result.map(({ id }) => ({ type: 'COURSE', id })),
            ],
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `courses/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['COURSE'],
        }),
        getBlogs: builder.query({
            query: () => 'articles',
            providesTags: (result = [], error, arg) => [
                'BLOG',
                ...result.map(({ id }) => ({ type: 'BLOG', id })),
            ],
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `articles/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['BLOG'],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetCoursesQuery,
    useGetBlogsQuery,
    useDeleteUserMutation,
    useDeleteCourseMutation,
    useDeleteBlogMutation,
} = apiSlice;
