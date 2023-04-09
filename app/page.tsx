"use client"
import { useTasks } from "../context/TaskContext"   ;
import { TaskCard } from "../components/TaskCard" ;

export default function Page() {
  const { tasks } = useTasks() ;
  return (
    <div> 
      {tasks.map((task) => (
        <TaskCard task ={task} key ={task.id}/>
      ))}
    </div>


  )
}
