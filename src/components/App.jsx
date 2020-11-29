import React from 'react'
import About from '../screens/aboutAnime.jsx'
import HomeScreen from '../screens/homeScreen'
import SearchResults from '../screens/searchResults'
// Router 
import { BrowserRouter as Router, Route } from 'react-router-dom'
//router ends
function App() {
  return (
    <Router>
      <Route path={
        {
          pathname: '/:text?',

        }
      } exact component={HomeScreen} />
      <Route path='/about/:id' component={About} />
      <Route path='/search/:query' component={SearchResults} />
    </Router>

  )
}
export default App