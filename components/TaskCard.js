import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";

export const TaskCard = ({ task }) => {
    const router = useRouter();
    const {deleteTask} = useTasks();

  return (
    <div style={{ background:"#ccc" , color:"blue"}}
        onClick={() => router.push(`/edit/${task.id}`) }
    >
        <h4> - {task.title}</h4>
        <button 
          onClick={(e) =>{ 
            e.stopPropagation();
            const accept = window.confirm("Esta seguro de Eliminar ?") ;
             if(accept) {
                deleteTask(task.id);
             } 

          }}
        > Eliminar </button>
        <p>{task.description}</p>
    </div>
  )
}
