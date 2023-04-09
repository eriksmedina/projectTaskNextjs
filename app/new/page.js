"use client"
import { useEffect, useState } from "react";
import {useTasks} from "../../context/TaskContext"
import { useRouter } from "next/navigation";

export default function Page({params}) {
    const [task, setTask] = useState({title:"", description:""});
    const {tasks,createTask,updateTask} = useTasks();
    const router = useRouter() ;

    const handlersChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    };

    const handlersSubmit = (e) => {
        e.preventDefault();
        if (params.id){
          console.log(task.id, task)
         updateTask(params.id,task) ;
        }else{
          console.log(task.title);
          createTask(task.title,task.description);
        }

        router.push("/") ;
    }

    useEffect(() => {
      if (params.id){       
        const taskfound = tasks.find(task => task.id === params.id);        
        if (taskfound){
          setTask({title:taskfound.title,description:taskfound.description}) ;
        }
      }
    },[]);

  return (
    <form onSubmit={handlersSubmit}>
        <input type="text" name ="title" placeholder="Escribe una tarea" onChange={handlersChange}  value ={task.title} />
        <textarea name="description" placeholder ="Escribe una Descripción"  onChange={handlersChange} value ={task.description} />
        <button>Guardar</button>
    </form>
  );
}
