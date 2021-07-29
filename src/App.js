import HomeClass from "./components/HomeClass";
import HomeFunc from "./components/HomeFunc";

export default function App() {
  return (
    <div style={{padding:'20px'}}>
      <div>Class Component:
        <HomeClass />
      </div>
      <div>Functional Component:
        <HomeFunc />
      </div>
    </div>
  );
}