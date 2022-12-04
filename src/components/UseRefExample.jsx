import {useRef} from 'react'
function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(paraRef)
    inputRef.current.value = 'GGF'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'Buy!'
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={inputRef} type="text" name="name" id="name" className='form-control mb-2'/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <p onClick={()=> inputRef.current.focus()} ref={paraRef}>Hi</p>
      </form>
    </div>
  );
}

export default UseRefExample1;