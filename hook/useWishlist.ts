import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const useWishlist  = ()=>{
    const { data, error, isLoading } =   useSWR(`/api/wishlistByEmail`, fetcher)

    return {
        data, error, isLoading
    }
}

export default useWishlist;
