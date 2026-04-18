import './App.css'
import LandingPage from './templates/LandingPage/LandingPage'
import { landingPageExampleData } from './templates/LandingPage/landingPageData'

function App() {
  return <LandingPage blocks={landingPageExampleData} />
}

export default App
