
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useVariant = (slug:string) =>{
    const {data,error,isLoading,mutate} = useSWR(`/api/variants/${slug}`,fetcher)
    return {
        data,error,isLoading,mutate
    }
}

export default useVariant