/*INSERCION DE REGIONES*/

INSERT INTO regiones(id,nombre) VALUES(1,'Sudamerica')
INSERT INTO regiones(id,nombre) VALUES(2,'Europa')
INSERT INTO regiones(id,nombre) VALUES(3,'Asia')
INSERT INTO regiones(id,nombre) VALUES(4,'Oceania')
INSERT INTO regiones(id,nombre) VALUES(5,'Africa')
INSERT INTO regiones(id,nombre) VALUES(6,'Norteamerica')
INSERT INTO regiones(id,nombre) VALUES(7,'Centroamerica')
INSERT INTO regiones(id,nombre) VALUES(8,'Antartida')

/*INSERCION DE CLIENTES*/
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Andres', 'Guzman','prof@gmail.com','2018-01-01','1');
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Pepe', 'Chano','pepe@gmail.com','2018-01-01','1');
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Gato', 'Lindo','gato@gmail.com','2018-01-01','3');
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Perro', 'Bonito','perro@gmail.com','2018-01-01','2');
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Pichon', 'Magdaleno','pichon@gmail.com','2018-01-01','4');
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Angeles', 'Lado','angeles@gmail.com','2018-01-01','5');
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Rogelio', 'Guzman','rog@gmail.com','2018-01-01','6');
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Florentino', 'Perez','Flore@gmail.com','2018-01-01','1');
INSERT INTO clientes (nombre,apellidos,email,create_at,region_id) VALUES('Paco', 'Mermela','Paco@gmail.com','2018-01-01','2');

/*Creamos usuarios con sus roles*/

INSERT INTO `usuarios` (username,password,enabled,nombre,apellidos,email) VALUES('andres','$2a$10$knGmnmnJlCbeId31n/tfleyNxSltqSbT2WamSJbYo0BGjLae1Pqyi',1,'Andres','guzman','prof@admin.com');
INSERT INTO `usuarios` (username,password,enabled,nombre,apellidos,email) VALUES('admin','$2a$10$cdo4k6aTuyu9cP0aKNn4d.bJmLp2.utYGwZC3zw.MZAjxCXRgTKA6',1,'Admin','Admin','admin@admin');

INSERT INTO `roles` (nombre) VALUES('ROLE_USER');
INSERT INTO `roles` (nombre) VALUES('ROLE_ADMIN');

INSERT INTO `usuarios_roles` (usuario_id,role_id) VALUES(1,1);
INSERT INTO `usuarios_roles` (usuario_id,role_id) VALUES(2,2);
INSERT INTO `usuarios_roles` (usuario_id,role_id) VALUES(2,1);

/*Creamos tabla Productos*/

INSERT INTO productos(nombre,precio,create_at) VALUES('Taladro Makita', 259, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('Cable RJ45', 29, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('iPad', 859, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('Bianchi', 699, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('Taladro Bosch', 959, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('Papel Higienico', 5, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('Bicicleta Bianchi Aro 26', 5, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('Horas Trabajo', 35, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('Desplazamiento (Kms-€)', 10, NOW());
INSERT INTO productos(nombre,precio,create_at) VALUES('Averias', 5, NOW());

/*Creamos algunas facturas*/
INSERT INTO facturas(descripcion, observacion,cliente_id,create_at) VALUES('Factura equipos oficina','Nota Importante', 1, NOW());
INSERT INTO facturas_items(cantidad, factura_id,producto_id) VALUES(1, 1, 1);
INSERT INTO facturas_items(cantidad, factura_id,producto_id) VALUES(2, 1, 4);
INSERT INTO facturas_items(cantidad, factura_id,producto_id) VALUES(8, 1, 3);

INSERT INTO facturas(descripcion, observacion,cliente_id,create_at) VALUES('Factura ferreteria','Nota Importante', 1, NOW());
INSERT INTO facturas_items(cantidad, factura_id,producto_id) VALUES(1, 2, 1);
INSERT INTO facturas_items(cantidad, factura_id,producto_id) VALUES(5, 2, 5);
INSERT INTO facturas_items(cantidad, factura_id,producto_id) VALUES(8, 2, 2);

INSERT INTO facturas(descripcion, observacion,cliente_id,create_at) VALUES('Factura Bicicleta','Para ir rapidisimo', 1, NOW());
INSERT INTO facturas_items(cantidad, factura_id,producto_id) VALUES(1, 3, 7);
