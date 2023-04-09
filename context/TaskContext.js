"use client"
import {createContext, useContext} from 'react' ;
import {useLocalStore} from '../hooks/useLocalstorage'
import {v4 as uuid} from 'uuid' ;

export const TaskContext = createContext() ;

export const useTasks = () =>{
    const context = useContext(TaskContext) ;
    if (!context) throw new Error ('useTask deberia de estar dentro de un provider') ;
    return context ;
}

export const TaskProvider = ({children}) => {
    const [tasks,setTasks] = useLocalStore('tasks',[]) ;     // hook personalizado ESMG

    const createTask = (title, description) => {
        setTasks([...tasks ,{title, description,id:uuid()}]);
    }

    const deleteTask = (id) => {
       setTasks([...tasks.filter((task) => task.id !== id)])
    }

    const updateTask = (id, updatedTask) => {
        setTasks([...tasks.map((task) => task.id === id ? {...task, ...updatedTask}: task)]) ;
    }


    return <TaskContext.Provider value={{
        tasks, 
        createTask:createTask,
        deleteTask:deleteTask,
        updateTask:updateTask}}>
        {children}
    </TaskContext.Provider>
}