package org.codics.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
public class EmpController {

    @Autowired
    private EmpService employeeService;

    // Get all employees
    @GetMapping("employee")
    public List<EmpEntity> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // Get employee by ID
    @GetMapping("employee/{id}")
    public EmpEntity getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmpe(id);
    }

    // Create a new employee
    @PostMapping("employee")
    public String createEmployee(@RequestBody EmpEntity employee) {
        employeeService.createEmployee(employee);
        return "Saved Successfully!";
    }

    // Delete employee
    @DeleteMapping("employee/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        if (employeeService.deleteEmployee(id))
            return "Deleted";
        return "Not found";
    }

    // Update employee
    @PutMapping("employee/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody EmpEntity employee) {
        return employeeService.updateEmployee(id, employee);
    }
}