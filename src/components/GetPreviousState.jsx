import { useState, useEffect, useRef } from 'react'
function GetPreviousStateWithRef() {
  const [name, setName] = useState('')
  const renders = useRef(1) // default val
  const prevName = useRef()

  useEffect(()=>{
    renders.current = renders.current + 1 // this updates with every re-render
    prevName.current = name // gets the previous render value of name
  }, [name])
  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    </div>
  );
}

export default GetPreviousStateWithRef;