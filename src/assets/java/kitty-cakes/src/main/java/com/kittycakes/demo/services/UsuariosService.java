package com.kittycakes.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kittycakes.demo.models.UsuariosModel;
import com.kittycakes.demo.repositories.UsuariosRepository;

@Service
public class UsuariosService {

	private final UsuariosRepository usuariosRepository;
	
	public UsuariosService(@Autowired UsuariosRepository usuariosRepository) {
		this.usuariosRepository = usuariosRepository;
	}
	
	//Mostrar datos
	public ArrayList<UsuariosModel> obtenerDatos() {
		return (ArrayList<UsuariosModel>)usuariosRepository.findAll();
	}
	
	//crear usuario
	public UsuariosModel guardarDatos(UsuariosModel usuariosModel) {
		return usuariosRepository.save(usuariosModel);
	}
	
	//eliminar usuario
	public boolean eliminarDato(Integer id) {
		try {
			usuariosRepository.deleteById(id);
			return true;
		}catch(Exception error) {
			return false;
		}
	}
	
}
