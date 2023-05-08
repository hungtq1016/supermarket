import { PageProps } from "@/lib/type";

function Layout({ children, params }: PageProps) {
    return ( 
        <>
            <div className="max-w-7xl mx-4 md:mx-auto">
                <section className="py-10">
                    {children}
                </section>
            </div>
        </>
     );
}

export default Layout;