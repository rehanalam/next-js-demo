import Link from "next/link";

export default function F1() {
    return <div>
        F1 View
        <br/>
        <Link href={"/f1/f2"}>F2</Link>
        <br/> 
        <Link href="/f3">F3 Page</Link>
    </div>
} 