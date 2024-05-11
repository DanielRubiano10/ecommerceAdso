# Ecommerce ADSO

Para correr localmente, se necesita la base de datos.

```
docker-compose up -d
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/ecommercedb
```

- Reconstruir los módulos de node y levantar Next

```
yarn install
yarn dev
```

## Llenar la base de datos con información de pruebas

Llamara:

```
http://localhost:3000
http://localhost:3000/product/slug
http://localhost:3000/api/seed
http://localhost:3000/cart/empty
http://localhost:3000/cart
```
#capturas UI
![image](https://github.com/DanielRubiano10/ecommerceAdso/assets/128107508/2b1b747f-518b-4ac7-8880-529bef3bff13)
![image](https://github.com/DanielRubiano10/ecommerceAdso/assets/128107508/f200c860-df3c-47e4-8109-ac3b24e4716b)
![image](https://github.com/DanielRubiano10/ecommerceAdso/assets/128107508/4f2d769c-6c0f-48ee-8961-0c6c6106a0df)



