import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Country:</strong> {item.country}
            </li>
            <li>
              <strong>Matches:</strong> {item.matches}
            </li>
            <li>
              <strong>Runs:</strong> {item.runs}
            </li>
            <li>
              <strong>Wickets:</strong> {item.wickets}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
