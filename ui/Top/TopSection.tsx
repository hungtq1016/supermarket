
import CategoriesList from "../Include/CategoriesList";
import Carousel from "./Carousel";

export default async function TopSection(){
    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto py-10">
                <div className="grid grid-cols-5 gap-x-10">
                    {/* @ts-expect-error Async Server Component */}
                    <CategoriesList/>
                    <Carousel/>
                </div>
            </div>
        </section>
     );
}