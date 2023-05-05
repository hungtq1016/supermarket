import AddressBar from "@/ui/AddressBar";
import DisclosureItem from "@/ui/Document/DisclosureItem";
const dataAPI = [
    {
        title: "Product",
        methods:[
            {
                method: "GET",
                url: "/api/products",
                desc:"Trả về danh sách sản phẩm"
            },
            {
                method: "POST",
                url: "/api/product",
                desc:"Thêm sản phẩm mới"
            },
            {
                method: "GET",
                url: "/api/products/{slug}",
                desc:"Trả về sản phẩm theo tên"
            },
            {
                method: "PUT/PATCH",
                url: "/api/products/{slug}",
                desc:"Cập nhật sản phẩm theo tên"
            },
            {
                method: "DELETE",
                url: "/api/products/{slug}",
                desc:"Xóa sản phẩm theo tên"
            }
        ],
        open:true
    },
    {
        title: "User",
        methods:[
            {
                method: "GET",
                url: "/api/users",
                desc:"Trả về danh sách người dùng"
            },
            {
                method: "POST",
                url: "/api/user",
                desc:"Thêm người dùng mới"
            },
            {
                method: "GET",
                url: "/api/users/{slug}",
                desc:"Trả về người dùng theo tên"
            },
            {
                method: "PUT/PATCH",
                url: "/api/users/{slug}",
                desc:"Cập nhật người dùng theo tên"
            },
            {
                method: "DELETE",
                url: "/api/users/{slug}",
                desc:"Xóa người dùng theo tên"
            }
        ],
        open:true
    }
]
export const metadata = {
    title: 'Tài Liệu API',
}
  
const data = dataAPI.map((element,index)=>{
    return(
        <section key={index}>
            <DisclosureItem props={element}/>
        </section>
    )
})

export default async function Page() {
    return ( 
        <>
            <AddressBar/>
            <div className="max-w-7xl mx-4 md:mx-auto">
                <section className="py-20">
                    <div className="text-3xl font-semibold pb-5">Tài liệu API</div>
                    <div className="flex flex-col gap-y-3">
                        {data}
                    </div>
                </section>
            </div>
        </>
     );
}