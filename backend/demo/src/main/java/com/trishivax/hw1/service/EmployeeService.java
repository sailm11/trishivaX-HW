package com.trishivax.hw1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trishivax.hw1.model.Employee;
import com.trishivax.hw1.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee submitEmployee(Employee emp) {
        // ID is auto-generated, no need to check if it exists
        return employeeRepository.save(emp);
    }

    public Employee getEmployee(Integer id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> {
            return new RuntimeException("Couldn't find employee with id : " + id);
        });

        return employee;
    }
}
