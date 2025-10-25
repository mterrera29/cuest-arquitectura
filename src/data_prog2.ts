export const prog2 = {
  semana1: [
    {
      texto:
        'Un módulo se dice abierto cuando, habiendo dado una descripción bien definida y estable, está disponible para ser utilizado por otros módulos.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto: '¿Los procedimientos son funciones?',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Relaciona los 5 principios de construcción de software con sus respectivas definiciones.',
      descripciones: [
        'Propiedades que describen a un módulo capaz de ser extendido por el usuario o utilizado por otro módulo',
        'Los módulos deben corresponderse con las unidades sintácticas que ofrece el lenguaje utilizado',
        'No debe revelarse la forma en que los servicios ofrecidos por un módulo son implementados',
        'La documentación sobre un módulo debe estar contenida en su propio código',
        'Un único módulo debe conocer una lista exhaustiva de alternativas a utilizarse por el programa',
      ],
      opciones: [
        'Cambio Simple',
        'Acceso Uniforme',
        'Unidad Modular Lingüística',
        'Abierto-Cerrado',
        'Auto-documentación',
      ],
      correcta: [3, 2, 1, 4, 0],
      tipo: 'ordenar',
      multiple: true,
    },
    {
      texto:
        'Relaciona los enunciados con los Factores que determinan la Calidad de Software.',
      descripciones: [
        'Esfuerzo necesario para realizar modificaciones sobre una aplicación o sistema que ya se encuentra en funcionamiento',
        'Grado en que una aplicación o sistema puede ser transferido a otro hardware o sistema operativo',
        'Cantidad de recursos que necesita una aplicación o sistema para realizar las operaciones con tiempos de respuesta óptimos',
        'Esfuerzo requerido para que partes de una aplicación sean utilizadas en otras aplicaciones',
        'Grado en que una aplicación o sistema cumple con la definición y lo encomendado por el cliente',
        'Grado con que puede controlarse el acceso al software y/o a los datos de un sistema a personal no autorizado',
        'Grado en que una aplicación o sistema puede comunicarse con otras aplicaciones o sistemas',
        'Esfuerzo requerido para aprender el manejo de una aplicación, trabajar con ella, introducir datos y conseguir resultados',
      ],
      opciones: [
        'Eficiencia',
        'Integridad',
        'Portabilidad',
        'Facilidad de uso',
        'Corrección',
        'Interoperabilidad',
        'Flexibilidad',
        'Reusabilidad',
      ],
      correcta: [6, 2, 0, 7, 4, 1, 5, 3],
      tipo: 'ordenar',
      multiple: true,
    },
    {
      texto:
        'Elija, entre las siguientes combinaciones, la opción que crea correcta.\n' +
        'a. Reusabilidad & Robustez - Confiabilidad / Extensibilidad & Correctitud - Modularidad\n' +
        'b. Correctitud & Extensibilidad - Modularidad / Robustez & Reusabilidad - Confiabilidad\n' +
        'c. Correctitud & Robustez - Modularidad / Extensibilidad & Reusabilidad - Confiabilidad\n' +
        'd. Correctitud & Robustez - Confiabilidad / Extensibilidad & Reusabilidad - Modularidad',
      opciones: ['a', 'b', 'c', 'd'],
      correcta: 3,
    },
    {
      texto: '¿Las funciones son procedimientos?',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Seleccione las sentencias que cree son correctas sobre los principios de modularidad.',
      opciones: [
        'La Descomposición Modular sigue la idea de poder descomponer un programa en módulos menos complejos.',
        'La Descomposición Modular refiere a la descomposición de un problema en subproblemas menos complejos, conectados por una estructura simple, y que pueden resolverse en forma independiente.',
        'La Composición Modular trata de la creación de nuevas unidades de software creadas a partir de la combinación de otras ya existentes.',
        'Se satisface el criterio de Composición Modular si se favorece la producción de elementos de software que pueden ser combinados para crear nuevos sistemas, posiblemente en un entorno diferente al que se idearon.',
        'El Entendimiento Modular se relaciona a la facilidad para comprender el comportamiento de un módulo con solo leer su código.',
        'Un método favorece el Entendimiento Modular si facilita que quien lea un módulo pueda comprenderlo sin necesidad de acudir a otros módulos.',
        'En un programa donde se satisface el criterio de Protección Modular, los cambios que impactan un módulo NO se propagan al resto.',
        'El criterio de Continuidad Modular especifica que los cambios que impactan un módulo se propaguen al resto.',
      ],
      multiple: true,
      correcta: [0, 2, 4],
      respuestaCorrecta:
        'El Entendimiento Modular se relaciona a la facilidad para comprender el comportamiento de un módulo con solo leer su código; la Composición Modular trata de la creación de nuevas unidades de software creadas a partir de la combinación de otras ya existentes; y la Descomposición Modular sigue la idea de poder descomponer un programa en módulos menos complejos.',
    },
    {
      texto:
        '¿Cuáles de las siguientes opciones constituyen parte de las reglas para asegurar la modularidad?',
      opciones: [
        'Interfaces directas',
        'Interfaces pequeñas',
        'Interfaces explícitas',
        'Ocultamiento de Información',
        'Protección modular',
        'Mapeo directo',
        'Cambio simple',
      ],
      correcta: [1, 2, 3, 5],
      multiple: true,
    },
    {
      texto:
        'Los términos procedimientos y funciones refieren a un conjunto de sentencias y declaraciones contenidas en una unidad con el fin de resolver un problema específico.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Un tipo abstracto de datos es un tipo de datos que consta de datos y operaciones que pueden realizarse sobre estos datos, es definido por el programador y permite modelar una entidad real.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Relaciona los Criterios con los Factores de Calidad que estos favorecen.',
      descripciones: [
        'Continuidad Modular',
        'Composición Modular',
        'Protección Modular',
        'Entendimiento Modular',
      ],
      opciones: ['Robustez', 'Mantenimiento', 'Extensibilidad', 'Reusabilidad'],
      correcta: [2, 3, 0, 1],
      tipo: 'ordenar',
      multiple: true,
    },
    {
      texto:
        'Elija el orden correcto de las etapas del Ciclo de Vida de un proyecto.',
      opciones: [
        '1. Estudio de Factibilidad, 2. Análisis y especificaciones de requerimientos, 3. Diseño y especificación, 4. Integración y Testeo de Sistema, 5. Codificación y Testeo de módulos, 6. Liberación y Mantenimiento',
        '1. Análisis y especificaciones de requerimientos, 2. Diseño y especificación, 3. Estudio de Factibilidad, 4. Codificación y Testeo de módulos, 5. Integración y Testeo de Sistema, 6. Liberación y Mantenimiento',
        '1. Estudio de Factibilidad, 2. Análisis y especificaciones de requerimientos, 3. Diseño y especificación, 4. Codificación y Testeo de módulos, 5. Integración y Testeo de Sistema, 6. Liberación y Mantenimiento',
        '1. Estudio de Factibilidad, 2. Análisis y especificaciones de requerimientos, 3. Diseño y especificación, 4. Codificación y Testeo de módulos, 5. Liberación y Mantenimiento, 6. Integración y Testeo de Sistema',
        '1. Estudio de Factibilidad, 2. Diseño y especificación, 3. Análisis y especificaciones de requerimientos, 4. Codificación y Testeo de módulos, 5. Integración y Testeo de Sistema, 6. Liberación y Mantenimiento',
      ],
      correcta: 2,
      respuestaCorrecta:
        '1. Estudio de Factibilidad, 2. Análisis y especificaciones de requerimientos, 3. Diseño y especificación, 4. Codificación y Testeo de módulos, 5. Integración y Testeo de Sistema, 6. Liberación y Mantenimiento',
    },
    {
      texto:
        '¿Cuáles son las subetapas de la Integración y Testeo del sistema?',
      opciones: [
        'Verificación / Mantenimiento',
        'Validación / Análisis',
        'Verificación / Validación',
        'Verificación / Análisis',
      ],
      correcta: 2,
    },
    {
      texto:
        'El mantenimiento adaptativo hace referencia a la adaptación de la aplicación a nuevas circunstancias, requerimientos o inclusión de nuevas prestaciones.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'Los procedimientos y funciones deben obligatoriamente hacer uso de parámetros.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto: 'Los tipos de datos NO son abstracciones.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Todos los lenguajes de programación soportan los mismos tipos de datos.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Relaciona las distintas perspectivas con su respectiva descripción.',
      descripciones: [
        'Visión con base en la manufactura',
        'Visión del usuario',
        'Visión con base en el juicio',
        'Visión basada en el valor',
        'Visión del producto',
      ],
      opciones: [
        'Adecuación al propósito',
        'Conformidad con la especificación',
        'Depende de la cantidad de dinero que el usuario está dispuesto a pagar',
        'Algo que se puede reconocer, pero no definir',
        'Vinculada a las características inherentes del producto',
      ],
      correcta: [1, 0, 3, 2, 4],
      tipo: 'ordenar',
      multiple: true,
    },
    {
      texto:
        'En el contexto de los Factores de calidad del software, los términos Corrección y Fiabilidad NO refieren a lo mismo.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        'En casos excepcionales la Integración y Testeo del Sistema puede darse antes de la Codificación y Testeo de los Módulos.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
  ],
  semana2: [
    {
      texto:
        'Elija el orden correcto de las etapas del Ciclo de Vida de un proyecto.',
      opciones: [
        '1. Análisis y especificaciones de requerimientos\n2. Diseño y especificación\n3. Integración y Testeo de Sistema\n4. Codificación y Testeo de módulos\n5. Liberación y Mantenimiento',
        '1. Estudio de Factibilidad\n2. Análisis y especificaciones de requerimientos\n3. Diseño y especificación\n4. Codificación y Testeo de módulos\n5. Integración y Testeo de Sistema',
        '1. Análisis y especificaciones de requerimientos\n2. Estudio de Factibilidad\n3. Codificación y Testeo de módulos\n4. Diseño y especificación\n5. Integración y Testeo de Sistema\n6. Liberación y Mantenimiento',
        '1. Estudio de Factibilidad\n2. Análisis y especificaciones de requerimientos\n3. Diseño y especificación\n4. Codificación y Testeo de módulos\n5. Integración y Testeo de Sistema\n6. Liberación y Mantenimiento',
        '1. Estudio de Factibilidad\n2. Diseño y especificación\n3. Análisis y especificaciones de requerimientos\n4. Codificación y Testeo de módulos\n5. Integración y Testeo de Sistema\n6. Liberación y Mantenimiento',
      ],
      correcta: 3,
    },
    {
      texto:
        '¿Cuáles son las subetapas de la Integración y Testeo del sistema?',
      opciones: [
        'Verificación\nAnálisis',
        'Validación\nAnálisis',
        'Verificación\nValidación',
        'Verificación\nMantenimiento',
      ],
      correcta: 2,
    },
    {
      texto:
        'Enlace los 5 principios de construcción de software con sus respectivas definiciones',
      descripciones: [
        'Propiedades que describen a un módulo capaz de ser extendido por el usuario o utilizado por otro módulo.',
        'Un único módulo debe conocer una lista exhaustiva de alternativas a utilizarse por el programa.',
        'No debe revelarse la forma en los servicios ofrecidos por un módulo son implementados.',
        'Los módulos deben corresponderse con las unidades sintácticas que ofrece el lenguaje utilizado.',
        'La documentación sobre un módulo debe estar contenida en su propio código.',
      ],
      opciones: [
        'Unidad Modular Lingüística',
        'Auto-documentación',
        'Cambio Simple',
        'Acceso Uniforme',
        'Abierto-Cerrado',
      ],
      correcta: [4, 2, 3, 0, 1],
      tipo: 'ordenar',
      multiple: true,
    },
    {
      texto:
        'Una los Criterios con los Factores de Calidad que estos favorecen',
      descripciones: [
        'Composición Modular',
        'Entendimiento Modular',
        'Protección Modular',
        'Continuidad Modular',
      ],
      opciones: ['Mantenimiento', 'Extensibilidad', 'Robustez', 'Reusabilidad'],
      correcta: [3, 0, 2, 1],
      tipo: 'ordenar',
      multiple: true,
    },
    {
      texto:
        'Elija, entre las siguientes combinaciones, la opción que crea correcta.',
      opciones: [
        'Correctitud & Extensibilidad - Modularidad\nRobustez & Reusabilidad - Confiabilidad',
        'Correctitud & Robustez - Confiabilidad\nExtensibilidad & Reusabilidad - Modularidad',
        'Reusabilidad & Robustez - Confiabilidad\nExtensibilidad & Correctitud - Modularidad',
        'Correctitud & Robustez - Modularidad\nExtensibilidad & Reusabilidad - Confiabilidad',
      ],
      correcta: 1,
    },
    {
      texto:
        'Un módulo se dice abierto cuando, habiendo dado una descripción bien definida y estable, está disponible para ser utilizado por otros módulos.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Los términos procedimientos y funciones refieren a un conjunto de sentencias y declaraciones contenidas en una unidad con el fin de resolver un problema específico, el cual puede ser invocado desde otro punto del programa.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: '¿Las funciones son procedimientos?',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: 'Seleccione las sentencias que cree son correctas',
      opciones: [
        'El criterio de Continuidad Modular especifica que los cambios que impactan un módulo se propaguen al resto.',
        'La Composición Modular trata de la creación de nuevos unidades de software creadas a partir de la combinación de otras ya existentes.',
        'En un programa donde se satisface el criterio de Protección Modular, los cambios que impactan un módulo NO se propagan al resto.',
        'La Descomposición Modular sigue la idea de poder descomponer un programa en módulos menos complejos.',
        'El Entendimiento Modular se relaciona a la facilidad para comprender el comportamiento de un módulo con solo leer su código.',
        'Se satisface el criterio de Composición Modular si se favorece la producción de elementos de software que pueden ser combinados para crear nuevos sistemas, posiblemente en un entorno diferente a aquel en el que se idearon.',
        'La Protección Modular especifica que las excepciones en tiempo de ejecución detectadas en un módulo, es decir, mientras el programa está corriendo, son contenidas y NO se propagan al resto de los módulos.',
        'La Descomposición Modular refiere a la descomposición de un problema en subproblemas menos complejos, conectados por una estructura simple, y que pueden resolverse en forma independiente.',
        'Un método favorece el Entendimiento Modular si facilita que quien lea un módulo pueda comprenderlo sin necesidad de acudir a otros módulos.',
      ],
      correcta: [1, 2, 5, 6, 7, 8],
      multiple: true,
    },
    {
      texto:
        'Los procedimientos y funciones deben obligatoriamente hacer uso de parámetros',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'Todos los lenguajes de programación soportan los mismos tipos de datos',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto: 'Python es un lenguaje dinámicamente tipado',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: '¿Cuáles de las siguientes son palabras reservadas del lenguaje?',
      opciones: [
        'True',
        'print',
        'None',
        'elseif',
        'escape',
        'global',
        'stop',
        'do',
        'while',
        'break',
      ],
      correcta: [0, 2, 5, 8, 9],
      multiple: true,
    },
    {
      texto:
        'Una variable de tipo entero puede transformarse a una variable de tipo cadena de caracteres de la siguiente forma:\n\nVar1 = 9\nVar1 = str(var1)',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        '¿Qué expresión, al evaluarse y encontrarse un elemento cuyo valor de verdad es falso (False) detiene la ejecución y retorna dicho valor?',
      opciones: ['or', 'and'],
      correcta: 1,
    },
    {
      texto:
        'Se llama paquete al conjunto de módulos que componen un programa.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto:
        "¿Qué imprime la siguiente instrucción?\n\nprint('Mi', 'nombre', 'es', 'Nicolas', sep='#')",
      opciones: [
        'Mi#nombre#es#Nicolas',
        'MinombreesNicolas',
        'Mi nombre es Nicolas',
      ],
      correcta: 0,
    },
    {
      texto:
        "¿Cuál es la salida del siguiente programa?\n\nnum = 968.19893842\nprint('%.2f' % num)",
      opciones: ['968.19', '968.19893842', '968'],
      correcta: 0,
    },
    {
      texto:
        'La salida del siguiente programa es: 15\n\nvariable = [1,2,3,4,5]\nfor i in range(len(variable)):\n    variable[i] += 1\nprint(variable)',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'El siguiente programa encuentra todos los números entre 200 y 210 (incluidos) tal que cada dígito del número es par, y los imprime de forma ordenada separados por comas.',
      opciones: [
        '202, 204, 204, 206, 208',
        '200, 202, 204, 206, 208',
        '200, 202, 204, 206, 208, 210',
        '200, 202, 204, 208, 206',
        '190, 202, 204, 206, 208',
      ],
      correcta: 1,
    },
    {
      texto:
        'Elija la versión de código que sirva para encontrar todos los números divisibles por 7 pero que no son múltiplo de 5 entre 0 y 50 (incluidos).',
      opciones: [
        'numeros=[]\nfor numero in range(0, 51):\n    if (numero % 7 == 0) and (numero % 5 != 0):\n    numeros.append(str(numero))\nprint(",".join(numeros))',
        'numeros=[]\nfor numero in range(0, 51):\n    if (numero / 7 > 0) and (numero % 5 != 0):\n    numeros.append(str(numero))\nprint(",".join(numeros))',
        'numeros=[]\nfor numero in range(0, 51):\n    if (numero % 7 == 0) and (numero * 5 == 0):\n    numeros.append(str(numero))\nprint(",".join(numeros))',
      ],
      correcta: 0,
    },
  ],
  semana3: [
    {
      texto:
        "Dada la siguiente clase:\n\nclass NaveEspacial:\n    def __init__(self, co, comb):\n        self.color = co\n        self.combustible = comb\n        self.alertas = False\n\n    def obtenerCombustible(self):\n        return self.combustible\n\n    def establecerEstadoAlertas(self, estado):\n        self.alertas = estado\n\n    def agregarCombustible(self, cantidad):\n        if self.combustible + cantidad > 1000:\n            disponible = 1000 - self.combustible\n            print(f\"¡De los {cantidad} litros, solo se pudieron cargar {disponible} litros!\")\n            self.combustible = 1000\n        else:\n            self.combustible += cantidad\n            print(f\"¡Se cargaron {cantidad} litros!\")\n\nIndique cuál es la salida del siguiente programa:\n\nnave_espacial1 = NaveEspacial('R', 500)\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))\nnave_espacial1.establecerEstadoAlertas(True)\nnave_espacial1.agregarCombustible(700)\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))\n\nnave_espacial2 = NaveEspacial('A', 0)\nprint('Combustible de Nave 2: ' + str(nave_espacial2.obtenerCombustible()))\nnave_espacial2.establecerEstadoAlertas\nnave_espacial2.agregarCombustible(200)\nprint('Combustible de Nave 2: ' + str(nave_espacial2.obtenerCombustible()))",
      opciones: [
        'Combustible de Nave 1: 500\n¡De los 700 litros, solo se pudieron cargar 500 litros!\nCombustible de Nave 2: 0\n¡Se cargaron 200 litros!',
        'Combustible de Nave 1: 500\n¡De los 700 litros, solo se pudieron cargar 500 litros!\nCombustible de Nave 1: 1000\nCombustible de Nave 2: 0\nCombustible de Nave 2: 200',
        'Combustible de Nave 1: 500\nCombustible de Nave 1: 1000\nCombustible de Nave 2: 0\nCombustible de Nave 2: 200',
      ],
      correcta: 1,
    },
    {
      texto:
        "Dada la clase NaveEspacial:\n\n¿Qué sucede si se ejecuta el siguiente programa?\n\nnave_espacial1 = NaveEspacial()\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))\nnave_espacial1.establecerEstadoAlertas(True)\nnave_espacial1.agregarCombustible(700)\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))",
      opciones: [
        'La primer instrucción print falla porque el objeto no se inicializó correctamente',
        'Arroja un error, ya que el método __init__ espera que se proporcionen los parámetros',
        'Funciona normalmente',
      ],
      correcta: 1,
    },
    {
      texto:
        "Dada la clase NaveEspacial:\n\n¿Qué sucede si se ejecuta el siguiente programa?\n\nnave_espacial1 = NaveEspacial\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))\nnave_espacial1.establecerEstadoAlertas(True)\nnave_espacial1.agregarCombustible(700)\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))",
      opciones: [
        'Funciona normalmente',
        'La primer instrucción print falla porque el objeto nave_espacial1 no se inicializó correctamente',
        'Arroja un error porque __init__ espera parámetros',
      ],
      correcta: 1,
    },
    {
      texto:
        "Dada la clase NaveEspacial:\n\n¿Cuál es la salida del siguiente programa?\n\nnave_espacial1 = NaveEspacial('R', 500)\nnave_espacial1.establecerEstadoAlertas(True)\nnave_espacial1.combustible += 700\nprint(nave_espacial1.obtenerCombustible())",
      opciones: ['1200', '500', '700', '1000'],
      correcta: 0,
    },
    {
      texto:
        "Dada la clase NaveEspacial:\n\nEl siguiente programa imprime Nave 1 = Nave 2: True\n\nnave_espacial1 = NaveEspacial('R', 500)\nnave_espacial2 = NaveEspacial('R', 500)\nprint('Nave 1 = Nave 2: ' + str(nave_espacial1 == nave_espacial2))",
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        "Dada la siguiente clase:\n\nclass Pelota:\n    def __init__(self):\n        self.estado = 'FRENADA'\n\n    def obtenerEstado(self):\n        return self.estado\n\n    def rodar(self):\n        print('Rodando...')\n        self.estado = 'RODANDO'\n\n    def frenar(self):\n        print('Frenando...')\n        self.estado = 'FRENADA'\n\n    def imprimirEstado(self):\n        print('Estado: ' + self.estado)\n\nIndique cuál será la salida del siguiente código:\n\npelota = Pelota()\npelota.imprimirEstado()\npelota.rodar()\nprint(pelota.obtenerEstado())\npelota.frenar()\npelota.imprimirEstado()",
      opciones: [
        'Estado: FRENADA\nRodando...\nRODANDO\nFrenando...\nEstado: FRENADA',
        'FRENADA\nrodando...\nRODANDO\nfrenando...\nFRENADA',
        "Estado: FRENADA\nRodando...\n'RODANDO'\nFrenando...\nEstado: FRENADA",
        'Error de sintaxis',
      ],
      correcta: 0,
    },
    {
      texto:
        'Dada la clase Pelota:\n\nIndique cuál será la salida del siguiente código:\n\npelota = new Pelota()\npelota.imprimir_estado()\npelota.rodar()\nprint(pelota.obtenerEstado())\npelota.frenar()\npelota.imprimir_estado()',
      opciones: [
        'Error de sintaxis',
        'Estado: FRENADA\nRodando...\nRODANDO\nFrenando...\nEstado: FRENADA',
        'FRENADA\nrodando...\nRODANDO\nfrenando...\nFRENADA',
      ],
      correcta: 0,
    },
    {
      texto:
        'Dada la clase Pelota:\n\n¿Qué tipo de servicios son rodar, frenar, obtenerEstado e imprimirEstado?',
      opciones: [
        'rodar y frenar son comandos, obtenerEstado e imprimirEstado son consultas',
        'todos son consultas',
        'ninguno es comando ni consulta',
        'todos son comandos',
      ],
      correcta: 0,
    },
    {
      texto:
        "Dada la siguiente clase:\n\nclass PelotaConNombre:\n    def __init__(self, nombre):\n        self.nombre = nombre\n        self.__establecerEstadoInicial()\n\n    def __establecerEstadoInicial(self):\n        self._establecerEstado('FRENADA')\n\n    def _establecerEstado(self, estado):\n        self.estado = estado\n\n    def establecerNombre(self, nombre):\n        self.nombre = nombre\n\n    def obtenerEstado(self):\n        return self.estado\n\n    def obtenerNombre(self):\n        return self.nombre\n\n    def rodar(self):\n        print('Rodando...')\n        self._establecerEstado('RODANDO')\n\n    def frenar(self):\n        print('Frenando...')\n        self._establecerEstado('FRENADA')\n\n    def imprimirEstado(self):\n        print('Estado de ' + self.nombre + ': ' + self.estado)\n\n¿Por qué el siguiente programa falla?\n\npelota1 = PelotaConNombre('Pelota 1')\npelota1.__establecerEstadoInicial()\npelota1.imprimirEstado()",
      opciones: [
        'El método __establecerEstadoInicial es privado',
        'El método __establecerEstadoInicial, al declararse con doble guion bajo, queda inaccesible convencionalmente',
        'El método __establecerEstadoInicial debe ser invocado por el constructor',
      ],
      correcta: 1,
    },
    {
      texto:
        "Dada la clase PelotaConNombre:\n\nEl programa:\n\npelota1 = PelotaConNombre('Pelota 1')\npelota2 = PelotaConNombre('Pelota 2')\npelota1.establecerNombre('Pelota 2')\npelota2.establecerNombre('Pelota 1')\nprint(pelota1.obtenerNombre())\nprint(pelota2.obtenerNombre())\n\nImprime: Pelota 1 / Pelota 2",
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        'El diagrama de clases es una especificación de una parte de la solución de un problema, que el programador elabora para que los diseñadores implementen y los responsables de testing verifiquen.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto:
        '¿Por qué se considera incorrecto llamar al método __init__ constructor de una clase?',
      opciones: [
        'Porque al llamarse __init__ el objeto ya fue creado',
        'Porque __init__ es el constructor de un objeto y no de una clase',
        'Porque puede reescribirse',
        'Porque el concepto de constructor solo aplica a C++',
        'Las clases no utilizan constructores',
      ],
      correcta: 0,
    },
    {
      texto: 'Los términos Clase y Objeto pueden usarse indistintamente.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto: 'Los nombres de las clases no pueden comenzar con un número.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: 'Indique cuáles son los dos miembros válidos de una Clase',
      opciones: [
        'comportamiento',
        'enlaces',
        'atributos',
        'servicios',
        'nombres',
        'responsabilidades',
        'objetos',
        'variables',
      ],
      multiple: true,
      correcta: [2, 3],
    },
    {
      texto:
        'Los requisitos y la funcionalidad de los servicios pueden especificarse únicamente a través de diagramas.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
    },
    {
      texto: 'Una los términos con sus respectivas definiciones.',
      descripciones: [
        'Propiedad o cualidad relevante que caracteriza a todos los objetos de una clase.',
        'Servicio que modifica el valor de al menos un atributo.',
        'Servicio que no modifica el valor de ningún atributo.',
        'Mantienen valores compartidos por todos los objetos de una clase.',
        'Representa la abstracción del conjunto de objetos o instancias.',
        'Dependiendo del lenguaje, se usa para crear un objeto o inicializar la instancia de una clase.',
      ],
      opciones: [
        'Constructor',
        'Atributos de clase',
        'Consulta',
        'Nombre',
        'Comando',
        'Atributo',
      ],
      correcta: [5, 4, 2, 1, 3, 0],
      tipo: 'ordenar',
      multiple: true,
    },
    {
      texto:
        'En Python no existen los conceptos de privacidad que hay en otros lenguajes, donde se definen métodos y atributos como privados o protegidos.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
    },
    {
      texto: 'La Firma o Signatura de un servicio está dada por:',
      opciones: [
        'Número de llamadas',
        'Número de comandos',
        'Nombre del servicio',
        'Tipo de los parámetros',
        'Longitud del nombre del servicio',
        'Tipo del resultado',
        'Número de parámetros',
        'Tipo de las variables definidas internamente',
      ],
      multiple: true,
      correcta: [2, 3, 6, 5],
    },
    {
      texto:
        'Señale cuáles de las siguientes se consideran convenciones válidas en el lenguaje Python',
      opciones: [
        'La primera letra del nombre de la clase se escribe en minúscula',
        'Las palabras de un identificador se escriben todas con inicial mayúscula',
        'La primera letra del nombre de atributos, comandos y consultas, se escribe con minúscula',
        'Los nombres de consultas que retornan el valor de un atributo comienzan con obtener, y comandos con establecer',
        'Se usan comentarios para identificar las secciones de atributos, comandos y consultas',
      ],
      multiple: true,
      correcta: [2, 3, 4],
    },
  ],
  semana3_2: [
    {
      texto:
        "Dada la siguiente clase:\n\nclass NaveEspacial:\n    def __init__(self, co, comb):\n        self.color = co\n        self.combustible = comb\n        self.alertas = False\n\n    def obtenerCombustible(self):\n        return self.combustible\n\n    def establecerEstadoAlertas(self, estado):\n        self.alertas = estado\n\n    def agregarCombustible(self, cantidad):\n        if self.combustible + cantidad > 1000:\n            disponible = 1000 - self.combustible\n            print(f\"¡De los {cantidad} litros, solo se pudieron cargar {disponible} litros!\")\n            self.combustible = 1000\n        else:\n            self.combustible += cantidad\n            print(f\"¡Se cargaron {cantidad} litros!\")\n\nIndique cuál es la salida del siguiente programa:\n\nnave_espacial1 = NaveEspacial('R', 500)\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))\nnave_espacial1.establecerEstadoAlertas(True)\nnave_espacial1.agregarCombustible(700)\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))\n\nnave_espacial2 = NaveEspacial('A', 0)\nprint('Combustible de Nave 2: ' + str(nave_espacial2.obtenerCombustible()))\nnave_espacial2.establecerEstadoAlertas\nnave_espacial2.agregarCombustible(200)\nprint('Combustible de Nave 2: ' + str(nave_espacial2.obtenerCombustible()))",
      opciones: [
        'Combustible de Nave 1: 500\n¡De los 700 litros, solo se pudieron cargar 500 litros!\nCombustible de Nave 2: 0\n¡Se cargaron 200 litros!',
        'Combustible de Nave 1: 500\n¡De los 700 litros, solo se pudieron cargar 500 litros!\nCombustible de Nave 1: 1000\nCombustible de Nave 2: 0\nCombustible de Nave 2: 200',
        'Combustible de Nave 1: 500\nCombustible de Nave 1: 1000\nCombustible de Nave 2: 0\nCombustible de Nave 2: 200',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Combustible de Nave 1: 500\n¡De los 700 litros, solo se pudieron cargar 500 litros!\nCombustible de Nave 1: 1000\nCombustible de Nave 2: 0\nCombustible de Nave 2: 200',
    },
    {
      texto:
        "Dada la clase NaveEspacial:\n\n¿Qué sucede si se ejecuta el siguiente programa?\n\nnave_espacial1 = NaveEspacial()\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))\nnave_espacial1.establecerEstadoAlertas(True)\nnave_espacial1.agregarCombustible(700)\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))",
      opciones: [
        'La primer instrucción print falla porque el objeto no se inicializó correctamente',
        'Arroja un error, ya que el método __init__ espera que se proporcionen los parámetros',
        'Funciona normalmente',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Arroja un error, ya que el método __init__ espera que se proporcionen los parámetros',
    },
    {
      texto:
        "Dada la clase NaveEspacial:\n\n¿Qué sucede si se ejecuta el siguiente programa?\n\nnave_espacial1 = NaveEspacial\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))\nnave_espacial1.establecerEstadoAlertas(True)\nnave_espacial1.agregarCombustible(700)\nprint('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))",
      opciones: [
        'Funciona normalmente',
        'La primer instrucción print falla porque el objeto nave_espacial1 no se inicializó correctamente',
        'Arroja un error porque __init__ espera parámetros',
      ],
      correcta: 1,
      respuestaCorrecta:
        'La primer instrucción print falla porque el objeto nave_espacial1 no se inicializó correctamente',
    },
    {
      texto:
        "Dada la clase NaveEspacial:\n\n¿Cuál es la salida del siguiente programa?\n\nnave_espacial1 = NaveEspacial('R', 500)\nnave_espacial1.establecerEstadoAlertas(True)\nnave_espacial1.combustible += 700\nprint(nave_espacial1.obtenerCombustible())",
      opciones: ['1200', '500', '700', '1000'],
      correcta: 0,
      respuestaCorrecta: '1200',
    },
    {
      texto:
        "Dada la clase NaveEspacial:\n\nEl siguiente programa imprime Nave 1 = Nave 2: True\n\nnave_espacial1 = NaveEspacial('R', 500)\nnave_espacial2 = NaveEspacial('R', 500)\nprint('Nave 1 = Nave 2: ' + str(nave_espacial1 == nave_espacial2))",
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        "Dada la siguiente clase:\n\nclass Pelota:\n    def __init__(self):\n        self.estado = 'FRENADA'\n\n    def obtenerEstado(self):\n        return self.estado\n\n    def rodar(self):\n        print('Rodando...')\n        self.estado = 'RODANDO'\n\n    def frenar(self):\n        print('Frenando...')\n        self.estado = 'FRENADA'\n\n    def imprimirEstado(self):\n        print('Estado: ' + self.estado)\n\nIndique cuál será la salida del siguiente código:\n\npelota = Pelota()\npelota.imprimirEstado()\npelota.rodar()\nprint(pelota.obtenerEstado())\npelota.frenar()\npelota.imprimirEstado()",
      opciones: [
        'Estado: FRENADA\nRodando...\nRODANDO\nFrenando...\nEstado: FRENADA',
        'FRENADA\nrodando...\nRODANDO\nfrenando...\nFRENADA',
        "Estado: FRENADA\nRodando...\n'RODANDO'\nFrenando...\nEstado: FRENADA",
        'Error de sintaxis',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Estado: FRENADA\nRodando...\nRODANDO\nFrenando...\nEstado: FRENADA',
    },
    {
      texto:
        'Dada la clase Pelota:\n\nIndique cuál será la salida del siguiente código:\n\npelota = new Pelota()\npelota.imprimir_estado()\npelota.rodar()\nprint(pelota.obtenerEstado())\npelota.frenar()\npelota.imprimir_estado()',
      opciones: [
        'Error de sintaxis',
        'Estado: FRENADA\nRodando...\nRODANDO\nFrenando...\nEstado: FRENADA',
        'FRENADA\nrodando...\nRODANDO\nfrenando...\nFRENADA',
      ],
      correcta: 0,
      respuestaCorrecta: 'Error de sintaxis',
    },
    {
      texto:
        'Dada la clase Pelota:\n\n¿Qué tipo de servicios son rodar, frenar, obtenerEstado e imprimirEstado?',
      opciones: [
        'rodar y frenar son comandos, obtenerEstado e imprimirEstado son consultas',
        'todos son consultas',
        'ninguno es comando ni consulta',
        'todos son comandos',
      ],
      correcta: 0,
      respuestaCorrecta:
        'rodar y frenar son comandos, obtenerEstado e imprimirEstado son consultas',
    },
    {
      texto:
        "Dada la siguiente clase PelotaConNombre...\n\n¿Por qué el siguiente programa falla?\n\npelota1 = PelotaConNombre('Pelota 1')\npelota1.__establecerEstadoInicial()\npelota1.imprimirEstado()",
      opciones: [
        'El método __establecerEstadoInicial es privado',
        'El método __establecerEstadoInicial, al declararse con doble guion bajo, queda inaccesible convencionalmente',
        'El método __establecerEstadoInicial debe ser invocado por el constructor',
      ],
      correcta: 1,
      respuestaCorrecta:
        'El método __establecerEstadoInicial, al declararse con doble guion bajo, queda inaccesible convencionalmente',
    },
    {
      texto:
        'Dada la clase PelotaConNombre:\n\nEl programa imprime:\n\nPelota 1\nPelota 2',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        'El diagrama de clases es una especificación de una parte de la solución de un problema...',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto:
        '¿Por qué se considera incorrecto llamar al método __init__ constructor de una clase?',
      opciones: [
        'Porque al llamarse __init__ el objeto ya fue creado',
        'Porque __init__ es el constructor de un objeto y no de una clase',
        'Porque puede reescribirse',
        'Porque el concepto de constructor solo aplica a C++',
        'Las clases no utilizan constructores',
      ],
      correcta: 0,
      respuestaCorrecta: 'Porque al llamarse __init__ el objeto ya fue creado',
    },
    {
      texto: 'Los términos Clase y Objeto pueden usarse indistintamente.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'Los nombres de las clases no pueden comenzar con un número.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'Indique cuáles son los dos miembros válidos de una Clase',
      opciones: [
        'comportamiento',
        'enlaces',
        'atributos',
        'servicios',
        'nombres',
        'responsabilidades',
        'objetos',
        'variables',
      ],
      multiple: true,
      correcta: [2, 3],
      respuestaCorrecta: 'atributos, servicios',
    },
    {
      texto:
        'Los requisitos y la funcionalidad de los servicios pueden especificarse únicamente a través de diagramas.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'Falso',
    },
    {
      texto: 'Una los términos con sus respectivas definiciones.',
      descripciones: [
        'Propiedad o cualidad relevante que caracteriza a todos los objetos de una clase.',
        'Servicio que modifica el valor de al menos un atributo.',
        'Servicio que no modifica el valor de ningún atributo.',
        'Mantienen valores compartidos por todos los objetos de una clase.',
        'Representa la abstracción del conjunto de objetos o instancias.',
        'Dependiendo del lenguaje, se usa para crear un objeto o inicializar la instancia de una clase.',
      ],
      opciones: [
        'Constructor',
        'Atributos de clase',
        'Consulta',
        'Nombre',
        'Comando',
        'Atributo',
      ],
      correcta: [5, 4, 2, 1, 3, 0],
      tipo: 'ordenar',
      multiple: true,
      respuestaCorrecta:
        'Atributo, Comando, Consulta, Atributos de clase, Nombre, Constructor',
    },
    {
      texto:
        'En Python no existen los conceptos de privacidad que hay en otros lenguajes...',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto: 'La Firma o Signatura de un servicio está dada por:',
      opciones: [
        'Número de llamadas',
        'Número de comandos',
        'Nombre del servicio',
        'Tipo de los parámetros',
        'Longitud del nombre del servicio',
        'Tipo del resultado',
        'Número de parámetros',
        'Tipo de las variables definidas internamente',
      ],
      multiple: true,
      correcta: [2, 3, 6, 5],
      respuestaCorrecta:
        'Nombre del servicio, Tipo de los parámetros, Número de parámetros, Tipo del resultado',
    },
    {
      texto:
        'Señale cuáles de las siguientes se consideran convenciones válidas en Python',
      opciones: [
        'La primera letra del nombre de la clase se escribe en minúscula',
        'Las palabras de un identificador se escriben todas con inicial mayúscula',
        'La primera letra del nombre de atributos, comandos y consultas, se escribe con minúscula',
        'Los nombres de consultas que retornan el valor de un atributo comienzan con obtener, y comandos con establecer',
        'Se usan comentarios para identificar las secciones de atributos, comandos y consultas',
      ],
      multiple: true,
      correcta: [2, 3, 4],
      respuestaCorrecta:
        "La primera letra del nombre de atributos, comandos y consultas, se escribe con minúscula; Los nombres de consultas comienzan con 'obtener' y los comandos con 'establecer'; Se usan comentarios para identificar secciones",
    },
  ],
  semana4: [
    {
      texto:
        'El estado interno de un objeto lo definen los valores de sus atributos de instancia.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'El estado interno de un objeto se define por los valores de sus atributos de instancia.',
    },
    {
      texto:
        '¿Qué tipo de atributos se comparten entre todas las instancias de una clase?',
      opciones: ['Atributos de Instancia', 'Atributos de Clase'],
      correcta: 1,
      respuestaCorrecta:
        'Los atributos de clase se comparten entre todas las instancias de una clase.',
    },
    {
      texto: 'Indique cuál de las siguientes sentencias es verdadera.',
      opciones: [
        'Los parámetros formales son aquellos utilizados al declarar un procedimiento o función, y los parámetros reales se asignan a estos al invocar dicho procedimiento o función.',
        'Los términos parámetros formales y parámetros reales son sinónimos.',
        'Los parámetros reales son aquellos utilizados al declarar un procedimiento o función, y los parámetros formales se asignan a estos al invocar dicho procedimiento o función.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Los parámetros formales se usan al declarar, los reales se asignan al invocar.',
    },
    {
      texto:
        'En Python, ¿cuál de las siguientes sentencias es verdadera respecto a los parámetros formales y reales?',
      opciones: [
        'Deben coincidir en tipo pero no en cantidad.',
        'Deben coincidir en cantidad pero no en tipo.',
        'No es necesario que coincidan en cantidad y tipo.',
        'Deben coincidir en cantidad y tipo.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'En Python no es necesario que los parámetros formales y reales coincidan en cantidad y tipo.',
    },
    {
      texto:
        'Dos objetos de una misma clase definida por el usuario, con mismos valores para sus atributos, ocupan la misma posición de memoria.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Cada objeto ocupa una posición de memoria distinta, independientemente de los valores de sus atributos.',
    },
    {
      texto:
        'Cuando un servicio retorna como resultado un objeto, el valor que retorna:',
      opciones: [
        'Es una copia del objeto original',
        'Es un objeto nuevo',
        'Es una referencia',
      ],
      correcta: 2,
      respuestaCorrecta:
        'El valor retornado es una referencia al objeto, no una copia.',
    },
    {
      texto: 'Un objeto puede distinguirse de otro por su referencia.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Los objetos se distinguen por su referencia, incluso si tienen los mismos valores de atributos.',
    },
    {
      texto: 'El diagrama de objetos:',
      opciones: [
        'Es una representación en memoria de la clase de un objeto.',
        'Es una representación de los objetos de software en un momento de la ejecución.',
        'Es una representación en memoria de un objeto.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'El diagrama de objetos muestra los objetos de software en un momento dado de la ejecución.',
    },
    {
      texto: '¿Qué sucede al crearse un objeto?',
      opciones: [
        'Se reserva espacio en memoria para almacenar el estado interno de todos los objetos de la misma clase.',
        'Se asignan valores por defecto a todos los atributos para los que no se definió un valor.',
        'Se reserva espacio en memoria para almacenar el estado interno del objeto.',
        'Se reserva espacio en memoria para almacenar los servicios del objeto.',
        'Se ejecuta el código del constructor (método __init__).',
      ],
      multiple: true,
      correcta: [2, 4],
      respuestaCorrecta:
        'Se reserva espacio en memoria para el estado interno del objeto y se ejecuta el constructor (__init__).',
    },
    {
      texto: 'En Python, self es la referencia al objeto que envió el mensaje.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Self es la referencia al objeto que recibió el mensaje.',
    },
    {
      texto:
        'Dada la clase robot.py, ¿cuántos comandos y consultas tiene dicha clase?',
      opciones: [
        '4 comandos y 4 consultas',
        '8 comandos y 4 consultas',
        '5 comandos y 8 consultas',
        '4 comandos y 8 consultas',
        '4 servicios y 8 consultas',
      ],
      correcta: 3,
      respuestaCorrecta: 'La clase robot.py tiene 4 comandos y 8 consultas.',
    },
    {
      texto:
        "Dada la clase robot.py, ¿el siguiente programa funciona?\n\nrobot1 = Robot('Robot 1')\nprint(Robot.obtenerNombre())",
      opciones: [
        'No funciona, ya que al llamarse desde la clase no se instancia la variable self.',
        'Funciona, pero la función obtenerNombre no retorna nada.',
        'Funciona. La función devuelve el nombre del primer objeto de tipo Robot.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'No funciona, porque al llamarse desde la clase no se instancia self.',
    },
    {
      texto:
        "Dada la clase robot.py, ¿cuál es el valor del atributo nombre de cada objeto luego de ejecutar el siguiente programa?\n\nrobot1 = Robot('Manuel')\nrobot2 = robot1\nrobot2.nombre = 'Luchi'",
      opciones: [
        'El nombre de ambos robots es Luchi',
        'El nombre de ambos robots es Manuel',
        'El nombre de robot1 es Manuel y el nombre de robot2 es Luchi',
        'El programa no funciona, arroja un error',
        'El nombre de robot1 es Luchi y el nombre de robot2 es Manuel',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Ambos nombres son Luchi, ya que apuntan al mismo objeto.',
    },
    {
      texto:
        "Dada la clase robot.py, ¿cuál es la salida del siguiente programa?\n\nrobot1 = Robot('Manuel')\nrobot2 = Robot('Luchi')\nfor i in range(1, 3):\n    robot1.dormir()\nrobot2.caminar()\nrobot2.caminar()\nrobot2.caminar()\nrobot2.dormir()\nprint(robot1.tieneMasEnergia(robot2.obtenerEnergia()))",
      opciones: ['True', 'False'],
      correcta: 0,
      respuestaCorrecta: 'True',
    },
    {
      texto:
        "Dada la clase robot.py, ¿cuál es la salida del siguiente programa?\n\nrobot1 = Robot('Manuel')\nrobot2 = Robot('Luchi')\nfor i in range(1, 3):\n    robot1.dormir()\nrobot2.caminar()\nrobot2.caminar()\nrobot2.caminar()\nrobot2.dormir()\nprint(robot1.mayorEnergia(robot2))",
      opciones: ['None', 'True', '84', 'False', '99'],
      correcta: 4,
      respuestaCorrecta: '99',
    },
    {
      texto:
        "Dada la clase robot.py, ¿cuál es la salida del siguiente programa?\n\nrobot1 = Robot('Manuel')\nrobot2 = Robot('Luchi')\nfor i in range(1, 3):\n    robot1.dormir()\nrobot2.caminar()\nrobot2.caminar()\nrobot2.caminar()\nrobot2.dormir()\nrobot1.__str__()\nrobot2.__str__()",
      opciones: [
        'Manuel False 0 99 / Luchi False 3 84',
        'Error',
        'Manuel False 3 84 / Luchi False 0 99',
        'Luchi False 3 84 / Manuel False 0 99',
        'Vacío',
      ],
      correcta: 4,
      respuestaCorrecta: 'Vacío',
    },
    {
      texto:
        "Dada la clase robot.py, ¿cuál es la salida del siguiente programa?\n\nrobot1 = Robot('Manuel')\nrobot2 = Robot('Luchi')\nrobot1.dormir()\nfor i in range(1, 5):\n    if (i % 2 == 0):\n        robot1.dormir()\n    else:\n        robot1.despertar()\nfor j in range(i, 5):\n    if (i % 2 == 0):\n        robot2.dormir()\n    else:\n        robot2.despertar()\n        robot2.caminar()\nprint(robot1.conMasEnergia(robot2))",
      opciones: [
        'Error',
        'Manuel False 0 95 / Luchi False 0 99',
        'Luchi False 0 99',
        'Vacío',
        'Manuel False 0 95',
      ],
      correcta: 2,
      respuestaCorrecta: 'Luchi False 0 99',
    },
    {
      texto:
        "Dada la clase robot.py, evalúe la ejecución del siguiente programa:\n\nrobot1 = Robot('Manuel')\nrobot2 = Robot('Luchi')\nrobot1.dormir()\nrobot1.despertar()\nfor i in range(1, 10): \n    robot1.caminar()\nrobot1 = robot1.conMasEnergia(robot2)",
      opciones: ['El mismo objeto', 'Objetos distintos', 'Objetos idénticos'],
      correcta: 0,
      respuestaCorrecta: 'Ambos hacen referencia al mismo objeto.',
    },
    {
      texto:
        "Dada la clase robot.py, evalúe la ejecución del siguiente programa:\n\nrobot1 = Robot('Manuel')\nrobot2 = Robot('Luchi')\nrobot1.dormir()\nrobot1.despertar()\nfor i in range(1, 10): \n    robot1.caminar()\nrobot_aux = robot2\nrobot2 = robot1.conMasEnergia(robot2)\nrobot1 = robot_aux",
      opciones: ['El mismo objeto', 'Objetos idénticos', 'Objetos distintos'],
      correcta: 0,
      respuestaCorrecta: 'robot1 y robot2 hacen referencia al mismo objeto.',
    },
    {
      texto:
        "Dada la clase robot.py, evalúe la ejecución del siguiente programa:\n\nrobot1 = Robot('Manuel')\nrobot2 = Robot('Luchi')\nrobot1.dormir()\nrobot2.dormir()\nrobot1.despertar()\nrobot2.despertar()\nfor i in range(1, 10): \n    robot1.caminar()\nfor i in range(10, 1, -1): \n    robot2.caminar()\nrobot1.conMasEnergia(robot2)",
      opciones: ['El mismo objeto', 'Objetos idénticos', 'Objetos distintos'],
      correcta: 2,
      respuestaCorrecta:
        'robot1 y robot2 hacen referencia a objetos distintos.',
    },
  ],
  semana5: [
    {
      texto:
        'Cuando un servicio recibe como parámetro un objeto o retorna como resultado a un objeto, el valor que recibe o retorna es:',
      opciones: [
        'Una referencia',
        'Una copia de ese objeto',
        'Nulo',
        'De tipo primitivo',
        'La dirección en memoria del objeto',
      ],
      correcta: 0,
      respuestaCorrecta: 'Una referencia',
    },
    {
      texto: 'Dos objetos pueden tener:',
      opciones: [
        'Distinta identidad y mismo estado interno',
        'Distinta identidad y distinto estado interno',
        'Misma identidad y distinto estado interno',
        'Misma identidad y mismo estado interno',
      ],
      multiple: true,
      correcta: [0, 1],
      respuestaCorrecta:
        'Distinta identidad y mismo estado interno, Distinta identidad y distinto estado interno',
    },
    {
      texto: 'La función equals analizada en la Clase 07:',
      opciones: [
        'Retorna falso si el estado interno de dos objetos coincide.',
        'Retorna falso si la identidad de dos objetos coincide.',
        'Retorna verdadero si el estado interno de dos objetos coincide.',
        'Retorna verdadero si la identidad de dos objetos coincide.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Retorna verdadero si el estado interno de dos objetos coincide.',
    },
    {
      texto: 'La función clone analizada en la Clase 07:',
      opciones: [
        'Retorna un objeto con la misma dirección que el objeto que recibe el mensaje.',
        'Crea y retorna un nuevo objeto con el mismo estado interno que el objeto que recibe el mensaje.',
        'Retorna un objeto ya existente con el mismo estado interno que el objeto que recibe el mensaje.',
        'Retorna un objeto similar al objeto que recibe el mensaje.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Crea y retorna un nuevo objeto con el mismo estado interno que el objeto que recibe el mensaje.',
    },
    {
      texto: 'El alcance de una variable es:',
      opciones: [
        'El segmento de código en el cual una variable puede ser destruida.',
        'El segmento de código en el cual una variable es visible y puede ser usada.',
        'El segmento de código donde una variable se crea.',
        'El segmento de código en el cual una variable puede ser creada.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'El alcance de una variable es el segmento de código en el cual es visible y puede ser usada.',
    },
    {
      texto: 'La equivalencia de dos objetos está dada por:',
      opciones: [
        'El estado interno de los objetos',
        'El nombre de los objetos',
        'La dirección de memoria de los objetos',
      ],
      correcta: 0,
      respuestaCorrecta: 'El estado interno de los objetos.',
    },
    {
      texto: 'El alcance de los parámetros formales es:',
      opciones: [
        'El código del servicio en el que se los declara.',
        'El código que rodea a la instrucción que invoca el servicio.',
        'Igual al alcance de los parámetros reales.',
      ],
      correcta: 0,
      respuestaCorrecta: 'El código del servicio en el que se los declara.',
    },
    {
      texto:
        'Los atributos privados solo son visibles dentro de la clase donde estos fueron declarados.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Aunque en Python pueden ser accedidos, en POO los elementos privados solo deben ser accesibles dentro de la misma clase.',
    },
    {
      texto:
        'Una variable de tipo clase está ligada y su valor es una un objeto.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Una variable de tipo clase está ligada a una referencia a un objeto, no al objeto en sí mismo.',
    },
    {
      texto:
        'Una variable puede estar viva, ocupar un lugar en memoria y almacenar un valor, solo cuando no sea visible.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Una variable puede estar viva y ocupar memoria aunque no sea visible.',
    },
    {
      texto:
        'En Python, ¿qué método debe definirse para sobrescribir el operador de igualdad?',
      opciones: ['__eq__', '__ne__', 'clone', 'equals', '__str__'],
      correcta: 0,
      respuestaCorrecta: '__eq__',
    },
    {
      texto:
        'Dada la clase cheque.py, ¿cuál es el ambiente de referenciamiento de la variable clienteBelen en el siguiente programa?',
      opciones: [
        'Todo el programa',
        'El método main',
        'La clase Cheque',
        'La clase TesterCheque',
        'El método cobrar',
      ],
      correcta: 1,
      respuestaCorrecta: 'El método main',
    },
    {
      texto:
        'Dada la clase punto.py, evalúe la ejecución del siguiente programa:\n\npunto12 = Punto(1, 2)\npunto12bis = Punto(0, 0)\npunto12bis.copy(punto12)\n\nAl alcanzarse la última instrucción, punto12 y punto12bis hacen referencia a:',
      opciones: [
        'El mismo objeto',
        'Objetos equivalentes, en términos de sus estados internos',
        'Objetos distintos',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Objetos equivalentes, en términos de sus estados internos.',
    },
    {
      texto:
        'Dada la clase punto.py, evalúe la ejecución del siguiente programa:\n\npunto12 = Punto(1, 2)\npunto13 = punto12\npunto13.establecerY(3)\n\nAl alcanzarse la última instrucción, punto12 y punto13 hacen referencia a:',
      opciones: [
        'Objetos distintos',
        'El mismo objeto',
        'Objetos equivalentes en términos de sus estados internos',
      ],
      correcta: 1,
      respuestaCorrecta: 'El mismo objeto.',
    },
    {
      texto:
        'Dada la clase punto.py, evalúe la ejecución del siguiente programa:\n\npunto12 = Punto(1, 2)\npunto13 = punto12\npunto13.establecerY(3)\npunto12bis = punto13.clone()\npunto12bis.copy(punto12)\n\nAl alcanzarse la última instrucción, sucede que:',
      opciones: [
        'punto13 y punto12bis hacen referencia al mismo objeto. punto12 hace referencia a un objeto distinto, pero equivalente en término de su estado interno.',
        'punto12 y punto13 hacen referencia al mismo objeto. punto12bis hace referencia a un objeto distinto, pero equivalente en término de su estado interno.',
        'punto12 y punto13 hacen referencia al mismo objeto, pero no comparten el mismo estado interno.',
        'punto12 y punto12bis hacen referencia al mismo objeto. punto13 hace referencia a un objeto distinto, pero equivalente.',
        'punto12, punto13 y punto12bis hacen referencia al mismo objeto.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'punto12 y punto13 hacen referencia al mismo objeto; punto12bis hace referencia a un objeto distinto pero equivalente en su estado interno.',
    },
    {
      texto:
        'Dada la clase punto.py, evalúe el siguiente programa:\n\npunto12 = Punto(1, 2)\npunto12bis = punto12.clone()\nprint(punto12 is punto12bis)\n\nLa última instrucción imprime False porque:',
      opciones: [
        'punto12 y punto12bis hacen referencia a objetos distintos, ubicados en posiciones diferentes de memoria.',
        'punto12 y punto12bis no coinciden en sus nombres.',
        'Los estados internos de punto12 y punto12bis no son equivalentes.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'punto12 y punto12bis hacen referencia a objetos distintos en posiciones diferentes de memoria.',
    },
    {
      texto:
        'Dada la clase punto.py, evalúe el siguiente programa:\n\npunto12 = Punto(1, 2)\npunto12bis = Punto(0, 0)\npunto12bis.copy(punto12)\nprint(punto12 == punto12bis)\n\nLa última instrucción imprime False porque:',
      opciones: [
        'El operador de igualdad está sobrecargado y los objetos no son equivalentes.',
        'El operador de igualdad está sobrecargado y los objetos son distintos.',
        'El operador de igualdad no está sobrecargado y los objetos no son equivalentes.',
        'El operador de igualdad no está sobrecargado y los objetos son distintos.',
      ],
      correcta: 3,
      respuestaCorrecta:
        'El operador de igualdad no está sobrecargado y los objetos hacen referencia a instancias distintas.',
    },
    {
      texto:
        'Dada la clase punto.py, evalúe la ejecución del siguiente programa:\n\npunto12 = Punto(1, 2)\npunto13 = punto12\npunto13.establecerY(3)\nprint(punto12.equals(punto13))\n\nLa última instrucción imprime True porque:',
      opciones: [
        'punto12 y punto13 hacen referencia al mismo objeto.',
        'punto12 y punto13 hacen referencia a objetos distintos, pero comparten el valor del atributo __x.',
        'punto12 y punto13 hacen referencia a objetos distintos con estados equivalentes.',
      ],
      correcta: 0,
      respuestaCorrecta: 'punto12 y punto13 hacen referencia al mismo objeto.',
    },
    {
      texto:
        'Dada la clase punto.py, evalúe la ejecución del siguiente programa (Modificaciones.txt):\n\npunto12 = Punto(1, 2)\npunto13 = punto12\npunto13.establecerY(3)\npunto12bis = punto13.clone()\npunto12bis.copy(punto12)\nprint(punto12.equals(punto13))\n\nLa última instrucción imprime True porque:',
      opciones: [
        'punto12 y punto13 hacen referencia a objetos distintos con estados equivalentes.',
        'punto12 y punto13 hacen referencia al mismo objeto.',
        'punto12 y punto13 hacen referencia a objetos distintos, pero comparten el valor del atributo __x.',
      ],
      correcta: 1,
      respuestaCorrecta: 'punto12 y punto13 hacen referencia al mismo objeto.',
    },
    {
      texto:
        'Dada la clase punto.py, evalúe la ejecución del siguiente programa:\n\npunto12 = Punto(1, 2)\npunto13 = punto12\npunto13.establecerY(3)\npunto12bis = punto13.clone()\npunto12bis.copy(punto12)\nprint(punto12.equals(punto12bis))\n\nLa última instrucción imprime True porque:',
      opciones: [
        'punto12 y punto12bis hacen referencia al mismo objeto.',
        'punto12 y punto12bis hacen referencia a objetos distintos y sus estados internos son equivalentes.',
        'punto12 y punto12bis hacen referencia a objetos distintos, pero comparten el valor del atributo __x.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'punto12 y punto12bis hacen referencia a objetos distintos, pero con estados internos equivalentes.',
    },
  ],
  semana6: [
    {
      texto:
        'La herencia es un mecanismo que permite construir nuevas clases a partir de clases existentes.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'La herencia permite crear nuevas clases reutilizando y extendiendo el comportamiento de clases ya existentes.',
    },
    {
      texto:
        'Cuando una clase hereda de otra, los atributos y métodos de la superclase pasan a formar parte de la subclase.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Los atributos y métodos definidos en la superclase son heredados por la subclase.',
    },
    {
      texto:
        '¿Qué palabra clave se utiliza en Python para definir una clase que hereda de otra?',
      opciones: ['super', 'extends', 'inherits', 'class', 'def'],
      correcta: 3,
      respuestaCorrecta:
        "En Python se utiliza la palabra clave 'class' seguida del nombre de la clase padre entre paréntesis.",
    },
    {
      texto:
        'En Python, para invocar el constructor de la clase padre dentro del constructor de la clase hija se utiliza:',
      opciones: [
        'self.__init__()',
        'class.__init__()',
        'super().__init__()',
        'this.__init__()',
      ],
      correcta: 2,
      respuestaCorrecta:
        "Se utiliza 'super().__init__()' para llamar al constructor de la clase padre desde la subclase.",
    },
    {
      texto: 'La herencia permite:',
      opciones: [
        'Reutilizar código y extender funcionalidades existentes.',
        'Evitar la creación de nuevas clases.',
        'Eliminar la necesidad de constructores.',
        'Modificar directamente la clase padre.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Permite reutilizar código y extender funcionalidades ya implementadas en clases existentes.',
    },
    {
      texto:
        'Una subclase puede sobreescribir un método de la superclase con una nueva implementación.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'La sobrescritura de métodos es una característica fundamental de la herencia.',
    },
    {
      texto:
        'El método __init__ de una subclase puede reemplazar completamente al de la superclase.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        "Si no se invoca 'super().__init__()', el constructor de la superclase no se ejecuta.",
    },
    {
      texto:
        '¿Qué significa que una subclase sobrescriba un método de su superclase?',
      opciones: [
        'Que elimina el método de la clase padre.',
        'Que redefine el comportamiento del método manteniendo el mismo nombre.',
        'Que agrega un nuevo método distinto.',
        'Que oculta el método padre sin reemplazarlo.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Significa que redefine el comportamiento del método heredado manteniendo el mismo nombre.',
    },
    {
      texto:
        'Si una clase hija no define su propio constructor (__init__), ¿qué sucede?',
      opciones: [
        'Python arroja un error.',
        'Se ejecuta automáticamente el constructor de la clase padre.',
        'No se crea ningún objeto.',
        'La clase hija hereda el constructor de la clase padre.',
      ],
      correcta: 3,
      respuestaCorrecta:
        'La subclase hereda el constructor de la clase padre si no define el suyo propio.',
    },
    {
      texto:
        '¿Cuál de las siguientes afirmaciones sobre herencia múltiple en Python es correcta?',
      opciones: [
        'No está permitida.',
        'Permite heredar de varias clases a la vez.',
        'Solo se puede heredar de dos clases.',
        'Solo puede aplicarse a métodos, no a atributos.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Python permite heredar de múltiples clases al mismo tiempo.',
    },
    {
      texto:
        'En Python, cuando dos clases padres tienen el mismo método y una subclase hereda de ambas, ¿cuál se ejecuta?',
      opciones: [
        'El de la primera clase padre indicada en la definición.',
        'El de la segunda clase padre.',
        'El método se ejecuta aleatoriamente.',
        'Python lanza un error.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Se ejecuta el método de la primera clase padre listada en la definición de la subclase.',
    },
    {
      texto: 'En POO, la relación de herencia se considera del tipo:',
      opciones: [
        'Composición',
        'Asociación',
        'Agregación',
        'Generalización / Especialización',
      ],
      correcta: 3,
      respuestaCorrecta:
        'La herencia representa una relación de generalización/especialización entre clases.',
    },
    {
      texto: 'Una clase abstracta:',
      opciones: [
        'No puede instanciarse directamente.',
        'Puede instanciarse sin restricciones.',
        'Debe tener todos sus métodos implementados.',
        'No puede tener atributos.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Una clase abstracta no puede instanciarse directamente; sirve como plantilla para otras clases.',
    },
    {
      texto: 'En Python, el módulo abc permite:',
      opciones: [
        'Definir clases abstractas y métodos abstractos.',
        'Herencia múltiple.',
        'Controlar el acceso a variables privadas.',
        'Definir constructores.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'El módulo abc permite definir clases y métodos abstractos.',
    },
    {
      texto:
        'Si una clase hija hereda de una clase padre y redefine un método, ¿cómo puede acceder a la versión original?',
      opciones: [
        'self.metodo()',
        'super().metodo()',
        'class.metodo()',
        'parent.metodo()',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Puede acceder a la versión original mediante super().metodo().',
    },
    {
      texto: 'El concepto de herencia favorece principalmente:',
      opciones: [
        'La encapsulación',
        'La reutilización de código',
        'La independencia total de las clases',
        'La redundancia de datos',
      ],
      correcta: 1,
      respuestaCorrecta:
        'La herencia promueve la reutilización del código y evita la duplicación.',
    },
    {
      texto: 'La función isinstance(obj, Clase) permite:',
      opciones: [
        'Comprobar si un objeto pertenece a una clase o subclase.',
        'Comparar el contenido de dos objetos.',
        'Eliminar una instancia de clase.',
        'Ver el tipo de atributo de un objeto.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Permite verificar si un objeto es instancia de una clase o de una subclase de ella.',
    },
    {
      texto:
        'En la herencia, el método __str__ puede sobrescribirse en la subclase.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'El método __str__ puede redefinirse para personalizar la representación en cadena del objeto.',
    },
    {
      texto:
        '¿Qué sucede si una subclase define un atributo con el mismo nombre que uno de la clase padre?',
      opciones: [
        'Python lanza un error.',
        'El atributo de la subclase oculta al de la clase padre.',
        'Ambos atributos se combinan.',
        'El atributo del padre tiene prioridad.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'El atributo definido en la subclase oculta al de la clase padre.',
    },
    {
      texto: '¿Qué es una jerarquía de clases?',
      opciones: [
        'El conjunto de clases independientes.',
        'El conjunto de clases relacionadas mediante herencia.',
        'Las clases agrupadas en módulos.',
        'Una lista de clases ordenadas por tamaño.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Una jerarquía de clases es un conjunto de clases relacionadas a través de herencia.',
    },
  ],
  semana7: [
    {
      texto: 'La clase Punto presentada al principio de la Clase 09 define:',
      opciones: [
        'Un Tipo de Dato Abstracto',
        'Un Tipo de Dato Proveedor',
        'Un Tipo de Dato Concreto',
        'Un Tipo de Dato Cliente',
        'Un Tipo de Dato Nativo',
      ],
      correcta: 0,
      respuestaCorrecta: 'Un Tipo de Dato Abstracto',
    },
    {
      texto: 'Un tipo de dato abstracto (TDA) es un tipo de dato en el cual:',
      opciones: [
        'La representación del conjunto de valores y la implementación del conjunto de operaciones está encapsulada en la clase.',
        'La representación del conjunto de valores no está encapsulada en la clase pero la implementación del conjunto de operaciones sí lo está.',
        'La representación del conjunto de valores está encapsulada en la clase pero la implementación del conjunto de operaciones no lo está.',
        'La representación del conjunto de valores y la implementación del conjunto de operaciones no está encapsulada en la clase.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'La representación del conjunto de valores y la implementación del conjunto de operaciones está encapsulada en la clase.',
    },
    {
      texto: 'Todas las clases definen un tipo de dato abstracto.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'No todas las clases definen un tipo de dato abstracto.',
    },
    {
      texto: 'La abstracción permite clasificar objetos a partir de:',
      opciones: [
        'Sus atributos, su nombre y su comportamiento.',
        'Sus atributos y su representación.',
        'Sus atributos y su comportamiento.',
        'Solamente su comportamiento.',
        'Solamente sus atributos.',
      ],
      correcta: 2,
      respuestaCorrecta: 'Sus atributos y su comportamiento.',
    },
    {
      texto: 'El encapsulamiento permite:',
      opciones: [
        'Exponer la representación de los datos.',
        'Esconder la implementación de los servicios.',
        'Esconder la representación de los datos.',
        'Exponer los servicios que ofrece una clase.',
        'Determinar el comportamiento de una clase.',
      ],
      correcta: 2,
      respuestaCorrecta: 'Esconder la representación de los datos.',
    },
    {
      texto:
        'Cada clase es un módulo de software que muestra su interfaz y esconde su implementación.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Cada clase muestra su interfaz y oculta su implementación.',
    },
    {
      texto:
        'La Reusabilidad y la Legibilidad favorecen la Productividad de software.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'La Reusabilidad favorece la Productividad, mientras que la Legibilidad favorece la Calidad del software.',
    },
    {
      texto:
        "El encapsulamiento es un mecanismo que permite la definición de módulos de software que pueden ser utilizados como 'cajas negras', esto es, conociendo los detalles de su implementación.",
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'El concepto de caja negra implica conocer qué hacen los módulos, sin saber cómo lo hacen.',
    },
    {
      texto:
        'Cada módulo de software tiene una interfaz que le permite comunicarse con los demás módulos del sistema. Si un módulo se reemplaza por otro con la misma interfaz:',
      opciones: [
        'El resto del sistema debe adaptarse al nuevo módulo.',
        'Ambos módulos pueden funcionar en paralelo.',
        'Se necesita un rediseño del sistema.',
        'El cambio no afecta al resto del sistema.',
      ],
      correcta: 3,
      respuestaCorrecta: 'El cambio no afecta al resto del sistema.',
    },
    {
      texto:
        'En la POO cada módulo es una clase y un sistema es una colección de TDA relacionados entre sí.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'En POO, un sistema es una colección de clases relacionadas entre sí; no todas son necesariamente TDA.',
    },
    {
      texto:
        'Dada la clase Punto de la semana 5, podemos afirmar que la misma define un TDA ya que:',
      opciones: [
        'Establece un conjunto de valores cuya representación está encapsulada en una clase y un conjunto de operaciones visibles sobre esos valores.',
        'No se puede crear un objeto a partir de ella.',
        'Se puede crear un objeto a partir de ella.',
        'La firma de sus servicios no se encuentra disponible para las clases Cliente.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Establece un conjunto de valores cuya representación está encapsulada en una clase y un conjunto de operaciones visibles sobre esos valores.',
    },
    {
      texto:
        'Así como la clase Punto de la semana 5 define un TDA, también lo hace la clase SignosVitales de la semana 6.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'La clase SignosVitales no esconde la representación de sus atributos temperatura y presión.',
    },
    {
      texto:
        'Dada la clase Punto de la semana 5, y el siguiente programa:\n\npunto12 = Punto(1, 2)\nprint(punto12.x)\n\nEl mismo falla porque la clase Punto no representa internamente el atributo x con el mismo nombre. Aún así, puede obtenerse su valor llamando a:',
      opciones: [
        '__x',
        '_Punto__x',
        'No puede accederse directamente al valor del atributo x.',
      ],
      correcta: 1,
      respuestaCorrecta: 'Puede accederse mediante _Punto__x.',
    },
    {
      texto:
        'Dada la clase Punto de la semana 5, y el siguiente programa:\n\npunto12 = Punto(1, 2)\nprint(punto12.__x)\n\nEl mismo falla porque:',
      opciones: [
        'El atributo __x es interno y no puede ser accedido fuera del ámbito de la clase.',
        'El atributo __x es interno y únicamente puede ser accedido a través de la consulta obtenerX.',
        'El atributo __x es interno, aunque puede ser accedido fuera del ámbito de la clase a través de _Punto__x.',
      ],
      multiple: true,
      correcta: [0, 2],
      respuestaCorrecta:
        'El atributo __x es interno y no puede ser accedido fuera de la clase, aunque puede accederse con _Punto__x.',
    },
    {
      texto:
        'Dada la clase Punto de la semana 5, y el siguiente programa:\n\npunto12 = Punto(1, 2)\nprint(punto12.obtenerX())',
      opciones: [
        'obtenerX() y _Punto__x son las dos operaciones que el TDA Punto ofrece para acceder al valor del atributo x identificado internamente como __x.',
        'obtenerX() es la única operación que el TDA Punto ofrece para acceder al valor del atributo x identificado internamente como __x.',
        'El TDA Punto no ofrece operaciones para acceder al valor del atributo x identificado internamente como __x.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'obtenerX() es la única operación que el TDA Punto ofrece para acceder al valor del atributo __x.',
    },
    {
      texto: 'La clase Alien de la semana 6 no define un TDA.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'La clase Alien no encapsula la representación de sus atributos ni ofrece operaciones sobre ellos.',
    },
    {
      texto:
        'La siguiente clase define un TDA:\n\nclass Caja:\n    def __init__(self, rueda, opticas, chasis):\n        self.__ruedas = rueda\n        self.__opticas = opticas\n        self.__chasis = chasis',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Dicha clase no ofrece operaciones sobre sus atributos.',
    },
    {
      texto:
        'La siguiente clase define un TDA:\n\nclass Caja:\n    def __init__(self, rueda, opticas, chasis):\n        self.__ruedas = rueda\n        self.__opticas = opticas\n        self.__chasis = chasis\n\n    def establecerRuedas(self, n):\n        self.__ruedas = n\n\n    def establecerOpticas(self, n):\n        self.__opticas = n\n\n    def establecerChasis(self, n):\n        self.__chasis = n\n\n    def obtenerChasis(self):\n        return self.__chasis\n\n    def obtenerRuedas(self):\n        return self.__ruedas\n\n    def obtenerOpticas(self):\n        return self.__opticas',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'La clase encapsula sus atributos y ofrece operaciones para accederlos, por lo tanto define un TDA.',
    },
    {
      texto:
        'La siguiente clase define un TDA:\n\nclass Caja:\n    def __init__(self, rueda, opticas, chasis):\n        self.ruedas = rueda\n        self.opticas = opticas\n        self.chasis = chasis\n\n    def establecerRuedas(self, n):\n        self.ruedas = n\n\n    def establecerOpticas(self, n):\n        self.opticas = n\n\n    def establecerChasis(self, n):\n        self.chasis = n\n\n    def obtenerChasis(self):\n        return self.chasis\n\n    def obtenerRuedas(self):\n        return self.ruedas\n\n    def obtenerOpticas(self):\n        return self.opticas',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Dicha clase no encapsula la representación de sus atributos, por lo tanto no define un TDA.',
    },
  ],
  semana9: [
    {
      texto:
        'La composición es una relación entre clases en la que una clase está compuesta por objetos de otras clases.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'La composición permite construir clases complejas a partir de otras más simples.',
    },
    {
      texto: 'En una relación de composición:',
      opciones: [
        'Los objetos contenidos pueden existir independientemente del objeto contenedor.',
        'Los objetos contenidos no pueden existir sin el objeto contenedor.',
        'El objeto contenedor depende del contenido.',
        'No hay dependencia entre los objetos involucrados.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Los objetos contenidos no pueden existir sin el objeto contenedor.',
    },
    {
      texto:
        'En Python, cuando se declara un atributo que almacena otro objeto dentro de una clase, se está implementando:',
      opciones: ['Herencia', 'Asociación', 'Composición', 'Encapsulamiento'],
      correcta: 2,
      respuestaCorrecta: 'Composición',
    },
    {
      texto:
        '¿Qué tipo de relación existe entre una clase Cliente y una clase Cuenta en un sistema bancario?',
      opciones: ['Herencia', 'Composición', 'Agregación', 'Abstracción'],
      correcta: 2,
      respuestaCorrecta: 'Agregación',
    },
    {
      texto:
        'En la agregación, el objeto contenido puede existir sin el objeto contenedor.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'En la agregación, los objetos asociados pueden existir independientemente del todo.',
    },
    {
      texto: 'La principal diferencia entre composición y agregación es:',
      opciones: [
        'En la composición hay una relación más fuerte, donde la vida del componente depende del contenedor.',
        'En la agregación el objeto contenido depende completamente del objeto contenedor.',
        'La composición permite compartir objetos entre clases sin dependencia.',
        'La agregación impide la creación de objetos independientes.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'En la composición, la vida del componente depende del contenedor.',
    },
    {
      texto:
        'Si una clase Vehículo contiene un atributo de tipo Motor, y al destruir el Vehículo también se destruye el Motor, estamos frente a:',
      opciones: ['Herencia', 'Agregación', 'Composición', 'Abstracción'],
      correcta: 2,
      respuestaCorrecta: 'Composición',
    },
    {
      texto:
        'En Python, cuando se declara un objeto dentro del constructor de una clase, ¿qué tipo de relación suele representar?',
      opciones: ['Composición', 'Herencia', 'Agregación', 'Dependencia'],
      correcta: 0,
      respuestaCorrecta: 'Representa una relación de composición.',
    },
    {
      texto:
        'En POO, la relación entre un objeto Alumno y su objeto Colegio puede considerarse:',
      opciones: ['Herencia', 'Composición', 'Agregación', 'Abstracción'],
      correcta: 2,
      respuestaCorrecta: 'Agregación',
    },
    {
      texto:
        'Cuando un objeto contiene referencias a varios objetos independientes, se dice que:',
      opciones: [
        'Tiene una relación de agregación.',
        'Tiene una relación de herencia.',
        'Tiene una relación de composición.',
        'Está implementando encapsulamiento.',
      ],
      correcta: 0,
      respuestaCorrecta: 'Tiene una relación de agregación.',
    },
    {
      texto:
        'En la relación de agregación, si el objeto contenedor deja de existir:',
      opciones: [
        'Los objetos contenidos también se destruyen.',
        'Los objetos contenidos pueden seguir existiendo.',
        'Los objetos contenidos se vuelven inaccesibles.',
        'Se destruyen todas las referencias del sistema.',
      ],
      correcta: 1,
      respuestaCorrecta: 'Los objetos contenidos pueden seguir existiendo.',
    },
    {
      texto: '¿Cuál de las siguientes opciones describe mejor la composición?',
      opciones: [
        'Relación débil donde los objetos pueden vivir independientemente.',
        'Relación fuerte donde el todo controla la vida de las partes.',
        'Relación entre clases sin dependencia.',
        'Relación de herencia.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Es una relación fuerte donde el todo controla la vida de las partes.',
    },
    {
      texto:
        '¿Cuál es la forma correcta de establecer una relación de composición en Python?',
      opciones: [
        'Definir un atributo dentro del constructor que contenga un objeto de otra clase.',
        'Heredar una clase dentro de otra.',
        'Importar un módulo dentro de una clase.',
        'Definir una función que reciba otra clase como parámetro.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Definiendo un atributo dentro del constructor que contenga un objeto de otra clase.',
    },
    {
      texto:
        'En la composición, el objeto contenido se crea dentro del constructor del objeto contenedor.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'En composición, el objeto contenido es creado dentro del constructor del contenedor.',
    },
    {
      texto:
        'Si una clase Persona tiene una lista de objetos Mascota, ¿qué tipo de relación hay?',
      opciones: ['Herencia', 'Composición', 'Agregación', 'Dependencia'],
      correcta: 2,
      respuestaCorrecta: 'Agregación',
    },
    {
      texto: "El concepto de 'parte-todo' en POO hace referencia a:",
      opciones: [
        'La relación entre superclase y subclase.',
        'La relación de agregación o composición.',
        'La relación entre objetos independientes.',
        'La relación entre atributos y métodos.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Hace referencia a las relaciones de agregación o composición.',
    },
    {
      texto:
        'En una relación de composición, la eliminación del objeto contenedor implica:',
      opciones: [
        'Que los objetos contenidos continúan existiendo.',
        'Que los objetos contenidos también se destruyen.',
        'Que los objetos contenidos cambian de clase.',
        'Que se reinicia la referencia de los objetos contenidos.',
      ],
      correcta: 1,
      respuestaCorrecta: 'Los objetos contenidos también se destruyen.',
    },
    {
      texto:
        'En la agregación, la referencia al objeto contenido se suele pasar:',
      opciones: [
        'Por valor en el constructor del contenedor.',
        'Como parámetro desde fuera de la clase contenedora.',
        'Por copia dentro del contenedor.',
        'Por herencia directa.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'En la agregación, el objeto se pasa como parámetro externo al contenedor.',
    },
    {
      texto:
        'Cuando una clase Alarma incluye un atributo de tipo Sensor creado dentro del constructor, se trata de:',
      opciones: ['Agregación', 'Composición', 'Dependencia', 'Herencia'],
      correcta: 1,
      respuestaCorrecta: 'Composición',
    },
    {
      texto:
        'Cuando una clase Auto recibe un objeto Motor como parámetro en su constructor, se trata de:',
      opciones: ['Composición', 'Agregación', 'Dependencia', 'Encapsulamiento'],
      correcta: 1,
      respuestaCorrecta: 'Agregación',
    },
  ],
};
