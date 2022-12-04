import {useState, useRef, useEffect}from 'react'
function ToDo() {
  const [loading, setLoading] = useState(true)
  const [todo, setToDo] = useState({})

  const isMounted = useRef(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => {
      console.log(isMounted)
      // if(isMounted.current) { // not getting set to true and the memory leak issue is non-existent
        setTimeout(()=>{
          setToDo(data)
          setLoading(false)
        }, 3000)
      // }
    })
    return () => {
      setLoading(true)
      isMounted.current = false
      console.log('component unmounted')
    }
  }, [isMounted])

  return (loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>);
}

export default ToDo;

// When we want something to occur during a component unmount,
// we need to add a function return in the useEffect.