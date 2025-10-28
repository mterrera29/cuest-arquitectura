export const idw = {
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
        '768px',
        '@media screen(768px)',
        '@media (min-width: 768px)',
        '@media width >',
      ],
      multiple: true,
      correcta: [1, 3],
      respuestaCorrecta: '768px, @media (min-width: 768px)',
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
        '¿Qué resultado produce la siguiente desestructuración: [a,b] = [1,2,3]; console.log(b);',
      opciones: ['3', '2', 'Error de sintaxis', 'undefined'],
      correcta: 0,
      respuestaCorrecta: '3',
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
