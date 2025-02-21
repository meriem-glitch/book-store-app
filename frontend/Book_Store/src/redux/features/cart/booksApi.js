import {createApi} from '@reduxjs/toolkit/query/react';
const baseQuery=fetchBaseQuery({
    baseUrl:'${getBaseUrl()/api/books}',
    Credentials:'include',
    prepareHeaders:(headers)=>{
        const token=localStorage.getItem('token');
        if(token){
            headers.set('authorization',`Bearer ${token}`);
        }
        return headers;
    }
});
const booksApi = createApi({    
reducerPath: 'booksApi',
baseQuery,
tagTypes:['Book'],
endpoints: (builder) => ({
   fetchAllBooks: builder.query(
    {
        query:() => '/',
        providedTags:['Book']
    }
   ) 
})
})

export const {useFetchAllBooksQuery} = booksApi;