package com.kittycakes.demo.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity  //lo toma como tabla de base de datos
@Table(name = "usuarios")
public class UsuariosModel {

	//tabla usuarios
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario", nullable = false)
	private Integer usuario;
	
	@Column(name = "nombre", nullable = false, length = 255)
	private String nombre;

	@Column(name = "apellidos", nullable = false, length = 255)
	private String apellidos;
	
	@Column(name = "telefono", nullable = false, length = 25)
	private String telefono;
	
	@Column(name = "email", nullable = false, length = 255)
	private String email;
	
	@Column(name = "contrasenia", nullable = false, length = 255)
	private String contrasenia;	

	@OneToMany(mappedBy = "usuario")
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<PedidosModel> pedidos;	
	
	
	//Constructor
	public UsuariosModel() {
		
	}
	
	//Getters y Setters
	public Integer getId_usuario() {
		return usuario;
	}

	public void setId_usuario(Integer id_usuario) {
		this.usuario = id_usuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}
		
	public List<PedidosModel> getPedidos() {
		return pedidos;
	}

	public void setPedidos(List<PedidosModel> pedidos) {
		this.pedidos = pedidos;
	}	
	
	
}