import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="bg-gray-300 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-bold text-2xl">Travel Blog App</h1>
                <div className="space-x-8 text-lg font-semibold">
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/blogs" className="text-gray-600 hover:text-gray-900">
                        Blogs
                    </Link>
                    <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                        Profile
                    </Link>
                    <Link href="/signin" className="text-gray-600 hover:text-gray-900">
                        Sign In
                    </Link>
                    <Link href="/signup" className="text-gray-600 hover:text-gray-900">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}