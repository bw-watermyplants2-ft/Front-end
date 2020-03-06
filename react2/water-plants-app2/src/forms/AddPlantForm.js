import React, { useState } from 'react'

const AddPlantForm = props => {
	const initialFormState = { id: null, name: '', species: '', h20_freq: ''}
	const [ plant, setPlant ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setPlant({ ...plant, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!plant.name || !plant.species || !plant.h20_freq) return

				props.addPlant(plant)
				setPlant(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={plant.name} onChange={handleInputChange} />
			<label>Species</label>
			<input type="text" name="species" value={plant.species} onChange={handleInputChange} />
			<label>h20 Frequency</label>
      <input type="text" name="h20_freq" value={plant.h20_freq} onChange={handleInputChange} />
			<button>Add new plant</button>
		</form>
	)
}

export default AddPlantForm
