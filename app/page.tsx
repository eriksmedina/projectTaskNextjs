"use client"
import { useTasks } from "../context/TaskContext"   ;
import { TaskCard } from "../components/TaskCard" ;

export default function Page() {
  const { tasks } = useTasks() ;
  return (
    <div className="flex justify-center">
      <div className="w-7/12"> 
          {tasks.map((task) => (
            <TaskCard task ={task} key ={task.id}/>
          ))}
      </div>
    </div>
   


  )
}
