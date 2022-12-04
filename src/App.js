import UseRefExample1 from "./components/UseRefExample";
import GetPreviousStateWithRef from "./components/GetPreviousState";
import MemoryLeakWithRef from "./components/MemoryLeakWithRef";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import CustomFetchHookExample from "./components/CustomFetchHookExample";
import CustomLocalStorageHookExample from "./components/CustomLocalStorageHookExample";

function App() {
  return (
    <div className="container m5">
      {/* <UseRefExample1 /> */}
      {/* <GetPreviousStateWithRef /> */}
      {/* <MemoryLeakWithRef /> */}
      {/* <UseMemoExample /> */}
      {/* <UseCallbackExample /> */}
      {/* <CustomFetchHookExample /> */}
      <CustomLocalStorageHookExample />
     </div>
  );
}

export default App;
