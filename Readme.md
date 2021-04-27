![Estadisticas](./images/blue-covid-banner.jpg)
# Título del proyecto:

#### Estadisticas Covid-19 

## Índice
1. [Características](#características) 📋
2. [Contenido del proyecto](#contenido-del-proyecto) 📁
3. [Tecnologías](#tecnologías) 💻
4. [IDE](#ide) 📟
5. [Instalación](#instalación) 📥
6. [Demo](#demo)🗄
7. [Autores](#autores) 🧍
8. [Institución Académica](#institución-académica) 🏫
9. [Referencias](#referencias) 📎


#### Características:

  - Proyecto con lectura de datos json a través de la API fecth JavaScript
  - Carga dinámica del JSON 
  - Archivo json con los casos de contagio : [ver](https://www.datos.gov.co/resource/gt2j-8ykr.json)
  - Uso de Bootstrap como base de estilo en CSS: [ver](https://getbootstrap.com/)
  - Uso de la API Google Charts para la creación de gráficas estadísticas.

  #### Contenido del proyecto
  | Ruta del archivo   |      Descripción      |
|:----------:|-------------|
|[index.html](https://gitlab.com/Wolf21/estadisticascovid/-/blob/master/index.html) |Archivo principal donde se invoca una funcion al cargarse y muestra tres formularios para realizar las consultas a nivel nacional, departamental y municipal.|
|[ref1.html](https://gitlab.com/Wolf21/estadisticascovid/-/blob/master/html/ref1.html) |Archivo en el cual se invoca una funcion que al cargarse muestra la tabla y gráfica de torta de los casos catalogados por sexo en un departamento seleccionado.|
|[ref2.html](https://gitlab.com/Wolf21/estadisticascovid/-/blob/master/html/ref2.html)|Archivo en el cual se invoca una funcion que al cargarse muestra la tabla y gráfica de torta de los casos catalogados por fuente de contagio en un municipio seleccionado.| 
|[ref3.html](https://gitlab.com/Wolf21/estadisticascovid/-/blob/master/html/ref3.html)|Archivo en el cual se invoca una funcion que al cargarse muestra la tabla y gráfica de barras de los casos positivos a nivel nacional.|
|[estadisticas.js](https://gitlab.com/Wolf21/estadisticascovid/-/blob/master/js/estadisticas.js)|Archivo JS con el proceso de lectura del JSON y sus funciones adicionales para la impresión de los resultados, comparaciones y demás procedimientos necesarios.|


#### Tecnologías

  - [![HTML5](https://img.shields.io/badge/HTML5-green)](https://books.google.es/books?hl=es&lr=&id=szDMlRzwzuUC&oi=fnd&pg=PA1&dq=html5&ots=0CmNW1rDQa&sig=kpHZE2oVcxAE21hsyLIYWv97fak#v=onepage&q=html5&f=false) 

HTML5 no es una nueva versión del antiguo lenguaje de etiquetas, ni siquiera una mejora de esta ya antigua tecnología, sino un concepto nuevo para la construcción del sitio web y aplicaciones en una era que combina dispositivos móviles, computación en la nube.
HTML5 provee básicamente tres características: Estructura, estilo y funcionalidad. HTML5 es considerado el producto de la combinación de HTML, CSS y JavaScript. Estas tecnologías son altamente dependientes y actúan como una sola unidad organizada bajo la especificación de HTML5. [(Gauchat, 2012)](#gauchat-g-2012-el-gran-libro-de-html5-css3-y-javascript-20128).

A continuación se puede encontrar un curso de Html [Iniciar](https://www.w3schools.com/html/)

  - [![JavaScript](https://img.shields.io/badge/JavaScript-green)](https://developer.mozilla.org/es/docs/Web/JavaScript)

Javascript es un lenguaje interpretado usado para múltiples propósitos pero solo considerado como un complemento hasta ahora. Una de las innovaciones que ayudó a cambiar el modo en que vemos Javascript fue el desarrollo de nuevos motores de interpretación, creados para acelerar el procesamiento de código. La clave de los motores más exitosos fue transformar el código Javascript en código máquina para lograr velocidades de ejecución similares a aquellas encontradas en aplicaciones de escritorio.
Esta mejorada capacidad permitió superar viejas limitaciones de rendimiento y confirmar el lenguaje Javascript como la mejor opción para la web. 

Existen tres técnicas para incorporar código Javascript dentro de HTML. Sin embargo, al igual que en CSS, solo la inclusión de
archivos externos es la recomendada a usar en HTML5. [(Gauchat, 2012)](#gauchat-g-2012-el-gran-libro-de-html5-css3-y-javascript-20128).   

A continuación se puede encontrar un curso de JavaScript [Iniciar](https://www.w3schools.com/js/)

  - [![CSS](https://img.shields.io/badge/CSS-green)](https://gutl.jovenclub.cu/wp-content/uploads/2013/10/El+gran+libro+de+HTML5+CSS3+y+Javascrip.pdf)

CSS es un lenguaje que trabaja junto con HTML para proveer estilos visuales a los elementos del documento, como tamaño, color, fondo, bordes, etc…
IMPORTANTE: En este momento las nuevas incorporaciones de CSS3 están siendo implementadas en las últimas versiones de los navegadores más populares, pero algunas de ellas se encuentran aún en estado experimental. 

Oficialmente CSS nada tiene que ver con HTML5. CSS no es parte de la especificación y nunca lo fue. Este lenguaje es, de hecho, un complemento desarrollado para superar las limitaciones y reducir la complejidad de HTML. En consecuencia, CSS pronto fue
adoptado como la forma de separar la estructura de la presentación. Desde entonces, CSS ha crecido y ganado importancia, pero siempre desarrollado en paralelo, enfocado en las necesidades de los diseñadores y apartado del proceso de evolución de HTML. [(Gauchat, 2012)](#gauchat-g-2012-el-gran-libro-de-html5-css3-y-javascript-20128)

A continuación se puede encontrar un curso de CSS [Iniciar](https://www.w3schools.com/css/)

  - [![Bootstrap](https://img.shields.io/badge/Bootstrap-green)](https://www.pdf-manual.es/programacion-web/css/177-bootstrap-4.html)



Como	ya	hemos	comentado	antes,	Bootstrap	es	uno	de	los	frameworks	más	populares	y utilizados	del	mercado	para	la	creación	de	páginas	responsive,	habiendo	sido	desarrollado por	el	equipo	de	Twitter.
Entre	los	navegadores	soportados	se	encuentran	Chrome,	Firefox,	Opera,	Safari	e	Internet Explorer	a	partir	de	la	versión	8	(aunque	en	la	versión	7	también	funciona	correctamente).
Está	preparado	para	funcionar	tanto	en	navegadores	de	PCs	y	portátiles	con	cualquier tamaño	de	pantalla	así	como	para	tablets	y	smartphones	de	tamaños	mucho	más reducidos.
Para	conseguir	que	una	misma	web	se	pueda	visualizar	correctamente	en	todos	esos tamaños	de	pantalla	ha	diseñado	un	avanzado	sistema	de	rejilla	dividido	en	columnas	para el	posicionamiento	de	los	elementos	de	nuestra	web.	Además	incorpora	otras	muchas utilidades	y	complementos	(formularios,	botones,	barras	de	navegación,	etc.)	para simplificar	el	desarrollo	de	una	web	responsive. [(Gallego, 2018)](#gallego-a-2018-curso-bootstrap-4-css-framework-diseño-web)
  
  A continuación se puede encontrar un curso de Bootstrap [Iniciar](https://www.w3schools.com/bootstrap/)
  
  - [![Google Charts](https://img.shields.io/badge/Google_Charts-green)]()

  
A continuación puede visualizar un video explicativo de cada una de las tecnologías anteriormente nombradas.

Usted puede ver el siguiente marco conceptual sobre Bootstrap:
  - [Vídeo explicativo de Bootstrap](https://www.youtube.com/watch?v=59pex8k8Xr8)

Usted puede ver el siguiente marco conceptual sobre HTML5:
  - [Guia completa de HTML5](https://www.w3schools.com/html/default.asp)

Usted puede ver el siguiente marco conceptual sobre JavaScript:
  - [Guia completa de JavaScript](https://www.w3schools.com/js/default.asp)

Usted puede ver el siguiente marco conceptual sobre Google Charts:
  - [Vídeo explicativo de tablas y gráficas Google Charts](https://www.youtube.com/watch?v=QRN91T8rqW4&feature=emb_logo)

#### IDE

- El proyecto se desarrolla usando sublime text 3 
- Visor de JSON ➔ [descargar](http://jsonviewer.stack.hu/)


### Instalación

Firefox Devoloper Edition-> [descargar](https://www.mozilla.org/es-ES/firefox/developer/).
El software es necesario para ver la interacción por consola y depuración del código JS


```sh
-Descargar proyecto
-Invocar página index.html desde Firefox 
```

***
### Demo

El proyecto se desplegó en el servidor madarme.co y para ver el demo de la aplicación puede dirigirse a: [Estadísticas covid-19]


### Autores
Proyecto desarrollado por: 

Jheyner Lobo (<jheyneralexanderld@ufps.edu.co>).

Leider Martinez (<leideryesidmm@ufps.edu.co>).
                          

### Institución Académica   
Proyecto desarrollado en la Materia programación web del  [Programa de Ingeniería de Sistemas] de la [Universidad Francisco de Paula Santander]


   [Programa de Ingeniería de Sistemas]:<https://ingsistemas.cloud.ufps.edu.co/>
   [Universidad Francisco de Paula Santander]:<https://ww2.ufps.edu.co/>

### Referencias 


###### Gauchat, G. (2012). El gran libro de HTML5, CSS3 y Javascript, 2012(8).
###### Gallego, A. (2018). Curso Bootstrap 4 CSS Framework diseño web.
