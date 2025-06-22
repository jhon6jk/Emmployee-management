package org.codics.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpServiceImpl implements EmpService {

    @Autowired
    private EmpRepo empRepo;

    @Override
    public String createEmployee(EmpEntity employee) {
        try {
            empRepo.save(employee);
            return "Saved Successfully!";
        } catch (Exception e) {
            return "Error while saving employee: " + e.getMessage();
        }
    }

    @Override
    public List<EmpEntity> getAllEmployees() {
        try {
            return empRepo.findAll();
        } catch (Exception e) {
            System.out.println("Error fetching employees: " + e.getMessage());
            return List.of(); // Return empty list on error
        }
    }

    @Override
    public boolean deleteEmployee(Long id) {
        try {
            if (empRepo.existsById(id)) {
                empRepo.deleteById(id);
                return true;
            } else {
                System.out.println("Employee not found with ID: " + id);
                return false;
            }
        } catch (Exception e) {
            System.out.println("Error deleting employee: " + e.getMessage());
            return false;
        }
    }

    @Override
    public String updateEmployee(Long id, EmpEntity employee) {
        try {
            Optional<EmpEntity> optionalEmp = empRepo.findById(id);
            if (optionalEmp.isPresent()) {
                EmpEntity existingEmp = optionalEmp.get();
                // Update fields except ID
                existingEmp.setName(employee.getName());
                existingEmp.setPhone(employee.getPhone());
                existingEmp.setEmail(employee.getEmail());
                empRepo.save(existingEmp);
                return "Updated Successfully!";
            } else {
                return "Employee not found with ID: " + id;
            }
        } catch (Exception e) {
            return "Error updating employee: " + e.getMessage();
        }
    }

    @Override
    public EmpEntity getEmpe(Long id) {
        try {
            Optional<EmpEntity> optionalEmp = empRepo.findById(id);
            return optionalEmp.orElse(null);
        } catch (Exception e) {
            System.out.println("Error fetching employee: " + e.getMessage());
            return null;
        }
    }
}
