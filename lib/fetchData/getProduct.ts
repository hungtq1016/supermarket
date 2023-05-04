const URL = process.env.URL_API

export default async function getProduct(slug:string) {
    
    const products = await fetch(`${URL}/api/products/${slug}`)
    if (!products.ok) {
        throw new Error("Kết nối thất bại");
    }    
    return products.json()
};
