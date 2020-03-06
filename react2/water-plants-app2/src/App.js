import React, { useState, Fragment } from 'react'
import AddPlantForm from './forms/AddPlantForm'
import EditPlantForm from './forms/EditPlantForm'
import PlantTable from './tables/PlantTable'

const App = () => {
	
	const plantsData = [
		{ id: 1, name: 'Spike', species: 'Cactus', h20_freq: '120ml weekly' },
		{ id: 2, name: 'Suzy', species: 'Succulent', h20_freq: '80ml biweekly'},
		{ id: 3, name: 'Vincent', species: 'Venus Fly Trap', h20_freq: '100ml every other day' },
	]

	const initialFormState = { id: null, name: '', species: '', h20_freq: ''}


	const [ plants, setPlants ] = useState(plantsData)
	const [ currentPlant, setCurrentPlant] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)


	const addPlant = plant => {
		plant.id = plants.length + 1
		setPlants([ ...plants, plant ])
	}

	const deletePlant = id => {
		setEditing(false)

		setPlants(plants.filter(plant => plant.id !== id))
	}

	const updatePlant= (id, updatedPlant) => {
		setEditing(false)

		setPlants(plants.map(plant => (plant.id === id ? updatedPlant : plant)))
	}

	const editRow = plant => {
		setEditing(true)

		setCurrentPlant({ id: plant.id, name: plant.name, species: plant.species, h20_freq: plant.h20_freq })
	}

	return (
		<div className="container">
			<h1>Water My Plants</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Plant</h2>
							<EditPlantForm
								editing={editing}
								setEditing={setEditing}
								currentPlant={currentPlant}
								updatePlant={updatePlant}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Plants</h2>
							<AddPlantForm addPlant={addPlant} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Plants</h2>
					<PlantTable plants={plants} editRow={editRow} deletePlant={deletePlant} />
				</div>
			</div>
		</div>
	)
}

export default App
