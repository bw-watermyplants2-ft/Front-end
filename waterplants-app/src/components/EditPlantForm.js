import React, { useState, useEffect } from 'react'

const EditPlantForm = props => {
  const [ plant, setPlant ] = useState(props.currentPlant)

  useEffect(
    () => {
      setPlant(props.currentPlant)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setPlant({ ...plant, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updatePlant(plant.id, plant)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={plant.name} onChange={handleInputChange} />
      <label>Species</label>
      <input type="text" name="species" value={plant.species} onChange={handleInputChange} />
      <label>h20 Frequency</label>
      <input type="text" name="h20_freq" value={plant.h20_freq} onChange={handleInputChange} />
      <button>Update plant</button>
      
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditPlantForm
