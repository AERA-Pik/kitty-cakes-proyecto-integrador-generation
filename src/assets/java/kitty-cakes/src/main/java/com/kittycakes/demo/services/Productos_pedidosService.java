package com.kittycakes.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kittycakes.demo.models.Productos_pedidosModel;
import com.kittycakes.demo.repositories.Productos_pedidosRepository;

@Service
public class Productos_pedidosService {
	
	private final Productos_pedidosRepository productos_pedidosRepository;
	
	public Productos_pedidosService(@Autowired Productos_pedidosRepository productos_pedidosRepository) {
		this.productos_pedidosRepository = productos_pedidosRepository;
	}
	
	//Mostrar datos
	public ArrayList<Productos_pedidosModel> obtenerDatos() {
		return(ArrayList<Productos_pedidosModel>)productos_pedidosRepository.findAll();
	}

}
