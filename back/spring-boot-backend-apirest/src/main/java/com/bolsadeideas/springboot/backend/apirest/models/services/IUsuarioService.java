package com.bolsadeideas.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Role;
import com.bolsadeideas.springboot.backend.apirest.models.entity.Usuario;

public interface IUsuarioService {
	
	public List<Usuario> findAll();
	public Page<Usuario> findAll(Pageable pageable);

	public Usuario findByUsername(String username);
	
	public Usuario findById(Long id);
	
	public void deleteAll();
	
	public void deleteById(Long id);

	public Usuario save(Usuario usuario);
	
	public Role saveRole(Usuario user,Role role);
	
	public List<Role> showRole();

}
