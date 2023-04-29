import { PageProps } from "@/lib/type";
import AddressBar from "@/ui/AddressBar";

function Layout({ children, params }: PageProps) {
    return ( 
        <>
            <AddressBar/>
            <div className="max-w-7xl mx-4 md:mx-auto">
                {children}
            </div>
        </>
     );
}

export default Layout;