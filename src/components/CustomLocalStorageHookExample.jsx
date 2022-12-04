import useCustomLocalStorage from '../hooks/UseCustomLocalStorage'

function CustomLocalStorageHookExample() {
 const [task, setTask] = useCustomLocalStorage('task', '');
 const [tasks, setTasks] = useCustomLocalStorage('tasks', []);

 const handleSubmit = (e) => {
  //  console.log('handleSubmit', task)
   e.preventDefault()
   const taskObj = {
     task,
     completed: false,
     date: new Date().toLocaleDateString()
   }
   setTasks([...tasks, taskObj])
 }
  return (
    <>
      <form
        className="w-25"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            className="form-control"
            type="text"
            defaultValue={task}
            onChange={(e)=> setTask(e.target.value)}
          />
        </div>
        <input type="submit" value="send" />
      </form>
      <hr />
      {tasks.map((task, id) => (
      <p key={id}>{task.task}</p>
      ))}
    </>
  );
}

export default CustomLocalStorageHookExample;