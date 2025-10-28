import { useState } from 'react';

export interface Pregunta {
  texto: string;
  opciones: string[];
  correcta: number | number[];
  multiple?: boolean;
  tipo?: string;
  descripciones?: string[];
  semana?: number;
  materia?: string;
  respuestaCorrecta?: string;
}

interface BuscadorGlobalProps {
  materia: string;
  cuestionarios_arq: { semana: number; preguntas: Pregunta[] }[];
  cuestionarios_inf: { semana: number; preguntas: Pregunta[] }[];
  cuestionarios_so: { semana: number; preguntas: Pregunta[] }[];
  cuestionarios_prog2: { semana: number; preguntas: Pregunta[] }[];
}

export default function BuscadorGlobal({
  materia,
  cuestionarios_arq,
  cuestionarios_inf,
  cuestionarios_so,
  cuestionarios_prog2,
}: BuscadorGlobalProps) {
  const preguntasFiltradasPorMateria =
    materia === '1'
      ? cuestionarios_arq
          .map((q) =>
            q.preguntas.map((p) => ({
              ...p,
              semana: q.semana,
              materia: '1',
            }))
          )
          .flat()
      : materia === '2'
      ? cuestionarios_inf
          .map((q) =>
            q.preguntas.map((p) => ({
              ...p,
              semana: q.semana,
              materia: '2',
            }))
          )
          .flat()
      : materia === '3'
      ? cuestionarios_prog2
          .map((q) =>
            q.preguntas.map((p) => ({
              ...p,
              semana: q.semana,
              materia: '3',
            }))
          )
          .flat()
      : materia === '4'
      ? cuestionarios_so
          .map((q) =>
            q.preguntas.map((p) => ({
              ...p,
              semana: q.semana,
              materia: '4',
            }))
          )
          .flat()
      : [];

  const [busqueda, setBusqueda] = useState('');

  const normalizar = (texto: string) =>
    texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const incluye = (base: string, query: string) =>
    normalizar(base).includes(normalizar(query));

  const resultados = preguntasFiltradasPorMateria.filter((p) => {
    const enunciado = p.texto;
    const opciones = p.opciones.join(' ');
    const descripciones = (p.descripciones || []).join(' ');
    return (
      incluye(enunciado, busqueda) ||
      incluye(opciones, busqueda) ||
      incluye(descripciones, busqueda)
    );
  });

  // Función para renderizar preguntas de relacionar
  const renderPreguntaRelacionar = (p: Pregunta) => {
    if (!p.descripciones || p.descripciones.length === 0) {
      return null;
    }

    return (
      <div style={{ marginTop: '1em' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Columna izquierda - Descripciones */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <strong style={{ display: 'block', marginBottom: '0.5em' }}>
              Enunciados:
            </strong>
            {p.descripciones.map((desc, index) => (
              <div
                key={index}
                style={{
                  padding: '8px 12px',
                  marginBottom: '8px',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #dee2e6',
                  borderRadius: '4px',
                }}
              >
                {desc}
              </div>
            ))}
          </div>

          {/* Columna derecha - Opciones con respuestas correctas */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <strong style={{ display: 'block', marginBottom: '0.5em' }}>
              Opciones (respuestas correctas en verde):
            </strong>
            {p.opciones.map((op, index) => {
              const esCorrecta = Array.isArray(p.correcta)
                ? p.correcta.includes(index)
                : p.correcta === index;

              return (
                <div
                  key={index}
                  style={{
                    padding: '8px 12px',
                    marginBottom: '8px',
                    backgroundColor: esCorrecta ? '#d4edda' : '#f8f9fa',
                    border: `1px solid ${esCorrecta ? '#c3e6cb' : '#dee2e6'}`,
                    borderRadius: '4px',
                    color: esCorrecta ? '#155724' : 'inherit',
                  }}
                >
                  {op}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mostrar las relaciones correctas */}
        <div
          style={{
            marginTop: '1em',
            padding: '12px',
            backgroundColor: '#e7f3ff',
            borderRadius: '4px',
          }}
        >
          <strong>Relaciones correctas:</strong>
          <div style={{ marginTop: '0.5em' }}>
            {p.descripciones.map((desc, index) => {
              const respuestaIndex = Array.isArray(p.correcta)
                ? p.correcta[index]
                : p.correcta;
              const respuestaCorrecta = p.opciones[respuestaIndex];
              return (
                <div key={index} style={{ marginBottom: '4px' }}>
                  <strong>{desc}</strong> →{' '}
                  <span style={{ color: '#155724' }}>{respuestaCorrecta}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Función para renderizar preguntas normales
  const renderPreguntaNormal = (p: Pregunta) => {
    const correctas = Array.isArray(p.correcta) ? p.correcta : [p.correcta];

    return (
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {p.opciones.map((op, j) => (
          <li
            key={j}
            style={{
              backgroundColor: correctas.includes(j) ? '#d4edda' : '#f8f9fa',
              padding: '8px 12px',
              borderRadius: '6px',
              marginBottom: '6px',
              border: `1px solid ${
                correctas.includes(j) ? '#c3e6cb' : '#dee2e6'
              }`,
            }}
          >
            {op}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h2>
        Buscar en{' '}
        {materia === '1'
          ? 'Arquitectura de Computadoras'
          : materia === '2'
          ? 'Introducción a la Informática'
          : materia === '3'
          ? 'IDW'
          : 'Sistemas Operativos'}
      </h2>
      <input
        type='text'
        placeholder='Escribí texto, parte de una opción o concepto...'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />

      {busqueda && (
        <>
          <p>Resultados encontrados: {resultados.length}</p>
          {resultados.map((p, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1.5em',
                marginBottom: '1.5em',
                backgroundColor: '#fafafa',
              }}
            >
              <p style={{ marginBottom: '0.5em' }}>
                <strong>
                  {materia === '1'
                    ? 'Arquitectura de Computadoras'
                    : materia === '2'
                    ? 'Introducción a la Informática'
                    : materia === '3'
                    ? 'IDW'
                    : 'Sistemas Operativos'}
                </strong>{' '}
                — Semana {p.semana === 0 ? 'Parcial' : p.semana}
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  marginBottom: '1em',
                  whiteSpace: 'pre-line',
                }}
              >
                {p.texto}
              </p>

              {/* Renderizar según el tipo de pregunta */}
              {p.descripciones && p.descripciones.length > 0
                ? renderPreguntaRelacionar(p)
                : renderPreguntaNormal(p)}

              {p.respuestaCorrecta && (
                <div
                  style={{
                    backgroundColor: '#fff8b3',
                    padding: '0.75em',
                    marginTop: '1em',
                    borderRadius: '4px',
                    border: '1px solid #ffeaa7',
                  }}
                >
                  <strong>Respuesta correcta:</strong> {p.respuestaCorrecta}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
