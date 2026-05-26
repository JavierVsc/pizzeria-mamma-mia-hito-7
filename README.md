# pizzeria-mamma-mia-hito-6
Deploy Sitio: https://pizzeria-mamma-mia-hito-7.onrender.com

## Descripción

En este Hito 7, el foco principal fue seguir trabajando con React Router, incorporando rutas dinámicas y rutas protegidas.

Para lograrlo, se trabajó sobre la base del Hito 6 y se modificó la página de detalle de pizza para obtener el id desde la URL usando `useParams`. De esta forma, cada botón “Ver más” permite abrir la información correspondiente a cada pizza.

Además, se creó un contexto de usuario para simular el estado de sesión. Con esto, el Navbar cambia según si el usuario está logueado o no, permitiendo mostrar las opciones de Profile y Logout, o Login y Register según corresponda.

También se protegió la ruta de Profile, se restringió el acceso a Login y Register cuando el usuario ya está logueado, y se deshabilitó el botón de pagar en el carrito cuando no hay sesión activa.

El sitio sigue conectado a la API de pizzas publicada anteriormente en Render.

## Regla Render

Como este proyecto utiliza React Router, se agregó una regla de **Redirect/Rewrite** en Render para que las rutas funcionen correctamente al recargar la página o al ingresar directamente a una URL.

Regla configurada en Render:

```text
Source: /*
Destination: /index.html
Action: Rewrite
