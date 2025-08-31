export const sistemasOperativos = {
  semana1: [
    {
      texto: 'El sistema Operativo está conformado conceptualmente por:',
      opciones: [
        'Núcleo o Kernel.',
        'Usuarios.',
        'Interfaz de Usuario.',
        'Procesos de usuarios.',
        'Servicios o llamadas al sistema.',
      ],
      multiple: true,
      correcta: [0, 2, 4],
      respuestaCorrecta:
        'Las respuestas correctas son: Núcleo o Kernel, Servicios o llamadas al sistema, Interfaz de Usuario.',
    },
    {
      texto: 'En Multiprogramación:',
      opciones: [
        'Cada usuario recibe el control de la CPU durante un determinado intervalo de tiempo.',
        'Los tiempos ociosos de la CPU son aprovechados por otro programa para ser ejecutado.',
        'El primer programa llegado es el primero en atenderse.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'La respuesta correcta es: Los tiempos ociosos de la CPU son aprovechados por otro programa para ser ejecutado.',
    },
    {
      texto:
        'En un Sistema Operativo Micronúcleo. La mayor parte de las operaciones se tratan como:',
      opciones: [
        'Procesos en modo supervisor.',
        'Procesos del núcleo.',
        'Procesos de usuario.',
      ],
      correcta: 2,
      respuestaCorrecta: 'La respuesta correcta es: Procesos de usuario.',
    },
    {
      texto: 'En un Sistema Operativo de estructura por capas.',
      opciones: [
        'Se facilitan las modificaciones al sistema.',
        'Se gana en eficiencia.',
        'Se aumenta la seguridad del sistema.',
      ],
      multiple: true,
      correcta: [0, 2],
      respuestaCorrecta:
        'Las respuestas correctas son: Se aumenta la seguridad del sistema, Se facilitan las modificaciones al sistema.',
    },
    {
      texto:
        'En un sistema operativo por lote(o batch), durante una operación de entrada/salida, el procesador:',
      opciones: ['Permanece inactivo.', 'Ejecuta otra tarea.'],
      correcta: 0,
      respuestaCorrecta: 'La respuesta correcta es: Permanece inactivo.',
    },
    {
      texto: 'La interfaz de Usuario:',
      opciones: [
        'Es interno o externo al núcleo del Sistema Operativo dependiendo si es: monolítico o micronúcleo.',
        'Es externo al núcleo del sistema operativo.',
        'Es interno al núcleo del sistema operativo.',
      ],
      correcta: 1,
      respuestaCorrecta:
        'La respuesta correcta es: Es externo al núcleo del sistema operativo.',
    },
    {
      texto: 'Los Sistemas Operativos con estructura monolítica:',
      opciones: [
        'Carecen de protecciones y privilegios al entrar a rutinas que manejan los distintos recursos.',
        'Tienen la mayor parte de las funciones del Sistema Operativo convertidas en procesos de usuario.',
        'Las capas internas son más privilegiadas que las externas, por lo que estarán más protegidas de accesos indeseados.',
      ],
      correcta: 0,
      respuestaCorrecta:
        'La respuesta correcta es: Carecen de protecciones y privilegios al entrar a rutinas que manejan los distintos recursos.',
    },
    {
      texto: 'Los Sistemas Operativos son:',
      opciones: [
        'Un conjunto de programas que permiten a la BIOS arrancar el sistema.',
        'Un conjunto de programas que interrumpen a los dispositivos de E/S.',
        'Un conjunto de programas que crean una interfaz entre el hardware y el usuario.',
      ],
      correcta: 2,
      respuestaCorrecta:
        'La respuesta correcta es: Un conjunto de programas que crean una interfaz entre el hardware y el usuario.',
    },
  ],
  semana2: [
    {
      texto:
        'En Linux ¿Qué comando me permite listar procesos corriendo en background?',
      opciones: ['&', 'jobs', 'htop', 'fg', 'renice', 'top'],
      correcta: 1,
      respuestaCorrecta: 'jobs',
    },
    {
      texto: 'La Planificación de Procesos permite',
      opciones: [
        'Mantener ocupado al procesador.',
        'Equilibrar memoria principal y memoria virtual.',
        'Evitar la postergación indefinida.',
      ],
      correcta: 2,
      respuestaCorrecta: 'Evitar la postergación indefinida.',
    },
    {
      texto:
        'En Linux ¿Qué comando me permite mostrar los procesos de todos los usuarios?',
      opciones: ['ps -l', 'ps', 'ps -u', 'ps -a'],
      correcta: 3,
      respuestaCorrecta: 'ps -a',
    },
    {
      texto: 'El Concepto de Proceso surge con los:',
      opciones: [
        'Sistemas Operativos Embebidos.',
        'Sistemas Operativos Multiprogramados.',
        'Sistemas Operativos de Tiempo Compartido.',
        'Sistemas Operativos en Tiempo Real.',
        'Sistemas Operativos por Lote (batch).',
      ],
      correcta: 1,
      respuestaCorrecta: 'Sistemas Operativos Multiprogramados.',
    },
    {
      texto: 'El Bloque de Control del Proceso (PCB) lo gestiona:',
      opciones: [
        'el sistema operativo.',
        'el propio proceso',
        'el intérprete de comandos.',
        'el usuario.',
      ],
      correcta: 0,
      respuestaCorrecta: 'el sistema operativo.',
    },
    {
      texto: 'En Linux, las prioridades se manejan con un valor entre:',
      opciones: ['-20 a 19', '0 a 19', '1 a 10', '1 a 20'],
      correcta: 0,
      respuestaCorrecta: '-20 a 19',
    },
    {
      texto: 'En un sistema operativo existe:',
      opciones: [
        'Un PCB por cada proceso existente.',
        "PCB's sólo para los procesos que están en estado Bloqueado.",
        "PCB's sólo para los procesos que están en estado Listo",
        'Sólo un PCB que corresponde al proceso que está activo en cada momento.',
      ],
      correcta: 0,
      respuestaCorrecta: 'Un PCB por cada proceso existente.',
    },
    {
      texto: 'Un proceso está compuesto básicamente por Código, Datos y Pila',
      opciones: ['Verdadero', 'Falso'],
      correcta: 0,
      respuestaCorrecta: 'Verdadero',
    },
    {
      texto:
        'Que algoritmo de planificación se pueden usar en un Sistema Operativo de tiempo compartido:',
      opciones: [
        'SJF – Shortest Job First.',
        'RR - Round Robin.',
        'FCFS – First Come, First Served.',
      ],
      correcta: 1,
      respuestaCorrecta: 'RR - Round Robin.',
    },
    {
      texto:
        'Suponga un SO que no cuenta con Memoria Virtual, ¿Qué planificador no necesita?',
      opciones: [
        'Planificador a Medio Plazo.',
        'Planificador a Largo Plazo.',
        'Planificador a Corto Plazo.',
      ],
      correcta: 0,
      respuestaCorrecta: 'Planificador a Medio Plazo.',
    },
  ],
};
