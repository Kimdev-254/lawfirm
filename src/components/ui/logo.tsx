export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
          <span className="text-lg font-bold text-orange-500">KW</span>
        </div>
      </div>
    </div>
  )
}
