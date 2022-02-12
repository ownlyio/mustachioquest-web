import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Updates from './components/Updates/Updates'
import Team from './components/Team/Team'
import FAQ from './components/FAQ/FAQ'

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar /> 
            <Banner />
            <Features />
            <Updates />

            <Team />
            <FAQ />
        </Router>
    );
}
