'use client'
import { useAppSelector } from "@/app/store";
import { totalItemsSelector } from "@/app/store/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CartIcon() {
    const items = useAppSelector(totalItemsSelector)
    return(
        <Link href={'/cart'} className="relative">
            <FontAwesomeIcon icon={'shopping-cart'} className="w-7 h-7 text-gray-900" />
            {items > 0 && <div className="absolute top-0 right-0 z-10 bg-red-600 text-xs -translate-y-1/2 translate-x-1/2 w-5 h-5 text-white flex items-center justify-center rounded-full">{items}</div>}
        </Link>
    )
};
