import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen bg-navy text-white">
            {/* Navbar Skeleton */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between border-b border-white/10">
                <Skeleton className="h-14 w-40 bg-white/10" />
                <div className="hidden lg:flex gap-4">
                    <Skeleton className="h-4 w-24 bg-white/10" />
                    <Skeleton className="h-4 w-24 bg-white/10" />
                    <Skeleton className="h-4 w-24 bg-white/10" />
                    <Skeleton className="h-4 w-24 bg-white/10" />
                </div>
            </div>

            {/* Hero Content Skeleton */}
            <div className="container mx-auto px-4 pt-24 pb-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-8">
                    <Skeleton className="h-16 w-3/4 bg-white/10" />
                    <Skeleton className="h-16 w-1/2 bg-white/10" />
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-full bg-white/10" />
                        <Skeleton className="h-4 w-5/6 bg-white/10" />
                        <Skeleton className="h-4 w-4/6 bg-white/10" />
                    </div>
                    <div className="flex gap-4">
                        <Skeleton className="h-12 w-40 bg-gold/20" />
                        <Skeleton className="h-12 w-40 bg-white/10" />
                    </div>
                </div>

                {/* Form Skeleton */}
                <div className="w-full h-[500px] rounded-xl bg-white/5 border border-white/10 p-8 space-y-6">
                    <Skeleton className="h-8 w-1/2 mx-auto bg-white/10" />
                    <div className="grid grid-cols-2 gap-4">
                        <Skeleton className="h-10 w-full bg-white/10" />
                        <Skeleton className="h-10 w-full bg-white/10" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Skeleton className="h-10 w-full bg-white/10" />
                        <Skeleton className="h-10 w-full bg-white/10" />
                    </div>
                    <Skeleton className="h-10 w-full bg-white/10" />
                    <Skeleton className="h-32 w-full bg-white/10" />
                    <Skeleton className="h-12 w-full bg-gold/20" />
                </div>
            </div>
        </div>
    )
}
