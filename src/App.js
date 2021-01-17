import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import players from './components/players'
import './App.css';

const App=()=> {
  const [items, setItems] = useState([])
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
      console.log(players)
      setItems(players)
      setIsLoading(false)
  }, [])

  return (
    <div className="container">
      <Header />
      <Search  />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
