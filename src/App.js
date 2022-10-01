import NavbarBootstrap from "./Components/Navbar.js"
import './App.css';
import Image from "./Components/Banner"
import CountdownTimer from "./Components/Countdown.js";

function App() {
  return (
    <>
    <NavbarBootstrap></NavbarBootstrap>
    <CountdownTimer></CountdownTimer>
    <Image></Image>
    </>
  )
}

export default App;