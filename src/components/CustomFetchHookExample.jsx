import useCustomFetch from '../hooks/UseCustomFetch'

function CustomFetchHookExample() {
  const {data, loading, error} = useCustomFetch('https://jsonplaceholder.typicode.com/posts', {})
  if (error) {
    return (
      <p>{error}</p>
    )
  }
  return (
    <div>
      {loading ? <h3>Loading...</h3> : data.map((item, id)=>(
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default CustomFetchHookExample;