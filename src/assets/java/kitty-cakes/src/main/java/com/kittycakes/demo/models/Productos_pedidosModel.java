package com.kittycakes.demo.models;

import javax.persistence.Column;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "productos_pedidos")
public class Productos_pedidosModel {
	
	@EmbeddedId
	Productos_pedidosKey id;
	
	@ManyToOne
    @MapsId("id_producto")
    @JoinColumn(name = "id_producto")
    private ProductosModel producto;
	
	@ManyToOne
    @MapsId("id_pedido")
    @JoinColumn(name = "id_pedido")
	@JsonProperty(access = Access.WRITE_ONLY)
    private PedidosModel pedido;
	
	@Column
	private Integer cantidad;
	
	@Column
	private Double subtotal;
	
	//Constructor	
	public Productos_pedidosModel() {
		
	}

	public Productos_pedidosKey getId() {
		return id;
	}

	public void setId(Productos_pedidosKey id) {
		this.id = id;
	}

	public ProductosModel getProducto() {
		return producto;
	}

	public void setProducto(ProductosModel producto) {
		this.producto = producto;
	}

	public PedidosModel getPedido() {
		return pedido;
	}

	public void setPedido(PedidosModel pedido) {
		this.pedido = pedido;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

	public Double getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(Double subtotal) {
		this.subtotal = subtotal;
	}
	
	
	

}
