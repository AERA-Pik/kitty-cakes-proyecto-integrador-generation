package com.kittycakes.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kittycakes.demo.models.UsuariosModel;

@Repository
public interface UsuariosRepository extends JpaRepository<UsuariosModel, Integer> {

}