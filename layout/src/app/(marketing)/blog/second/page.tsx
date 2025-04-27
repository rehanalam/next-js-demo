import { Metadata } from "next"

export const metadata:Metadata = {
    title: {
        absolute: 'Second Blog'
    }
}


export default function Second() {
    return <h1>Second Blog</h1>
}