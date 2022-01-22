import  { useState } from 'react';

export default function useForm(inicialState={}) {


    const [value, setvalue] = useState(inicialState);

    const reset = () => {
      setvalue( inicialState);
  }


    const handleInputChange = ({ target }) => {
      setvalue({
          ...value,
          [target.name]: target.value
      })
  }

  return [
    value,
    handleInputChange,
    reset
  ]
}
