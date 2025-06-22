package org.codics.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpRepo extends JpaRepository<EmpEntity,Long>{

    // JpaRepository provides methods like save, findAll, deleteById, etc.
    // We get all the CRUD operations for free from Jpa Repository
    // No need to define any methods here unless we want custom queries
    
}
