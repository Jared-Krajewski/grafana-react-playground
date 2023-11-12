import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-5">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl text-green-500">Vite + React</h1>
      <div className="flex">
      <iframe
        src="http://localhost:3000/d-solo/e96536e0-39e6-4793-bba6-65c4ef4f816a/test-panel?orgId=1&from=1699748145270&to=1699769745270&panelId=1"
        width="500"
        height="500"
        />
           <iframe
        src="http://localhost:3000/d-solo/e96536e0-39e6-4793-bba6-65c4ef4f816a/test-panel?orgId=1&from=1699748145270&to=1699769745270&panelId=1"
        width="500"
        height="500"
        />
        </div>
    </div>
  );
}

export default App;
