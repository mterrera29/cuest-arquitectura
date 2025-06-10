// Semana 1 - Versión 1
export const arquitectura = {
  preguntasSemana1_v1: [
    {
      texto: 'La CPU está compuesta por:',
      opciones: [
        'La memoria principal y la memoria secundaria.',
        'La unidad de control y las interfaces de entrada/salida.',
        'La unidad aritmético-lógica, la memoria RAM y el microprocesador.',
        'La unidad de control, la unidad aritmético-lógica y un conjunto de registros.',
      ],
      correcta: 3,
    },
    {
      texto:
        '¿Dónde son almacenados los datos en el interior de un procesador?',
      opciones: [
        'En la unidad aritmético lógica.',
        'En la unidad de control.',
        'En el bus de direcciones.',
        'En el bus de datos.',
        'En los registros.',
      ],
      correcta: 4,
    },
    {
      texto:
        'Los procesadores AMD y Intel implementan el mismo set de instrucciones x86, pero tienen diferentes organizaciones de memoria caché. Tener diferente organización de cache es una decisión de:',
      opciones: [
        'Arquitectura',
        'Organización',
        'Ninguna de las anteriores',
        'Organización y Arquitectura',
        'Rendimiento.',
      ],
      correcta: 1,
    },
    {
      texto:
        'Teniendo en cuenta los conceptos de organización y arquitectura, la incorporación de la instrucción de multiplicar (MUL) en el procesador dentro de su repertorio de instrucciones. Es una decisión de...',
      opciones: [
        'Arquitectura',
        'Rendimiento',
        'Organización y Arquitectura',
        'Organización',
        'Tiempo CPU',
      ],
      correcta: 0,
    },
    {
      texto:
        'Atributos que describen la arquitectura y influyen en la ejecución Lógica de un programa:',
      opciones: [
        'Conjunto de instrucciones',
        'Mecanismos de entrada y salida',
        'Señales de control',
        'Técnicas para direccionamiento de memorias',
        'Detalles de hardware transparente para el programador',
        'Puertos de interfaz de la computadora',
        'Tecnología de memoria usada',
        'Números de bits usados para la representación de datos',
      ],
      correcta: [0, 1, 3, 7],
      multiple: true,
    },
    {
      texto: 'Ordene los elementos clave de la Arquitectura Von Neumann:',
      opciones: [
        'Las instrucciones y datos tenían que almacenarse juntos',
        'El concepto central es el de programa almacenado',
        'Permitió programar en un lenguaje',
        'Bajo el control del programa',
        'No por medio de cables',
      ],
      correcta: [1, 0, 2, 4, 3],
      multiple: true,
      tipo: 'ordenar',
    },
    {
      texto:
        'Una organización puede sobrevivir muchos años, pero su arquitectura cambia con la evolución de tecnología.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Los registros son pequeñas bancos de memoria dentro del CPU que permiten almacenar/recuperar información.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Si la instrucción de multiplicar del procesador será implementada por una unidad especializada en multiplicar o por un mecanismo que haga un uso iterativo de la unidad de suma del sistema, es una decisión de...',
      opciones: [
        'ninguna de las anteriores',
        'organización',
        'arquitectura',
        'elegancia',
        'sistema operativo',
      ],
      correcta: 1,
    },
    {
      texto: 'Todas las operaciones de un procesador son gobernadas por...',
      opciones: [
        'la memoria principal.',
        'los registros.',
        'la unidad aritmético lógica.',
        'los buses.',
        'la unidad de control.',
      ],
      correcta: 4,
    },
  ],

  // Semana 1 - Versión 2
  preguntasSemana1_v2: [
    {
      texto:
        'Muchos fabricantes de procesadores ofrecen una familia de modelos, todos con la misma arquitectura pero con diferencias en la organización.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        '¿Dónde son almacenados los datos en el interior de un procesador?',
      opciones: [
        'En la unidad de control.',
        'En la unidad aritmético lógica.',
        'En el bus de datos.',
        'En los registros.',
        'En el bus de direcciones.',
      ],
      correcta: 3,
    },
    {
      texto:
        'Describe las unidades funcionales de una computadora y sus especificaciones arquitectónicas:',
      opciones: [
        'Números de bits usados para la representación de datos',
        'Conjunto de instrucciones',
        'Tecnología de memoria usada',
        'Técnicas para direccionamiento de memorias',
        'Señales de control',
        'Detalles de hardware transparente para el programador',
        'Puertos de interfaz de la computadora',
        'Mecanismos de entrada y salida',
      ],
      correcta: [2, 4, 5, 6],
      multiple: true,
    },
    {
      texto: 'Todas las operaciones de un procesador son gobernadas por...',
      opciones: [
        'la unidad de control.',
        'los registros.',
        'la memoria principal.',
        'la unidad aritmético lógica.',
        'los buses.',
      ],
      correcta: 0,
    },
    {
      texto:
        'Si el procesador tendrá la instrucción de multiplicar es una decisión de...',
      opciones: [
        'estilo',
        'arquitectura',
        'ninguna de las anteriores',
        'sistema operativo',
        'organización',
      ],
      correcta: 1,
    },
    {
      texto:
        'Los procesadores AMD y Intel implementan el mismo set de instrucciones x86, pero tienen diferentes organizaciones de memoria caché. Tener diferente organización de cache es una decisión de:',
      opciones: [
        'Organización',
        'Organización y Arquitectura',
        'Rendimiento.',
        'Arquitectura',
        'Ninguna de los anteriores',
      ],
      correcta: 0,
    },
    {
      texto: 'Ordene los elementos clave de la Arquitectura Von Neumann:',
      opciones: [
        'Las instrucciones y datos tenían que almacenarse juntos',
        'El concepto central es el de programa almacenado',
        'Permitió programar en un lenguaje',
        'Bajo el control del programa',
        'No por medio de cables',
      ],
      correcta: [1, 0, 2, 4, 3],
      multiple: true,
      tipo: 'ordenar',
    },
    {
      texto: '¿Cuáles son las funciones básicas que un computador?',
      opciones: [
        'Procesamiento de datos, Almacenamiento de datos, Transferencia de datos y Control.',
        'Procesamiento de datos, Almacenamiento de datos, Transferencia de datos y Memoria.',
        'Procesamiento de datos, Almacenamiento de datos, CPU y memoria.',
        'Procesamiento de datos, Almacenamiento de datos, Transferencia de datos y Rendimiento.',
        'E/S, Almacenamiento de datos, Transferencia de datos y Control.',
      ],
      correcta: 0,
    },
    {
      texto:
        'Atributos que describen la arquitectura y influyen en la ejecución Lógica de un programa:',
      opciones: [
        'Técnicas para direccionamiento de memorias',
        'Puertos de interfaz de la computadora',
        'Detalles de hardware transparente para el programador',
        'Tecnología de memoria usada',
        'Conjunto de instrucciones',
        'Señales de control',
        'Números de bits usados para la representación de datos',
        'Mecanismos de entrada y salida',
      ],
      correcta: [0, 4, 6, 7],
      multiple: true,
    },
    {
      texto:
        'Los registros son ubicaciones de memoria de alta velocidad que están integradas directamente en el CPU, las cuales contienen los datos que están siendo procesados.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
  ],

  // Semana 2 - Versión 1 (corregida)
  preguntasSemana2_v1: [
    {
      texto:
        'Tenemos un programa con las siguientes instrucciones:\n\n| Instrucciones | Cantidad | Ciclos |\n|---------------|----------|--------|\n| De escritura  | 3        | 2      |\n| De lectura    | 8        | 2      |\n| Operaciones en la ALU | 10 | 1 |\n| Salto         | 7        | 2      |\n\n¿Cuál es su CPI?',
      opciones: ['2', '1,1', '3', '1,64', '1,8'],
      correcta: 3,
    },
    {
      texto:
        '¿Cuál es la duración o tiempo de un ciclo de un reloj que funciona a 200 Hz?',
      opciones: [
        '5 nanosegundos.',
        'Ninguna de las anteriores.',
        '5 milisegundos.',
        '5 microsegundos.',
      ],
      correcta: 2,
    },
    {
      texto:
        'Tenemos un programa con las siguientes instrucciones:\n\n| Instrucciones | Cantidad | Ciclos |\n|---------------|----------|--------|\n| De escritura  | 1        | 2      |\n| De lectura    | 5        | 2      |\n| Operaciones en la ALU | 6 | 1 |\n| Salto         | 3        | 2      |\n\n¿Cuál es su CPI?',
      opciones: ['3,6', '1,8', '1,6', '1,5', '2,6'],
      correcta: 2,
    },
    {
      texto:
        'Tenemos un programa con las siguientes instrucciones:\n\n| Instrucciones | Cantidad | Ciclos |\n|---------------|----------|--------|\n| De escritura  | 12       | 2      |\n| De lectura    | 21       | 2      |\n| Operaciones en la ALU | 43 | 1 |\n| Salto         | 24       | 2      |\n\n¿Cuál es su CPI?',
      opciones: ['1,8', '2', '3', '1', '1,57'],
      correcta: 4,
    },
    {
      texto:
        'Un programa utilizó 120 ciclos de CPU para ejecutarse, se realizó un recuento de las instrucciones y se obtuvo que fueron 40 las instrucciones ejecutadas ¿Cuál es el resultado de los CPI?',
      opciones: ['2', '3', '4', '5', '1,5'],
      correcta: 1,
    },
    {
      texto:
        '¿Cuál es el tiempo CPU de un programa que posee 10 ciclos de reloj y se ejecuta en un procesador con 10 Hz?',
      opciones: [
        '5 segundos',
        '1 segundo',
        '2 segundos',
        '10 segundos',
        '10 minutos',
      ],
      correcta: 1,
    },
    {
      texto:
        'Un programa utilizó 200 ciclos de CPU para ejecutarse, se realizó un recuento de las instrucciones y se obtuvo que fueron 40 las instrucciones ejecutadas ¿Cuál es el resultado de los CPI?',
      opciones: ['3', '4', '5', '6', '2,5'],
      correcta: 2,
    },
    {
      texto:
        'El valor de CPI de un procesador nos informa el tiempo que tarda cada ciclo del procesador.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        '¿Cuál será el tiempo de CPU empleado por un programa en una computadora cuyo procesador tiene un tiempo de ciclo de 0,02 segundos que posee un CPI de 4,5 y utilizo 500 instrucciones?',
      opciones: [
        '30 segundos',
        '45 segundos',
        '60 segundos',
        '22,5 segundos',
        '90 segundos',
      ],
      correcta: 1,
    },
    {
      texto:
        '¿Cuál es la duración o tiempo de un ciclo de un reloj que funciona a 400 Hz?',
      opciones: [
        '5 milisegundos.',
        '2,5 milisegundos.',
        'Ninguna de las anteriores.',
        '500 segundos.',
      ],
      correcta: 1,
    },
  ],

  // Semana 2 - Versión 2 (corregida)
  preguntasSemana2_v2: [
    {
      texto:
        '¿Cuál será el tiempo de CPU empleado por un programa en una computadora cuyo procesador tiene un tiempo de ciclo de 0,05 segundos que posee un CPI de 4 y utilizo 200 instrucciones?',
      opciones: [
        '20 segundos',
        '30 segundos',
        '40 segundos',
        '50 segundos',
        '60 segundos',
      ],
      correcta: 2,
    },
    {
      texto:
        '¿Cuál es la duración o tiempo de un ciclo de un reloj que funciona a 1 MHz?',
      opciones: [
        '5 milisegundos.',
        '0.00001 segundos.',
        '1 microsegundos.',
        'Ninguna de las anteriores.',
      ],
      correcta: 2,
    },
    {
      texto:
        'El valor de CPI de un procesador nos informa el tiempo que tarda cada ciclo del procesador.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        '¿Cuál es la duración o tiempo de un ciclo de un reloj que funciona a 100 Hz?',
      opciones: [
        'Ninguna de las anteriores.',
        '10 microsegundos.',
        '10 nanosegundos.',
        '10 milisegundos.',
      ],
      correcta: 3,
    },
    {
      texto:
        'Si la maquina A ejecuta un programa en 50 segundos y la máquina B ejecuta el mismo programa en 90 segundos ¿cuál de las siguientes opciones es verdadero?',
      opciones: [
        'A es el 80 por 100 más rápida que B.',
        'Ninguna de las anteriores.',
        'A es el 40 por 100 más rápida que B.',
        'A es el 70 por 100 más rápida que B.',
      ],
      correcta: 0,
    },
    {
      texto:
        'Un programa utilizó 120 ciclos de CPU para ejecutarse, se realizó un recuento de las instrucciones y se obtuvo que fueron 40 las instrucciones ejecutadas ¿Cuál es el resultado de los CPI?',
      opciones: ['2', '3', '4', '5', '6'],
      correcta: 1,
    },
    {
      texto:
        'Un programa utilizó 1000 ciclos de CPU para ejecutarse, se realizó un recuento de las instrucciones y se obtuvo que fueron 500 las instrucciones ejecutadas ¿Cuál es el resultado de los CPI?',
      opciones: ['1', '1.5', '2', '2.5', '3'],
      correcta: 2,
    },
    {
      texto:
        'Si la máquina A ejecuta un programa en 40 segundos y la máquina B ejecuta el mismo programa en 50 segundos ¿cuál de las siguientes opciones es verdadero?',
      opciones: [
        'A es el 33,33 por 100 más rápida que B.',
        'A es el 15 por 100 más rápida que B.',
        'Ninguna de las anteriores.',
        'A es el 25 por 100 más rápida que B.',
      ],
      correcta: 3,
    },
    {
      texto:
        'Tenemos un programa con las siguientes instrucciones:\n\n| Instrucciones | Cantidad | Ciclos |\n|---------------|----------|--------|\n| De escritura  | 12       | 2      |\n| De lectura    | 21       | 2      |\n| Operaciones en la ALU | 43 | 1 |\n| Salto         | 24       | 2      |\n\n¿Cuál es su CPI?',
      opciones: ['2', '3', '1,8', '1,57', '1'],
      correcta: 3,
    },
    {
      texto:
        '¿Cuál será el tiempo de CPU empleado por un programa en una computadora cuyo procesador tiene un tiempo de ciclo de 0,002 segundos que posee un CPI de 5 y utilizo 2000 instrucciones?',
      opciones: [
        '10 segundos',
        '15 segundos',
        '20 segundos',
        '25 segundos',
        '30 segundos',
      ],
      correcta: 2,
    },
  ],

  // Semana 4 - Versión 1 (corregida)
  preguntasSemana4_v1: [
    {
      texto: 'Funciones de la unidad de control:',
      opciones: [
        'Ser capaz de resolver las situaciones anómalas.',
        'Recibir de la Memoria el código máquina de la instrucción a ejecutar.',
        'Interpretar y decodificar cada instrucción.',
        'Controlar la ejecución de las instrucciones.',
        'Ninguna de las anteriores.',
      ],
      correcta: [1, 2, 3],
      multiple: true,
    },
    {
      texto:
        'Dada las siguientes variables definidas para un programa en ensamblador 8086, indicar que instrucciones son validas:',
      opciones: [
        'MOV BL. IP',
        'MOV AL, CL',
        'MOV AL x, y',
        'MOV AL',
        'MOV',
        'MOV x, y',
        'ADD AL, BL',
        'ADD',
        'ADD AL, AL, BL',
      ],
      correcta: [1, 5, 6],
      multiple: true,
    },
    {
      texto:
        'Complete el programa en ensamblador 8086 para que realice la operación equivalente al siguiente programa Python:\n\na=2\nb=3\nc=6\nd=4\nx=a+b\ny=c-d\nz= x+y',
      opciones: [
        'MOV AL, a\nADD AL, b\nMOV x, AL\nMOV BL, c\nSUB BL, d\nMOV y, BL\nADD AL, BL\nMOV z, AL\nHLT',
        'MOV AL, a\nSUB AL, b\nMOV x, AL\nMOV BL, c\nADD BL, d\nMOV y, BL\nSUB AL, BL\nMOV z, AL\nHLT',
        'MOV AL, a\nADD AL, b\nMOV x, AL\nMOV BL, c\nSUB BL, d\nMOV y, BL\nSUB AL, BL\nMOV z, AL\nHLT',
        'MOV AL, a\nADD AL, b\nMOV x, AL\nMOV BL, c\nADD BL, d\nMOV y, BL\nADD AL, BL\nMOV z, AL\nHLT',
      ],
      correcta: 0,
    },
    {
      texto:
        '¿Qué resultado queda almacenado en la variable z?\n\nx db 3\ny db 2\nz db 0\nmov cl, x\nmov bl, y\nsub cl, bl\nmov z, bl\nhlt',
      opciones: ['5', '6', '1', '3', '2'],
      correcta: 4,
    },
    {
      texto:
        'Ejercicio - Instrucción SUB\n\nDatos iniciales:\nAL = @Fh (equivale a 15 en decimal)\nBL = @kh (equivale a 4 en decimal)\n\nInstrucción ejecutada:\nSUB AL, BL\n\n¿Qué valor tendrá el registro AL luego de ejecutar la instrucción?',
      opciones: ['@Bh (11)', 'O4/h', 'OFh', '13h (19)'],
      correcta: 0,
    },
    {
      texto:
        'Para que la CPU comience la ejecución del programa el registro IP debe apuntar a la..',
      opciones: [
        'Dirección de la última instrucción del programa.',
        'Ninguna dirección del programa.',
        'Dirección de la primer instrucción del programa.',
        'Cualquier dirección del programa.',
      ],
      correcta: 2,
    },
    {
      texto:
        'Los registros son pequeñas bancos de memoria dentro del CPU que permiten almacenar/recuperar información.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Los registros dedicados son visibles al programador y no están reservados para uso del sistema.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Se desea calcular la expresión: z = (x + y) - w\n\n- El valor de x está en el registro AL\n- El valor de y está en el registro BL\n- El valor de w está en el registro CL\n- El resultado debe almacenarse en el registro DL\n\n¿Cuál secuencia de instrucciones realiza correctamente la operación?',
      opciones: [
        'MOV DL, CL\nSUB DL, BL\nADD DL, AL',
        'MOV DL, BL\nADD DL, AL\nSUB CL, DL',
        'MOV DL, AL\nADD DL, BL\nSUB DL, CL',
        'MOV DL, AL\nSUB DL, CL\nADD DL, BL',
        'MOV DL, BL\nADD DL, CL\nSUB DL, AL',
      ],
      correcta: 2,
    },
    {
      texto:
        'Complete el programa en ensamblador 8086 para que realice la operación equivalente al siguiente programa Python:\n\na=3\nb=3\nc=6\nd=4\nx=a-b\ny=c-d\nz= x+y',
      opciones: [
        `MOV AL, a\nSUB AL, b\nMOV x, AL\nMOV BL, c\nSUB BL, d\nMOV y, BL\nADD AL, BL\nMOV z, AL\nHLT`,
        'MOV AL, a\nADD AL, b\nMOV x, AL\nMOV BL, c\nSUB BL, d\nMOV y, BL\nSUB AL, BL\nMOV z, AL\nHLT',
        'MOV AL, a\nSUB AL, b\nMOV x, AL\nMOV BL, c\nADD BL, d\nMOV y, BL\nADD AL, BL\nMOV z, AL\nHLT',
        'MOV AL, a\nADD AL, b\nMOV x, AL\nMOV BL, c\nADD BL, d\nMOV y, BL\nSUB AL, BL\nMOV z, AL\nHLT',
      ],
      correcta: 0,
    },
  ],

  // Semana 4 - Versión 2 (corregida)
  preguntasSemana4_v2: [
    {
      texto:
        'De las siguientes afirmaciones acerca del repertorio de instrucciones ¿Cuál es FALSA?',
      opciones: [
        'Los procesadores pueden tener diferentes repertorio de instrucciones.',
        'Una instrucción puede tener ninguno o más de un operando.',
        'Existen instrucciones de operaciones aritméticas dentro del repertorio de instrucciones.',
        'Una instrucción puede tener más de un código de operación.',
        'Repertorio de instrucciones es el conjunto de instrucciones distintas que puede ejecutar la CPU',
      ],
      correcta: 3,
    },
    {
      texto: 'La instrucción: MOV AX,BX\nRealiza la siguiente operación:',
      opciones: [
        'Copia el contenido del registro AX al registro BX',
        'Copia el contenido del registro AX al registro IP.',
        'Copia el contenido del registro BX al registro AX',
        'Copia el contenido del registro AX al registro SP.',
        'Copia el contenido del registro BX en la dirección de memoria dada por el registro AX',
      ],
      correcta: 2,
    },
    {
      texto:
        'Los nemónicos como MOV y ADD deben ser convertidos a su correspondiente código en binario para que puedan ser interpretados y ejecutados por la CPU.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        '¿Cuál es la directiva en ensamblador 8086 para reservar un espacio de memoria de una palabra (dos bytes)?',
      opciones: ['DD', 'DW', 'DUP', 'DATA', 'DB'],
      correcta: 1,
    },
    {
      texto:
        'El Repertorio de Instrucciones es el conjunto de instrucciones distintas que puede ejecutar la CPU.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Los modos de direccionamiento indican el método para acceder a los operandos de una instrucción:',
      opciones: [
        'Indirecto por registro: la dirección del operando está contenida en uno de los registros BX, SI, DI o BP.',
        'Directo: el operando es una dirección que está incluida en la propia instrucción.',
        'Registro: el operando es un registro.',
        'Inmediato: el operando está presente en la propia instrucción.',
      ],
      correcta: [0, 1, 2, 3],
      multiple: true,
    },
    {
      texto:
        'Los repertorios de instrucciones difieren entre si por las siguientes razones:',
      opciones: [
        'Duración del ciclo de reloj',
        'Instrucciones por segundo (IPS)',
        'Promedio de ciclos por instrucción (CPI)',
        'Tamaño de las instrucciones',
        'Tipos de operaciones',
        'Tiempo de CPU',
        'Frecuencia de reloj (Hz)',
        'Operandos sobre los que puede trabajar',
      ],
      correcta: [3, 4, 7],
      multiple: true,
    },
    {
      texto: 'El registro de estado del CPU se utiliza principalmente para.',
      opciones: [
        'Indicar que se leyó de memoria ram.',
        'Indicar el resultado de la ultima operación aritmética de la ALU.',
        'Indicar que se leyó de la unidad SDD.',
        'Indicar que se realizo una operación en la ALU.',
        'Indicar que el contador de programa PC aumentó en 1.',
      ],
      correcta: 1,
    },
    {
      texto:
        'Vínculo las siguientes instrucciones con su tipo de direccionamiento:',
      opciones: ['MOV AX,[BX]', 'MOV BX,50', 'MOV BX,[50]', 'MOV AX,BX'],
      correcta: [0, 1, 2, 3],
      multiple: true,
    },
    {
      texto:
        '¿Cuál es la directiva en ensamblador 8086 para reservar un espacio de memoria de un byte?',
      opciones: ['DD', 'DATA', 'DB', 'DUP', 'DW'],
      correcta: 2,
    },
  ],

  preguntasSemana6_v1: [
    {
      texto:
        'Dadas las siguientes variables definidas para un programa en ensamblador 8086, indicar qué instrucciones son válidas:\n\nORG 10h\n  x DB 2\n  y DB 3\n  z DB 0',
      opciones: [
        'ADD AL, BL',
        'MOV x, AL',
        'MOV AL, x',
        'MOV AL',
        'MOV x, y',
        'MOV AL, x',
        'ADD',
        'MOV BL, y',
        'ADD AL, AL, BL',
      ],
      correcta: [0, 1, 2, 5, 7],
      multiple: true,
    },
    {
      texto:
        '¿Qué valor queda almacenado en la posición dada por z? Programa:\n\nORG 10h\n  x DB 2\n  y DB 3\n  z DB 0\n\nORG 20h\n  MOV AL, 0\n  MOV BL, y\nBucle:\n  ADD AL, x\n  SUB BL, 1\n  JZ Fin\n  JMP Bucle\nFin:\n  MOV z, AL\nHLT',
      opciones: ['5', '0', '6', '2'],
      correcta: 2,
    },
    {
      texto:
        'Al ejecutar una instrucción JMP, el IP (contador de programa) obtiene su valor...',
      opciones: [
        'Se incrementa según el tamaño de la instrucción.',
        'De la dirección de la siguiente instrucción del programa.',
        'Del valor de AL + 1.',
        'Incrementándose en 1.',
        'De la dirección de destino que forma parte de la instrucción JMP.',
      ],
      correcta: 4,
    },
    {
      texto:
        'Dado el siguiente programa en Python:\n\nx = 3\ny = 2\nx = x - y\n\nVariables:\n  x DB 3\n  y DB 2\n\nOrdene las siguientes instrucciones para que realicen el programa equivalente:',
      opciones: ['SUB AL, y', 'MOV x, AL', 'MOV AL, x', 'HLT'],
      correcta: [2, 0, 1, 3],
      multiple: true,
      tipo: 'ordenar',
    },
    {
      texto:
        'Complete el siguiente programa en ensamblador 8086 para que realice la operación en Python:\n\na = 2\nb = 3\nc = 6\nd = 4\nx = a + b\ny = c - d\nz = x - y\n\nVariables:\n  a DB 2\n  b DB 3\n  c DB 6\n  d DB 4\n  x DB 0\n  y DW 0\n  z DW 0\n\nOrdene las instrucciones funcionales:',
      opciones: [
        'SUB BL, d',
        'MOV z, AL',
        'SUB AL, BL',
        'MOV x, AL',
        'ADD AL, b',
        'MOV y, BL',
        'MOV BL, c',
        'MOV AL, a',
        'HLT',
      ],
      correcta: [7, 4, 3, 6, 0, 5, 2, 1, 8],
      multiple: true,
      tipo: 'ordenar',
    },
    {
      texto:
        'Complete el siguiente programa en ensamblador 8086 para que realice la operación en Python:\n\na = 3\nb = 3\nc = 6\nd = 4\nx = a - b\ny = c - d\nz = x + y\n\nVariables:\n  a DB 3\n  b DB 3\n  c DB 6\n  d DB 4\n  x DB 0\n  y DB 0\n  z DB 0\n\nOrdene las instrucciones funcionales:',
      opciones: [
        'MOV z, AL',
        'SUB BL, d',
        'MOV BL, c',
        'MOV y, BL',
        'MOV x, AL',
        'ADD AL, BL',
        'SUB AL, b',
        'MOV AL, a',
        'HLT',
      ],
      correcta: [7, 6, 4, 2, 1, 3, 5, 0, 8],
      multiple: true,
      tipo: 'ordenar',
    },
    {
      texto:
        '¿Qué valor queda almacenado en z según el siguiente código?\n\nMOV AL, x\nMOV BL, y\nCMP AL, BL\nJZ Restar\nADD BL, AL\nJMP Guardar\nRestar:\n  SUB BL, AL\nGuardar:\n  MOV z, BL\nHLT\n\nVariables:\n  x DB 2\n  y DB 3\n  z DB 0',
      opciones: ['1', '2', '0', '5'],
      correcta: 3,
    },
    {
      texto:
        '¿Qué valor queda almacenado en z según el siguiente código?\n\nMOV AL, x\nMOV BL, y\nCMP AL, BL\nJZ Restar\nADD BL, AL\nJMP Guardar\nRestar:\n  SUB BL, AL\nGuardar:\n  MOV z, BL\nHLT\n\nVariables:\n  x DB 3\n  y DB 3\n  z DB 0',
      opciones: ['5', '1', '0', '2'],
      correcta: 2,
    },
    {
      texto:
        '¿Qué valor queda almacenado en z según el siguiente código?\n\nMOV AL, 0\nMOV BL, y\nBucle:\nADD AL, x\nSUB BL, y\nJZ Bucle\nMOV z, AL\nHLT\n\nVariables:\n  x DB 2\n  y DB 3\n  z DB 0',
      opciones: ['2', '3', '5', '4'],
      correcta: 3,
    },
  ],

  // Semana 7 (Versión 3)
  preguntasSemana7_v3: [
    {
      texto:
        'De las siguientes afirmaciones seleccione si son verdadera o falsa:',
      opciones: [
        'La memoria volátil no requiere energía constante para mantener la información almacenada.',
        'La memoria principal (RAM) contiene los programas en ejecución y los datos con que operan.',
        'Habitualmente, la memoria secundaria es de mayor capacidad que la memoria principal, pero también es mucho más rápida.',
        'El disco rígido magnético es un tipo de memoria volátil.',
        'La memoria no volátil retendrá la información almacenada incluso si no recibe corriente eléctrica constantemente.',
        'Las memorias son dispositivos que permiten retener y recuperar información.',
        'Parte de la información de la memoria principal se duplica en la memoria caché.',
        'Los registros son internos de la unidad central de proceso (CPU) o procesador.',
      ],
      correcta: [1, 4, 5, 6, 7],
      multiple: true,
    },
    {
      texto:
        '¿Qué memoria pierde la información cuando se deja de suministrar corriente al equipo?',
      opciones: ['ROM', 'RAM', 'Disco SSD', 'Pendrive'],
      correcta: 1,
    },
    {
      texto: 'Una memoria cache es..',
      opciones: [
        'Memoria Coordenada',
        'Memoria dinámica',
        'Memoria estática',
        'Memoria direccionable por su contenido (ASOCIATIVA)',
        'Memoria stack',
      ],
      correcta: [2, 3],
      multiple: true,
    },
    {
      texto: 'Al bajar en la jerarquía de memoria se observa que:',
      opciones: [
        'Aumenta la capacidad',
        'Aumenta el costo por bit',
        'Disminuye el tiempo de acceso',
        'Disminuye el costo por bit',
        'Aumenta el tiempo de acceso',
      ],
      correcta: [0, 3, 4],
      multiple: true,
    },
    {
      texto:
        'Las memorias son dispositivos que permite retener y recuperar información.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Ubique cada memoria según su velocidad (primera la más rápida y quinta la más lenta):',
      opciones: [
        'Cache',
        'CD y DVD compacto',
        'Disco rígido',
        'RAM',
        'Registros del CPU',
      ],
      correcta: [4, 0, 3, 2, 1],
      multiple: true,
      tipo: 'ordenar',
    },
    {
      texto: 'Seleccione las características de la memoria DRAM',
      opciones: [
        'Celda construida en base a un condensador que mantiene el valor',
        'Se encuentra en el primer lugar de la jerarquía de memoria',
        'Para evitar la pérdida de información, es necesario refrescar periódicamente',
        'Se construye a partir de biestables',
        'El condensador tiene la tendencia natural a descargarse',
        'No necesita "refrescos"',
        'El refresco consiste en la lectura del condensador y posterior escritura',
        'Tipo de memoria no volátil',
      ],
      correcta: [0, 2, 4, 6],
      multiple: true,
    },
    {
      texto: 'Se observan dos tipos diferentes de localidades de referencia:',
      opciones: [
        'Localidad temporal',
        'Localidad espacial',
        'Localidad secuencial',
        'Localidad aleatoria',
      ],
      correcta: [0, 1],
      multiple: true,
    },
    {
      texto: 'La forma de direccionar una dato en una memoria pueden ser:',
      opciones: [
        'STACK - ASOCIATIVO - COORDENADA',
        'STACK - CACHE - COORDENADA',
        'SDD - CACHE - CPU',
        'CPU - ASOCIATIVO - COORDENADA',
        'CPU - CACHE - RAM',
      ],
      correcta: 0,
    },
    {
      texto:
        'Cuando se trabaja en un documento en un PC, el documento es temporalmente almacenado en:',
      opciones: ['la memoria flash', 'la RAM', 'la ROM', 'la CPU', 'el CD-ROM'],
      correcta: 1,
    },
  ],

  // Semana 7 (Versión 1)
  preguntasSemana7_v1: [
    {
      texto: 'En el contexto de la memoria virtual, ¿qué son las páginas?',
      opciones: [
        'Unidades de almacenamiento del procesador',
        'Sectores físicos del disco duro asignados al sistema operativo',
        'Bloques de datos en que se divide la memoria para transferencias entre memoria principal y disco',
        'Partes de la caché L1 utilizadas para acelerar el acceso a datos',
      ],
      correcta: 2,
    },
    {
      texto:
        'Las memorias ROM son volátiles y pierden la información cuando se corta la corriente.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Complete la frase: Dice que si se referencia un elemento de memoria, esta dirección de memoria tenderá a ser referenciada...',
      opciones: ['pronto', 'nunca', 'una sóla vez', 'aleatoriamente'],
      correcta: 0,
    },
    {
      texto:
        'Teniendo en cuenta la jerarquía de memoria, la siguiente afirmación es: A mayor capacidad, mayor costo por bit.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Cuando se trabaja en un documento con un procesador de texto (Word) en una computadora, el documento es temporalmente almacenado en:',
      opciones: ['la memoria flash', 'el CD-ROM', 'la CPU', 'la RAM', 'la ROM'],
      correcta: 3,
    },
    {
      texto:
        'Ordene las siguientes memorias según su velocidad (la más rápida primero):',
      opciones: [
        'Cache',
        'RAM',
        'CD y DVD compacto',
        'Registros del CPU',
        'Disco rígido',
      ],
      correcta: [3, 0, 1, 4, 2],
      multiple: true,
      tipo: 'ordenar',
    },
    {
      texto:
        'Cuando el procesador intenta leer una palabra de memoria, se hace una comprobación para determinar si la palabra está en la caché.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: 'Al bajar en la jerarquía de memoria se observa que:',
      opciones: [
        'Aumenta el tiempo de acceso',
        'Aumenta la capacidad',
        'Disminuye el costo por bit',
        'Disminuye el tiempo de acceso',
        'Aumenta el costo por bit',
      ],
      correcta: [0, 1, 2],
      multiple: true,
    },
    {
      texto: 'Se observan dos principios de localidad de referencia:',
      opciones: [
        'Localidad temporal',
        'Localidad espacial',
        'Localidad secuencial',
        'Localidad aleatoria',
      ],
      correcta: [0, 1],
      multiple: true,
    },
    {
      texto:
        '¿Qué memoria pierde su información cuando se deja de suministrar corriente al equipo?',
      opciones: ['Disco SSD', 'RAM', 'Pendrive', 'ROM'],
      correcta: 1,
    },
  ],

  // Semana 7 (Versión 2)
  preguntasSemana7_v2: [
    {
      texto:
        'Las memorias SRAM se utilizan principalmente como memoria principal en las computadoras debido a su bajo coste.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Teniendo en cuenta la jerarquía de memoria, la siguiente afirmación es: A menor tiempo de acceso, mayor costo por bit.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        '¿Por qué la memoria flash es ideal para dispositivos portátiles como teléfonos y cámaras?',
      opciones: [
        'Porque consume poca energía y no pierde datos al apagarse',
        'Porque necesita ventilación activa para funcionar correctamente',
        'Porque solo se puede usar una vez y luego se descarta',
        'Porque es más rápida que cualquier otro tipo de memoria',
      ],
      correcta: 0,
    },
    {
      texto:
        '¿Cuál es una de las principales ventajas de la memoria Flash frente a otros tipos de almacenamiento?',
      opciones: [
        'Mayor velocidad de acceso aleatorio que la SRAM',
        'Mayor durabilidad frente a ciclos repetidos de escritura',
        'Mayor densidad de almacenamiento y menor costo por bit',
        'Mayor capacidad de escritura por segundo que la DRAM',
      ],
      correcta: 2,
    },
    {
      texto:
        'La ROM es una memoria volátil que se puede programar y borrar eléctricamente.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Las memorias volátiles como la DRAM pierden la información almacenada cuando se corta la corriente eléctrica.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: 'Una memoria cache es..',
      opciones: [
        'Memoria direccionable por su contenido (ASOCIATIVA)',
        'Memoria dinámica',
        'Memoria estática',
        'Memoria stack',
        'Memoria Coordenada',
      ],
      correcta: [0, 2],
      multiple: true,
    },
    {
      texto:
        'Las memorias SRAM son más caras y rápidas que las DRAM, por lo que se usan en cachés y registros.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: 'Seleccione las características de la memoria DRAM',
      opciones: [
        'El condensador tiene la tendencia natural a descargarse',
        'Para evitar la pérdida de información, es necesario refrescar periódicamente',
        'Se construye a partir de biestables',
        'Celda construida en base a un condensador que mantiene el valor',
        'No necesita "refrescos"',
        'El refresco consiste en la lectura del condensador y posterior escritura',
        'Tipo de memoria no volátil',
        'Se encuentra en el primer lugar de la jerarquía de memoria',
      ],
      correcta: [0, 1, 3, 5],
      multiple: true,
    },
    {
      texto:
        'Complete la frase: Dice que si se referencia un elemento de memoria, los elementos ___ a él tenderán a ser referenciados pronto.',
      opciones: ['cercanos', 'lejanos', 'aleatorios', 'ninguno'],
      correcta: 0,
    },
  ],
  preguntasSemana8_v1: [
    {
      texto:
        'La tabla/vector de interrupciones contiene las direcciones de las rutinas de servicio de interrupción, estás rutinas pueden ser invocadas por:',
      opciones: [
        'El dispositivo externo envía al CPU el nro. de interrupción a invocar',
        'La CPU invoca al nro. de interrupción de forma interna mediante condición excepcional que se presenta',
        'El operando de la instrucción es el nro de interrupción a invocar',
      ],
      correcta: [0, 1, 2],
      multiple: true,
    },
    {
      texto:
        'Cuando se produce una interrupción se disparan una serie de eventos en la CPU, tanto a nivel hardware como software, ordénelos:',
      opciones: [
        'La CPU termina la ejecución de la instrucción en curso antes de responder a la interrupción.',
        'Usualmente, la rutina de servicio de interrupción empezará almacenando en la pila los contenidos de todos los registros.',
        'El dispositivo genera una interrupción al CPU.',
        'Procesar la interrupción.',
        'La CPU envía una señal de reconocimiento al dispositivo que originó la interrupción.',
        'Una vez restaurado los valores de las banderas y del contador de programa (IP) desde la pila, la siguiente instrucción a ejecutar pertenecerá al programa previamente interrumpido.',
        'La CPU debe preservar la información necesaria para continuar el programa en curso en el punto en que se interrumpió.',
        'Cuando el procesamiento de la interrupción ha terminado, los valores de los registros almacenados se recuperan de la pila y se vuelven a almacenar en los registros.',
        'La CPU carga el contador de programa (IP) con la posición de inicio de la rutina de servicio de interrupción solicitada.',
      ],
      correcta: [2, 0, 4, 6, 8, 1, 3, 7, 5],
      multiple: true,
      tipo: 'ordenar',
    },
    {
      texto:
        'El siguiente programa entra en un bucle infinito:\n_MODEL SMALL_\n_DATA_\nx DW 2\ny DW 3\nz DW 0\n_CODE_\n_STARTUP_\nBucle:\nMOV AX, 0\nMOV BX, y\nJMP Bucle\nMOV z, AX\n_EXIT_\n¿Genera una interrupción?',
      opciones: [
        'Interrupción Externa/Hardware',
        'Interrupción de software',
        'Excepción',
        'No genera una interrupción',
      ],
      correcta: 3,
    },
    {
      texto:
        'Una vez que finaliza la rutina de servicio de interrupción, ¿qué registros se recuperan de la pila?',
      opciones: [
        'Se recupera la dirección de la próxima instrucción a ejecutar del registro IP y el registro AX.',
        'Se recupera el registro BX y el registro de estado de los flags.',
        'Se recupera el registro de estado de los flags.',
        'Se recupera solo la dirección de la próxima instrucción a ejecutar del registro IP.',
        'Se recupera la dirección de la próxima instrucción a ejecutar del registro IP, más el registro de estado de los flags.',
      ],
      correcta: 4,
    },
    {
      texto:
        'Una característica clave de un bus es que se trata de un medio de transmisión compartido. Sólo un dispositivo puede transmitir con éxito en un momento dado.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Complete la definición: Una interrupción es una operación que _____ la ejecución de un programa de modo que el sistema pueda realizar una _____. La _____ se ejecuta y por lo regular regresa el control al programa que fue _____, el cual entonces _____ su ejecución.',
      opciones: [
        'suspende, acción especial, rutina de servicio de interrupción, interrumpido, reasume',
        'detiene, operación, función, pausado, continúa',
        'interrumpe, tarea, subrutina, detenido, reinicia',
      ],
      correcta: 0,
    },
    {
      texto: 'La instrucción INT se emplea normalmente para...',
      opciones: [
        'Invocar a la memoria cache',
        'preservar el entorno',
        'Resetear los registros del CPU',
        'Borrar la pila',
        'Invocar a los servicios del sistema operativo/BIOS',
      ],
      correcta: 4,
    },
    {
      texto: 'Cuando se produce una división por cero, la CPU genera una..',
      opciones: [
        'Lectura de memoria',
        'Llamada al modulo de E/S',
        'Escritura en memoria',
        'INTA reconocimiento de interrupción',
        'Excepción',
      ],
      correcta: 4,
    },
    {
      texto:
        'Complete el cuadro de técnicas para transferir de un módulo de E/S a la memoria:',
      opciones: [
        'E/S programada, E/S mediante interrupciones, Acceso directo a memoria (DMA)',
        'E/S sincrónica, E/S asincrónica, DMA',
        'Polling, Interrupciones, Memoria compartida',
      ],
      correcta: 0,
    },
    {
      texto:
        '¿Qué registros almacena la CPU en la pila al ejecutar la instrucción INT?',
      opciones: [
        'Almacena el registro de estado de los flags.',
        'Almacena solo la dirección de la próxima instrucción a ejecutar del registro IP.',
        'Almacena la dirección de la próxima instrucción a ejecutar del registro IP y el registro AX.',
        'Almacena BX y el registro de estado de los flags.',
        'Almacena la dirección de la próxima instrucción a ejecutar del registro IP, más el registro de estado de los flags.',
      ],
      correcta: 4,
    },
  ],

  preguntasSemana9_v1: [
    {
      texto:
        'Riesgos de datos: una instrucción depende del resultado previo que todavía está en el pipeline.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Riesgos de control de la segmentación: La idea es tomar una decisión basada en los resultados de una instrucción mientras las otras se están ejecutando.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Seleccione el cauce válido para evitar desbalanceamiento en el pipelining:',
      opciones: [
        'FI, DI, CO, FO, WO',
        'FO, DI, CO, FO, EI, WO',
        'FI, CO, FO, EI, WO, CDI',
        'FI, DI, CO, FO, EI, WO',
      ],
      correcta: 3,
    },
    {
      texto:
        'Seleccione posibles soluciones cuando se presenta un riesgo de control:',
      opciones: [
        'Bloqueos después de cada salto',
        'Predicción de saltos',
        'Sumar 1 a cada instrucción',
        'Dividir la instrucción anterior por 10',
      ],
      correcta: [0, 1],
      multiple: true,
    },
    {
      texto:
        '¿Qué nombre recibe la técnica que consiste en ejecutar simultáneamente varias instrucciones en diferentes etapas?',
      opciones: [
        'Paralelismo',
        'Tiempo de CPU',
        'Segmentación de instrucciones',
        'Rendimiento',
      ],
      correcta: 2,
    },
    {
      texto:
        'Un posible solución cuando se presentan un riesgo estructural es insertar ciclos ociosos hasta que se libere el recurso.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Segmentado de cauce: Una unidad segmentada es una secuencia de etapas donde nuevas operaciones pueden iniciarse mientras otras están en proceso.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Complete: La segmentación de instrucciones mejora la ______ global pero no mejora ______ individual.',
      opciones: [
        'productividad, latencia',
        'velocidad, ejecución',
        'eficiencia, memoria',
      ],
      correcta: 0,
    },
    {
      texto:
        'Riesgos de datos de la segmentación ocurren cuando hay conflictos de Hardware en distintas etapas de ejecución.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Complete: En la segmentación, las instrucciones usan ______ recursos en ______ etapas, ejecutándose ______ mientras estén en ______ etapas.',
      opciones: [
        'diferentes, distintas, simultáneamente, diferentes',
        'similares, iguales, secuencialmente, mismas',
      ],
      correcta: 0,
    },
  ],
  preguntasSemana10_v1: [
    {
      texto: 'La familia de arquitectura ARM incluye:',
      opciones: [
        'Procesadores para aplicaciones móviles',
        'Procesadores para sistemas en tiempo real',
        'Microcontroladores para sistemas embebidos',
        'Procesadores de texto',
      ],
      correcta: [0, 1, 2],
      multiple: true,
    },
    {
      texto:
        'Dispositivo que permite instalar un sistema operativo completo con aplicaciones para tareas complejas:',
      opciones: [
        'Smartphone',
        'Nintendo Switch',
        'Teléfono tradicional',
        'Playstation',
      ],
      correcta: 0,
    },
    {
      texto:
        'Uno de los motivos del éxito de ARM es su bajo consumo y menor cantidad de transistores.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Los dispositivos móviles inteligentes no son vulnerables a virus y ataques.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto: 'El 98% de los smartphones utilizan CPU:',
      opciones: ['ARM', 'Intel', 'AMD', 'NVIDIA'],
      correcta: 0,
    },
    {
      texto: 'Los smartphones tienen capacidad de multitarea como las PCs.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: 'ARM no fabrica chips directamente, solo licencia su tecnología.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: 'Características principales de ARM:',
      opciones: [
        'Set de instrucciones reducido (RISC)',
        'Bajo consumo de energía',
        'Alto consumo de energía',
        'Diseño para implementaciones pequeñas',
      ],
      correcta: [0, 1, 3],
      multiple: true,
    },
    {
      texto:
        'La arquitectura ARM es no licenciable (solo ARM Holdings puede fabricar).',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto: 'La arquitectura ARM se caracteriza por:',
      opciones: [
        'Solo Load/Store acceden a memoria',
        'Instrucciones de mismo tamaño',
        'Instrucciones que procesan datos acceden a memoria',
        'Instrucciones de distinto tamaño',
      ],
      correcta: [0, 1],
      multiple: true,
    },
  ],
};
