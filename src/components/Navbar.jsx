import { RegisterLink, LoginLink, getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <nav className="bg-gray-300 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-bold text-2xl">Travel Blog App</h1>
                <div className="space-x-8 text-lg font-semibold">
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900">
                        About
                    </Link>
                    <Link href="/blogs" className="text-gray-600 hover:text-gray-900">
                        Blogs
                    </Link>
                    {
                        user && (
                            <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                                Profile
                            </Link>
                        )
                    }

                    {
                        user ? (
                            <LogoutLink>
                                <Button>Logout</Button>
                            </LogoutLink>

                        ) : (
                            <>
                                <LoginLink>
                                    <Button>Sign in</Button>
                                </LoginLink>
                                <RegisterLink>
                                    <Button>Sign up</Button>
                                </RegisterLink>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    );
}