import "./styles.css";
import { createContext, useContext, useEffect } from "react";
const colorContext = createContext();
export function App() {
  const test = "red color";
  useEffect(() => {
    setTimeout(() => {
      console.log("eueerer");
    }, 3000);
  }, []);
  return (
    <colorContext.Provider value={test}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Mychild1 />
        <Mychild2 />
      </div>
    </colorContext.Provider>
  );
}

const Mychild1 = () => {
  const childMeValue = useContext(colorContext);
  return <div>{childMeValue} from child1</div>;
};

const Mychild2 = () => {
  return (
    <colorContext.Consumer>
      {(colorname) => {
        return <h4>{colorname}from child2</h4>;
      }}
    </colorContext.Consumer>
  );
};
