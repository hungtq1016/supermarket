import { PageProps } from "@/lib/type";
import MemberNavigator from "@/app/member/MemberNavigator";

function Layout({ children, params }: PageProps) {
    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto pt-10 pb-20">
                <div className="grid grid-cols-5 gap-x-10">
                    <div className="col-span-1">
                        <MemberNavigator />
                    </div>
                    <div className="col-span-4">
                        {children}
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Layout;