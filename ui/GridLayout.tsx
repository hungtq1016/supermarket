import ProductVertical from "@/ui/ProductVertical";
import { IGrid } from '@/lib/interface'
import LoadingGrid from "@/ui/LoadingUI/LoadingGrid";
import ProductHorizontal from "@/ui/ProductHorizontal";

export default function GridLayout(props: IGrid) {
    const products = props.data;
    return (
        <section>
            {products ?
                <div className={props.isGrid ? 'grid grid-cols-3 gap-x-2' : ''}>
                    {
                        products.map((product: any) => {
                            return (
                                // props.isGrid ?
                                    <ProductVertical key={product.id} product={product} />
                                    // :
                                    // <ProductHorizontal key={product.id} product={product} />
                            )
                        })
                    }
                </div>
                :
                <LoadingGrid />
            }
        </section>
    );
}
