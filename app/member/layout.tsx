import { PageProps } from "@/lib/type";
import AddressBar from "@/ui/AddressBar";
import MemberNavbar from "app/member/MemberNav";

function Layout({ children, params }: PageProps) {
    return ( 
        <>
            <AddressBar/>
            <section>
                <div className="max-w-7xl mx-4 md:mx-auto pt-10 pb-20">
                <div className="grid grid-cols-4 gap-x-10">
                    <div className="col-span-1">
                        {/* <MemberNavbar/> */}
                    </div>
                    <div className="col-span-3">
                        {children}
                    </div>
                </div>
                </div>
            </section>
            
        </>
     );
}

export default Layout;