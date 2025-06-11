import { useState } from 'react';
import { arquitectura } from './data';
import { introducción } from './data_info';

export interface Pregunta {
  texto: string;
  opciones: string[];
  correcta: number | number[];
  multiple?: boolean;
  tipo?: string;
  descripciones?: string[];
}

const cuestionarios_arq = [
  { semana: 1, preguntas: arquitectura.preguntasSemana1_v1 },
  { semana: 1, preguntas: arquitectura.preguntasSemana1_v2 },
  { semana: 2, preguntas: arquitectura.preguntasSemana2_v1 },
  { semana: 2, preguntas: arquitectura.preguntasSemana2_v2 },
  { semana: 4, preguntas: arquitectura.preguntasSemana4_v1 },
  { semana: 4, preguntas: arquitectura.preguntasSemana4_v2 },
  { semana: 6, preguntas: arquitectura.preguntasSemana6_v1 },
  { semana: 7, preguntas: arquitectura.preguntasSemana7_v1 },
  { semana: 7, preguntas: arquitectura.preguntasSemana7_v2 },
  { semana: 7, preguntas: arquitectura.preguntasSemana7_v3 },
  { semana: 8, preguntas: arquitectura.preguntasSemana8_v1 },
  { semana: 9, preguntas: arquitectura.preguntasSemana9_v1 },
  { semana: 10, preguntas: arquitectura.preguntasSemana10_v1 },
];

const cuestionarios_inf = [
  { semana: 1, preguntas: introducción.semana1 },
  { semana: 2, preguntas: introducción.semana2 },
  { semana: 2, preguntas: introducción.semana2_v2 },
  { semana: 3, preguntas: introducción.semana3 },
  { semana: 3, preguntas: introducción.semana3_v2 },
  { semana: 4, preguntas: introducción.semana4 },
  { semana: 4, preguntas: introducción.semana4_v2 },
  { semana: 5, preguntas: introducción.semana5 },
  { semana: 5, preguntas: introducción.semana5_v2 },
  { semana: 7, preguntas: introducción.semana7 },
  { semana: 7, preguntas: introducción.semana7_v2 },
  { semana: 8, preguntas: introducción.semana8 },
  { semana: 9, preguntas: introducción.semana9 },
  { semana: 10, preguntas: introducción.semana10 },
  { semana: 11, preguntas: introducción.semana11 },
  { semana: 0, preguntas: introducción.parcial },
];

const todasLasPreguntas = [
  ...cuestionarios_arq.map((q) =>
    q.preguntas.map((p) => ({
      ...p,
      semana: q.semana,
      materia: 'Arquitectura',
    }))
  ),
  ...cuestionarios_inf.map((q) =>
    q.preguntas.map((p) => ({ ...p, semana: q.semana, materia: 'Informática' }))
  ),
].flat();

export default function BuscadorGlobal() {
  const [busqueda, setBusqueda] = useState('');

  const normalizar = (texto: string) =>
    texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const incluye = (base: string, query: string) =>
    normalizar(base).includes(normalizar(query));

  const resultados = todasLasPreguntas.filter((p) => {
    const enunciado = p.texto;
    const opciones = p.opciones.join(' ');
    const descripciones = (p.descripciones || []).join(' ');
    return (
      incluye(enunciado, busqueda) ||
      incluye(opciones, busqueda) ||
      incluye(descripciones, busqueda)
    );
  });

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1>🔎 Buscar en todas las preguntas</h1>
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
          {resultados.map((p, i) => {
            const correctas = Array.isArray(p.correcta)
              ? p.correcta
              : [p.correcta];
            return (
              <div
                key={i}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1em',
                  marginBottom: '1em',
                  backgroundColor: '#fafafa',
                }}
              >
                <p>
                  <strong>{p.materia}</strong> — Semana{' '}
                  {p.semana === 0 ? 'Parcial' : p.semana}
                </p>
                <p style={{ fontWeight: 'bold', marginBottom: '0.5em' }}>
                  {p.texto}
                </p>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  {p.opciones.map((op, j) => (
                    <li
                      key={j}
                      style={{
                        backgroundColor: correctas.includes(j)
                          ? '#d4edda'
                          : undefined,
                        padding: '5px 10px',
                        borderRadius: '6px',
                        marginBottom: '4px',
                      }}
                    >
                      {op}
                    </li>
                  ))}
                </ul>
                {p.descripciones && (
                  <div style={{ marginTop: '0.5em' }}>
                    <small style={{ color: '#666' }}>
                      {p.descripciones.join(' ')}
                    </small>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
