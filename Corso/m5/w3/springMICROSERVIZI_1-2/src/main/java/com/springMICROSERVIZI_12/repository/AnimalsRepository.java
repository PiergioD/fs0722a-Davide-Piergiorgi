package com.springMICROSERVIZI_12.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springMICROSERVIZI_12.model.Animal;

@Repository
public interface AnimalsRepository extends JpaRepository<Animal, Long> {

}
