import { useState } from 'react'
import Placeholder from './Placeholder'

const initialValues = {
  nombre: '',
  empresa: '',
  whatsapp: '',
  codigoPostal: '',
  asunto: '',
  productos: '',
}

const fieldLabels = {
  nombre: 'Nombre',
  empresa: 'Empresa',
  whatsapp: 'Whatsapp',
  codigoPostal: 'Codigo postal',
  asunto: 'Asunto',
  productos: 'Productos que te interesan',
}

const requiredFields = ['nombre', 'empresa', 'whatsapp', 'codigoPostal', 'asunto', 'productos']

export default function Forms() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function validate() {
    const nextErrors = {}
    requiredFields.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = 'Este campo es requerido'
      }
    })
    return nextErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      // Frontend-only for now: no backend wired up yet.
      console.log('Nuevo distribuidor - formulario enviado:', values)
      setSubmitted(true)
      setValues(initialValues)
    }
  }

  const inputClasses = (field) =>
    `w-full rounded-lg border px-4 py-2.5 font-inter text-[15px] text-[#111] placeholder:text-[#9BA1A9] focus:outline-none focus:ring-2 focus:ring-azul ${
      errors[field] ? 'border-red-500' : 'border-[#9BA1A9]'
    }`

  return (
    <section id="contacto" className="flex flex-col items-stretch bg-white md:flex-row">
      <Placeholder
        label="Fotografía: entrega a distribuidor"
        className="h-64 w-full rounded-none md:h-auto md:w-[597px] md:rounded-r-2xl"
      />
      <div className="flex flex-1 flex-col gap-7 px-6 py-16 md:pl-10 md:pr-20">
        <div className="flex flex-col gap-2">
          <h2 className="font-inter text-2xl font-bold text-[#111] md:text-[32px]">
            ¿Te interesa algún producto en especial?
          </h2>
          <p className="font-inter text-base text-[#111]">
            Escribenos y uno de nuestros asesores te atenderá.
          </p>
        </div>

        {submitted && (
          <div className="rounded-lg border border-azul bg-gris px-4 py-3 font-inter text-sm text-[#111]">
            ¡Gracias! Tu solicitud fue registrada. Un asesor te contactará pronto.
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <input
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                placeholder={fieldLabels.nombre}
                className={inputClasses('nombre')}
              />
              {errors.nombre && <p className="mt-1 font-inter text-xs text-red-600">{errors.nombre}</p>}
            </div>
            <div className="flex-1">
              <input
                name="empresa"
                value={values.empresa}
                onChange={handleChange}
                placeholder={fieldLabels.empresa}
                className={inputClasses('empresa')}
              />
              {errors.empresa && <p className="mt-1 font-inter text-xs text-red-600">{errors.empresa}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <input
                name="whatsapp"
                value={values.whatsapp}
                onChange={handleChange}
                placeholder={fieldLabels.whatsapp}
                className={inputClasses('whatsapp')}
              />
              {errors.whatsapp && <p className="mt-1 font-inter text-xs text-red-600">{errors.whatsapp}</p>}
            </div>
            <div className="flex-1">
              <input
                name="codigoPostal"
                value={values.codigoPostal}
                onChange={handleChange}
                placeholder={fieldLabels.codigoPostal}
                className={inputClasses('codigoPostal')}
              />
              {errors.codigoPostal && (
                <p className="mt-1 font-inter text-xs text-red-600">{errors.codigoPostal}</p>
              )}
            </div>
          </div>
          <div>
            <input
              name="asunto"
              value={values.asunto}
              onChange={handleChange}
              placeholder={fieldLabels.asunto}
              className={inputClasses('asunto')}
            />
            {errors.asunto && <p className="mt-1 font-inter text-xs text-red-600">{errors.asunto}</p>}
          </div>
          <div>
            <textarea
              name="productos"
              value={values.productos}
              onChange={handleChange}
              placeholder={fieldLabels.productos}
              rows={3}
              className={inputClasses('productos')}
            />
            {errors.productos && <p className="mt-1 font-inter text-xs text-red-600">{errors.productos}</p>}
          </div>
          <button
            type="submit"
            className="w-fit rounded-lg bg-azul px-4 py-2.5 font-inter text-[15px] font-bold text-white transition hover:brightness-110"
          >
            Nuevo distribuidor
          </button>
        </form>
      </div>
    </section>
  )
}
