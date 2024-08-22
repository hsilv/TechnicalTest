# ToDo List's
Este proyecto contiene una implementación de una ToDo List y una API con Symfony que gestiona tareas, donde el usuario debe autenticarse y se le brindará un JWT que usará como "pase" para poder gestionar sus tareas.

## Instrucciones de ejecución
Comenzando es necesario tener instaladas las herramientas `Docker` y `docker-compose` para poder ejecutar este proyecto. 
Antes debe colocarse un `.env` en la raíz del proyecto, acá la plantilla:
```
DATABASE_URL=postgresql://postgres:postgres@db:5432/todo
JWT_PASSPHRASE=CUSTOM_PASSPHRASE
```
Debido a que está configurado para ello, solo hace falta colocar:

```
docker-compose up --build
```

Con esto comenzará a crearse la imagen desde cero y empezará a construirse cada servicio, su Frontend, su Backend, su base de datos en PostgreSQL y su Jenkins para gestionar su CI/CD y su automatización de pruebas.

## Acceso a Frontend
Una vez el contenedor se esté ejecutando. Si se desea ver la página web frontend, solo hace falta ingresar a la dirección:

[http://localhost:5173](http://localhost:5173)

La página se ve de esta forma:

## Testeo de Frontend
Para testear el frontend tienen que estar instaladas las librerías en la carpeta `frontend`, eso se hace con:
```
pnpm install
```
Si no tienes pnpm y tienes `node18` o mayor, puedes instalarlo con
```
corepack enable
```
una vez instalado se usa el siguiente comando:
```
pnpm test
```
Los test se ven de esta forma:

## Acceso a Backend
Como primer punto, debe colocarse un `.env` en la raíz de backend, aquí la plantilla:
```
# In all environments, the following files are loaded if they exist,
# the latter taking precedence over the former:
#
#  * .env                contains default values for the environment variables needed by the app
#  * .env.local          uncommitted file with local overrides
#  * .env.$APP_ENV       committed environment-specific defaults
#  * .env.$APP_ENV.local uncommitted environment-specific overrides
#
# Real environment variables win over .env files.
#
# DO NOT DEFINE PRODUCTION SECRETS IN THIS FILE NOR IN ANY OTHER COMMITTED FILES.
# https://symfony.com/doc/current/configuration/secrets.html
#
# Run "composer dump-env prod" to compile .env files for production use (requires symfony/flex >=1.2).
# https://symfony.com/doc/current/best_practices.html#use-environment-variables-for-infrastructure-configuration

###> symfony/framework-bundle ###
APP_ENV=dev
APP_SECRET=189cc6d8d7cbc80efeb3ec3d3aab264e
###< symfony/framework-bundle ###

###> doctrine/doctrine-bundle ###
# Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
# IMPORTANT: You MUST configure your server version, either here or in config/packages/doctrine.yaml
#
# DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=10.11.2-MariaDB&charset=utf8mb4"
DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8"
###< doctrine/doctrine-bundle ###

###> nelmio/cors-bundle ###
CORS_ALLOW_ORIGIN='^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$'
###< nelmio/cors-bundle ###

###> lexik/jwt-authentication-bundle ###
JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem
JWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem
JWT_PASSPHRASE=7c9c7fe3601a011da5b83b2f411ac858b3c76e9afa8569c825fbc48af15e62c3
###< lexik/jwt-authentication-bundle ###

```
Para facilitar el acceso y la interacción con los endpoints servidos por el backend se utilizó Swagger UI, accesible con la dirección:

[http://localhost:8000/api](http://localhost:8000/api)

El Swagger UI se ve de esta forma, cabe destacar que el botón *Authorize* es para que se coloque el token dado por el login:


## Testeo de Backend
Para esto es necesario utilizar el contenedor, como antes:
```
docker-compose exec -it backend /bin/bash
```
Luego en la misma carpeta hacer el testing con:
```
./vendor/bin/phpunit
```
Debería verse de esta forma:


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
* En la directiva de las branches a utilizar cambiar `*/master` por `*/main`
* En _"Script Path"_ dejarlo como _Jenkinsfile_
* Por último guardar.

El pipeline corrido se ve de esta forma:
* Clon del repositorio
* Instalación de librerías
* Corrida de pruebas
* En dashboard
