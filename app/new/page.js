"use client"
import { useEffect } from "react";
import {useTasks} from "../../context/TaskContext"
import { useRouter } from "next/navigation";
import {useForm} from 'react-hook-form' ;
import { toast } from 'react-hot-toast' ;

export default function Page({params}) {
   
    const {tasks,createTask,updateTask} = useTasks();
    const router = useRouter() ;
    const {register, handleSubmit, setValue, formState:{errors}} = useForm() ;

    const onSubmit = handleSubmit((data) => {        
        if (params.id){          
         updateTask(params.id,data) ;
         toast.success("Modificada con exito !");
        }else{         
          createTask(data.title,data.description);
          toast.success("La tarea se registro con exito !");
        }

        router.push("/") ;
    });

    useEffect(() => {
      if (params.id){       
        const taskfound = tasks.find(task => task.id === params.id);        
        if (taskfound){
          setValue('title',taskfound.title);
          setValue('description',taskfound.description);
        }
      }
    },[]);

  return (
    <div className="flex justify-center items-center h-full"> 
      <form onSubmit={onSubmit} className="bg-gray-700 p-10 w-6/12">
        <h2 className="m-3 text-bold "> Nueva Tarea </h2>
        <input type="text" 
        className="bg-gray-200 py-3 px-4 mb-2 block focus:outline-none w-full text-gray-800"
        placeholder="Escribe una tarea" {...register("title",{ required:true })} />
        {errors.title && (
          <span className="error block text-red-400"> Este campo es requerido. </span>
        )}
        <textarea placeholder ="Escribe una Descripción" 
        className="bg-gray-200 py-3 px-4 mb-2 block focus:outline-none w-full text-gray-800"
        {...register("description",{ required:true })} />
        {errors.description && (
          <span className="error block text-red-400"> Este campo es requerido. </span>
        )}
        <button className="bg-green-600 px-4 py-1 text-bold mt-5 items-center rounded-sm disabled:opacity-30">Guardar</button>
      </form>
    </div>
    
  );
}
