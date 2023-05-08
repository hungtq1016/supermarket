const URL = process.env.URL_API

export default async function getProduct(slug:string) {
    
    const productData = await fetch(`${URL}/api/products/${slug}`)
    const product = await productData.json();

    if (!productData.ok) {
        throw new Error("Kết nối thất bại");
    }  

    const childData = await fetch(`${URL}/api/products/children/${product.parentId}`);
    const child = await childData.json();
    
    if (!childData.ok) {
        throw new Error("Kết nối thất bại");
    }  
      
    return [product,child]
};
