# Peek
Peek es una aplicación pensada para asistir al plantel exterior de la Cooperativa Batan con los datos necesarios en tiempo real.

## Frontend
La aplicacion es generada por React Native, la configuracion del entorno de desarrollo se puede configurar siguiendo la [guía oficial](https://reactnative.dev/docs/getting-started).

El projecto no esta configurado para funcionar con Expo asi que seguimos las instrucciones "**React Native CLI Quickstart**".
En el paso 2 de la guia, para instalar OpenJDK utilizamos el comando `sudo apt install openjdk-11-jre`.

Al finalizar, comprobamos si todo esta listo con `npx react-native --version`

Luego de configurar el entorno, clonar el repositorio y ejecutar `npm install` para descargar los paquetes necesarios.

Si vamos a utilizar un dispositivo fisico, tenemos que activar la Depuracion USB y una vez conectado por cable, el comando `adb devices` deberia listar el dispositivo.

### Librerias principales:
* [React Native Paper](https://callstack.github.io/react-native-paper/)
* [React Navigation](https://reactnavigation.org/docs/getting-started)
* [React Redux](https://es.redux.js.org/docs/basico/uso-con-react.html)

## Backend

...