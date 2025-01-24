import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function profile() {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="container mx-auto">
            <div className="h-80 mt-56 flex flex-col items-center">
                <img
                    className="w-40 h-40 rounded-full border-2 border-blue-300 object-cover"
                    src="https://i.ibb.co.com/Hg399JQ/foto-sushi-6anudmp-ILw4-unsplash.jpg"
                    alt="profile image"
                />
                <h2 className="text-7xl text-center">Welcome to your profile! {user?.given_name}</h2>
            </div>
        </div>
    )
}