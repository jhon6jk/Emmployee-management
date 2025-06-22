package org.codics.demo;

import java.util.List;

public interface EmpService {

    String createEmployee(EmpEntity employee);
    List<EmpEntity> getAllEmployees();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id, EmpEntity employee);
    EmpEntity getEmpe(Long id); // Get employee by ID
}
