import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SQLInjection from './pages/SQLInjection'
import './App.css'

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Vulnerable App</h1>
        <nav>
          <Link to="/sqli">SQL Injection</Link>
        </nav>
        <Routes>
          <Route path="/sqli" element={<SQLInjection />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
