import './App.css'

import Navbar from './components/Navbar'
import Slides from './components/Slides'

// This is the list used in the application. You can move them to any component needed.

const App = () => (
  <div className="main-container">
    <Navbar />
    <Slides />
  </div>
)

export default App
