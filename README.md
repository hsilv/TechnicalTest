# ToDo List's
Este proyecto contiene una implementación de una ToDo List y una API con Symfony que gestiona tareas, donde el usuario debe autenticarse y se le brindará un JWT que usará como "pase" para poder gestionar sus tareas.

## Instrucciones de ejecución
Comenzando es necesario tener instaladas las herramientas `Docker` y `docker-compose` para poder ejecutar este proyecto. Debido a que está configurado para ello, solo hace falta colocar:

```
docker-compose up --build
```

Con esto comenzará a crearse la imagen desde cero y empezará a construirse cada servicio, su Frontend, su Backend, su base de datos en PostgreSQL y su Jenkins para gestionar su CI/CD y su automatización de pruebas.

## Acceso a Frontend
Una vez el contenedor se esté ejecutando. Si se desea ver la página web frontend, solo hace falta ingresar a la dirección:

[http://localhost:5173](http://localhost:5173)

## Acceso a Backend
Para facilitar el acceso y la interacción con los endpoints servidos por el backend se utilizó Swagger UI, accesible con la dirección:

[http://localhost:8000/api](http://localhost:8000/api)

## Instrucciones de uso de Jenkins
Para acceder al Jenkins y poder ejecutar el pipeline servido en este proyecto por medio de la dirección:

[http://localhost:8080/jenkins](http://localhost:8080/jenkins)

Una vez dentro, se solicitará que se ingrese la contraseña default, para ello debe abrirse una terminal en la que se ejecuta `docker-compose` y ejecutar:
```
docker-compose exec -it jenkins /bin/bash
```

Una vez dentro de la consola del contenedor de jenkins ejecutar:
```
cat /var/jenkins_home/secrets/initialAdminPassword
```
Esto da la contraseña inicial, la cual debe pegarse para iniciar Jenkins, luego seleccionar instalar los plugins sugeridos y esperar a que la instalación termine. Una vez termine crear el usuario administrador si así se desea, si no, continuar como administrador normal.

* Una vez en el dashboard de Jenkins presionar en _"Nueva Tarea"_

* Colocar el nombre del pipeline

* Seleccionar _"Pipeline"_ y hacer clic en _"OK"_

* En el apartado de "_Pipeline_" seleccionar _"Pipeline script from SCM"_
* En _"SCM"_, seleccionar _"Git"_ y colocar el enlace [https://github.com/hsilv/TechnicalTest.git](https://github.com/hsilv/TechnicalTest.git)
* En _"Script Path"_ dejarlo como _Jenkinsfile_
* Por último guardar.