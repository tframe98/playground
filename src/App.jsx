import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Login from './pages/Login'
import './App.css'

function App() {
    return (
        <Router>
        <div>
            <NavigationBar/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
        </Router>
    );
}



export default App;
