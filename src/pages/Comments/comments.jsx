import styles from './comments.module.css'
import comentariosImg from '../../assents/comments..svg'
import { useState, useEffect } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import { nanoid } from 'nanoid'


function Comments(){

  const getLocalStorage = ()=>{
    let items = localStorage.getItem('list')
    if(items){
      return JSON.parse(localStorage.getItem('list'))
  }else{
    return[]
  }
  
  }
  const [list,setList]= useState(getLocalStorage)
  const [task,setTask]= useState('')
  

  function handleInput(event){
    setTask(event.target.value)
  }

  function handleCreateTask(){
   

   const newTask = {
    id: nanoid(),
    title: task
   }

  
   setList([...list,newTask])
   setTask ('')
  }

  function handleRemoveTask(id){
    const taskFiltered = list .filter(item => task.id!==id)
    setList(taskFiltered)
  }

  useEffect(() =>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

    return(
      <>
       <div className={styles.header}>
        <h1>
        Deixe um comentário
        </h1>
       <img src= {comentariosImg}/>
       </div>
       <div className= {styles.inputContainer}>
        <input
       className={styles.input}
       type="text"
       placeholder= "Digite sua mensagem aqui"
       onChange = {handleInput}
       value = {task}
    
        />
        <div className={styles.addContainer}>
          <button className={styles.addTask} onClick= {handleCreateTask}>
            <FiPlus size={16} color="#fff"/>
          </button>
        </div>
      </div>
    
      <main>
        <ul className={styles.listItems}>
          {list.map(item => {
            return(
              <li key={item.id}>
                <div>
                  <p>{item.title}</p>
                </div>
                <button className={styles.removeTask} onClick= {()=>handleRemoveTask(item.id)}>
                  <FiTrash2 size={16}/>
                </button>
              </li>
            )
          })}
        </ul>
      </main>
    </>
    
  )
}

export default Comments