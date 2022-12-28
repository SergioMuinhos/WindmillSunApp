# Proyecto WindMill Sun

> # <img src="doc/img/windmill.png" width="80" height="80"> WindMill Sun . 
>
> WindMill Sun es una app web que pretende unir trabajadores de a pie con la administracion de una empresa/PYME 
> 

## Descripción

> Aplicación web que permite la comunicacion entre los empleados y la administracion de una PYME o Empresa. 
> la Facturacion se podra hacer de manera simple y enviar presupuestos al cliente con tan solo un clic
> Gestion de Clientes con su perfil personalizado
> Gestion de Empleados con perfil y roles (ADMIN o USER)
> Gestion de Productos usados en cada cliente y relacionados directamente con la facturacion
> Proximamente: Generacion y tratamiento de almacenes y stocks
> 

## Instalación / Puesta en marcha

> La instalacion consta de 3 Partes: <br>
> - Primero: Instalación de [MySQL Workbench] como BBDD tal y como se indica en la pagina oficial<br>
> - Segundo: Ejecuccion del API .jar como se indica en la [Implantación](doc/templates/6_implantacion.md) <br>
> - Tercero: Despliegue de la interfaz en Angular como se indica en la [Implantación](doc/templates/6_implantacion.md) <br>
> - Comprobar que tenemos una version superior de [Java] 1.8 y [NodeJs] (con su gestor de paquetes npm)
>```sh
>    java --version
>    npm --version 
>    node -v
>```
>Descargamos el [archivo .jar](../../src/windmill_sun.jar) del repositorio /src y lo lanzaremos en el servidor local con el comando 
>```sh
>    java -jar windmill_sun.jar
>```
>Una vez comprobado que todo esta en ejecucion podemos comprobar accediento al Swagger con un explorador de archivos https://localhost:8080/swagger-ui/index.html
>
>Descargamos el repositorio desde el front en src/clientes-app y con el nodejs ejecutamos:
>```sh
>   npm install 
>   ng serve --prod
>```


## Uso
> Una vez desplegado el proyecto podremos entrar en la aplicacion web con el usuario 'admin' y password '12345' (por defecto esta activado). 
> Se recomienda cambiar la contraseña nada mas iniciar sesion, en el perfil del administrador. 
> Con el usuario de administrador (por defecto) podremos dar de alta en sus diferentes secciones nuevos Clientes, Productos y Usuarios  
> los cuales se encontraran una intefaz web en la que podran interactuar y usarla desde el minuto 1.
>


## Sobre el autor

> Sergio Muiños Garcia. <br>
> Desarrollador Full-Stack. <br>
> Stack Tech: Java, Spring, Angular, Android. <br>
> Me he decantado por este proyecto debido a que podria tener muchisimas salidas y dar un golpe en la mesa con una app OpenSource. <br>
> Email: sergiomuinosgarcia@gmail.com.
>

## Licencia

>  [`LICENSE`](LICENSE.md) *GNU Free Documentation License Version 1.3*
>



## Guía de contribución

> Tratandose de un Software Libre siempre se pueden hacer mejoras como:<br>
> -Dockerizar <br>
> -Creacion de Tests Automaticos <br>
> -Nuevas Interfaces  <br>
> -Gestion de Almacenes <br>
> -Escandallos <br>
> -Stocks <br>
> -Plugins <br>
>


## Links
> Demo: [WindMill Sun Demo]


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [mysql workbench]: <https://www.mysql.com/products/workbench/>
   [spring]:<https://spring.io/>
   [windmill sun demo]:<https://admin-app-angular.web.app/>
    [nodejs]: <https://nodejs.org/en/>
   [java]: <https://www.oracle.com/es/java/technologies/downloads/>
