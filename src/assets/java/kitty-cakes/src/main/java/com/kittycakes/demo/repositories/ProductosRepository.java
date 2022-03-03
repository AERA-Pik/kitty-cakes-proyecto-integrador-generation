package com.kittycakes.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kittycakes.demo.models.ProductosModel;

@Repository
public interface ProductosRepository extends JpaRepository<ProductosModel, Integer>{
}
