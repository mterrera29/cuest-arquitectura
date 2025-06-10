import { useState } from 'react';
import App from './App';

import { arquitectura } from './data';
import { introducción } from './data_info';

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
  { semana: 0, preguntas: introducción.parcial },
  { semana: 1, preguntas: introducción.semana1 },
  { semana: 2, preguntas: introducción.semana2 },
  { semana: 2, preguntas: introducción.semana2_v2 },
  { semana: 3, preguntas: introducción.semana3 },
  { semana: 3, preguntas: introducción.semana3_v2 },
  { semana: 4, preguntas: introducción.semana4 },
  { semana: 4, preguntas: introducción.semana4_v2 },
  { semana: 5, preguntas: introducción.semana5 },
  { semana: 5, preguntas: introducción.semana5_v2 },
  { semana: 6, preguntas: introducción.semana6 },
  { semana: 7, preguntas: introducción.semana7 },
  { semana: 7, preguntas: introducción.semana7_v2 },
  { semana: 8, preguntas: introducción.semana8 },
  { semana: 8, preguntas: introducción.semana8_v2 },
  { semana: 9, preguntas: introducción.semana9 },
  { semana: 10, preguntas: introducción.semana10 },
  { semana: 11, preguntas: introducción.semana11 },
];

export default function CuestionarioSelector() {
  const [materia, setMateria] = useState<string>('1');
  const [seleccionado, setSeleccionado] = useState<number | null>(null);
  const cuestionarios = materia === '1' ? cuestionarios_arq : cuestionarios_inf;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMateria(e.target.value);
  };
  if (seleccionado !== null) {
    const { semana, preguntas } =
      materia === '1'
        ? cuestionarios_arq[seleccionado]
        : cuestionarios_inf[seleccionado];
    return (
      <div>
        <App
          semana={semana}
          preguntas={preguntas}
          onVolver={() => setSeleccionado(null)}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>
        {materia === '1'
          ? 'Arquitectura de Computadoras📋'
          : 'Introducción a la Informática📋'}
      </h1>
      <select name='' id='' onChange={handleChange}>
        <option value='0'>Seleccionar</option>
        <option value='1'>Arquitectura de Computadoras</option>
        <option value='2'>Introducción a la Informática</option>
      </select>
      <h2>Seleccioná un cuestionario</h2>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
        }}
      >
        {cuestionarios.map((q, i) => (
          <li key={i} style={{ marginTop: '5px', listStyle: 'none' }}>
            <button onClick={() => setSeleccionado(i)}>
              {q.semana === 0 ? 'Parcial' : `Semana ${q.semana}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
