package com.kittycakes.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kittycakes.demo.models.PedidosModel;


@Repository
public interface PedidosRepository extends JpaRepository<PedidosModel, Integer> {

}
