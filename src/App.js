import NavbarBootstrap from "./Components/Navbar.js"
import './App.css';
import Image from "./Components/Banner"
import {CountdownTimer, CountdownFunct} from "./Components/Countdown.js"

function App() {
  return (
    <>
    <NavbarBootstrap></NavbarBootstrap>
    <CountdownTimer></CountdownTimer>
    <CountdownFunct></CountdownFunct>
    <Image></Image>
    </>
  )
}

export default App;