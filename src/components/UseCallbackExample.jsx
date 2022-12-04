import React, {useState, useCallback} from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTasks = useCallback(() =>{
    setTasks((prevState) => [...prevState, `Some task ${prevState.length}`])
  })

  return (
  <div>
    <Button addTask={addTasks}/>
    {
      tasks.map((task, id) => (
        <p key={id}>{task}</p>
      ))
    }
  </div> );
}

const Button = React.memo(({addTask}) => {
  console.log('button rendered')
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>Add Task</button>
    </div>
  )
})

export default UseCallbackExample;
// Reach for UseMemo when there are performance issues and we need to return a callback function.

// this pattern is only neccesary when there are serious performance issues.