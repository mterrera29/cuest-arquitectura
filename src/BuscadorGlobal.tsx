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
  materia: string; // '1' para Arquitectura, '2' para Informática
  cuestionarios_arq: { semana: number; preguntas: Pregunta[] }[];
  cuestionarios_inf: { semana: number; preguntas: Pregunta[] }[];
  cuestionarios_so: { semana: number; preguntas: Pregunta[] }[];
}

export default function BuscadorGlobal({
  materia,
  cuestionarios_arq,
  cuestionarios_inf,
  cuestionarios_so,
}: BuscadorGlobalProps) {
  // Armamos la lista completa de preguntas de acuerdo a la materia seleccionada
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

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h2>
        Buscar en{' '}
        {materia === '1'
          ? 'Arquitectura de Computadoras'
          : 'Introducción a la Informática'}
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
                  <strong>
                    {materia === '1' ? 'Arquitectura' : 'Informática'}
                  </strong>{' '}
                  — Semana {p.semana === 0 ? 'Parcial' : p.semana}
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
