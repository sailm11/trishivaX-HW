import { useState } from 'react'
import '../styles/EmployeeForm.css'

function EmployeeForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    empName: '',
    email: '',
    phone: '',
    department: '',
    salary: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [createdEmployeeId, setCreatedEmployeeId] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await fetch('http://localhost:8081/employee/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const savedEmployee = await response.json()
        setCreatedEmployeeId(savedEmployee.employeeId)
        setMessage({ type: 'success', text: `Employee created successfully! ID: ${savedEmployee.employeeId}` })
        setFormData({
          empName: '',
          email: '',
          phone: '',
          department: '',
          salary: ''
        })
        setTimeout(() => {
          onSuccess()
        }, 1500)
      } else {
        setMessage({ type: 'error', text: 'Failed to create employee' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: `Error: ${error.message}` })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-container">
      <h2>Create New Employee</h2>
      
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="empName">Full Name *</label>
          <input
            type="text"
            id="empName"
            name="empName"
            value={formData.empName}
            onChange={handleChange}
            required
            placeholder="Enter employee name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department *</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            placeholder="Enter department"
          />
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary *</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            placeholder="Enter salary"
          />
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Creating...' : 'Create Employee'}
        </button>
      </form>
    </div>
  )
}

export default EmployeeForm
