# Ejercicio 1

Se trata de un proyecto donde se ocupa la API de Marvel
(https://developer.marvel.com/).

> Tener en consideración que debes tener cuenta para acceder a la API.

## Variables de entorno

En el archivo enviroment.ts se encuentra el siguiente esquema:

```enviroment.ts
export const enviroment = {
    production: false,
    apiURL: 'https://gateway.marvel.com/v1/public',
    apiKey: 'Ingresa tu API Key aquí',
    hash: 'Ingresa tu hash aquí',
    ts: '1',
}
```
Debes cambiar las siguientes variables:

* apiKey: Que sería la public key
* hash: Que sería (1+ PUBLIC KEY + PRIVATE KEY) luego transformarlo con MD5 

Donde puedes cambiarlo en [ MD5 Hash Generator](https://www.md5hashgenerator.com/).

## Ejecución del proyecto

Para ejecutar el proyecto tienes que poner la siguiente línea de comando:

```bash
ng serve
```

# Ejercicio 2

Se trata de un proyecto donde puedes agregar tareas, marcarlas y eliminarlas.

## Ejecución del proyecto

Para ejecutar el proyecto tienes que poner la siguiente línea de comando:

```bash
ng serve
```
