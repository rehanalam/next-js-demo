import Link from "next/link";

export default function Todo() {
    return <div className="h-[200px] border border-gray-400">
        Archived Todo View 
        <br/>
        <Link href='/dashboard'>Default</Link>
    </div>
} 