import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { TProduct } from "./type"

export interface Product {
    name:string,
    image:string,
    price:number,
    slug:string
    desc?:string,
    discount?:number,
    rating:number,
    totalRating:number
}
export interface ProductListProps {
    products: TProduct[];
  }

export interface Category {
    name:string,
    icon:IconProp,
    isShow?:boolean,
    slug:string
}

export interface Term{
    title:string,
    desc:string,
    icon:IconProp
}

export interface IGrid{
    isGrid:boolean,
    data:Array<TProduct>
}


export interface SectionProps{
    title:string,
    about:string,
    show:number,
    isSlider:boolean,
    rows?:number,
    btnTop?:boolean,
    btnBottom?:boolean,
    timer?:boolean,
    countTime?:number
}

export interface Nav{
    title:string,
    slug:string,
    icon?:IconProp
    subNav?:Array<Nav>
}

export interface User {
    id:String,
    name: String,
    slug: String,
    email: String,
    password:String,
    phone:String,
    address:String,
    role: Role
}

export interface Role{
    id:String,
    name:String
}

export interface Form {
    email:string,
    name:string,
    password:string,
    address:string
}

export interface IImage {
    id:string,
    url:string,
    alt:string
}