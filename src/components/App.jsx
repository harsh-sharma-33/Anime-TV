import React from 'react'
import About from '../screens/aboutAnime.jsx'
import HomeScreen from '../screens/homeScreen'
// Router 
import { BrowserRouter as Router, Route } from 'react-router-dom'
//router ends
function App() {
  return (
    <Router>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/about/:id' component={About} />
    </Router>

  )
}
export default App