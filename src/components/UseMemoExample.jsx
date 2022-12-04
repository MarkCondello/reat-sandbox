import {useMemo, useState, useRef, useEffect}from 'react'

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  const renders = useRef(1)

  useEffect(()=>{
    renders.current = renders.current + 1
  },)

  const getSquare = (n) => {
    for(let i = 0; i <= 10000; i++){
      console.log(i)
    }
    console.log('expensive function called')
    return Math.sqrt(n)
  }
  // const sqrRoot = getSquare(number)
  const sqrRoot = useMemo(()=>getSquare(number), [number])
  const onClick= ()=>{
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1;
    })
  }
  return (
  <div>
    <input
      type="number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      className="form-control w-25"
    />
    <h2 className="my3">The square root of {number} is {sqrRoot}</h2>
    <button className="btn btn-primary" onClick={onClick}>Re-render</button>
    <h1>Renders: {renders.current}</h1>
  </div>);
}

export default UseMemoExample;


// Reach for UseMemo when there are performance issues and we need to return a value.
// Speeds up a return value when an expensive function is called ie: searching throusands of records, large computations etc

// In this example we momoize the getSqrRoot function so that when other changes to the component occur (eg re-render button clicks), that computation does not need to be made again.
// It will only run the expensive function when its value is changed.