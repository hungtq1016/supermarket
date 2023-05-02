
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useProduct = (slug:string) =>{
    const {data,error,isLoading,mutate} = useSWR(`/api/products/${slug}`,fetcher)
    return {
        data,error,isLoading,mutate
    }
}

export default useProduct