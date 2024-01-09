import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <section className="flex flex-col items-center gap-y-7">
      <h1 className="text-gray-950 font-bold text-3xl">
        Hello <span className="text-blue-600">Younes</span>
      </h1>
      <Button variant="destructive" className="text-lg">
        Logout
      </Button>
    </section>
  );
}
