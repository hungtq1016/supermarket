
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useProducts = () =>{
    const {data,error,isLoading,mutate} = useSWR(`/api/products`,fetcher)
    console.log('call');
    
    return {
        data,error,isLoading,mutate
    }
}

export default useProducts