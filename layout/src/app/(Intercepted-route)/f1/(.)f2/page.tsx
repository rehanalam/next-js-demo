import Link from "next/link";

export default function InterceptedF2() {
    return <div>
        (.) F2 intercepted View 
        <br/>
        <Link href="/f4">F4 page</Link>
        <br/>
        <Link href="/f5">F5 page</Link>
    </div>
} 