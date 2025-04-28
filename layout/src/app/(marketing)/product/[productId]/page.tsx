import { Metadata } from "next";

interface Props {
    params: Promise<{productId: string}>
}
  

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {productId} = await params;

    return {
        title: `Product ${productId}`
    }
}

export default async function ProductDetails({params}: Props) {
    const productId = (await params).productId;
   
    return <h1>Product Page {productId}</h1>
}
