package com.kittycakes.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kittycakes.demo.models.ProductosModel;
import com.kittycakes.demo.services.ProductosService;

@RestController
public class ProductosController {
	
	private final ProductosService productosService;
	
	public ProductosController(@Autowired ProductosService productosService) {
		this.productosService = productosService;
	}
	
	@GetMapping("/productos")
	public ArrayList<ProductosModel> obtenerDatos() {
		return productosService.obtenerDatos();
	}
}