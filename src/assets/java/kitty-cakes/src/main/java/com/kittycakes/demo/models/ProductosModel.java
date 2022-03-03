package com.kittycakes.demo.models;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;


@Entity  //lo toma como tabla de base de datos
@Table(name = "productos")
public class ProductosModel {
	
	@Id
	@Column(name = "id_producto", nullable = false)
	private Integer id_producto;
	
	@Column
	private String nombre_producto;
	
	@Column
	private String descripcion_producto;
	
	@Column
	private Double precio_producto;
	
	@Column
	private String imagen_producto;
	
	@Column
	private Integer cantidad_disponible;
	
	@Column
	private Character tipo_producto;
		
	@OneToMany(mappedBy = "producto")
	@JsonProperty(access = Access.WRITE_ONLY)
	//@JoinTable(name = "productos_pedidos", joinColumns = @JoinColumn(name ="id_producto"), inverseJoinColumns = @JoinColumn(name = "id_pedido"))
	private List<Productos_pedidosModel> pedidos = new ArrayList<>();
//	
//	@ManyToMany(mappedBy = "productos")
//	private List<PedidosModel> pedidos;
	
	//Constructor
	public ProductosModel() {
		
	}
	
	// Getters & Setters
	public Integer getId_producto() {
		return id_producto;
	}

	public void setId_producto(Integer id_producto) {
		this.id_producto = id_producto;
	}

	public String getNombre_producto() {
		return nombre_producto;
	}

	public void setNombre_producto(String nombre_producto) {
		this.nombre_producto = nombre_producto;
	}

	public String getDescripcion_producto() {
		return descripcion_producto;
	}

	public void setDescripcion_producto(String descripcion_producto) {
		this.descripcion_producto = descripcion_producto;
	}

	public Double getPrecio_producto() {
		return precio_producto;
	}

	public void setPrecio_producto(Double precio_producto) {
		this.precio_producto = precio_producto;
	}

	public String getImagen_producto() {
		return imagen_producto;
	}

	public void setImagen_producto(String imagen_producto) {
		this.imagen_producto = imagen_producto;
	}

	public Integer getCantidad_disponible() {
		return cantidad_disponible;
	}

	public void setCantidad_disponible(Integer cantidad_disponible) {
		this.cantidad_disponible = cantidad_disponible;
	}

	public Character getTipo_producto() {
		return tipo_producto;
	}

	public void setTipo_producto(Character tipo_producto) {
		this.tipo_producto = tipo_producto;
	}

	public List<Productos_pedidosModel> getPedidos() {
		return pedidos;
	}

	public void setPedidos(List<Productos_pedidosModel> pedidos) {
		this.pedidos = pedidos;
	} 
	
	
	
	
}
