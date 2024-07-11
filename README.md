# Template para desarrollar una api

## Arquitectura

- Screaming architecture invertida

## Herramientas

- Express
- Zod
- Prisma
- PostgreSQL

## Requisitos

Debe tener la database lista para consumir y configurar las variables de entorno. Cree el archivo .env en la raíz del proyecto

```
PORT=3000
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

- **USER:** El nombre del usuario de su base de datos
- **PASSWORD:** La contraseña para el usuario de su base de datos
- **HOST:** El nombre de su host (para el entorno local, es localhost)
- **PORT:** El puerto donde se ejecuta su servidor de base de datos (normalmente 5432para PostgreSQL)
- **DATABASE:** El nombre de la base de datos
- **SCHEMA:** El nombre del esquema dentro de la base de datos

por lo general hay datos por defecto utilizando postgreSQL, solo tendrías que cambiar PASSWORD y DATABASE

```
postgresql://postgres:PASSWORD@localhost:5432/DATABASE?schema=public
```

## Scripts

En el package.json ya existen scripts para resetear o llenar la db con data fake

## Rutas

Si todo está correcto, debe visualizar un json en la sgts rutas

- http://localhost:3000
- http://localhost:3000/users

# Template para desarrollar una api

## Arquitectura

- Screaming architecture invertida

## Herramientas

- Express
- Zod
- Prisma
- PostgreSQL

## Requisitos

Debe tener la database lista para consumir y configurar las variables de entorno. Cree el archivo .env en la raíz del proyecto

```
PORT=3000
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

- **USER:** El nombre del usuario de su base de datos
- **PASSWORD:** La contraseña para el usuario de su base de datos
- **HOST:** El nombre de su host (para el entorno local, es localhost)
- **PORT:** El puerto donde se ejecuta su servidor de base de datos (normalmente 5432para PostgreSQL)
- **DATABASE:** El nombre de la base de datos
- **SCHEMA:** El nombre del esquema dentro de la base de datos

por lo general hay datos por defecto utilizando postgreSQL, solo tendrías que cambiar PASSWORD y DATABASE

```
postgresql://postgres:PASSWORD@localhost:5432/DATABASE?schema=public
```

## Scripts

En el package.json ya existen scripts para resetear, migrar, llenar la db con data fake.

- instalar dependencias:

```
npm i
```

- rellenar la db:

```
npm run dbnew
```

- luego

```
npm run dev
```

## Rutas

Si todo está correcto, debe visualizar un json en la sgts rutas

- http://localhost:3000
- http://localhost:3000/users
