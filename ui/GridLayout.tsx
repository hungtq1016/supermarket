import useProducts from "@/hook/useProducts";
import ProductVertical from "@/ui/ProductVertical";
import {IGrid} from '@/lib/interface'
import ProductHorizontal from "@/ui/ProductHorizontal";
import LoadingGrid from "@/ui/LoadingUI/LoadingGrid";

function GridLayout(props:IGrid) {
    const products = props.data;
    return ( 
        <section>
                {products?
                    <div className={props.isGrid ? 'grid grid-cols-3 gap-x-2':''}>
                        {
                            products.map( (product:any) => {
                                return(
                                    props.isGrid ?
                                    <ProductVertical key={product.id} product={product}/>
                                    :
                                    <ProductHorizontal key={product.id} product={product}/>
                                )
                            })
                        }
                    </div>
                    :
                    <LoadingGrid/>
                }
        </section>
     );
}

export default GridLayout;