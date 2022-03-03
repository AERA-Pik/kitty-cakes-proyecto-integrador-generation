package com.kittycakes.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kittycakes.demo.models.ProductosModel;
import com.kittycakes.demo.repositories.ProductosRepository;

@Service
public class ProductosService {
	
	private final ProductosRepository productosRepository;
	
	public ProductosService(@Autowired ProductosRepository productosRepository) {
		this.productosRepository = productosRepository;
	}
	
	//obtener y mostrar elements
	public ArrayList<ProductosModel> obtenerDatos() {
		return (ArrayList<ProductosModel>) productosRepository.findAll();
	}

}