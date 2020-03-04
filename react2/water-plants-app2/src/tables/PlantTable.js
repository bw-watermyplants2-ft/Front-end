import React from 'react'

const PlantTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Species</th>
        <th>h20 Frequency</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.plants.length > 0 ? (
        props.plants.map(plant => (
          <tr key={plant.id}>
            <td>{plant.name}</td>
            <td>{plant.species}</td>
            <td>{plant.h20_freq}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(plant)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deletePlant(plant.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No plants</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default PlantTable
