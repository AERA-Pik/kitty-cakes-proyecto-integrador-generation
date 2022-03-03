package com.kittycakes.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kittycakes.demo.models.UsuariosModel;
import com.kittycakes.demo.services.UsuariosService;

@RestController
public class UsuariosController {
	
	private final UsuariosService usuariosService;
	
	public UsuariosController(@Autowired UsuariosService usuariosService) {
		this.usuariosService = usuariosService;
	}
	
	//mostrar datos
	@GetMapping("/usuarios")
	public ArrayList<UsuariosModel> obtenerDatos() {
		return usuariosService.obtenerDatos();
	}
	
	//guardar usuario
	@PostMapping("/registro")
	public UsuariosModel guardarDatos(@RequestBody UsuariosModel usuariosModel) {
		return usuariosService.guardarDatos(usuariosModel);
	}
	
	//eliminarUsuario
	@DeleteMapping(path = "/usuarios/{id}")
	public boolean eliminarDato(@PathVariable("id") Integer id) {
		return usuariosService.eliminarDato(id);
	}
	
}
