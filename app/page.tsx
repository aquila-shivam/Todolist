"use client"

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {

  const tasks = useQuery(api.tasks.get)
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-3xl pb-4">Shivam</h1>
      <Button variant="default">Hi</Button>
      {tasks?.map(({ _id, text }) => <div key={_id} className="font-bold">{text}</div>)}
    </main>
  );
}
