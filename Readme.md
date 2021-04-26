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

  - [![HTML5](https://img.shields.io/badge/HTML5-green)](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5) 

HTML5 no es una nueva versión del antiguo lenguaje de etiquetas, ni siquiera una mejora de esta ya antigua tecnología, sino un concepto nuevo para la construcción del sitio web y aplicaciones en una era que combina dispositivos móviles, computación en la nube.
HTML5 provee básicamente tres características: Estructura, estilo y funcionalidad. HTML5 es considerado el producto de la combinación de HTML, CSS y JavaScript. Estas tecnologías son altamente dependientes y actúan como una sola unidad organizada bajo la especificación de HTML5. [Gauchat, 2012](https://gutl.jovenclub.cu/wp-content/uploads/2013/10/El+gran+libro+de+HTML5+CSS3+y+Javascrip.pdf)

A continuación se puede encontrar un curso de Html [Iniciar](https://www.w3schools.com/html/)

  - [![JavaScript](https://img.shields.io/badge/JavaScript-green)](https://developer.mozilla.org/es/docs/Web/JavaScript)

Javascript es un lenguaje interpretado usado para múltiples propósitos pero solo considerado como un complemento hasta ahora. Una de las innovaciones que ayudó a cambiar el modo en que vemos Javascript fue el desarrollo de nuevos motores de interpretación, creados para acelerar el procesamiento de código. La clave de los motores más exitosos fue transformar el código Javascript en código máquina para lograr velocidades de ejecución similares a aquellas encontradas en aplicaciones de escritorio.
Esta mejorada capacidad permitió superar viejas limitaciones de rendimiento y confirmar el lenguaje Javascript como la mejor opción para la web. 

A continuación se puede encontrar un curso de Html [Iniciar](https://www.w3schools.com/js/)

  - [![CSS](https://img.shields.io/badge/CSS-green)](https://developer.mozilla.org/es/docs/Learn/CSS)

CSS es un lenguaje que trabaja junto con HTML para proveer estilos visuales a los elementos del documento, como tamaño, color, fondo, bordes, etc…
IMPORTANTE: En este momento las nuevas incorporaciones de CSS3 están siendo implementadas en las últimas versiones de los navegadores más populares, pero algunas de ellas se encuentran aún en estado experimental. 

Oficialmente CSS nada tiene que ver con HTML5. CSS no es parte de la especificación y nunca lo fue. Este lenguaje es, de hecho, un complemento desarrollado para superar las limitaciones y reducir la complejidad de HTML. En consecuencia, CSS pronto fue
adoptado como la forma de separar la estructura de la presentación. Desde entonces, CSS ha crecido y ganado importancia, pero siempre desarrollado en paralelo, enfocado en las necesidades de los diseñadores y apartado del proceso de evolución de HTML. [Gauchat, 2012](https://gutl.jovenclub.cu/wp-content/uploads/2013/10/El+gran+libro+de+HTML5+CSS3+y+Javascrip.pdf)

A continuación se puede encontrar un curso de Html [Iniciar](https://www.w3schools.com/css/)

  - [![Bootstrap](https://img.shields.io/badge/Bootstrap-green)](https://developer.mozilla.org/es/docs/Learn/CSS)
  - Google Charts 

  

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

Leider Martinez (<leideryesidmm@ufps.edu.co>).
                          
Jheyner Lobo (<jheyneralexanderld@ufps.edu.co>).


### Institución Académica   
Proyecto desarrollado en la Materia programación web del  [Programa de Ingeniería de Sistemas] de la [Universidad Francisco de Paula Santander]


   [Programa de Ingeniería de Sistemas]:<https://ingsistemas.cloud.ufps.edu.co/>
   [Universidad Francisco de Paula Santander]:<https://ww2.ufps.edu.co/>

### Referencias
Gauchat, J. D. (2012). El gran libro de HTML5, CSS3 y Javascript. Marcombo.
