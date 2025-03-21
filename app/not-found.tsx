import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-black text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-balance">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-balance">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex justify-center">
          <Link href="/" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

