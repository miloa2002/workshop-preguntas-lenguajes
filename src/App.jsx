
import Home from "./pages/Home"
import Router from "./router/Router"
import { PreguntasProvider } from "./context/PreguntasProvider"
import LoginButton from "./components/login/login"
import LogoutButton from "./components/login/logout"




function App() {

  return (

    <>

      <LoginButton />



      <PreguntasProvider>
        <Router>
          <Home />
        </Router>
      </PreguntasProvider>


    </>

  )
}

export default App
