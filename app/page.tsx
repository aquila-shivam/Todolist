
import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-3xl pb-4">Shivam</h1>
      <form action={signInAction}>
        <Button>Log in</Button>
      </form>
    </main>
  );
}
