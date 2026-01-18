import { useState } from 'react'
import '../styles/EmployeeSearch.css'

function EmployeeSearch() {
  const [employeeId, setEmployeeId] = useState('')
  const [employee, setEmployee] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleSearch = async (e) => {
    e.preventDefault()
    
    if (!employeeId.trim()) {
      setMessage({ type: 'error', text: 'Please enter an employee ID' })
      return
    }

    setLoading(true)
    setMessage({ type: '', text: '' })
    setEmployee(null)

    try {
      const response = await fetch(`http://localhost:8081/employee/get?id=${employeeId}`)
      
      if (response.ok) {
        const data = await response.json()
        setEmployee(data)
        setMessage({ type: 'success', text: 'Employee found!' })
      } else if (response.status === 404) {
        setMessage({ type: 'error', text: 'Employee not found' })
      } else {
        setMessage({ type: 'error', text: 'Failed to fetch employee' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: `Error: ${error.message}` })
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setEmployeeId('')
    setEmployee(null)
    setMessage({ type: '', text: '' })
  }

  return (
    <div className="search-container">
      <h2>Search Employee</h2>

      <form onSubmit={handleSearch} className="search-form">
        <div className="search-group">
          <input
            type="number"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter Employee ID"
            className="search-input"
          />
          <button type="submit" disabled={loading} className="search-btn">
            {loading ? 'Searching...' : 'Search'}
          </button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Clear
          </button>
        </div>
      </form>

      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      {employee && (
        <div className="employee-card">
          <h3>Employee Details</h3>
          <div className="employee-details">
            <p><strong>ID:</strong> {employee.employeeId}</p>
            <p><strong>Name:</strong> {employee.empName}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Salary:</strong> ${employee.salary?.toLocaleString() || 'N/A'}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmployeeSearch
