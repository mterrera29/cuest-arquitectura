export const idw = {
  semana1: [
    {
      texto: '¿Qué elementos pueden tener las páginas web además de texto?',
      opciones: [
        'Imágenes',
        'Videos',
        'Fibra Óptica',
        'Tablas',
        'Enlaces a otras páginas',
      ],
      multiple: true,
      correcta: [0, 1, 3, 4],
      respuestaCorrecta: 'Imágenes, Videos, Enlaces a otras páginas, Tablas',
    },
    {
      texto:
        'Seleccionar cuáles de las siguientes capas componen el protocolo TCP/IP.',
      opciones: [
        'Capa de Aplicación',
        'Capa de Enlace',
        'Capa de Red',
        'Capa de Internet',
        'Capa Física',
      ],
      multiple: true,
      correcta: [0, 1, 3],
      respuestaCorrecta: 'Capa de Aplicación, Capa de Internet, Capa de Enlace',
    },
    {
      texto: 'Indicar las características correctas de la llamada Web 1.0',
      opciones: [
        'El webmaster se encargaba de las modificaciones sobre los sitios web.',
        'Los usuarios podían realizar modificaciones sobre los sitios web.',
        'Sitios web estáticos.',
        'Muy comunes en la década del 2000.',
      ],
      multiple: true,
      correcta: [0, 2],
      respuestaCorrecta:
        'El webmaster se encargaba de las modificaciones sobre los sitios web, Sitios web estáticos.',
    },
    {
      texto: 'Una página web se compone de uno o más sitios web.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'Un sitio web no puede tener contenido dinámico.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'Siempre es necesario contar con un servidor DNS para poder acceder un sitio web desde un navegador. Incluso si el sitio se accede en una red local de computadoras.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'La capa Internet resuelve problemas como la creación, transmisión y recepción de paquetes.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'La siguiente dirección IP 8.8.8.8, ¿es IPv4?',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'La siguiente dirección IP: 192.168.1.270 es una dirección IP válida?',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'En el protocolo TCP/IP la capa de Aplicación posee menor nivel abstracción que el resto de las capas.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'Los programadores o desarrolladores suelen trabajar en la capa de Aplicación.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'En la capa de Transporte en caso que se pierda un paquete. El emisor lo retransmite hacia el receptor.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
  ],
  semana2: [
    {
      texto:
        '¿Qué método/s de solicitud HTTP se utiliza/n para enviar datos al servidor?',
      opciones: ['GET', 'POST', 'PUT', 'DELETE'],
      multiple: true,
      correcta: [1, 2],
      respuestaCorrecta: 'POST, PUT',
    },
    {
      texto:
        '¿Qué línea de encabezado en una solicitud HTTP identifica al software del navegador?',
      opciones: ['Accept-Encoding', 'Content-Type', 'User-Agent', 'Server'],
      correcta: 2,
      respuestaCorrecta: 'User-Agent',
    },
    {
      texto:
        'El navegador interpreta el HTML, imágenes y otros recursos para mostrar la página. Este proceso se llama:',
      opciones: ['Hosting', 'Renderizado', 'Caching', 'Parsing'],
      correcta: 1,
      respuestaCorrecta: 'Renderizado',
    },
    {
      texto: '¿Qué función principal tiene un navegador web?',
      opciones: [
        'Ejecutar scripts del lado del servidor.',
        'Gestionar archivos en el sistema operativo.',
        'Procesar consultas de bases de datos.',
        'Interpretar y renderizar páginas web.',
      ],
      correcta: 3,
      respuestaCorrecta: 'Interpretar y renderizar páginas web.',
    },
    {
      texto: 'Las IP o nombre de dominios NO son equivalentes.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'HTTP/11 permite la reutilización de conexiones TCP.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Un servidor puede atender a varios clientes simultáneamente.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Un servidor web puede ofrecer varios servicios a través de un puerto diferente para cada servicio.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'El método HEAD solicita una respuesta sin cuerpo, útil para comprobar la existencia de un recurso.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        '¿Qué método de solicitud HTTP se utiliza para obtener datos de un servidor?',
      opciones: ['GET', 'DELETE', 'PUT', 'POST'],
      correcta: 0,
      respuestaCorrecta: 'GET',
    },
    {
      texto: '¿Cuál fue el principal avance que trajo HTTP/2?',
      opciones: [
        'Transferencia sin encabezados',
        'Introducción de TLS 1.3',
        'Conexiones inseguras',
        'Multiplexado y compresión de encabezados',
      ],
      correcta: 3,
      respuestaCorrecta: 'Multiplexado y compresión de encabezados',
    },
    {
      texto:
        "¿Cuál es el objetivo del encabezado 'Host' en una solicitud HTTP?",
      opciones: [
        'Indicar el nombre del servidor al que se desea acceder.',
        'Especificar el tipo de contenido.',
        'Identificar al navegador cliente.',
        'Indicar la longitud del contenido.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Indicar el nombre del servidor al que se desea acceder.',
    },
    {
      texto:
        '¿Cuál de los siguientes códigos HTTP indica un error del cliente?',
      opciones: ['3xx', '2xx', '5xx', '4xx'],
      correcta: 3,
      respuestaCorrecta: '4xx',
    },
    {
      texto: 'HTTP fue desarrollado por:',
      opciones: [
        'Microsoft y Mozilla',
        'Java Community Process',
        'Google y Oracle',
        'W3C e IETF',
      ],
      correcta: 3,
      respuestaCorrecta: 'W3C e IETF',
    },
    {
      texto:
        '¿Qué método HTTP se utiliza para realizar modificaciones parciales sobre un recurso?',
      opciones: ['GET', 'PUT', 'PATCH', 'HEAD'],
      correcta: 2,
      respuestaCorrecta: 'PATCH',
    },
    {
      texto:
        'HTTPS es exactamente igual que HTTP pero añade compresión de datos.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿En el modelo cliente-servidor la comunicación se da por Internet?',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        '¿Cuál de los siguientes puertos corresponde típicamente a un servidor web?',
      opciones: ['443', '80', '21', '3306'],
      correcta: 1,
      respuestaCorrecta: '80',
    },
    {
      texto:
        'En el protocolo HTTP el método GET se utiliza típicamente para enviar información desde un formulario.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'Los servidores web solo atienden a 1 cliente a la vez, no soportan concurrencia de solicitudes.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: '¿Cuál de los siguientes no es un servidor web?',
      opciones: ['Nginx', 'Apache', 'IIS', 'MySQL'],
      correcta: 3,
      respuestaCorrecta: 'MySQL',
    },
    {
      texto:
        '¿Cuál de las siguientes tecnologías se utiliza para estructurar el contenido de una página web?',
      opciones: ['CSS', 'HTTP', 'HTML', 'JavaScript'],
      correcta: 2,
      respuestaCorrecta: 'HTML',
    },
    {
      texto:
        'Si necesitamos que el sitio web reciba información personal como contraseñas, lo más indicado es utilizar el protocolo HTTPs.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Indicar cuales de los siguientes son servidores webs.',
      opciones: [
        'NodeJS',
        'Apache Tomcat',
        'Apache HTTP Server Proyect',
        'Internet Information Services',
      ],
      multiple: true,
      correcta: [1, 2, 3],
      respuestaCorrecta:
        'Apache Tomcat, Internet Information Services, Apache HTTP Server Proyect',
    },
    {
      texto:
        '¿Cuáles de las siguientes opciones son métodos del protocolo HTTP?',
      opciones: ['SELECT', 'GET', 'TRACE', 'PUT', 'POST'],
      multiple: true,
      correcta: [1, 2, 3, 4],
      respuestaCorrecta: 'POST, PUT, TRACE, GET',
    },
    {
      texto:
        '¿Cuál de las siguientes opciones describe mejor el proceso de renderizado de una página web?',
      opciones: [
        'Compilación de código JavaScript en código máquina.',
        'Transformación de código HTML, CSS y JavaScript en una representación visual en pantalla.',
        'Ejecución de consultas en una base de datos.',
        'Conversión de código fuente a bytecode.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Transformación de código HTML, CSS y JavaScript en una representación visual en pantalla.',
    },
    {
      texto:
        'En el protocolo HTTP los mensajes son cifrados es por esto que es considerado muy seguro.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'En una respuesta HTTP, el código 500 indica:',
      opciones: [
        'Redirección temporal',
        'Éxito de la solicitud',
        'Error interno del servidor',
        'Recurso no encontrado',
      ],
      correcta: 2,
      respuestaCorrecta: 'Error interno del servidor',
    },
    {
      texto:
        'Un mensaje HTTP de respuesta con código de estado 500 en general hace referencia a...',
      opciones: [
        'Redirección. El recurso solicitado se encuentra en otra dirección.',
        'Éxito en general.',
        'Error en el procesamiento de la solicitud del lado del servidor.',
        'Error del lado del cliente. Como por ejemplo seguir un link a una página web inexistente.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Error en el procesamiento de la solicitud del lado del servidor.',
    },
  ],
  semana3: [
    {
      texto: 'Las etiquetas <tr>, <td> y <th> se usan en:',
      opciones: ['Listas', 'Formularios', 'Enlaces', 'Tablas'],
      correcta: 3,
      respuestaCorrecta: 'Tablas',
    },
    {
      texto: 'Son elementos semánticos',
      opciones: [
        '<header>',
        '<main>',
        '<section>',
        '<article>',
        'Todos los anteriores',
        'Ninguno de los anteriores',
      ],
      correcta: 4,
      respuestaCorrecta: 'Todos los anteriores',
    },
    {
      texto:
        'Cuál de las siguientes opciones representa un elemento vacío en HTML?',
      opciones: ['<strong>', '<img>', '<em>', '<p>'],
      correcta: 1,
      respuestaCorrecta: '<img>',
    },
    {
      texto:
        'El elemento <br/> es un elemento contenedor dentro del cual se pueden anidar otros elementos',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'Cuál NO es una ventaja del uso de elementos semánticos en HTML5?',
      opciones: [
        'Permiten cambiar el diseño sin necesidad de CSS',
        'Mejoran la accesibilidad',
        'Facilitan la mantenibilidad',
        'Ayudan a los motores de búsqueda',
      ],
      correcta: 0,
      respuestaCorrecta: 'Permiten cambiar el diseño sin necesidad de CSS',
    },
    {
      texto: 'Cuál es el propósito de la declaración <!DOCTYPE html>?',
      opciones: [
        'Mostrar el título de la página',
        'Indicar al navegador la versión de HTML utilizada',
        'Iniciar el cuerpo del documento',
        'Cargar hojas de estilo externas',
      ],
      correcta: 1,
      respuestaCorrecta: 'Indicar al navegador la versión de HTML utilizada',
    },
    {
      texto:
        'Cuál de estas etiquetas es específica de HTML5 y aporta semántica?',
      opciones: ['div', 'br', 'section', 'font'],
      correcta: 2,
      respuestaCorrecta: 'section',
    },
    {
      texto: '¿Qué significa HTML?',
      opciones: [
        'HyperText Markup Language',
        'HyperText Machine Language',
        'HighText Markup Language',
        'High Transfer Machine Language',
      ],
      correcta: 0,
      respuestaCorrecta: 'HyperText Markup Language',
    },
    {
      texto:
        'La etiqueta <figure> puede contener gráficos, tablas, código o imágenes.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Son elementos semánticos',
      opciones: [
        '<div>',
        '<span>',
        '<head>',
        '<body>',
        'Todos los anteriores',
        'Ninguno de los anteriores',
      ],
      correcta: 5,
      respuestaCorrecta: 'Ninguno de los anteriores',
    },
    {
      texto:
        'La etiqueta <header> pertenece al cuerpo del documento y no debe confundirse con <head>.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Para mostrar texto en cursiva se puede utilizar el elemento <i>texto</i>',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Los elementos HTML:',
      opciones: [
        'Todas las anteriores.',
        'No pueden contener otros elementos.',
        'Determinan cómo se conforma una página web y sus secciones.',
        'Ninguna de las anteriores.',
        'Siempre tienen un tag o etiqueta de apertura y de cierre.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Determinan cómo se conforma una página web y sus secciones.',
    },
    {
      texto: 'Para desplegar una lista no ordenada se utiliza <ul></ul>',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'En un página web desarrollada con HTML la única forma de implementar un enlace a otro recurso es a través del elemento <a>',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'Los elementos block-level (nivel de bloque) siempre generan un salto de línea antes y después.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Un elemento HTML solo puede contener 255 elementos HTML',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'Las etiquetas <b>, <i>, <u> son recomendadas en HTML5.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'Son tipos MIME válidos:',
      opciones: [
        'application/json',
        'text/html',
        'text/css',
        'video/mp4',
        'image/png',
        'Todos los anteriores.',
        'Ninguno de los anteriores.',
      ],
      correcta: 5,
      respuestaCorrecta: 'Todos los anteriores.',
    },
    {
      texto:
        'Es recomendable utilizar <b>texto</b> e <i>texto</i> para delimitar texto en negrita y cursiva',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: '¿Cuál de las siguientes afirmaciones es correcta sobre <span>?',
      opciones: [
        'Se utiliza exclusivamente para agrupar títulos.',
        'Es un contenedor en línea sin significado semántico.',
        'Genera un salto de línea automático.',
        'Sirve para representar contenido multimedia.',
      ],
      correcta: 1,
      respuestaCorrecta: 'Es un contenedor en línea sin significado semántico.',
    },
    {
      texto: '¿Para qué se usa principalmente la etiqueta <aside>?',
      opciones: [
        'Para información secundaria o complementaria.',
        'Para enlazar con archivos de estilo CSS.',
        'Para insertar scripts en la página.',
        'Para encabezados principales.',
      ],
      correcta: 0,
      respuestaCorrecta: 'Para información secundaria o complementaria.',
    },
    {
      texto:
        'El atributo url de un elemento <a> nos permite identificar la página destino del enlace.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'El contenedor principal de todo documento HTML es:',
      opciones: ['<meta>', '<body>', '<head>', '<html>'],
      correcta: 3,
      respuestaCorrecta: '<html>',
    },
    {
      texto:
        '¿Qué etiqueta permite preformatear texto y mostrarlo con espaciado y saltos de línea tal como está en el código fuente?',
      opciones: ['<span>', '<pre>', '<b>', '<code>'],
      correcta: 1,
      respuestaCorrecta: '<pre>',
    },
    {
      texto: 'Como alternativa a los elementos <img> se puede usar <picture>',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'La etiqueta <head> contiene el contenido principal del sitio que se muestra al usuario.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Cuál de los siguientes elementos es usado para insertar un enlace en HTML?',
      opciones: ['<url>', '<link>', '<a>', '<href>'],
      correcta: 2,
      respuestaCorrecta: '<a>',
    },
    {
      texto: 'La etiqueta <meta> se utiliza para insertar imágenes en HTML.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: '¿Cuál es el propósito de la declaración <!DOCTYPE html>?',
      opciones: [
        'Mostrar el título de la página',
        'Indicar al navegador la versión de HTML utilizada',
        'Cargar hojas de estilo externas',
        'Iniciar el cuerpo del documento',
      ],
      correcta: 1,
      respuestaCorrecta: 'Indicar al navegador la versión de HTML utilizada',
    },
    {
      texto:
        '¿Cuál de estas etiquetas es específica de HTML5 y aporta semántica?',
      opciones: ['div', 'br', 'font', 'section'],
      correcta: 3,
      respuestaCorrecta: 'section',
    },
    {
      texto: 'HTML fue desarrollado originalmente como un subconjunto de SGML.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'El contenido que se visualiza en el viewport del navegador va dentro del elemento <head>',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: '¿Qué atributo del tag <a> permite especificar la URL de destino?',
      opciones: ['title', 'name', 'href', 'target'],
      correcta: 2,
      respuestaCorrecta: 'href',
    },
    {
      texto:
        'Para mostrar texto en negrita se puede utilizar el elemento <b>texto</b>',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Se pueden abrir aplicaciones por defecto del sistema (como el cliente de correo) a través de elementos <a>',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Un tipo MIME es un tipo de página web',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'Las listas de tipo «ul» son listas ordenadas.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'Los elementos semánticos indican qué contienen y no cómo deben formatearse.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'La etiqueta <div> no tiene un significado semántico asociado.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        '¿Cuál de los siguientes elementos se utiliza para definir una lista ordenada?',
      opciones: ['<li>', '<ul>', '<ol>', '<menu>'],
      correcta: 2,
      respuestaCorrecta: '<ol>',
    },
    {
      texto: '¿Cuál de las siguientes afirmaciones es incorrecta?',
      opciones: [
        'XHTML es una tecnología que permite construir páginas web',
        'XHTML es una tecnología mucho más avanzada que HTML5',
        'XHTML está basado en XML y es más restrictivo',
        'Todos los elementos de XHTML se pueden usar en HTML5',
      ],
      correcta: 1,
      respuestaCorrecta: 'XHTML es una tecnología mucho más avanzada que HTML5',
    },
    {
      texto: 'El término página web es sinónimo de sitio web',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Cuál de las siguientes afirmaciones del elemento <select> es incorrecta?',
      opciones: [
        'Las opciones disponibles deben listarse dentro de elementos de tipo <li>',
        'El tamaño del elemento se adapta al desplegarse las opciones que tienen textos muy largos',
        'Permite escribir texto dentro',
        'La opción seleccionada es marcada con el atributo selected',
      ],
      multiple: true,
      correcta: [0, 2],
      respuestaCorrecta:
        'Permite escribir texto dentro, Las opciones disponibles deben listarse dentro de elementos de tipo <li>',
    },
    {
      texto:
        'El atributo target de la etiqueta <a> permite especificar en qué ventana se abrirá el enlace.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
  ],
  semana4: [
    {
      texto:
        '¿Cuáles propiedades permiten modificar los bordes de un elemento?',
      opciones: [
        'border-color',
        'border-radius',
        'border-style',
        'border-align',
      ],
      multiple: true,
      correcta: [0, 1, 2],
      respuestaCorrecta: 'border-style, border-radius, border-color',
    },
    {
      texto: 'El Box Model de CSS incluye las siguientes partes:',
      opciones: [
        'Padding, Border, Container, Font',
        'Height, Width, Radius, Margin',
        'Block, Inline, Grid, Flex',
        'Content, Padding, Border, Margin',
      ],
      correcta: 3,
      respuestaCorrecta: 'Content, Padding, Border, Margin',
    },
    {
      texto:
        'Módulos CSS 3 se divide en módulos que pueden estar en distintos estados de desarrollo.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: "¿Para qué sirve la propiedad 'margin'?",
      opciones: [
        'Controla la opacidad de un fondo',
        'Define el espaciado entre letras',
        'Define el espacio exterior de un elemento',
        'Establece la rotación de un objeto',
      ],
      correcta: 2,
      respuestaCorrecta: 'Define el espacio exterior de un elemento',
    },
    {
      texto:
        'Si quiero que todos los párrafos de mi sitio web aparezcan en azul debo usar',
      opciones: [
        'font-color: blue;',
        'background-color: blue;',
        'font: 16px blue solid;',
        'Cualquiera de las anteriores',
        'Ninguna de las anteriores',
      ],
      correcta: 4,
      respuestaCorrecta: 'Ninguna de las anteriores',
    },
    {
      texto: '¿Cuáles son unidades relativas válidas en CSS?',
      opciones: ['rem', '%', 'em', 'cm'],
      multiple: true,
      correcta: [0, 1, 2],
      respuestaCorrecta: 'em, rem, %',
    },
    {
      texto: 'El box-model puede ser cambiado a través de propiedades CSS',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Las viñetas de los elementos <li> las quito usando...',
      opciones: [
        'list-style: none',
        'bullets: no-bullets',
        'display: none',
        'Ninguno de los anteriores',
      ],
      correcta: 0,
      respuestaCorrecta: 'list-style: none',
    },
    {
      texto:
        '¿Cuáles de las siguientes opciones corresponde a una ventaja de usar CSS?',
      opciones: [
        'Simplificación del mantenimiento del sitio',
        'Mayor velocidad de descarga',
        'Control de acceso a la base de datos',
        'Validación de formularios',
      ],
      multiple: true,
      correcta: [0, 1],
      respuestaCorrecta:
        'Simplificación del mantenimiento del sitio, Mayor velocidad de descarga',
    },
    {
      texto:
        '¿Cuáles de las siguientes propiedades son válidas para manejar el margen de un elemento?',
      opciones: ['margin-top', 'margin', 'padding-right', 'margin-left'],
      multiple: true,
      correcta: [0, 1, 3],
      respuestaCorrecta: 'margin-top, margin-left, margin',
    },
    {
      texto: '¿Cuál de los siguientes selectores tiene mayor especificidad?',
      opciones: ['.clase', '#id', 'etiqueta', '::pseudo-elemento'],
      correcta: 1,
      respuestaCorrecta: '#id',
    },
    {
      texto:
        "¿Cuál es la diferencia entre 'visibility: hidden' y 'display: none'?",
      opciones: [
        'visibility: hidden ocupa espacio, display: none no ocupa espacio',
        'display: none ocupa espacio, visibility: hidden no ocupa espacio',
        'Ambos ocupan espacio pero visibility: hidden es más eficiente',
        'No hay diferencia, son equivalentes',
      ],
      correcta: 0,
      respuestaCorrecta:
        'visibility: hidden ocupa espacio, display: none no ocupa espacio',
    },
    {
      texto: '¿Qué propiedad CSS se utiliza para crear un diseño flexible?',
      opciones: [
        'flexbox',
        'display: flex',
        'flex-direction',
        'Todas las anteriores',
      ],
      correcta: 3,
      respuestaCorrecta: 'Todas las anteriores',
    },
    {
      texto:
        "¿Cuál es el orden correcto de la propiedad 'margin' cuando se usa shorthand?",
      opciones: [
        'top, right, bottom, left',
        'left, right, top, bottom',
        'top, bottom, left, right',
        'bottom, top, left, right',
      ],
      correcta: 0,
      respuestaCorrecta: 'top, right, bottom, left',
    },
    {
      texto: "¿Qué hace la propiedad 'position: absolute'?",
      opciones: [
        'Posiciona el elemento relativo a su contenedor más cercano con position: relative',
        'Posiciona el elemento relativo al viewport',
        'Posiciona el elemento relativo al documento completo',
        'Posiciona el elemento relativo a su posición normal',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Posiciona el elemento relativo a su contenedor más cercano con position: relative',
    },
    {
      texto: "¿Cuál es la diferencia entre 'em' y 'rem'?",
      opciones: [
        'em es relativo al elemento padre, rem es relativo al elemento raíz',
        'em es relativo al elemento raíz, rem es relativo al elemento padre',
        'Ambos son relativos al elemento padre',
        'Ambos son relativos al elemento raíz',
      ],
      correcta: 0,
      respuestaCorrecta:
        'em es relativo al elemento padre, rem es relativo al elemento raíz',
    },
    {
      texto:
        '¿Qué propiedad se usa para cambiar el orden de los elementos en flexbox?',
      opciones: ['flex-order', 'order', 'flex-direction', 'flex-align'],
      correcta: 1,
      respuestaCorrecta: 'order',
    },
    {
      texto: "¿Cuál es el valor por defecto de la propiedad 'position'?",
      opciones: ['static', 'relative', 'absolute', 'fixed'],
      correcta: 0,
      respuestaCorrecta: 'static',
    },
    {
      texto: "¿Qué hace 'z-index'?",
      opciones: [
        'Controla el orden de apilamiento de elementos posicionados',
        'Controla el tamaño del elemento en el eje Z',
        'Controla la rotación 3D del elemento',
        'Controla la profundidad de campo',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Controla el orden de apilamiento de elementos posicionados',
    },
    {
      texto:
        'Para separar verticalmente un elemento de los que siguen hacia abajo lo mejor es usar...',
      opciones: [
        'margin',
        'padding',
        'posicionamiento absoluto',
        'flexbox',
        'Todas las anteriores',
      ],
      correcta: 0,
      respuestaCorrecta: 'margin',
    },
    {
      texto:
        'La propiedad background permite que configuremos como fondo de un elemento',
      opciones: [
        'Un color',
        'Una imagen',
        'Un gradiente',
        'Todos los anteriores.',
        'Ninguno de los anteriores.',
      ],
      correcta: 3,
      respuestaCorrecta: 'Todos los anteriores.',
    },
    {
      texto:
        '¿Cuál es el símbolo que se utiliza para declarar un selector ID en CSS?',
      opciones: ['#', '@', '.', '!'],
      correcta: 0,
      respuestaCorrecta: '#',
    },
    {
      texto:
        'Según el efecto cascada, ¿qué criterios se consideran para determinar qué estilo aplicar?',
      opciones: [
        'Ubicación del estilo (ínline, interno o externo)',
        'Nombre del archivo CSS',
        "Uso de '!important'",
        'Especificidad del selector',
      ],
      multiple: true,
      correcta: [0, 2, 3],
      respuestaCorrecta:
        "Especificidad del selector, Ubicación del estilo (ínline, interno o externo), Uso de '!important'",
    },
    {
      texto: '¿Cuál de estas medidas CSS es inválida?',
      opciones: ['1.5rem', '1pc', '1.5cm', '0.5mts'],
      correcta: 3,
      respuestaCorrecta: '0.5mts',
    },
    {
      texto: '¿Cuál propiedad CSS define el alineamiento del texto?',
      opciones: ['text-align', 'text-spacing', 'line-style', 'font-weight'],
      correcta: 0,
      respuestaCorrecta: 'text-align',
    },
    {
      texto:
        'Las propiedades de margen (margin) pueden tener valores negativos',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: '¿Cuál propiedad permite redondear las esquinas de un borde?',
      opciones: ['corner-shape', 'border-radius', 'border-style', 'edge-curve'],
      correcta: 1,
      respuestaCorrecta: 'border-radius',
    },
    {
      texto:
        '¿Qué propiedad CSS permite definir el espacio interno entre el contenido y el borde?',
      opciones: ['padding', 'gap', 'spacing', 'margin'],
      correcta: 0,
      respuestaCorrecta: 'padding',
    },
    {
      texto: '¿Qué propiedades CSS están relacionadas con la fuente del texto?',
      opciones: ['font-family', 'text-indent', 'font-size', 'font-weight'],
      multiple: true,
      correcta: [0, 2, 3],
      respuestaCorrecta: 'font-size, font-family, font-weight',
    },
    {
      texto:
        "El selector 'menu' aplica estilos a todos los elementos con ID igual a 'menu'.",
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Cuál es el símbolo que se utiliza para declarar un selector de clase en CSS?',
      opciones: ['$', '@', '.'],
      correcta: 2,
      respuestaCorrecta: '.',
    },
    {
      texto: 'Para reutilizar estilos es conveniente hacer uso de...',
      opciones: ['CSS importado', 'CSS incorporado', 'CSS en línea'],
      correcta: 0,
      respuestaCorrecta: 'CSS importado',
    },
    {
      texto: '¿Cuál es el principal objetivo de CSS?',
      opciones: [
        'Controlar la lógica del servidor',
        'Separar la presentación del contenido HTML',
        'Validar formularios de usuario',
        'Agregar contenido dinámico al sitio',
      ],
      correcta: 1,
      respuestaCorrecta: 'Separar la presentación del contenido HTML',
    },
    {
      texto:
        'Las pseudoclases permiten definir estilos en función del estado del elemento.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: "La unidad 'rem' se refiere a:",
      opciones: [
        'A la altura de la letra x',
        'A la fuente base del documento, sin depender del elemento padre',
        'Una medida absoluta',
        'Al tamaño relativo al ancho del dispositivo',
      ],
      correcta: 1,
      respuestaCorrecta:
        'A la fuente base del documento, sin depender del elemento padre',
    },
    {
      texto: '¿Cuáles son formas válidas de conectar CSS a un documento HTML?',
      opciones: [
        'CSS en línea (inline)',
        'CSS externo (importado)',
        'CSS vinculado por atributo data-style',
        'CSS incorporado (interno)',
      ],
      multiple: true,
      correcta: [0, 1, 3],
      respuestaCorrecta:
        'CSS externo (importado), CSS incorporado (interno), CSS en línea (inline)',
    },
    {
      texto: '¿Cuáles son unidades absolutas válidas en CSS?',
      opciones: ['pt', 'in', 'em', 'cm'],
      multiple: true,
      correcta: [0, 1, 3],
      respuestaCorrecta: 'cm, in, pt',
    },
    {
      texto:
        "La pseudoclase ':hover' se aplica cuando el usuario hace clic en un elemento.",
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Cuál de las siguientes propiedades es usada para definir el tipo de fuente?',
      opciones: ['text-align', 'font-family', 'word-wrap', 'font-style'],
      correcta: 1,
      respuestaCorrecta: 'font-family',
    },
  ],
  semana5: [
    {
      texto: 'Son elementos semánticos',
      opciones: [
        '«header»',
        '«main»',
        '«section»',
        '«article»',
        '«aside»',
        'Todos los anteriores',
        'Ninguno de los anteriores',
      ],
      correcta: 5,
      respuestaCorrecta: 'Todos los anteriores',
    },
    {
      texto:
        'Flexbox permite ajustar automáticamente el tamaño de los elementos para adaptarse a diferentes tamaños de pantalla.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Para alinear elementos a izquierda o derecha puedo utilizar las propiedades',
      opciones: [
        'float',
        'position',
        'flexbox y justify-content',
        'Todas las anteriores',
        'Ninguna de las anteriores',
      ],
      multiple: true,
      correcta: [0, 2],
      respuestaCorrecta: 'float, flexbox y justify-content',
    },
    {
      texto:
        '¿Cuál NO es una ventaja del uso de elementos semánticos en HTML5?',
      opciones: [
        'Mejoran la accesibilidad.',
        'Ayudan a los motores de búsqueda.',
        'Permiten cambiar el diseño sin necesidad de CSS.',
        'Facilitan la mantenibilidad.',
      ],
      correcta: 2,
      respuestaCorrecta: 'Permiten cambiar el diseño sin necesidad de CSS.',
    },
    {
      texto:
        'Cuando un elemento tiene display: none, sigue ocupando espacio en el layout.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Qué valor de display hace que un elemento se comporte como bloque pero sin romper el flujo de línea?',
      opciones: ['none', 'inline-block', 'block', 'inline'],
      correcta: 1,
      respuestaCorrecta: 'inline-block',
    },
    {
      texto:
        'Un elemento con display: inline-block conserva propiedades de bloque pero se comporta como elemento en línea.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        '¿En relación a qué se posiciona un elemento con position: absolute?',
      opciones: [
        'Al centro de la pantalla.',
        'A su posición anterior.',
        'Al viewport.',
        'A su contenedor posicionado más cercano.',
      ],
      correcta: 3,
      respuestaCorrecta: 'A su contenedor posicionado más cercano.',
    },
    {
      texto: '¿Qué propiedad define un contenedor grid en CSS?',
      opciones: [
        'container: grid',
        'grid-mode: on',
        'display: grid',
        'position: grid',
      ],
      correcta: 2,
      respuestaCorrecta: 'display: grid',
    },
    {
      texto: '¿Qué característica tiene position: fixed?',
      opciones: [
        'Se mueve con el contenido del documento.',
        'Permanece en la misma posición aunque se haga scroll.',
        'Se comporta como un elemento flotante.',
        'Solo aplica dentro de Flexbox.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Permanece en la misma posición aunque se haga scroll.',
    },
    {
      texto:
        'Con position: relative se puede mover un elemento desde su posición original.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'La etiqueta <header> pertenece al cuerpo del documento y no debe confundirse con <head>.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Los elementos semánticos indican qué contienen y no cómo deben formatearse.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Sin CSS, los elementos HTML se disponen en orden de arriba hacia abajo y de izquierda a derecha.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: '¿Cuál de estas afirmaciones es cierta?',
      opciones: [
        'Grid es bidimensional y Flexbox es unidimensional.',
        'Flexbox y Grid no son compatibles entre sí.',
        'Grid no necesita contenedores.',
        'Flexbox solo funciona con imágenes.',
      ],
      correcta: 0,
      respuestaCorrecta: 'Grid es bidimensional y Flexbox es unidimensional.',
    },
    {
      texto: '¿Cuál NO es un tipo de posicionamiento CSS válido?',
      opciones: ['relative', 'fixed', 'static', 'external'],
      correcta: 3,
      respuestaCorrecta: 'external',
    },
    {
      texto: 'Cuál de las siguientes afirmaciones de Flexbox es incorrecta',
      opciones: [
        'Flexbox es specialmente útil en para la creación de sitios web adaptativos o responsive',
        'Con Flexbox se pueden crear contenedores que dispongan los elementos vertical u horizontalmente',
        'Flexbox es la única forma de desplegar elementos de bloque en una sola fila sin tener que agregar estilos adicionales a los ítems contenidos.',
        'Antes de Flexbox se debía utilizar combinaciones de float y clear para desplegar elementos alineados horizontalmente',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Flexbox es la única forma de desplegar elementos de bloque en una sola fila sin tener que agregar estilos adicionales a los ítems contenidos.',
    },
    {
      texto:
        '¿Qué propiedad se usa en los ítems flex para definir su crecimiento?',
      opciones: ['grow-size', 'flex-grow', 'flex-align', 'item-grow'],
      correcta: 1,
      respuestaCorrecta: 'flex-grow',
    },
    {
      texto:
        '¿Cuál de los siguientes elementos es de nivel de bloque por defecto?',
      opciones: ['img', 'div', 'span', 'a'],
      correcta: 1,
      respuestaCorrecta: 'div',
    },
    {
      texto: '¿Para qué se usa principalmente la etiqueta <aside>?',
      opciones: [
        'Para información secundaria o complementaria.',
        'Para encabezados principales.',
        'Para enlazar con archivos de estilo CSS.',
        'Para insertar scripts en la página.',
      ],
      correcta: 0,
      respuestaCorrecta: 'Para información secundaria o complementaria.',
    },
    {
      texto:
        '¿Cuál de estas etiquetas es específica de HTML5 y aporta semántica?',
      opciones: ['div', 'section', 'br', 'font'],
      correcta: 1,
      respuestaCorrecta: 'section',
    },
    {
      texto:
        'La etiqueta <figure> puede contener gráficos, tablas, código o imágenes.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Las propiedades margín y padding permiten alterar la posición de los elementos en el flujo del documento.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'La propiedad z-index puede tomar valores negativos.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Hago que un elemento sea invisible usando',
      opciones: [
        'visibility: hidden',
        'display: none',
        'Todas las anteriores.',
        'Todas las anteriores, pero visibility: hidden reserva el espacio.',
      ],
      correcta: 3,
      respuestaCorrecta:
        'Todas las anteriores, pero visibility: hidden reserva el espacio.',
    },
    {
      texto:
        'Los elementos con position: static responden a las propiedades top, left, etc.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'La etiqueta <div> no tiene un significado semántico asociado.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: '¿Cuál de las siguientes afirmaciones es correcta sobre <span>?',
      opciones: [
        'Es un contenedor en línea sin significado semántico.',
        'Se utiliza exclusivamente para agrupar títulos.',
        'Sirve para representar contenido multimedia.',
        'Genera un salto de línea automático.',
      ],
      correcta: 0,
      respuestaCorrecta: 'Es un contenedor en línea sin significado semántico.',
    },
    {
      texto:
        '¿Qué propiedades se usan para establecer filas y columnas en Grid?',
      opciones: [
        'row-template y col-template',
        'template-columns y template-rows',
        'grid-positioning',
        'grid-template-columns y grid-template-rows',
      ],
      correcta: 3,
      respuestaCorrecta: 'grid-template-columns y grid-template-rows',
    },
    {
      texto:
        'La propiedad float permite que el texto fluya alrededor de una imagen.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: '¿Qué hace la propiedad clear?',
      opciones: [
        'Fija el tamaño del contenedor.',
        'Establece la opacidad del elemento.',
        'Aumenta el contraste del texto.',
        'Evita que un elemento se ubique adyacente a uno flotado.',
      ],
      correcta: 3,
      respuestaCorrecta:
        'Evita que un elemento se ubique adyacente a uno flotado.',
    },
    {
      texto:
        'Para alinear elementos a izquierda o derecha puedo utilizar las propiedades',
      opciones: [
        'float',
        'position',
        'flexbox y justify-content',
        'Todas las anteriores',
        'Ninguna de las anteriores',
      ],
      multiple: true,
      correcta: [0, 2],
      respuestaCorrecta: 'float, flexbox y justify-content',
    },
    {
      texto: 'Son elementos semánticos',
      opciones: [
        '<div>',
        '<span>',
        '<head>',
        '<body>',
        'Todos los anteriores',
        'Ninguno de los anteriores',
      ],
      correcta: 5,
      respuestaCorrecta: 'Ninguno de los anteriores',
    },
  ],
  semana6: [
    {
      texto:
        '¿Qué técnica permite separar reglas CSS en distintos archivos según el tamaño de pantalla?',
      opciones: [
        'Cambio de tema manual',
        'Multiples archivos HTML',
        'Uso de JavaScript dinámico',
        'Uso de media queries en los links de CSS',
      ],
      correcta: 3,
      respuestaCorrecta: 'Uso de media queries en los links de CSS',
    },
    {
      texto:
        'El enfoque mobile-first propone diseñar primero para dispositivos de escritorio y luego adaptar para móviles.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'El elemento HTML <picture> permite servir diferentes versiones de una imagen según el tamaño de pantalla.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Las media queries permiten aplicar reglas CSS específicas según las características del dispositivo.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        '¿Cuál de las siguientes afirmaciones es verdadera respecto a Bootstrap 5?',
      opciones: [
        'Sigue utilizando jQuery como dependencia principal',
        'Elimina el sistema de rejillas',
        'Recupera soporte para IE10',
        'Introduce el prefijo data-bs-',
      ],
      correcta: 3,
      respuestaCorrecta: 'Introduce el prefijo data-bs-',
    },
    {
      texto: '¿Cuántas columnas tiene el sistema de rejillas de Bootstrap?',
      opciones: ['6', '4', '10', '12'],
      correcta: 3,
      respuestaCorrecta: '12',
    },
    {
      texto:
        '¿Cuál es un ejemplo correcto de media query para pantallas medianas?',
      opciones: [
        '@media screen-width: 768px',
        '@media screen(768px)',
        '@media (min-width: 768px)',
        '@media width >',
      ],
      multiple: true,
      correcta: [2],
      respuestaCorrecta: '@media (min-width: 768px)',
    },
    {
      texto:
        'Bootstrap es un framework que incluye herramientas tanto para front-end como para back-end.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'El diseño responsivo busca crear múltiples sitios web específicos para cada tipo de dispositivo.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Qué prefijo de clase usa Bootstrap para resoluciones mayores o iguales a 992px?',
      opciones: ['.col-md-', '.col-xxl-', '.col-lg-', '.col-xl-'],
      correcta: 2,
      respuestaCorrecta: '.col-lg-',
    },
    {
      texto: '¿Qué define el atributo width en el tag meta viewport?',
      opciones: [
        'El ancho del viewport del navegador',
        'La altura total de la pantalla',
        'El nivel de zoom inicial',
        'El ancho de la imagen principal',
      ],
      correcta: 0,
      respuestaCorrecta: 'El ancho del viewport del navegador',
    },
    {
      texto:
        '¿Qué propiedad CSS se usa para hacer que las imágenes no excedan el tamaño del contenedor?',
      opciones: [
        'min-width: 100%',
        'width: auto',
        'max-width: 100%',
        'height: 100%',
      ],
      correcta: 2,
      respuestaCorrecta: 'max-width: 100%',
    },
    {
      texto:
        'Sin establecer un viewport correcto, el navegador móvil escalará la versión de escritorio.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        '¿Cuál de los siguientes NO es un componente clave de un diseño responsivo?',
      opciones: [
        'Definición de reglas CSS con Media Queries',
        'Uso de Flexbox o Grid',
        'Escalado de imágenes',
        'Uso exclusivo de tablas HTML',
      ],
      correcta: 3,
      respuestaCorrecta: 'Uso exclusivo de tablas HTML',
    },
    {
      texto:
        'Bootstrap 5 requiere Popper.js para ciertos componentes interactivos.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
  ],
  semana7: [
    {
      texto: '¿Qué método convierte un array en un string separado por comas?',
      opciones: ['toString()', 'slice()', 'concat()', 'join(",")'],
      correcta: 3,
      respuestaCorrecta: 'join(",")',
    },
    {
      texto:
        '¿Qué resultado produce la siguiente desestructuración: [a,,b] = [1,2,3]; console.log(b);',
      opciones: ['Error de sintaxis', '3', 'undefined', '2'],
      correcta: 1,
      respuestaCorrecta: '3',
    },
    {
      texto:
        'En JavaScript da lo mismo definir un texto con comillas simples (*) o comillas dobles (**)',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'En términos de performance, el mejor lugar para colocar un elemento <script> dentro de una página HTML es',
      opciones: [
        'Al principio del elemento <body>',
        'En el elemento <header>',
        'Al final del elemento <body>',
        'En el elemento <head>',
      ],
      correcta: 2,
      respuestaCorrecta: 'Al final del elemento <body>',
    },
    {
      texto:
        'En JavaScript es indistinto utilizar null o undefined para indicar que una variable tiene asociado un valor desconocido',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        '¿Cuál de estas afirmaciones sobre el punto y coma en JavaScript es correcta?',
      opciones: [
        'Es obligatorio y no se puede omitir nunca.',
        'No es obligatorio, pero su omisión puede causar efectos secundarios.',
        'No se utiliza en JavaScript.',
        'Es necesario solo en funciones flecha.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'No es obligatorio, pero su omisión puede causar efectos secundarios.',
    },
    {
      texto:
        '¿Cuál es la propiedad que permite acceder a los argumentos pasados a una función?',
      opciones: ['args', 'parameters', 'arguments', 'params'],
      correcta: 2,
      respuestaCorrecta: 'arguments',
    },
    {
      texto: '¿Qué valor retorna typeof sobre una variable sin asignar?',
      opciones: ['"false"', '"undefined"', '"null"', '"empty"'],
      correcta: 1,
      respuestaCorrecta: '"undefined"',
    },
    {
      texto: 'En JavaScript se puede crear un objeto sin definir una clase',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: '¿Qué método de array elimina el primer elemento?',
      opciones: ['unshift()', 'pop()', 'shift()', 'splice()'],
      correcta: 2,
      respuestaCorrecta: 'shift()',
    },
    {
      texto:
        '¿Qué método se usa para encontrar la primera aparición de una subcadena?',
      opciones: ['charAt()', 'indexOf()', 'find()', 'searchIndex()'],
      correcta: 1,
      respuestaCorrecta: 'indexOf()',
    },
    {
      texto:
        "¿Cuál es la forma correcta de exportar una función llamada 'saludar' para que pueda ser importada en otro módulo?",
      opciones: [
        'exports.saludar = function() { ... }',
        'function saludar() export { ... }',
        'function saludar() export { ... }',
        'public function saludar() { ... }',
        'export function saludar() { ... }',
      ],
      correcta: 4,
      respuestaCorrecta: 'export function saludar() { ... }',
    },
    {
      texto:
        '¿Cuál de los siguientes es un operador condicional ternario en JavaScript?',
      opciones: [':?', '??', 'switch-case', 'if-else'],
      correcta: 0,
      respuestaCorrecta: '?:',
    },
    {
      texto: "¿Qué valor representa la operación 'typeof NaN' en JavaScript?",
      opciones: ['undefined', 'null', 'NaN', 'number'],
      correcta: 3,
      respuestaCorrecta: 'number',
    },
    {
      texto: 'Una arrow function (función flecha) siempre debe',
      opciones: [
        'Comenzar y finalizar con llaves ( y )',
        'Llevar return en la última sentencia',
        'Tener parámetros',
        'Todas las anteriores',
        'Ninguna de las anteriores',
      ],
      correcta: 4,
      respuestaCorrecta: 'Ninguna de las anteriores',
    },
    {
      texto:
        '¿Cuál de estas funciones solicita un valor ingresado por el usuario?',
      opciones: ['input()', 'confirm()', 'prompt()', 'alert()'],
      correcta: 2,
      respuestaCorrecta: 'prompt()',
    },
    {
      texto:
        'Un constructor en JavaScript se define utilizando el método dunder __init__()',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Cuál es la forma correcta de eliminar una propiedad de un objeto?',
      opciones: [
        'objeto.remove("propiedad");',
        'remove objeto.propiedad;',
        'delete objeto.propiedad;',
        'objeto.delete("propiedad");',
      ],
      correcta: 2,
      respuestaCorrecta: 'delete objeto.propiedad;',
    },
    {
      texto: 'Indique el incorrecto. Las funciones de callback',
      opciones: [
        'Permiten gestionar eventos',
        'Pueden ser pasadas por parámetros',
        'No pueden recibir parámetros',
        'Todas las anteriores',
        'Ninguna de las anteriores',
      ],
      correcta: 2,
      respuestaCorrecta: 'No pueden recibir parámetros',
    },
    {
      texto: 'Indique cuál de estas afirmaciones es inválida',
      opciones: [
        'En JavaScript se puede crear una función sin nombre',
        'En JavaScript se puede crear una función que tenga parámetros por defecto',
        'Con JavaScript puedo modificar la página web que inicialmente se descargó desde el navegador',
        'Todas las anteriores',
        'Ninguna de las anteriores',
      ],
      correcta: 4,
      respuestaCorrecta: 'Ninguna de las anteriores',
    },
    {
      texto: '¿Cuál de estos NO es un tipo primitivo definido en ES2015?',
      opciones: ['Number', 'Array', 'Boolean', 'String'],
      correcta: 1,
      respuestaCorrecta: 'Array',
    },
    {
      texto:
        'En JavaScript da lo mismo verificar la igualdad de dos valores utilizando == o ===',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        "¿Cómo se importa una función llamada 'saludar' desde el archivo 'funciones.js' en un módulo?",
      opciones: [
        'use saludar from "./funciones.js";',
        'import saludar as "./funciones.js";',
        "require('./funciones.js').saludar;",
        'import { saludar } from "./funciones.js";',
      ],
      correcta: 3,
      respuestaCorrecta: 'import { saludar } from "./funciones.js";',
    },
    {
      texto: '¿Cuál de estos bloques es utilizado para manejar excepciones?',
      opciones: [
        'if / else / return',
        'test / raise / catch',
        'try / catch / finally',
        'check / error / end',
      ],
      correcta: 2,
      respuestaCorrecta: 'try / catch / finally',
    },
    {
      texto:
        '¿Qué método permite escribir directamente contenido HTML desde JavaScript?',
      opciones: [
        'console.log()',
        'html.print()',
        'document.output()',
        'document.write()',
      ],
      correcta: 3,
      respuestaCorrecta: 'document.write()',
    },
    {
      texto: '¿Qué método se usa para convertir un string en mayúsculas?',
      opciones: ['upper()', 'toCaps()', 'toUpperCase()', 'capitalize()'],
      correcta: 2,
      respuestaCorrecta: 'toUpperCase()',
    },
    {
      texto:
        '¿Cuál es una forma válida de definir e invocar inmediatamente una función anónima?',
      opciones: [
        'anonymous() { console.log("Hola"); };',
        '(function() { console.log("Hola"); })();',
        'function() => { console.log("Hola"); };',
        'function() { console.log("Hola"); };',
      ],
      correcta: 1,
      respuestaCorrecta: '(function() { console.log("Hola"); })();',
    },
    {
      texto: '¿Qué método convierte un array en un string separado por comas?',
      opciones: ['join("")', 'concat()', 'slice()', 'toString()'],
      correcta: 0,
      respuestaCorrecta: 'join("")',
    },
    {
      texto: 'Los objetos JavaScript pueden tener atributos de tipo',
      opciones: [
        'Number',
        'String',
        'boolean',
        'function',
        'Todos los anteriores',
        'Ninguno de los anteriores',
      ],
      correcta: 4,
      respuestaCorrecta: 'Todos los anteriores',
    },
    {
      texto: 'Para definir una variable en JavaScript las alternativas son',
      opciones: [
        'const variable = "Hola";',
        'let variable = "Hola"; var variable = "Hola";',
        'variable = "Hola";',
        'Todas las anteriores',
        'Ninguna de las anteriores',
      ],
      correcta: 3,
      respuestaCorrecta: 'Todas las anteriores',
    },
    {
      texto:
        'Las sentencias en JavaScript siempre deben terminar en ; (punto y coma)',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Qué método convierte un string en formato JSON en un objeto JavaScript?',
      opciones: ['eval()', 'JSON.parse()', 'JSON.stringify()', 'parseJSON()'],
      correcta: 1,
      respuestaCorrecta: 'JSON.parse()',
    },
    {
      texto:
        'En JavaScript podemos incrementar el valor de una variable utilizando',
      opciones: [
        'conejo = conejo + 1',
        'conejo = conejo + 1',
        'conejo++',
        '++conejo',
        'Todas las anteriores',
        'Ninguna de las anteriores',
      ],
      correcta: 4,
      respuestaCorrecta: 'Todas las anteriores',
    },
  ],
  semana8: [
    {
      texto:
        'El método addEventListener está disponible tanto para Node como para NodeList.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Cuál de estos controles se utiliza para subir archivos desde el cliente?',
      opciones: [
        '<input type="text">',
        '<textarea>',
        '<input type="submit">',
        '<input type="file">',
      ],
      correcta: 3,
      respuestaCorrecta: '<input type="file">',
    },
    {
      texto:
        '¿Cuál de los siguientes controles se usa para seleccionar una opción entre varias excluyentes?',
      opciones: ['checkbox', 'radio button', 'file', 'textarea'],
      correcta: 1,
      respuestaCorrecta: 'radio button',
    },
    {
      texto:
        'JavaScript utiliza el DOM para acceder y modificar elementos HTML de una página web.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'El servidor web es el que crea el árbol DOM para que podamos usarlo a través del objeto document en JavaScript',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'El objeto `event` permite detener la propagación de eventos usando stopPropagation().',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Un objeto NodeList posee exactamente los mismos métodos que un array en JavaScript.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Cuál de los siguientes métodos permite obtener un único elemento por su id?',
      opciones: [
        'getElementById()',
        'querySelectorAll()',
        'getElementsByClassName()',
        'getElementsByTagName()',
      ],
      correcta: 0,
      respuestaCorrecta: 'getElementById()',
    },
    {
      texto: '¿Cuál de estas propiedades devuelve el primer hijo de un nodo?',
      opciones: ['textContent', 'firstChild', 'nextSibling', 'nodeName'],
      correcta: 1,
      respuestaCorrecta: 'firstChild',
    },
    {
      texto:
        '¿Qué línea de código asigna la clase CSS "rojo" a un elemento HTML en JavaScript?',
      opciones: [
        'elemento.setAttribute("class", "rojo");',
        'elemento.style.color="rojo";',
        'elemento.className="rojo";',
        'elemento.addClass("rojo");',
      ],
      multiple: true,
      correcta: [0, 2],
      respuestaCorrecta:
        'elemento.className="rojo"; elemento.setAttribute("class", "rojo");',
    },
    {
      texto:
        'Una función callback es una función pasada como argumento a otra función.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'El protocolo HTTP es el encargado de transportar los datos de un formulario al servidor.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        '¿Cuál de los siguientes métodos se usa para agregar un nuevo nodo al final de otro nodo?',
      opciones: [
        'createTextNode()',
        'replaceChild()',
        'appendChild()',
        'removeChild()',
      ],
      correcta: 2,
      respuestaCorrecta: 'appendChild()',
    },
    {
      texto: 'Un programa NodeJS siempre construye por nosotros el árbol DOM',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'El árbol DOM está formado por todos los componentes de un navegador web',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Cuál de los siguientes eventos corresponde a un evento del mouse?',
      opciones: ['mousedown', 'submit', 'keydown', 'focus'],
      correcta: 0,
      respuestaCorrecta: 'mousedown',
    },
    {
      texto:
        '¿Cuál de los siguientes elementos se utiliza para ingresar texto largo en un formulario?',
      opciones: [
        '<input type="text">',
        '<input type="password">',
        '<textarea>',
        '<input type="search">',
      ],
      correcta: 2,
      respuestaCorrecta: '<textarea>',
    },
    {
      texto:
        'El uso de innerHTML puede traer riesgos de seguridad y errores en la estructura HTML.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'El nodo raíz del árbol DOM se denomina Document Root.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Los formularios HTML no permiten enviar datos mediante JavaScript.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'Por defecto, todos los eventos en el navegador se manejan en la fase de burbujeo.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: '¿Qué elemento HTML contiene a todos los campos de un formulario?',
      opciones: ['<input>', '<form>', '<label>', '<section>'],
      correcta: 1,
      respuestaCorrecta: '<form>',
    },
    {
      texto: '¿Cuál de los siguientes NO es un control de entrada de texto?',
      opciones: [
        '<input type="select">',
        '<input type="search">',
        '<input type="password">',
        '<input type="email">',
      ],
      correcta: 0,
      respuestaCorrecta: '<input type="select">',
    },
    {
      texto:
        '¿Cuál de estas propiedades devuelve el contenido HTML de un nodo elemento?',
      opciones: ['textContent', 'nodeValue', 'outerText', 'innerHTML'],
      correcta: 3,
      respuestaCorrecta: 'innerHTML',
    },
  ],
  semana9: [
    {
      texto:
        "En JavaScript, ¿qué representa 'prototype' en una función constructora?",
      opciones: [
        'Una referencia a la clase principal.',
        'El tipo de dato del objeto.',
        'Un objeto que contiene propiedades y métodos compartidos por todas las instancias creadas con esa función.',
        'Una copia del objeto original.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Un objeto que contiene propiedades y métodos compartidos por todas las instancias creadas con esa función.',
    },
    {
      texto: "¿Qué es 'XMLHttpRequest' en JavaScript?",
      opciones: [
        'Una función para renderizar páginas completas.',
        'Una librería de jQuery para validaciones.',
        'Una API para sincronizar relojes entre servidores.',
        'Un objeto que permite realizar solicitudes HTTP asíncronas desde el navegador.',
      ],
      correcta: 3,
      respuestaCorrecta:
        'Un objeto que permite realizar solicitudes HTTP asíncronas desde el navegador.',
    },
    {
      texto: '¿Qué devuelve la función fetch() en JavaScript?',
      opciones: [
        'Un objeto Promise que se resuelve con la respuesta de la solicitud.',
        'Un objeto XMLHttpRequest ya configurado.',
        'Un objeto JSON con los datos obtenidos.',
        'Un string con el HTML completo de la página.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Un objeto Promise que se resuelve con la respuesta de la solicitud.',
    },
    {
      texto: '¿Por qué las Promises son preferidas sobre callbacks anidados?',
      opciones: [
        "Porque ayudan a evitar el 'callback hell' y hacen el código más legible.",
        'Porque no necesitan funciones anónimas.',
        'Porque eliminan por completo la asincronía.',
        'Porque permiten uso de eventos DOM directamente.',
      ],
      correcta: 0,
      respuestaCorrecta:
        "Porque ayudan a evitar el 'callback hell' y hacen el código más legible.",
    },
    {
      texto: '¿Qué es AJAX en el contexto del desarrollo web?',
      opciones: [
        'Una nueva versión de HTML.',
        'Un framework de JavaScript.',
        'Una técnica para enviar y recibir datos del servidor sin recargar toda la página.',
        'Una base de datos orientada a documentos.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Una técnica para enviar y recibir datos del servidor sin recargar toda la página.',
    },
    {
      texto:
        "¿Qué representa 'response.ok' en el contexto del uso de 'fetch()'?",
      opciones: [
        'Indica si la respuesta contiene JSON válido.',
        'Muestra si la solicitud se redireccionó.',
        'Es el nombre del encabezado HTTP de éxito.',
        'Indica si la respuesta fue exitosa (códigos 200–299).',
      ],
      correcta: 3,
      respuestaCorrecta:
        'Indica si la respuesta fue exitosa (códigos 200–299).',
    },
    {
      texto:
        '¿Cuál de los siguientes métodos se utiliza para iterar sobre cada elemento de un array ejecutando una función proporcionada?',
      opciones: ['console.log', 'sort', 'reduce', 'forEach'],
      correcta: 3,
      respuestaCorrecta: 'forEach',
    },
    {
      texto:
        '¿Qué palabra clave se utiliza para implementar herencia entre clases en JavaScript?',
      opciones: ['super', 'prototype', 'extends', 'inherits'],
      correcta: 2,
      respuestaCorrecta: 'extends',
    },
    {
      texto:
        "¿Cuáles son los parámetros obligatorios que debe recibir la función usada en 'reduce'?",
      opciones: [
        'El valor anterior y el valor siguiente.',
        'La longitud del array y el índice.',
        'El acumulador (total) y el valor actual.',
        'El índice actual y el array original.',
      ],
      correcta: 2,
      respuestaCorrecta: 'El acumulador (total) y el valor actual.',
    },
    {
      texto:
        '¿Cuál es la principal diferencia entre los métodos find y filter de los arrays en JavaScript?',
      opciones: [
        'find devuelve el primer elemento que cumple con la condición, mientras que filter devuelve todos los elementos que cumplen.',
        'filter solo funciona con números, find con cualquier tipo.',
        'find ordena el array, filter lo invierte.',
        'find modifica el array original, filter no.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'find devuelve el primer elemento que cumple con la condición, mientras que filter devuelve todos los elementos que cumplen.',
    },
    {
      texto:
        '¿Qué propósito tiene la palabra clave super en el constructor de una clase hija?',
      opciones: [
        'Referenciar al objeto global.',
        'Declarar una nueva propiedad.',
        'Importar funciones externas.',
        'Invocar el constructor de la clase padre.',
      ],
      correcta: 3,
      respuestaCorrecta: 'Invocar el constructor de la clase padre.',
    },
    {
      texto:
        '¿Cuáles son los métodos principales de una Promise en JavaScript?',
      opciones: [
        'wait(), sleep(), done()',
        'resolve(), reject(), always()',
        'init(), send(), end()',
        'then(), catch(), finally()',
      ],
      correcta: 3,
      respuestaCorrecta: 'then(), catch(), finally()',
    },
    {
      texto: '¿Qué es un error CORS en una solicitud HTTP?',
      opciones: [
        'Una restricción de seguridad que impide compartir recursos entre orígenes distintos.',
        'Un error que impide utilizar JSON como formato de respuesta.',
        'Un error en la codificación UTF-8 de los datos.',
        'Un conflicto de nombres entre formularios HTML.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Una restricción de seguridad que impide compartir recursos entre orígenes distintos.',
    },
    {
      texto: '¿Qué retorna el método reduce aplicado a un array?',
      opciones: [
        'El primer elemento que cumpla la condición dada.',
        'Un único valor, resultado de aplicar una función acumuladora.',
        'Un nuevo array con los valores transformados.',
        'Un array filtrado con los elementos únicos.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Un único valor, resultado de aplicar una función acumuladora.',
    },
    {
      texto:
        "¿Cuál es la forma correcta de capturar errores de red al usar 'fetch()'?",
      opciones: [
        'Comprobar que el JSON recibido tenga más de una propiedad.',
        "Encerrar 'fetch()' en un bloque 'try/catch' sin 'await'.",
        "Usar el método 'catch()' en la Promise devuelta.",
        'Validar la URL con una expresión regular.',
      ],
      correcta: 2,
      respuestaCorrecta: "Usar el método 'catch()' en la Promise devuelta.",
    },
    {
      texto:
        "¿Cuál es la principal ventaja del uso de 'async' y 'await' en JavaScript?",
      opciones: [
        'Permite ejecutar múltiples hilos simultáneamente.',
        'Reemplaza el uso de formularios HTML.',
        'Evita la necesidad de usar eventos.',
        'Permite escribir código asíncrono de forma similar al código sincrónico.',
      ],
      correcta: 3,
      respuestaCorrecta:
        'Permite escribir código asíncrono de forma similar al código sincrónico.',
    },
    {
      texto:
        '¿Qué condición debe cumplirse para poder usar await en una función?',
      opciones: [
        'Debe ser parte de una clase con herencia.',
        'Debe estar dentro de una expresión ternaria.',
        'Debe estar dentro de una función declarada con la palabra clave `async`.',
        'Debe estar dentro de un callback tradicional.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Debe estar dentro de una función declarada con la palabra clave `async`.',
    },
    {
      texto:
        '¿Cuál es el principal propósito de las clases introducidas en ES6 en JavaScript?',
      opciones: [
        'Evitar el uso de eventos.',
        'Eliminar completamente el uso de prototipos.',
        'Reemplazar funciones tradicionales.',
        'Proveer una sintaxis más amigable para trabajar con prototipos.',
      ],
      correcta: 3,
      respuestaCorrecta:
        'Proveer una sintaxis más amigable para trabajar con prototipos.',
    },
  ],
};
