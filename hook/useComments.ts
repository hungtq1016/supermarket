import fetcher from '@/lib/fetcher'
import useSWR from 'swr'
const URL = process.env.URL_API

const useComments  = (query:string)=>{
    const { data, error, isLoading } =   useSWR(`/api/products/comments/${query}`, fetcher)

    return {
        data, error, isLoading
    }
}

export default useComments;
