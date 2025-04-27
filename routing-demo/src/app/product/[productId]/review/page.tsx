import Link from "next/link";

export default function Review() {

    return <ul>
        <li><Link href="review/1">Review 1</Link></li>
        <li><Link href="review/2">Review 2</Link></li>
        <li><Link href="review/3">Review 3</Link></li>
        <li><Link href="review/4">Review 4</Link></li>
    </ul>
}