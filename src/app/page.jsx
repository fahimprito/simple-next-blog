import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
  // console.log("log here");
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold mt-5">Welcome to the Home Page!</h1>

      <div className="grid grid-cols-4 gap-10 mt-10">
        {posts.map((post) => (
          <div key={post.id} className="w-56 h-56 border-2 rounded-lg p-5 flex flex-col justify-between">
            <h2>Title: {post.title}</h2>
            <Link href={`/blogs/${post.id}`}>
              <Button>show details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}