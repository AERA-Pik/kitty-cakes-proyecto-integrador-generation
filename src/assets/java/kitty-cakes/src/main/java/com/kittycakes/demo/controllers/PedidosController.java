package com.kittycakes.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kittycakes.demo.models.PedidosModel;
import com.kittycakes.demo.services.PedidosService;

@RestController
public class PedidosController {

	private final PedidosService pedidosService;
	
	public PedidosController(@Autowired PedidosService pedidosService) {
		this.pedidosService = pedidosService;
	}
	
	//mostrar datos
	@GetMapping("/resumen")
	public ArrayList<PedidosModel> obtenerDatos() {
		return pedidosService.obtenerDatos();
	}
	
	
	//guardar pedido
	@PostMapping("/resumen")
	public PedidosModel guardarDatos(@RequestBody PedidosModel pedidosModel) {
		return pedidosService.guardarDatos(pedidosModel);
	}
	
	//eliminar pedido
	@DeleteMapping(path = "/resumen/{id}")
	public boolean eliminarDato(@PathVariable("id") Integer id) {
		return pedidosService.eliminarDato(id);
	}
	
}