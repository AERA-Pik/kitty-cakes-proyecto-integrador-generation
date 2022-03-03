package com.kittycakes.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kittycakes.demo.models.Productos_pedidosModel;

@Repository
public interface Productos_pedidosRepository extends JpaRepository<Productos_pedidosModel, Integer> {

}
