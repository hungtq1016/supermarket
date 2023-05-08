'use client'
import ProductVertical from "@/ui/Product/ProductVertical";
import { IGrid } from '@/lib/interface'
import ProductHorizontal from "@/ui/Product/ProductHorizontal";

export default function GridLayout(props: IGrid) {
    const products = props.data;
    return (
        <section>
            <div className={props.isGrid ? 'grid grid-cols-3 gap-x-2' : ''}>
                    {
                        products.map((product: any) => {
                            return (
                                props.isGrid ?
                                    <ProductVertical key={product.id} product={product} />
                                    :
                                    <ProductHorizontal key={product.id} product={product} />
                            )
                        })
                    }
                </div>
        </section>
    );
}
