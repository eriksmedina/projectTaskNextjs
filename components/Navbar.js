"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter() ;
  return (
    <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
        <Link href="/">
            <h3 className="font-bold text-white">Gestor de Tareas</h3>
        </Link>
        
        <div>
            <button onClick={() => router.push("/new")} 
            className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center">Agregar Tarea</button>
        </div>
    </header>
  )
}
