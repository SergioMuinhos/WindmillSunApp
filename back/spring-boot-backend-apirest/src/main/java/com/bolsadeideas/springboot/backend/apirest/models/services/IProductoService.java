package com.bolsadeideas.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Producto;

public interface IProductoService {

	public List<Producto>findAll();
	
	public Page<Producto>findAll(Pageable pageable);
	
	public Producto findById(Long id);
	
	public Producto save(Producto producto);
	
	public void delete(long id);
	
}
