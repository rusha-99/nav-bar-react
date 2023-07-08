import React, { useState } from 'react'

export const Hook = () => {
  const [name, setName] = useState('Tharusha')
  const [age, setAge] = useState('14')

  const [person, setPerson] = useState({
    name: 'Tharusha',
    age: 12,
  })

  const updatePerson =()=>{
    setPerson({...person,name:"Pulinda"})
    //setPerson({ ...person, age: 15 });
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={() => setName('Pathirana')}>Click</button>
      <h1>{person.name}</h1>
      <button onClick={updatePerson}>Click</button>
    </div>
  )
}

export default Hook
