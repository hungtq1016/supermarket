import { PageProps } from "@/lib/type";
import AddressBar from "@/ui/AddressBar";

function Layout({ children, params }: PageProps) {
    return ( 
        <>
            <AddressBar/>
            <div>Gioi thieu</div>
            {children}
        </>
     );
}

export default Layout;