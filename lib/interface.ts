import { IconProp } from "@fortawesome/fontawesome-svg-core"

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