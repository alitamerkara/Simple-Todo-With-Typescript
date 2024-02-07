import { FC,ChangeEvent, useState } from 'react';
import './App.css';
type todoType={
taskId: number,
taskName: string
}

const App:FC=()=> {
  const [value,setValue]= useState<string>("")
  const [number,setNumber]= useState<number>(0)
  const [todo, setTodo]= useState<todoType[]>([])
  const handleChange= (event:ChangeEvent<HTMLInputElement>)=>{
  if(event.target.name==="task"){
    setValue(event.target.value)
  }else{
    setNumber(Number(event.target.value))
  }
  }
  const addTodo= ()=>{
    if(value===null || value==="" || number===null){
      alert("lütfen geçerli todo girin.")
    }else{
      const todos= {taskId:number,taskName:value}
      setTodo([...todo,todos]);
      setNumber(0);
      setValue("");
    }
    
  }
  const deleteTask = (name:string):void=>{
  setTodo(
    todo.filter((item)=>{
      return item.taskName!==name
    })
  )
  }

  return (
    <div className="App">
    <div className="inputs">
    <input type="text" name="task" placeholder='taskınızı girin' value={value} onChange={handleChange}/>
     <input type="number" name="number" placeholder='kaç gün kaldığını girin' value={number} onChange={handleChange}/>
     <button className='button' onClick={addTodo}>Kaydet</button>
     </div>
     <div className="container">
      {todo.map((item, index)=>{
        return(
          <div className="card" key={index}>
          <h4>Kalan Gün</h4>
          <p>{item.taskId}</p>
          <h4>Task</h4>
          <p>{item.taskName}</p>
          <button className='delete' onClick={()=>{deleteTask(item.taskName)}}>Sil</button>
          </div>
        )
      })}
     </div>
    </div>
  );
}

export default App;
