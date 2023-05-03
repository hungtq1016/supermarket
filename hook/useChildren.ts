
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useChildren = (parentId:string) =>{
    const {data,error,isLoading,mutate} = useSWR(parentId ?`/api/products/children/${parentId}`:null,fetcher)
    return {
        data,error,isLoading,mutate
    }
}

export default useChildren