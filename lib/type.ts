export type PageProps = {
    params?: any;
    children?: React.ReactNode;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string
}

export type Image = {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export type TImage = {
  id: string,
  url: string,
  alt: string,
  variantId?: string
}

export type TVariant = {
  id?:string
  price: number,
  discount: number,
  count: number
}

export type TProduct = {
  id: string,
  name: string,
  slug: string,
  detail: string,
  image: TImage
  variants: Array<TVariant>
}