import React, { useState } from 'react'

export const useFiltros = () => {

    const [filtro, setFiltro] = useState('');
  return  { filtro, setFiltro}
}
