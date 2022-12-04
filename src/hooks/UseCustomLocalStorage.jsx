import {useState} from 'react'

function getLocalStorageKeyValue (key, initialValue) {
  const itemFromLocalStorage = localStorage.getItem(key)
  console.log({initialValue, itemFromLocalStorage})
  return itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : initialValue
}

function useCustomLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageKeyValue(key, initialValue))

  const setValue = (value) => {
    // console.log('setValue', value)
    //check if value is a function
    const valueToStore = value instanceof Function ? setValue(localStorageValue) : value
    //set value to state
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [localStorageValue, setValue]
}

export default useCustomLocalStorage;
