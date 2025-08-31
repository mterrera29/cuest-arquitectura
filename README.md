Te voy a subir un PDF con un cuestionario.

Quiero que lo conviertas a un archivo TypeScript siguiendo exactamente este modelo de estructura de pregunta:

Formato base:

{
texto: "Enunciado de la pregunta",
opciones: ["Opción 1", "Opción 2", "Opción 3"],
correcta: 1, // índice de la respuesta correcta (o array si son varias)
respuestaCorrecta: "Explicacion de la respuesta correcta (se encuentra debajo de las opciones)" // siempre como string
}

Reglas especiales según el tipo de pregunta:

Si ves imágenes con código, transcribí el código

Si es de Verdadero/Falso → usar opciones: ["Verdadero", "Falso"] y correcta con índice. Incluir respuestaCorrecta con el texto correspondiente.

Si es de selección múltiple (varias correctas) → incluir multiple: true, correcta como array de índices y respuestaCorrecta como string concatenando las respuestas correctas separadas por comas.

Si es de emparejamiento/relacionar/ordenar → usar este formato:

{
texto: "Enunciado",
descripciones: ["Descripción 1", "Descripción 2", "Descripción 3"],
opciones: ["Opción A", "Opción B", "Opción C"], // en orden aleatorio
correcta: [índice_correcto_de_cada_descripción_en_opciones],
tipo: "ordenar",
multiple: true,
respuestaCorrecta: "Opción A, Opción B, Opción C" // orden correcto
}

Extra:

en respuestaCorrecta quiero la explicación que aparece abajo donde dice la respuesta correcta es:

En las de tipo 'ordenar', las opciones deben estar en orden aleatorio, y correcta debe guardar el índice real según ese orden.

No todas las preguntas deben ser tipo 'ordenar', solo las que en el PDF sean de emparejar/relacionar/ordenar.

Mantener el texto limpio y sin explicaciones ni feedback del examen, solo el enunciado puro y la respuesta correcta.

Responder con el bloque TypeScript completo listo para pegar en data_info.ts con el nombre semanaX : [...] usando X según la semana.
