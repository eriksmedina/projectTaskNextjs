"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter() ;
  return (
    <header>
        <Link href="/">
            <h3>Inicio</h3>
        </Link>
        
        <div>
            <button onClick={() => router.push("/new")}>Agregar Tarea</button>
        </div>
    </header>
  )
}
