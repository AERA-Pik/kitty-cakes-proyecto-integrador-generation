package com.kittycakes.demo.models;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Productos_pedidosKey implements Serializable {
		
	@Column(name = "id_producto")
	 private Integer producto;
	 
	 @Column(name = "id_pedido")
	 private Integer pedido;

	public Integer getProducto() {
		return producto;
	}

	public void setProducto(Integer producto) {
		this.producto = producto;
	}

	public Integer getPedido() {
		return pedido;
	}

	public void setPedido(Integer pedido) {
		this.pedido = pedido;
	}
	 
	 

}
