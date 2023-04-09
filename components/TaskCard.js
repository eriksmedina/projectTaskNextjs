import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { toast } from 'react-hot-toast' ;

export const TaskCard = ({ task }) => {
    const router = useRouter();
    const {deleteTask} = useTasks();

  return (
    <div className="bg-gray-700 hover:bg-slate-600 cursor-pointer px-20 py-2 m-2"
        onClick={() => router.push(`/edit/${task.id}`) }
    >
    <div className="flex justify-between">   
        <h4> - {task.title}</h4>
        <button 
          onClick={(e) =>{ 
            e.stopPropagation();
            const accept = window.confirm("Esta seguro de Eliminar ?") ;
             if(accept) {
                deleteTask(task.id);
                toast.success("Tarea eliminada !!")
             } 
          }}
        className=" bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"> Eliminar </button>
    </div>
        <p className="text-gray-300">{task.description}</p>
        <span className="text-gray-400 text-xs"> {task.id}</span>
    
    </div>
  )
}
