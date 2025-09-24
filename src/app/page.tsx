import Header from "./_components/header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { SearchIcon } from "lucide-react";
=======
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MenuIcon, SearchIcon } from "lucide-react";

import Header from "./_components/header";
import { Input } from "@/components/ui/input";
import Image from "next/image";
>>>>>>> 0a2b4189be28de59b22ddf77742f47e5823db27b

export default function Home() {
  return (
    <div>
<<<<<<< HEAD
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
=======
      {/*Cabeçalho*/}
      <Header />
      {/*Texto inicial*/}
      <div className="p-5">
        <p className="text-xl font-bold">Olá, David!</p>
        <p className="text-sm">Quarta-feira, 24 de setembro de 2025</p>
      </div>
      {/*Buscar*/}
      <div className="flex flex-row items-center gap-4 px-5">
        <Input placeholder="Buscar serviços" />
        <Button size={"icon"}>
          <SearchIcon />
        </Button>
      </div>
      {/*Busca rápida*/}
      {/*Banner*/}
      <div className="relative mt-6 h-[150px] w-full p-5">
        <Image
          src="/banner-01.png"
          alt="Banner"
          fill
          className="rounded-xl object-contain"
        />
      </div>
      {/*Agendamentos*/}
      {/*Recomendados*/}
      {/*Populares*/}
>>>>>>> 0a2b4189be28de59b22ddf77742f47e5823db27b
    </div>
  );
}