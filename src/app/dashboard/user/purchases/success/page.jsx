"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function CheckoutSuccessPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [status, setStatus] = useState("verifying");
    const hasVerified = useRef(false);

    useEffect(() => {
        if (!sessionId || hasVerified.current) return;
        hasVerified.current = true;

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/verify/${sessionId}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast.success("Purchase successful!");
                    router.push("/dashboard/user/purchases");
                } else {
                    toast.error(data.message || "Payment verification failed");
                    setStatus("error");
                }
            })
            .catch(() => {
                toast.error("Could not verify payment");
                setStatus("error");
            });
    }, [sessionId, router]);

    return (
        <div className="flex flex-col items-center justify-center py-32">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="mt-4">
                {status === "verifying" && "Confirming your payment..."}
                {status === "error" && "Something went wrong verifying your payment."}
            </p>
        </div>
    );
}