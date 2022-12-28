package com.bolsadeideas.springboot.backend.apirest.models.dao;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.bolsadeideas.springboot.backend.apirest.models.entity.Role;
import com.bolsadeideas.springboot.backend.apirest.models.entity.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long> {

	public Usuario findByUsername(String username);

	@Query("select u from Usuario u Where u.username=?1")
	public Usuario findByUsername2(String username);
	
	@Query(value="insert into db_springboot_backend.usuarios_roles (usuario_id,role_id) values (:usuario_id, :role_id)", nativeQuery = true)
	public Role saveRole(@Param("usuario_id") Long usuario_id,@Param("role_id") Long role_id);

	public Page<Usuario> findAll(Pageable pageable);
	
//	@Query(value="select r from roles r")
//	public List<Role> showRoles();
}
