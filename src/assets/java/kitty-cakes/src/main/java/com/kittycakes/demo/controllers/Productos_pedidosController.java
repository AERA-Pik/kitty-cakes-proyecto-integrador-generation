package com.kittycakes.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kittycakes.demo.models.Productos_pedidosModel;
import com.kittycakes.demo.services.Productos_pedidosService;

@RestController
public class Productos_pedidosController {
	
	private final Productos_pedidosService productos_pedidosService;
	
	public Productos_pedidosController(@Autowired Productos_pedidosService productos_pedidosService) {
		this.productos_pedidosService = productos_pedidosService;
	}
	
	@GetMapping("/carrito")
	public ArrayList<Productos_pedidosModel> obtenerDatos() {
		return productos_pedidosService.obtenerDatos();
	}

}
