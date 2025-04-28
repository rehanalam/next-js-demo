import { notFound } from "next/navigation"

const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
}


export default async function review({params}: {params: Promise<{productId: string, reviewId: string}>}) {
    const {productId, reviewId} = await params

    const random = getRandomInt(2);

    if(random === 1) {
        throw new Error('Error loading');
    }

    if(parseInt(reviewId) > 100) {
        notFound();
    }

    return <h1>Review {reviewId} for Product Page {productId} </h1>
}
