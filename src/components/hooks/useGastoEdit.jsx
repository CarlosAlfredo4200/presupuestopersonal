import React, { useState} from 'react'

export const useGastoEdit = () => {
    const [gastoEdit, setGastoEdit] = useState({});

  return  {
    gastoEdit, setGastoEdit
  }
}
