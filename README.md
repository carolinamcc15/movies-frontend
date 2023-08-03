# :zap: TalleresT Test - Movies Frontend
Proyecto de prueba técnica TalleresT, realizado con ReactJS.
***
## :computer: Instalación
1. En la ruta raíz del proyecto, ejecutar el comando `npm install`, para instalar las dependencias.
2. También en la ruta raíz, crea un archivo llamado `.env.local`, para almacenar la siguiente variable de entorno:
  ```
  REACT_APP_API_URL=http://localhost:3010
  ```
3. Ejecuta la aplicación por medio del comando `npm start`. Esta será accesible en el puerto 3000 por defecto.
***
## :sparkles: Funcionalidades principales
### Validaciones de formulario
Se tomaron en cuenta las siguientes validaciones:
- Todos los campos son requeridos.
- Los campos numéricos solamente aceptan valores enteros y el mínimo es 1.
![image](https://github.com/carolinamcc15/movies-frontend/assets/54415092/d7fad2d4-1abb-4118-a56d-ec00099317ec)

### Selección de fecha por medio de datepicker
En en formulario para crear una película, se utiliza un datepicker de la librería `antd` para seleccionar la fecha de estreno.
![image](https://github.com/carolinamcc15/movies-frontend/assets/54415092/669dc0fe-db22-4642-be5c-efaeff264b86)

### Notificaciones
Al crear una película, se muestran mensajes informativos en la parte superior de la pantalla, tanto si la acción es exitosa como si ocurre un error.
![image](https://github.com/carolinamcc15/movies-frontend/assets/54415092/22fdf562-7044-462c-aa33-fb26c94ab826)

### Sidebar dinámico
El sidebar de la aplicación muestra las opciones disponibles en la base de datos y al darles click, redirigen a la página respectiva.
![image](https://github.com/carolinamcc15/movies-frontend/assets/54415092/beeb9af1-31b7-48a3-92a6-6eb4e4c06df1)

### Listado de películas
Dentro de esta página es posible visualizar todas las películas guardadas y filtrarlas por su año de estreno. 
![image](https://github.com/carolinamcc15/movies-frontend/assets/54415092/23b3b5e6-6538-44bb-b24a-b3e7f955441d)

### Administrar opciones
Esta funcionalidad permite habilitar o deshabilitar las opciones del menú, excepto la de administrarlas para poder modificarlas siempre. 
![image](https://github.com/carolinamcc15/movies-frontend/assets/54415092/3cdddd33-dc8c-4532-b394-0ebeddc6f5e7)

## :pushpin: Notas
- La paginación de las películas se realiza SOLAMENTE DE LADO DEL CLIENTE. A pesar de no ser una práctica correcta, se colocó para una mejor experiencia de usuario.
- La ruta "Renta de películas" fue eliminada como se especificó en las indicaciones.
- Los estilos fueron aplicados utilizando `TailwindCSS`, además de algunos componentes de `antd`.
- El sitio web cuenta con una página 404 cuando una ruta no coincide con las existentes.
- Las opciones son obtenidas y guardadas en un `context` para poder acceder a ellas desde cualquier nivel de la aplicación.
