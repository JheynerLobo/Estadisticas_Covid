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
HTML5 provee básicamente tres características: Estructura, estilo y funcionalidad. HTML5 es considerado el producto de la combinación de HTML, CSS y JavaScript. Estas tecnologías son altamente dependientes y actúan como una sola unidad organizada bajo la especificación de HTML5. [Gauchat, 2012](https://books.google.es/books?hl=es&lr=&id=szDMlRzwzuUC&oi=fnd&pg=PA1&dq=html5&ots=0CmNW-sEO9&sig=dNhLEPv9DllmtsPp1YBE5QFxdxU#v=onepage&q=html5&f=false)

A continuación se puede encontrar un curso de Html [Iniciar](https://www.w3schools.com/html/)

  - [![JavaScript](https://img.shields.io/badge/JavaScript-green)](https://developer.mozilla.org/es/docs/Web/JavaScript)
  - [![CSS](https://img.shields.io/badge/CSS-green)](https://developer.mozilla.org/es/docs/Learn/CSS)
  - [![Bootstrap](https://img.shields.io/badge/Bootstrap-green)](https://developer.mozilla.org/es/docs/Learn/CSS)
  - Bootstrap
  - Google Charts 

Usted puede ver el siguiente marco conceptual sobre la API fetch:

  - [Vídeo explicativo lectura con fetch](https://www.youtube.com/watch?v=DP7Hkr2ss_I)
  - [Gúia de Mozzilla JSON](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)
  - [Breve esplicación del JSON](https://www.w3schools.com/whatis/whatis_json.asp)

Usted puede ver el siguiente marco conceptual sobre Bootstrap:
  - [Vídeo explicativo de Bootstrap](https://www.youtube.com/watch?v=59pex8k8Xr8)

Usted puede ver el siguiente marco conceptual sobre HTML5:
  - [Guia completa de HTML5](https://www.w3schools.com/html/default.asp)

Usted puede ver el siguiente marco conceptual sobre JavaScript:
  - [Guia completa de JavaScript](https://www.w3schools.com/js/default.asp)

Usted puede ver el siguiente marco conceptual sobre Google Charts:
  - [Vídeo explicativo de tablas y gráficas Google Charts](https://www.youtube.com/watch?v=QRN91T8rqW4&feature=emb_logo)
  - [API Google Charts](https://developers.google.com/chart)


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

El proyecto se desplegó en el servidor madarme.co y para ver el demo de la aplicación puede dirigirse a: [Estadísticas covid-19](http://ufps22.madarme.co/estadistica_covid/index.html).


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
