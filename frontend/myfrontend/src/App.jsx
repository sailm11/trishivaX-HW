import { useState } from 'react'
import './App.css'
import EmployeeForm from './components/EmployeeForm'
import EmployeeSearch from './components/EmployeeSearch'

function App() {
  const [activeTab, setActiveTab] = useState('create')
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleEmployeeCreated = () => {
    setRefreshTrigger(prev => prev + 1)
    setActiveTab('search')
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Employee Management System</h1>
      </header>
      
      <div className="tab-container">
        <button 
          className={`tab-button ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => setActiveTab('create')}
        >
          Create Employee
        </button>
        <button 
          className={`tab-button ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => setActiveTab('search')}
        >
          Search Employee
        </button>
      </div>

      <div className="content">
        {activeTab === 'create' && (
          <EmployeeForm onSuccess={handleEmployeeCreated} />
        )}
        {activeTab === 'search' && (
          <EmployeeSearch key={refreshTrigger} />
        )}
      </div>
    </div>
  )
}

export default App
