package com.bolsadeideas.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Role;

public interface IRoleDao extends CrudRepository<Role, Long>{
	
	public List<Role> findAll();

}
