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

