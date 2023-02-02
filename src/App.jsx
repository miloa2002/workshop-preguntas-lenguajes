
import Home from "./pages/Home"
import Router from "./router/Router"
import { PreguntasProvider } from "./context/PreguntasProvider"



function App() {

  return (

    <>
      <PreguntasProvider>
        <Router>
          <Home />
        </Router>
      </PreguntasProvider>


    </>

  )
}

export default App
