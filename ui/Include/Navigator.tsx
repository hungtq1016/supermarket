
import getCategories from "@/lib/fetchData/getCategories";
import Navigations from "./Navigations";

export default async function Navigator() {
    const categoriesData: Promise<any[]> = getCategories()
    const categories = await categoriesData

    return (
        <>
            <Navigations navigations={categories}/>
        </>
    );
}