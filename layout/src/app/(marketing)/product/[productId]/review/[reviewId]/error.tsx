'use client'
import { useRouter } from "next/navigation";
import { startTransition } from "react" 

export default function reviewError({error, reset}: {error: Error, reset: () => void} ) {
    const router = useRouter();

    // method for server side recovery
    const retryHandle = () => {
        startTransition(() => {
            router.refresh();
            // reset client side router
            reset();
        })
    }

    return <div>
        <p>Errorboundary: {error.message}</p>
        <button onClick={retryHandle}>Try Again</button>
    </div>
}