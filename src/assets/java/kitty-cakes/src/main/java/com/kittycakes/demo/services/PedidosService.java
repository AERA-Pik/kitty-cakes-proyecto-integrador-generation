package com.kittycakes.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kittycakes.demo.models.PedidosModel;
import com.kittycakes.demo.repositories.PedidosRepository;

@Service
public class PedidosService {
	
	private final PedidosRepository pedidosRepository;
	
	public PedidosService(@Autowired PedidosRepository pedidosRepository) {
		this.pedidosRepository = pedidosRepository;
	}
	
	//mostrar datos
	public ArrayList<PedidosModel> obtenerDatos() {
		return(ArrayList<PedidosModel>)pedidosRepository.findAll();
	}
	
	
	//guardar pedido
	public PedidosModel guardarDatos(PedidosModel pedidosModel) {
		return pedidosRepository.save(pedidosModel);
	}
	
	//eliminar pedido
	public boolean eliminarDato(Integer id) {
		try {
			pedidosRepository.deleteById(id);
			return true;
		} catch(Exception error) {
			return false;
		}
	}
	
}