import Header from "./_components/header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
    <div>
      <Header />
      <p className="text-xl font-bold">Olá, Dudex</p>
      <p className="Text-sm">Sabádo, 24 de Janeiro de 2025</p>
    </div>

    <div className="mt-4 flex flex-row items-center gap-2">
        <Input placeholder="Faça sua busca..." />
        <Button size={"icon"}>
          <SearchIcon />
        </Button>
    </div>
    </div>
  );
}