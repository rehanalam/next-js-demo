"use client";

import { usePathname } from "next/navigation"


export default function NotFound() {
    const pathName = usePathname();
    const reviewId = pathName.split('/')[4];
    const productId = pathName.split('/')[2];

    return <>
        <h1>Product {productId} Review {reviewId}  Not Found</h1>
        <button>Please Try Again</button>
    </>
}