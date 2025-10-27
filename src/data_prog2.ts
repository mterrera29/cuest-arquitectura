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
        'El siguiente programa encuentra todos los números entre 200 y 210 (incluidos) tal que cada dígito del número es par, y los imprime de forma ordenada separados por comas.\n\nvalores = []\nfor numero in range(200, 211):\n    numero_texto = str(numero)\n    if (int(numero_texto[0])%2==0) and (int(numero_texto[1])%2==0) and (int(numero_texto[2])%2==0):\n        valores.append(numero_texto)\nprint(", ".join(valores))\n\n¿Cuál es la salida esperada?',
      opciones: [
        '202, 204, 204, 206, 208',
        '200, 202, 204, 206, 208',
        '200, 202, 204, 206, 208, 210',
        '200, 202, 204, 208, 206',
        '190, 202, 204, 206, 208',
      ],
      correcta: 1,
      respuestaCorrecta: '200, 202, 204, 206, 208',
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
        "Dada la clase PelotaConNombre y el programa:\npelota1 = PelotaConNombre('Pelota 1')\npelota2 = PelotaConNombre('Pelota 2')\npelota1.establecerNombre('Pelota 2')\npelota2.establecerNombre('Pelota 1')\nprint(pelota1.obtenerNombre())\nprint(pelota2.obtenerNombre())\n\n¿El programa imprime:\nPelota 1\nPelota 2?",
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        "Falso - El programa imprime 'Pelota 2' para pelota1 y 'Pelota 1' para pelota2, ya que se intercambian los nombres mediante los métodos establecerNombre",
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
      texto: `Dada la clase:

class PelotaConNombre:
    def __init__(self, nombre):
        self.nombre = nombre
        self.__establecerEstadoInitial()

    def __establecerEstadoInitial(self):
        self.__establecerEstado('FRENADA')

    def __establecerEstado(self, estado):
        self.estado = estado

    def establecerNombre(self, nombre):
        self.nombre = nombre

    def obtenerEstado(self):
        return self.estado

    def obtenerNombre(self):
        return self.nombre

    def rodar(self):
        print('Rodando...')
        self.__establecerEstado('RODANDO')

    def frenar(self):
        print('Frenando...')
        self.__establecerEstado('FRENADA')

    def imprimirEstado(self):
        print('Estado de ' + self.nombre + ': ' + self.estado)

El programa:
pelota1 = PelotaConNombre('Pelota 1')
pelota2 = PelotaConNombre('Pelota 2')
pelota1.establecerNombre('Pelota 2')
pelota2.establecerNombre('Pelota 1')
print(pelota1.obtenerNombre())
print(pelota2.obtenerNombre())

¿Imprime:\nPelota 1\nPelota 2?`,
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        "Falso - El programa imprime 'Pelota 2' para pelota1 y 'Pelota 1' para pelota2, ya que se intercambian los nombres mediante los métodos establecerNombre",
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
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, podemos afirmar que la clase PresionArterial depende de la clase SignosVitales.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'En realidad, la clase SignosVitales depende de la clase PresionArterial.',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, el método equals de la clase PresionArterial evalúa:',
      opciones: ['Igualdad en profundidad', 'Igualdad superficial'],
      correcta: 0,
      respuestaCorrecta: 'Igualdad en profundidad',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, el método equals de la clase SignosVitales evalúa:',
      opciones: ['Igualdad superficial', 'Igualdad en profundidad'],
      correcta: 1,
      respuestaCorrecta: 'Igualdad en profundidad',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, la clase SignosVitales es:',
      opciones: [
        'Cliente de la clase PresionArterial',
        'Proveedora de la clase PresionArterial',
      ],
      correcta: 0,
      respuestaCorrecta: 'Cliente de la clase PresionArterial',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, la clase PresionArterial es:',
      opciones: [
        'Proveedora de la clase SignosVitales',
        'Cliente de la clase SignosVitales',
      ],
      correcta: 0,
      respuestaCorrecta: 'Proveedora de la clase SignosVitales',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, evalúe la ejecución del siguiente programa: presion1 = PresionArterial(99,185) sv1 = SignosVitales(36.5,presion1) sv2 = SignosVitales(36.5,presion1) Los objetos referenciados por sv1 y sv2 están asociados con:',
      opciones: [
        'Objetos distintos de tipo PresionArterial',
        'Objetos equivalentes de tipo PresionArterial',
        'El mismo objeto de tipo PresionArterial',
      ],
      correcta: 2,
      respuestaCorrecta: 'El mismo objeto de tipo PresionArterial',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, evalúe la ejecución del siguiente programa: sv1 = SignosVitales(36.5,PresionArterial(99,185)) sv2 = SignosVitales(36.5,PresionArterial(99,185)) Los objetos referenciados por sv1 y sv2 están asociados con:',
      opciones: [
        'Objetos equivalentes de tipo PresionArterial',
        'El mismo objeto de tipo PresionArterial',
        'Objetos distintos de tipo PresionArterial',
      ],
      correcta: 0,
      respuestaCorrecta: 'Objetos equivalentes de tipo PresionArterial',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, evalúe la ejecución del siguiente programa: presion1 = PresionArterial(90,185) sv1 = SignosVitales(36.5,presion1) presion1 = PresionArterial(90,185) sv2 = SignosVitales(36.5,presion1) Los objetos referenciados por sv1 y sv2 están asociados con:',
      opciones: [
        'El mismo objeto de tipo PresionArterial',
        'Objetos equivalentes de tipo PresionArterial',
        'Objetos distintos de tipo PresionArterial',
      ],
      correcta: 1,
      respuestaCorrecta: 'Objetos equivalentes de tipo PresionArterial',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, evalúe la ejecución del siguiente programa: presion1 = PresionArterial(90,185) sv1 = SignosVitales(36.5,presion1) sv2 = SignosVitales(36.5,sv1.obtenerPresion()) Los objetos referenciados por sv1 y sv2 están asociados con:',
      opciones: [
        'El mismo objeto de tipo PresionArterial',
        'Objetos distintos de tipo PresionArterial',
        'Objetos equivalentes de tipo PresionArterial',
      ],
      correcta: 0,
      respuestaCorrecta: 'El mismo objeto de tipo PresionArterial',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales de la semana 6, evalúe la ejecución del siguiente programa: presion1 = PresionArterial(99,185) sv1 = SignosVitales(36.5,PresionArterial(99,185)) sv2 = SignosVitales(36.5,PresionArterial(99,185)) print(sv1.equals(sv2)) La evaluación del método equals final imprime True porque:',
      opciones: [
        'Se evalúa igualdad superficial y los objetos de tipo PresionArterial que referencian los objetos relacionados con sv1 y sv2 son distintos',
        'Se evalúa igualdad en profundidad y los objetos de tipo PresionArterial que referencian los objetos relacionados con sv1 y sv2 son equivalentes',
        'Se evalúa igualdad superficial y los objetos de tipo PresionArterial que referencian los objetos relacionados con sv1 y sv2 son iguales',
        'Se evalúa igualdad en profundidad y los objetos de tipo PresionArterial que referencian los objetos relacionados con sv1 y sv2 no son equivalentes',
      ],
      correcta: 1,
      respuestaCorrecta:
        'Se evalúa igualdad en profundidad y los objetos de tipo PresionArterial que referencian los objetos relacionados con sv1 y sv2 son equivalentes',
    },
    {
      texto:
        'Cuando una clase esta asociada a otra la implementación de la igualdad se puede hacer únicamente en forma superficial.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Como se vio en clase, se puede hacer también en profundidad.',
    },
    {
      texto:
        'Una clase proveedora es aquella que brinda servicios a otra clase.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: "La respuesta correcta es 'Verdadero'",
    },
    {
      texto: 'Una clase cliente es aquella que brinda servicios a otra clase.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Una clase cliente es aquella que utiliza servicios de otra clase.',
    },
    {
      texto: 'Una clase NO puede ser al mismo tiempo cliente y proveedora',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Que una clase provea servicios a ser usados por sus clases cliente no impide que esta a su vez utilice servicios de otra.',
    },
    {
      texto:
        'En un esquema de clases proveedoras y clases clientes, cada clase:',
      opciones: [
        'Debe conocer los servicios que brindan sus clases proveedoras, pero no necesita conocer quienes son sus clientes.',
        'No necesita conocer los servicios que brindan sus clases proveedoras ni quienes son sus clientes.',
        'No necesita conocer los servicios que brindan sus clases proveedoras, pero sí conocer quienes son sus clientes.',
        'Debe conocer los servicios que brindan sus clases proveedoras y necesita conocer quienes son sus clientes.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Debe conocer los servicios que brindan sus clases proveedoras, pero no necesita conocer quienes son sus clientes.',
    },
    {
      texto:
        'Las responsabilidades establecen un contrato entre una clase, sus clientes y sus proveedores.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Las responsabilidades establecen un contrato entre una clase, sus clientes y sus proveedores.',
    },
    {
      texto: 'Dos objetos pueden tener:',
      opciones: [
        'Diferente estado interno y distinta identidad',
        'Diferente estado interno y misma identidad',
        'Mismo estado interno pero distinta identidad',
        'Mismo estado interno y misma identidad',
      ],
      correcta: [0, 2, 3],
      multiple: true,
      respuestaCorrecta:
        'Mismo estado interno pero distinta identidad, Diferente estado interno y distinta identidad, Mismo estado interno y misma identidad',
    },
    {
      texto: 'La igualdad en profundidad compara:',
      opciones: [
        'La identidad de los objetos',
        'El estado interno de los objetos',
        'Los atributos y servicios de los objetos',
        'Los nombres de los objetos',
        'La clase de los objetos',
      ],
      correcta: 1,
      respuestaCorrecta: 'El estado interno de los objetos',
    },
    {
      texto: 'Existe una relación de dependencia cuando:',
      opciones: [
        'Una clase utiliza los servicios de la clase dependiente.',
        'Una clase provee servicios a la clase dependiente.',
        'Un servicio de una clase declara una variable local, recibe un parámetro o retorna como resultado un objeto de la clase dependiente.',
        'Un servicio de una clase declara una variable local, recibe un parámetro o retorna como resultado un objeto de la clase misma clase.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Un servicio de una clase declara una variable local, recibe un parámetro o retorna como resultado un objeto de la clase dependiente.',
    },
    {
      texto: 'La clase cliente accede a la clase proveedora a través de:',
      opciones: [
        'Sus comandos',
        'Su declaración',
        'Sus consultas',
        'Su interfaz',
        'Sus servicios',
      ],
      correcta: 3,
      respuestaCorrecta: 'Su interfaz',
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
        'Un arreglo es una estructura de datos homogénea, no lineal y ordenada que permite representar un conjunto de valores.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Un arreglo es una estructura de datos homogénea, lineal y ordenada que permite representar un conjunto de valores.',
    },
    {
      texto: 'Todos los elementos de un arreglo son del mismo tipo',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: "La respuesta correcta es 'Verdadero'",
    },
    {
      texto: 'En un arreglo, el índice:',
      opciones: [
        'Indica la posición de un elemento pero no puede ser utilizado para acceder a un elemento específico contenido en el.',
        'Es una mera referencia sin utilidad práctica para el programador.',
        'Indica la posición de un elemento y puede ser utilizado para acceder a un elemento específico contenido en el.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Indica la posición de un elemento y puede ser utilizado para acceder a un elemento específico contenido en el.',
    },
    {
      texto: 'Todos los elementos de un arreglo:',
      opciones: [
        'Tienen un antecesor y un sucesor',
        'Tienen un sucesor, a excepción del primer y último elemento.',
        'Tienen un sucesor',
        'Tienen un antecesor, a excepción del primer y último elemento.',
        'Tienen un antecesor y un sucesor, a excepción del primer y último elemento.',
        'Tienen un antecesor',
      ],
      correcta: 4,
      respuestaCorrecta:
        'Tienen un antecesor y un sucesor, a excepción del primer y último elemento.',
    },
    {
      texto: 'En Python, el primer índice de un arreglo es 1',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta: 'En Python, el primer índice de un arreglo es 0',
    },
    {
      texto:
        'En Python, una colección de objetos puede recorrerse tanto con un bucle for como con un bucle while',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Nada impide que el programador recorra las colecciones utilizando ambos enfoques.',
    },
    {
      texto:
        'Todos los componentes de una tabla mantienen referencias no nulas.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Los componentes de una tabla pueden mantener referencias no nulas.',
    },
    {
      texto:
        'Una tabla que contiene componentes que mantiene referencias nulas no puede recorrerse.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Las tablas pueden recorrerse, y es responsabilidad del programador el verificar si esa referencia es nula o no.',
    },
    {
      texto:
        'El tamaño de una tabla es igual a la cantidad de componentes con referencias no nulas contenidos en ella.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'La tabla tiene un numero máximo de componentes, independientemente si estos mantienen referencias nulas o no.',
    },
    {
      texto: 'Todos los elementos de una tabla:',
      opciones: [
        'Se agrupan al final, liberando los primeros lugares para los componentes que mantienen referencias nulas.',
        'No necesariamente se agrupan de algún modo.',
        'Se agrupan al principio, liberando los últimos lugares para los componentes que mantienen referencias nulas.',
      ],
      correcta: 1,
      respuestaCorrecta: 'No necesariamente se agrupan de algún modo.',
    },
    {
      texto:
        'Dada la clase Planta de la semana 9, analice la salida del siguiente programa:\nfrom planta import Planta\nfrom fecha import Fecha\nfrom empleado import Empleado\npersonal = Planta(0)\nfecha1 = Fecha(20, 4, 2010)\nfecha2 = Fecha(20, 10, 2012)\ne1 = Empleado(123, 20000, fecha1)\ne2 = Empleado(124, 30000, fecha2)\npersonal.alta(e1)\nEl mismo falla porque:',
      opciones: [
        'La tabla está vacía.',
        'El tamaño de la tabla es O y se produce un error de desborde al querer insertar un componente en ella.',
        'La tabla está llena.',
        'La tabla no admite referencias a objetos de tipo Empleado.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'El tamaño de la tabla es O y se produce un error de desborde al querer insertar un componente en ella.',
    },
    {
      texto:
        'Dada la clase Planta de la semana 9, analice la salida del siguiente programa:\nfrom planta import Planta\nfrom fecha import Fecha\nfrom empleado import Empleado\npersonal = Planta(10)\nfecha1 = Fecha(20, 4, 2010)\nfecha2 = Fecha(20, 10, 2012)\ne1 = Empleado(123, 20000, fecha1)\ne2 = Empleado(124, 30000, fecha2)\ne3 = Empleado(154, 25000, fecha1)\ne4 = Empleado(150, 22000, fecha1)\nprint(personal.estaEmpleado(154))\nEl mismo imprime False porque:',
      opciones: [
        'No hay un objeto de tipo Empleado cuyo legajo sea 154.',
        'Si bien al empleado se dio de alta en la tabla, luego se lo dio de baja.',
        'El empleado no se dio de alta en la tabla.',
      ],
      correcta: 2,
      respuestaCorrecta: 'El empleado no se dio de alta en la tabla.',
    },
    {
      texto:
        'Dada la clase Planta de la semana 9, analice la salida del siguiente programa:\nfrom planta import Planta\nfrom fecha import Fecha\nfrom empleado import Empleado\npersonal = Planta(10)\nfecha1 = Fecha(20, 4, 2010)\nfecha2 = Fecha(20, 10, 2012)\ne1 = Empleado(123, 20000, fecha1)\ne2 = Empleado(124, 30000, fecha2)\ne3 = Empleado(154, 25000, fecha1)\ne4 = Empleado(156, 22000, fecha1)\npersonal.alta(e1)\npersonal.alta(e2)\nprint(personal.cantEmpleados())\nEl mismo imprime:',
      opciones: ['4', '2', '0'],
      correcta: 1,
      respuestaCorrecta: '2',
    },
    {
      texto:
        'Dada la clase Planta de la semana 9, analice la salida del siguiente programa:\nfrom planta import Planta\nfrom fecha import Fecha\nfrom empleado import Empleado\npersonal = Planta(3)\nfecha1 = Fecha(20, 4, 2010)\nfecha2 = Fecha(20, 10, 2012)\ne1 = Empleado(123, 20000, fecha1)\ne2 = Empleado(124, 30000, fecha2)\ne3 = Empleado(154, 25000, fecha1)\ne4 = Empleado(156, 22000, fecha1)\npersonal.alta(e1)\npersonal.alta(e2)\npersonal.alta(e3)\npersonal.alta(e4)\nprint(personal.cantEmpleados())\nEl mismo imprime:',
      opciones: [
        'Error. La tabla se desborda al intentar insertar un elemento por sobre su capacidad máxima.',
        '3',
        '4',
      ],
      correcta: 0,
      respuestaCorrecta:
        'Error. La tabla se desborda al intentar insertar un elemento por sobre su capacidad máxima.',
    },
    {
      texto:
        'Dada la clase Planta de la semana 9, analice la salida del siguiente programa:\nfrom planta import Planta\nfrom fecha import Fecha\nfrom empleado import Empleado\npersonal = Planta(4)\nfecha1 = Fecha(20, 4, 2010)\nfecha2 = Fecha(20, 10, 2012)\nempleados = []\nempleados.append(Empleado(123, 20000, fecha1))\nempleados.append(Empleado(124, 30000, fecha2))\nempleados.append(Empleado(154, 25000, fecha1))\nempleados.append(Empleado(150, 22000, fecha1))\nfor i in range(len(empleados)):\n    personal.alta(empleados[0])\nprint(personal.basicoRange(25000, 30000))\nEl mismo imprime:',
      opciones: ['2', '0', '4'],
      correcta: 1,
      respuestaCorrecta: '0',
    },
    {
      texto:
        "Dada la clase SectorsFabrica de la semana 9, analice la salida del siguiente programa:\nfrom sectorsFabrica import SectorsFabrica\nfrom robot import Robot\nfabrica = SectorsFabrica(2)\nr1 = Robot('Robot 1')\nr2 = Robot('Robot 2')\nprint(fabrica.existeSector(2))\nEl mismo imprime False porque:",
      opciones: [
        'El sector 2 ya se encuentra ocupado.',
        'El sector 2 mantiene una referencia nula.',
        'En Python, el primer índice de un arreglo es 0 y no 1.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'En Python, el primer índice de un arreglo es 0 y no 1.',
    },
    {
      texto:
        'Dada la clase SectorsFabrica de la semana 9, analice la salida del siguiente programa:\nfrom sectorsFabrica import SectorsFabrica\nfrom robot import Robot\nfabrica = SectorsFabrica(5)\nprint(fabrica.existeSector(2))\nEl mismo imprime:',
      opciones: [
        'True, el sector existe a pesar de mantener una referencia nula.',
        'False, porque el sector 2 mantiene una referencia nula.',
        'True, porque el sector 2 no mantiene una referencia nula.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'True, el sector existe a pesar de mantener una referencia nula.',
    },
    {
      texto:
        "Dada la clase SectorsFabrica de la semana 9, analice la salida del siguiente programa:\nfrom sectorsFabrica import SectorsFabrica\nfrom robot import Robot\nfabrica = SectorsFabrica(5)\nr1 = Robot('Robot 1')\nr2 = Robot('Robot 2')\nprint(fabrica.cantSectores())\nprint(fabrica.cantSectoresOcupados())\nEl mismo imprime:",
      opciones: [
        '5',
        'No se asignó ningún robot en la Fábrica.',
        'Se asignaron r1 y r2 a sectores en la Fábrica, ocupando todos los sectores creados hasta el momento.',
        'Se asignaron r1 y r2 a sectores en la Fábrica.',
      ],
      correcta: 0,
      respuestaCorrecta: '5\nNo se asignó ningún robot en la Fábrica.',
    },
    {
      texto:
        'Dada la clase SectorsFabrica de la semana 9, ambas sentencias son equivalentes\nfabrica.todosOcupados()\nfabrica.cantSectores() == fabrica.cantSectoresOcupados()',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Ambos procedimientos son válidos para determinar si todos los sectores están asignados a un robot.',
    },
    {
      texto:
        "Dada la clase SectorsFabrica de la semana 9, analice la salida del siguiente programa:\nfrom sectorsFabrica import SectorsFabrica\nfrom robot import Robot\nfabrica = SectorsFabrica(2)\nfabrica.asignar(Robot('Robot 1'), 0)\nfabrica.asignar(Robot('Robot 1'), 1)\nprint(fabrica.robotSector(0) == fabrica.robotSector(1))\nEl mismo imprime True",
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Aunque ambos objetos de tipo Robot de los sectores O y l cuentan con el mismo estado interno, estos se ubican en posiciones de memoria distintas.',
    },
  ],
  parcial: [
    {
      texto:
        'Dado el siguiente diagrama de clases de Profesor, implemente la clase Profesor con sus correspondientes atributos y servicios. Considere 65 la edad jubilatoria.',
      opciones: [
        'class Profesor { //Atributos de clase static edadJubilatoria = 65; //Atributos de instancia constructor(public legajo: number, public edad: number, public dedicacion: string) {} //Comandos establecerLegajo(leg: number) { this.legajo = leg; } establecerEdad(ed: number) { this.edad = ed; } establecerDedicacion(ded: string) { this.dedicacion = ded; } copy(prof: Profesor) { this.legajo = prof.obtenerLegajo(); this.edad = prof.obtenerEdad(); this.dedicacion = prof.obtenerDedicacion(); } //Consultas obtenerLegajo(): number { return this.legajo; } obtenerEdad(): number { return this.edad; } obtenerDedicacion(): string { return this.dedicacion; } obtenerEdadJubilatoria(): number { return Profesor.edadJubilatoria; } equals(prof: Profesor): boolean { return this.legajo === prof.obtenerLegajo() && this.edad === prof.obtenerEdad() && this.dedicacion === prof.obtenerDedicacion(); } clone(): Profesor { return new Profesor(this.legajo, this.edad, this.dedicacion); } }',
        'Implementación incompleta sin métodos copy, equals y clone',
        'Implementación con errores en los atributos de clase',
      ],
      correcta: 0,
      respuestaCorrecta:
        'La implementación completa incluye todos los métodos: copy, equals, clone y los comandos y consultas necesarios.',
    },
    {
      texto:
        'Considere el siguiente programa con puntos: p1 = Punto(2.0, 5.0), p2 = Punto(3.0, 5.0), p3 = Punto(2.0, 5.0), p4 = p2.clone(), p5 = p4. Considerando que en la clase Punto el método clone() se encuentra implementado e equals() implementado en profundidad, muestre los valores que computan las siguientes expresiones',
      opciones: [
        '1. False, 2. False, 3. False, 4. True, 5. False, 6. False, 7. False, 8. True, 9. False, 10. False',
        '1. True, 2. True, 3. False, 4. True, 5. False, 6. True, 7. False, 8. True, 9. False, 10. True',
        '1. False, 2. True, 3. True, 4. False, 5. True, 6. False, 7. True, 8. False, 9. True, 10. False',
      ],
      correcta: 0,
      respuestaCorrecta:
        '1. False, 2. False, 3. False, 4. True, 5. False, 6. False, 7. False, 8. True, 9. False, 10. False',
    },
    {
      texto:
        'Se requiere que se implemente el método cantAutos() que retornará la cantidad de autos que puede armar el robot con las piezas que tiene disponibles. Armar un auto consume 70 unidades de energía, 4 ruedas, 6 ópticas y 1 chasis.',
      opciones: [
        'def cantAutos(self): return min(self.ruedas // 4, self.opticas // 6, self.chasis, self.energia // 70)',
        'def cantAutos(self): return (self.ruedas + self.opticas + self.chasis + self.energia) // 81',
        'def cantAutos(self): autos = 0; while self.ruedas >= 4 and self.opticas >= 6 and self.chasis >= 1 and self.energia >= 70: autos += 1; self.ruedas -= 4; self.opticas -= 6; self.chasis -= 1; self.energia -= 70; return autos',
      ],
      correcta: 0,
      respuestaCorrecta:
        'El método correcto calcula el mínimo entre la cantidad disponible de cada recurso dividido por lo que consume un auto.',
    },
    {
      texto:
        'Se requiere que se implemente el método clone() que crea y retorna un robot con los mismos valores en cada uno de los atributos que el robot que recibió el mensaje.',
      opciones: [
        'def clone(self): return Robot(self.nroSerie, Caja(self.ruedas, self.opticas, self.chasis))',
        'def clone(self): nuevo = Robot(self.nroSerie, Caja(0,0,0)); nuevo.energia = self.energia; return nuevo',
        'def clone(self): return self',
      ],
      correcta: 0,
      respuestaCorrecta:
        'El método clone debe crear un nuevo objeto con los mismos valores de atributos, incluyendo la energía.',
    },
    {
      texto:
        'Composición modular: favorece la integración de softwares para crear nuevos sistemas',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Verdadero - La composición modular favorece la integración de softwares para crear nuevos sistemas',
    },
    {
      texto:
        'Enlace los enunciados con los Factores que determinan la Calidad de Software',
      descripciones: [
        'Esfuerzo requerido para que partes de una aplicación sean utilizadas en otras aplicaciones.',
        'Grado en que una aplicación o sistema puede ser transferido a otro hardware o sistema operativo.',
        'Cantidad de recursos que necesita una aplicación o sistema para realizar las operaciones con tiempos de respuesta óptimos.',
        'Grado con que puede controlarse el acceso al software y/o a los datos de un sistema a personal no autorizado.',
        'Esfuerzo requerido para aprender el manejo de una aplicación, trabajar con ella, introducir datos y conseguir resultados.',
        'Esfuerzo necesario para realizar modificaciones sobre una aplicación o sistema que ya se encuentra en funcionamiento.',
        'Grado en que una aplicación o sistema cumple con la definición y lo encomendado por el cliente.',
      ],
      opciones: [
        'Reusabilidad',
        'Portabilidad',
        'Eficiencia',
        'Integridad',
        'Facilidad de uso',
        'Flexibilidad',
        'Corrección',
      ],
      correcta: [0, 1, 2, 3, 4, 5, 6],
      tipo: 'ordenar',
      multiple: true,
      respuestaCorrecta:
        'Reusabilidad, Portabilidad, Eficiencia, Integridad, Facilidad de uso, Flexibilidad, Corrección',
    },
    {
      texto:
        'Una los Criterios con los Factores de Calidad que estos favorecen',
      descripciones: [
        'Protección Modular',
        'Entendimiento Modular',
        'Composición Modular',
        'Continuidad Modular',
      ],
      opciones: ['Robustez', 'Mantenimiento', 'Reusabilidad', 'Extensibilidad'],
      correcta: [0, 1, 2, 3],
      tipo: 'ordenar',
      multiple: true,
      respuestaCorrecta:
        'Robustez, Mantenimiento, Reusabilidad, Extensibilidad',
    },
    {
      texto: 'Una los términos con sus respectivas definiciones',
      descripciones: [
        'Formada por la signatura de los servicios públicos.',
        'Servicio que modifica el valor de al menos un atributo.',
        'Mantienen valores compartidos por todos los objetos de una clase.',
        'Propiedad o cualidad relevante que caracteriza a todos los objetos de una clase.',
        'Representa la abstracción del conjunto de objetos o instancias.',
        'Dependiendo del lenguaje, se usa para crear un objeto o inicializar la instancia de una clase.',
      ],
      opciones: [
        'Interfaz',
        'Comando',
        'Atributos de clase',
        'Atributo',
        'Nombre',
        'Constructor',
      ],
      correcta: [0, 1, 2, 3, 4, 5],
      tipo: 'ordenar',
      multiple: true,
      respuestaCorrecta:
        'Interfaz, Comando, Atributos de clase, Atributo, Nombre, Constructor',
    },
    {
      texto:
        'Enlace los 5 principios de construcción de software con sus respectivas definiciones',
      descripciones: [
        'No debe revelarse la forma en los servicios ofrecidos por un módulo son implementados.',
        'Propiedades que describen a un módulo capaz de ser extendido por el usuario o utilizado por otro módulo.',
        'Un único módulo debe conocer una lista exhaustiva de alternativas a utilizarse por el programa.',
        'La documentación sobre un módulo debe estar contenida en su propio código.',
        'Los módulos deben corresponderse con las unidades sintácticas que ofrece el lenguaje utilizado.',
      ],
      opciones: [
        'Acceso Uniforme',
        'Abierto-Cerrado',
        'Cambio Simple',
        'Auto-documentación',
        'Unidad Modular Lingüística',
      ],
      correcta: [0, 1, 2, 3, 4],
      tipo: 'ordenar',
      multiple: true,
      respuestaCorrecta:
        'Acceso Uniforme, Abierto-Cerrado, Cambio Simple, Auto-documentación, Unidad Modular Lingüística',
    },
    {
      texto:
        'Hoy te regalan un centavo. Mañana, recibirás el doble (2 centavos). Al próximo día, volverás a recibir el doble de ello (4 centavos). Finalmente, una vez que hayas recibido un millón o más, no recibirás más regalos. ¿Cuál es la salida esperada del código?',
      opciones: [
        'En el día 27, tu regalo de $671,088.64 te dejará un total de $1,342,177.27',
        'En el día 20, tu regalo de $524,288.00 te dejará un total de $1,048,575.00',
        'En el día 30, tu regalo de $1,073,741.82 te dejará un total de $2,147,483.64',
      ],
      correcta: 0,
      respuestaCorrecta:
        'En el día 27, tu regalo de $671,088.64 te dejará un total de $1,342,177.27',
    },
    {
      texto:
        'Dadas las clases PresionArterial y SignosVitales, evalúe la ejecución del programa: pression1 = PresionArterial(90,185); pression2 = pression1; sv1 = SignosVitales(36.5,pression1); sv2 = SignosVitales(36.5,pression2). Los objetos referenciados por sv1 y sv2 están asociados con:',
      opciones: [
        'El mismo objeto de tipo PresionArterial',
        'Objetos equivalentes de tipo PresionArterial',
        'Objetos distintos de tipo PresionArterial',
      ],
      correcta: 0,
      respuestaCorrecta: 'El mismo objeto de tipo PresionArterial',
    },
    {
      texto:
        'En un esquema de clases proveedoras y clases clientes, cada clase:',
      opciones: [
        'No necesita conocer los servicios que brindan sus clases proveedoras, pero si conocer quienes son sus clientes',
        'Debe conocer los servicios que brindan sus clases proveedoras, pero no necesita conocer quienes son sus clientes',
        'Debe conocer los servicios que brindan sus clases proveedoras pero no cómo estos están implementados',
        'No necesita conocer los servicios que brindan sus clases proveedoras ni quienes son sus clientes',
      ],
      correcta: [1, 2],
      multiple: true,
      respuestaCorrecta:
        'Debe conocer los servicios que brindan sus clases proveedoras, pero no necesita conocer quienes son sus clientes, Debe conocer los servicios que brindan sus clases proveedoras pero no cómo estos están implementados',
    },
    {
      texto:
        'Elija, entre las siguientes combinaciones, la opción que crea correcta sobre calidad de software',
      opciones: [
        'Correctitud & Extensibilidad - Modularidad | Robustez & Reusabilidad - Confiabilidad',
        'Correctitud & Robustez - Modularidad | Extensibilidad & Reusabilidad - Confiabilidad',
        'Correctitud & Robustez - Confiabilidad | Extensibilidad & Reusabilidad - Modularidad',
        'Reusabilidad & Robustez - Confiabilidad | Extensibilidad & Correctitud - Modularidad',
      ],
      correcta: 2,
      respuestaCorrecta:
        'Correctitud & Robustez - Confiabilidad | Extensibilidad & Reusabilidad - Modularidad',
    },
    {
      texto:
        'Seleccione las sentencias que cree son correctas sobre criterios de modularidad',
      opciones: [
        'El Entendimiento Modular se relaciona a la facilidad para comprender el comportamiento de un módulo con solo leer su código',
        'En un programa donde se satisface el criterio de Protección Modular, los cambios que impactan un módulo NO se propagan al resto',
        'La Descomposición Modular sigue la idea de poder descomponer un programa en módulos menos complejos, rigurosamente dependientes unos de otros',
        'El criterio de Continuidad Modular especifica que los cambios que impactan un módulo se propaguen al resto',
        'La Composición Modular trata de la creación de nuevas unidades de software creadas a partir de la combinación de otras ya existentes',
      ],
      correcta: [0, 4],
      multiple: true,
      respuestaCorrecta:
        'El Entendimiento Modular se relaciona a la facilidad para comprender el comportamiento de un módulo con solo leer su código, La Composición Modular trata de la creación de nuevas unidades de software creadas a partir de la combinación de otras ya existentes',
    },
    {
      texto:
        "¿Qué sucede si se ejecuta el programa con la clase NaveEspacial? nave_espacial1 = NaveEspacial('R',100); print('Combustible de Nave 1: ' + nave_espacial1.obtenerCombustible()); nave_espacial1.agregarCombustible(700); print('Combustible de Nave 1: ' + str(nave_espacial1.obtenerCombustible()))",
      opciones: [
        'Funciona normalmente',
        'La primer instrucción print falla porque se intenta concatenar una cadena con un valor entero',
        'Arroja un error, ya que el método __init__ espera que se proporcionen los parámetros co y comb',
      ],
      correcta: 1,
      respuestaCorrecta:
        'La primer instrucción print falla porque se intenta concatenar una cadena con un valor entero',
    },
    {
      texto:
        "Dada la clase robot.py, ¿Cuál es el valor del atributo energía de cada objeto luego de ejecutar: r1 = Robot('Fabian'); r2 = Robot('Rosalia'); r1.energia=50; r2.energia=100; r1.recargar(); print(r1.obtenerEnergia()); print(r2.obtenerEnergia())",
      opciones: [
        '50, 50',
        '100, 50',
        '100, 100',
        'El programa no funciona, arroja un error',
        '50, 100',
      ],
      correcta: 2,
      respuestaCorrecta: '100, 100',
    },
    {
      texto:
        'Dada la clase punto.py, la última instrucción print(punto12.equals(punto12bis)) imprime True porque:',
      opciones: [
        'punto12 y punto12bis hacen referencia al mismo objeto',
        'punto12 y punto12bis hacen referencia a objetos distintos, pero el valor del atributo __x de ambos coincide',
        'punto12 y punto12bis hacen referencia a objetos distintos y sus estados internos son equivalentes',
      ],
      correcta: 2,
      respuestaCorrecta:
        'punto12 y punto12bis hacen referencia a objetos distintos y sus estados internos son equivalentes',
    },
    {
      texto:
        'El siguiente programa para verificar si un archivo existe no funciona cuando el archivo no existe y lanza un error. ¿Por qué?',
      opciones: [
        'El archivo debe existir si o si',
        'La sentencia or debería ser cambiada por una sentencia and',
        'Las sentencias contenidas en bloques if / else deben precederse y estar seguidas de llaves ({})',
      ],
      correcta: 1,
      respuestaCorrecta:
        'La sentencia or debería ser cambiada por una sentencia and',
    },
    {
      texto:
        "Dado el diagrama de clase Profesor, ¿Cuál es la salida del siguiente programa? p1 = Profesor(1253, 38, 'P'); p2 = p1.clone(); p3 = Profesor(1254, 35, 'E'); p3.copy(p2); p1.establecerLegajo(1255); p3 = p2; print(p3.obtenerLegajo())",
      opciones: ['1253', '1254', '1255', 'Error'],
      correcta: 0,
      respuestaCorrecta: '1253',
    },
    {
      texto: '¿Cuál es la salida del siguiente programa con función factorial?',
      opciones: ['120', '720', '6', 'Error'],
      correcta: 0,
      respuestaCorrecta: '120',
    },
    {
      texto:
        'Cuando una clase esta asociada a otra la implementación de la igualdad se puede hacer únicamente en forma superficial.',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Falso - Como se vio en clase, se puede hacer también en profundidad.',
    },
    {
      texto: 'El programa con PelotaConNombre imprime: Pelota 1, Pelota 2',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Falso - La salida de este programa es: Pelota 2, Pelota 2',
    },
    {
      texto:
        '¿Las funciones son bloques de código que pueden ser llamadas cuantas veces sean necesarias?',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Los comentarios en Python deben estar en un programa para que este pueda ejecutarse',
      opciones: ['Verdadero', 'Falso'],
      correcta: 1,
      respuestaCorrecta:
        'Falso - Los comentarios son una mera forma de documentación, que sirve como guía a los programadores para comprender el propósito y comportamiento de los módulos y modelos que componen un programa.',
    },
    {
      texto:
        'Un tipo abstracto de datos es un tipo de datos que: Consta de Datos y Operaciones que pueden realizarse sobre estos datos, Es definido por el programador, Permite hasta cierto punto modelar el comportamiento de una entidad real',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta:
        'Verdadero - Un Tipo Abstracto de Datos o TDA está constituido por una estructura de datos y operaciones que se pueden realizar sobre esos datos, y está definido por el programador.',
    },
  ],
};
