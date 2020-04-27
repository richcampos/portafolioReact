import React, { useContext, useState } from 'react'
import { Title, Form, Select, StyledSlider } from './styles'

import { Context } from '../../Context'

export const FiltersBar = () => {
  const [state, setState] = useState({ x: 0, y: 33000 })
  const { year, location, category, updateYear, updateLocation, updateCategory } = useContext(Context)

  const onChangeYear = (event) => {
    updateYear(event.target.value)
  }

  const onChangeCategory = (event) => {
    updateCategory(event.target.value)
  }

  const onChangeLocation = (event) => {
    updateLocation(event.target.value)
  }

  const onChangeArea = (event) => {
    updateArea(event.target.value)
  }

  return (
    <div>
      <Title>portafolio</Title>
      <Form>
        <label>Año</label>
        <Select onChange={onChangeYear} name='year' value={year}>
          <option value=''>Todos los años</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
          <option value='2011'>2011</option>
          <option value='2010'>2010</option>
          <option value='2010'>2009</option>
          <option value='2010'>2008</option>
          <option value='2010'>2007</option>
        </Select>
        <label>Locación</label>
        <Select onChange={onChangeLocation} name='location' value={location}>
          <option value='--'>Todas las locaciones</option>
          <option value='aguascalientes'>Aguascalientes</option>
          <option value='bogotá'>Bogotá</option>
          <option value='cali'>Cali</option>
          <option value='cancún'>Cancún</option>
          <option value='ciudad de méxico'>Ciudad de México</option>
          <option value='estado de méxico'>Estado de México</option>
          <option value='guadalajara'>Guadalajara</option>
          <option value='medellin'>Medellín</option>
          <option value='monterrey'>Monterrey</option>
          <option value='querétaro'>Querétaro</option>
          <option value='san luis potosí'>San Luis Potosí</option>
          <option value='tijuana'>Tijuana</option>
        </Select>
        <label>Superficie</label>
        {/* <StyledSlider
          className='horizontal-slider'
          thumbClassName='thumb'
          trackClassName='track'
          max={33000}
          defaultValue={[0, 33000]}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={state => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10000}
        /> */}
        <StyledSlider />
        <label>Categoría</label>
        <Select onChange={onChangeCategory} name='category' value={category}>
          <option value='all'>Todas las categorías</option>
          <option value='destacados'>Destacados</option>
          <option value='abogados'>Abogados</option>
          <option value='agricultura'>Agricultura</option>
          <option value='alimentos'>Alimentos</option>
          <option value='automotriz'>Automotriz</option>
          <option value='banco'>Banco</option>
          <option value='bebidas alcohólicas'>Bebidas Alcohólicas</option>
          <option value='bienes-cotidianos'>Bienes Cotidianos</option>
          <option value='bienes-de-consumo'>Bienes de Consumo</option>
          <option value='bienes-de-produccion'>Bienes de Producción</option>
          <option value='cine'>Cine</option>
          <option value='construccion'>Construcción</option>
          <option value='consultoria'>Consultoria</option>
          <option value='coworking'>Coworking</option>
          <option value='deporte'>Deporte</option>
          <option value='educacion'>Educación</option>
          <option value='electrónico'>Electrónico</option>
          <option value='energía'>Energía</option>
          <option value='entretenimiento'>Entretenimiento</option>
          <option value='farmaceutico'>Farmaceutico</option>
          <option value='financiero'>Financiero</option>
          <option value='gobierno'>Gobierno</option>
          <option value='hospitalidad'>Hospitalidad</option>
          <option value='inversion'>Inversion</option>
          <option value='internet'>Internet</option>
          <option value='logistica'>Logistica</option>
          <option value='medico'>Médico</option>
          <option value='petroleo-y-gas'>Petróleo y gas</option>
          <option value='publicidad-y-medios'>Publicidad y medios</option>
          <option value='quimicos'>Químicos</option>
          <option value='residencial'>Residencial</option>
          <option value='restaurante'>Restaurante</option>
          <option value='retail'>Retail</option>
          <option value='rrhh'>RRHH</option>
          <option value='salud'>Salud</option>
          <option value='seguros'>Seguros</option>
          <option value='servicios-extranjeros'>Servicios Extranjeros</option>
          <option value='servicios-profesionales'>Servicios Profesionales</option>
          <option value='software'>Software</option>
          <option value='tecnologia'>Tecnología</option>
          <option value='televisión'>Televisión</option>
          <option value='textil'>Textil</option>
          <option value='telecomunicaciones'>Telecomunicaciones</option>
          <option value='transporte'>Transporte</option>
          <option value='retail'>Retail</option>
        </Select>
      </Form>
    </div>
  )
}
