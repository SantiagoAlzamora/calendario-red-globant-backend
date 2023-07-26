

// eslint-disable-next-line react/prop-types
export default function ResultadoCalculadora({ contenido }) {
  return (
    <section className='resultado'>
      <div className='resultado-header'>
        <h3> Estás cursando: {contenido.guiaActual}</h3>
        {contenido.clasesRestantesGuiaActual > 1 || contenido.clasesRestantesGuiaActual === 0
          ? <p>Te quedan <span>{contenido.clasesRestantesGuiaActual}</span> días de guía</p>
          : <p>Te queda <span>{contenido.clasesRestantesGuiaActual}</span> día de guía</p>}
      </div>
      <div className='resultado-info'>
        <div>
          <p> Clases restantes hasta fin de curso: <span>{contenido.clasesRestantes}</span></p>
          <p> Fecha fin de curso: <span>{contenido.fechaARendir}</span></p>
        </div>
      </div>
    </section>
  )
}
