import Breadcrumbs from "@/ui/Include/BreadCrumb";

export const metadata = {
  title: 'Danh Sách Thể Loại',
}
const paths=[
  {
    name:'Danh Sách Thể Loại',
    slug:'#'
  }
]
export default async function Page() {
    return ( 
      <section className="py-5 lg:py-10">
        <Breadcrumbs paths={paths} />
        <div>Category list</div>
      </section>
     );
}

