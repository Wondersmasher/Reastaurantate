import { useState } from "react";
import Logo from "./components/generalcomponents/Logo";
import Section from "./components/generalcomponents/Section";
import NavBar from "./components/navcomponents/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Section> */}
      <NavBar />
      {/* </Section> */}
    </>
  );
}

export default App;
