import { Button } from "@/components/ui/button";


export default function Home() {
  // console.log("log here");

  return (
    <div className="container mx-auto">
      <h1>Welcome to the Home Page!</h1>

      <div>
        <Button>show all blogs</Button>
      </div>
    </div>
  );
}