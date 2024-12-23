import HelloWorld from "./components/HelloWorld.jsx";
import DataFetcher from "./components/DataFetcher.jsx";

/**
 * Component rules:
 * - Must include the HelloWorld component
 * - Must include the DataFetcher component
 * - Must include / import a CSS file
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <>
      <div>
        <HelloWorld/>
        <DataFetcher/>
      </div>
    </>
  )
}

export default App
