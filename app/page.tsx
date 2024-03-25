import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="text-2xl font-bold">Hello Auth</div>
      <Button size="lg" variant="destructive">
        Click!
      </Button>
    </div>
  );
}
