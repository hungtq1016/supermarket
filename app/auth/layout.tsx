import { PageProps } from "@/lib/type";
import AddressBar from "@/ui/AddressBar";

function Layout({ children, params }: PageProps) {
    return ( 
        <div className="max-w-md mx-4 md:mx-auto py-20">
            {children}
        </div>
     );
}

export default Layout;