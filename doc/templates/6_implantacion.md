# FASE DE IMPLANTACIÓN

## Manual técnico:

### Información relativa a la instalación: 
##### La Elección de un buen Servidor para desplegar el back y el front son esenciales en esta aplicacion. 
##### Para ello principalmente necesitaremos un hardware con requerimientos minimos de:
* RAM: 2GB 
* CPU: Doble nucleo 
* S.O.: Preferiblemente Linux o Windows
* Monitor
* Teclado y Raton
#### El despliegue puede hacerse de diferentes formas asi que la dividiremos en 2 partes/formas:
### 1. Local
En primer lugar tendremos que descargar e instalar un gestor de Base de Datos (En este caso MySQL).Tambien comprobar que tenemos una version superior de Java 1.8 y NodeJs (con su gestor de packetes npm)
Descargamos el [archivo .jar](../../src/windmill_sun.jar) del repositorio /src y lo lanzaremos en el servidor local con el comando 
```sh
    java -jar windmill_sun.jar
```
Una vez comprobado que todo esta en ejecucion podemos comprobar accediento al Swagger con un explorador de archivos https://localhost:8080/swagger-ui/index.html

Descargamos el repositoprio de del fron en src/clientes-app y con el nodejs ejecutamos:
```sh
   npm install 
   ng serve --prod
```
A continuacion podremos ir a un explorador y confirmar que la aplicacion se ha desplegado correctamente accediento a la URL : https://localhost:4200
Una vez iniciado podremos acceder con el usuario admin.
Ahora podra lanzar su servicio con un hopsting personalizado desde su propio servidor.
#
### 2. Remoto (Heroku/Firebase)
En primer lugar tenemos que tener cuenta en ambos servicios de Heroku y Firebase. El primero nos servira de servidor y el segundo de Hosting. Siendo ambos servicios gratuitos.
Iniciamos un cmd o Terminal donde este descargado el codigo del API [WindMillSunr](/src/spring-boot-backend-apirest) y ejecutamos
```sh
   heroku login
```
Nos logeamos en la aplicacion y enlazamos el jar con un proyecto que tengais creado previamenente
```sh
  heroku git:remote -a :nombre_proyecto:
```
Instalamos el java y su plugin de MySQL para heroku [JawsDB]
```sh
  heroku plugin:install java
  heroku addons:create jawsdb
```
Obtenermos la variable de entorno para desplegar y conectar nuestro backend a la base de datos en el cloud y las sustituimos en el application.properties del proyecto. Una vez modificadas ejecutamos:
```sh
 .\mvnw clean package
```
Y desplegamos con:
```sh
  heroku jar:deploy .\target\windmill_sun.jar
```
Una vez realizado esto obtendremos una URL de servidor que tendremos que usar para que el front se conecte a este.
Con Firebase haremos algo parecido. Nos descargamos el codigo del apartado Front de angular en  [WindMillSun Front](/src/clientes-app) y ejecutamos:
```sh
  npm install 
```
Una vez descargadas las dependencias lo tenemos que compilar con:
```sh
  ng build --prod
```
Y se nos creara una carpeta llamada 'dist' donde encontrariamos nuestro codigo compilado. ahora pdoemos instalar las firebase-tools con npm:
```sh
  npm install -g firebase-tools
```
Y cuando termine de instalar enlazamos el proyecto con firebase 
```sh
  firebase login
```
y ahora iniciamos Firebase con 
```sh
  firebase init
```
Selecxcionando los apartados de Hosting y referenciando el proyecto de firebase con el archivo que se crea automaticamente en los pasos anteriores index.html. Una vez ejecutado esto ejecutamos:
```sh
  firebase -add
  firebase deploy
```
Y una vez realizado nos mostrara una URL que nos llevara al proyecto completamente desplegado  en un hosting que nos lo dara firebase. Comprobamos que todo esta OK y ya podriamos iniciar la aplicacion con el usuario por defecto de Administrador
Tambien comentar que Firebase nos da la opcion de pagar un Hosting personalizado en el que referenciarnos mas con un dominio propio. Pero en este caso, como los dominios seran personalizados por el usuario que implemente la aplicacion y hay tanta variedad en estos, se deraja a libre eleccion de usuario.
#
* Por defecto ya deberia de haber un usuario por defecto (admin) con todos los permisos activados, este se encargara de crear el restode usuarios o administradores.
#

### Información relativa la administración del sistema, es decir, tareas que se deberán realizar una vez que el sistema estea funcionando, como por ejemplo:

* Las copias de seguridad del sistema: deben correr a cargo del sistema gestor de BBDD que se use o en todo coso del administrador del sistemas usará el debido que implemente en el S.O. en el que se despliegue la apliicacion.
* Copias de seguridade da base de datos.
* La gestión de usuarios correra en base a los usuarios con eprmisos de Administrador.
* La Gestión de seguridad debera correr por parte del usuario que realice el despliegue o de la plataforma que lo hostee, aunque la aplicacion use ya su propia seguridad de encriptacion, toda seguridad que se haga, siempre es poca.
* La gestión de incidencias, que pueden ser de dos tipos: de sistema (accesos no autorizados a la BD, etc) o de fallos en software, se tendran que encargar las plataformas de despliegue en mantener actualizadas estas ya que cada cierto tiempo suben bugfix y estos pueden tener vulnerabilidades. En todo caso las incidencias en los fallos de software seran solucionados anualmente siempre y cuando se reporten los fallos.

### Información relativa al matenimiento del sistema: 
* El mantenimiento del sistema siempre correra del usuario que haya hecho el despliegue o en caso de haberlo hosteado en un servidor cloud, la plataforma en la cual se haya desplegado se hara responsable. En ningun caso el desarrollador se responsabilizara de ningun error de la plataforma.
* Corregir errores.
* Las nuevas funcionalidades se iran sacando en anualidades y los bugfix mensualmente.
* Las adaptaciones por actualizaciones de software y/o hardware no seran indispensables ya que esta hecho para entornos multidiversos y con acceso.

## Gestión de incidencias
##### * La gestion de incidencias se pueden notificar al desarrollador a traves de comunicados en su email o en comentarios en el propio repositorio para que las incluya en las siguientes releases o bugfixes. en caso de que surge incidencias en los entornos de despliegues, no se daria soporte ya que este es de libre eleccion a quien decida usarla.

## Protección de datos de carácter persoal.

## Manual de usuario
* Los usuarios no requeriran ninguna formacion especifica salvo la familiarizacion del entorno, la cual se estipula en un maximo de 2-3 dias.

#

#### Exención de responsabilidad:

##### El desarrollador de esta aplicación no será responsable de ningún daño, pérdida o problema que pueda surgir del uso de esta aplicación. El usuario acepta utilizar la aplicación bajo su propio riesgo y asume toda responsabilidad por cualquier daño, pérdida o problema que pueda surgir del uso de la aplicación.

[jawsdb]:<https://www.jawsdb.com/>
