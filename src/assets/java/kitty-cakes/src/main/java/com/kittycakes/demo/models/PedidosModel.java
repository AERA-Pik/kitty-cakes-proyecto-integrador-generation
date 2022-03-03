package com.kittycakes.demo.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity  //lo toma como tabla de base de datos
@Table(name = "pedidos")
public class PedidosModel {

	//tabla de pedidos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_pedido", nullable = false)
	private Integer id_pedido;
	
	//@Column(name = "id_usuario", nullable = false)
	//private Integer id_usuario;
	
	@Column(name = "fecha_pedido", updatable = false, nullable = false)
	@Temporal(TemporalType.DATE)
	private Date fecha_pedido;
	
	@Column(name = "total_pedido", nullable = false)
	private Double total_pedido;
	
	@ManyToOne
	//@JsonProperty(access = Access.WRITE_ONLY)
	@JoinColumn(name = "id_usuario")
	private UsuariosModel usuario;
	
	@OneToMany(mappedBy = "pedido")
	@JsonProperty(access = Access.WRITE_ONLY)
	private List<Productos_pedidosModel> productos = new ArrayList<>();
		
	//@ManyToMany(cascade = CascadeType.ALL)
	//@JoinTable(name = "productos_pedidos", joinColumns = @JoinColumn(name = "pedidos_id_pedido"), inverseJoinColumns = @JoinColumn(name = "productos_id_producto"))
	//private List<ProductosModel> productos;
	

	//constructor
	public PedidosModel() {
		
	}
	
	//getters y setters
	public Integer getId_pedido() {
		return id_pedido;
	}

	public void setId_pedido(Integer id_pedido) {
		this.id_pedido = id_pedido;
	}

	/* public Integer getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Integer id_usuario) {
		this.id_usuario = id_usuario;
	} */

	public Date getFecha_pedido() {
		return fecha_pedido;
	}

	public void setFecha_pedido(Date fecha_pedido) {
		this.fecha_pedido = fecha_pedido;
	}

	public Double getTotal_pedido() {
		return total_pedido;
	}

	public void setTotal_pedido(Double total_pedido) {
		this.total_pedido = total_pedido;
	}	
	
	public UsuariosModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuariosModel usuario) {
		this.usuario = usuario;
	}

	public List<Productos_pedidosModel> getProductos() {
		return productos;
	}

	public void setProductos(List<Productos_pedidosModel> productos) {
		this.productos = productos;
	}
	
	
	
}
