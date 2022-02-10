import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Navbar /> 
            </div>
        </Router>
    );
}
