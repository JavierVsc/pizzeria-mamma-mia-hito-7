export const pizzaImages = {
  p001: "https://easyways.cl/storage/20210208143331pizza-napolitana.jpg?x=auto&quality=80&format=jpg&fit=crop&h=400&w=400",
  p002: "https://www.labuonapizza.cl/wp-content/uploads/2020/12/lbp-espanola-01.jpg?x=auto&quality=80&format=jpg&fit=crop&h=400&w=400",
  p003: "https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg?x=auto&quality=80&format=jpg&fit=crop&h=400&w=400",
  p004: "https://easyways.cl/storage/20210209062110pizza-cuatro-estaciones.jpg?x=auto&quality=80&format=jpg&fit=crop&h=400&w=400",
  p005: "https://www.seara.com.br/wp-content/uploads/2025/09/R0325-SL-pizza-de-bacon-fatiado-cebola-caramelizada-1200x675-1.webp?x=auto&quality=80&format=jpg&fit=crop&h=400&w=400",
  p006: "https://mammaspizza.ae/cdn/shop/products/PolloPicante.jpg?v=1665728604&x=auto&quality=80&format=jpg&fit=crop&h=400&w=400",
};

export const getPizzaImage = (id, originalImage) => {
  return pizzaImages[id] || originalImage;
};

/* ESTO LO PUSE A MODO DE RESPALDO POR SI ES QUE NO CARGAN LAS IMÁGENES DESDE EL BACKEND COMO HA PASADO ANTERIORMENTE CON LOS MATERIALES DE APOYO ENTREGADOS */