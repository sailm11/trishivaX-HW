package com.trishivax.hw1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trishivax.hw1.model.Employee;
import com.trishivax.hw1.service.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitEmployee(@RequestBody Employee employee) {
        Employee savedEmployee = employeeService.submitEmployee(employee);
        return ResponseEntity.ok(savedEmployee);
    }

    @GetMapping("/get")
    public ResponseEntity<Employee> getEmployee(@RequestParam(name = "id", required = true) Integer id) {
        return ResponseEntity.ok(employeeService.getEmployee(id));
    }
}
