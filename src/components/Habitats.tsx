import React from 'react';
import { Habitat, Monster } from '../types'; 
import '../css/Habitats.css';

interface HabitatsProps {
  habitats: Habitat[];
  upgradeHabitat: (habitatId: number) => void;
  buildLegendaryHabitat: (
    habitats: Habitat[],
    gold: number,
    setHabitats: React.Dispatch<React.SetStateAction<Habitat[]>>,
    setGold: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  gold: number;
  setGold: React.Dispatch<React.SetStateAction<number>>; // Define setGold
  setHabitats: React.Dispatch<React.SetStateAction<Habitat[]>>;
}

function Habitats({ habitats, upgradeHabitat, buildLegendaryHabitat, gold, setHabitats, setGold }: HabitatsProps) {
  return (
    <div className="habitats">
      {habitats.map((habitat) => (
        <div key={habitat.id} className="habitat">
          <h2>{habitat.name}</h2>
          <img src={habitat.sprites[0]} alt={habitat.name} />
          <p>Gold: {habitat.gold}/{habitat.maxGold}</p>
          <div className="monsters">
            {habitat.habitatMonsters.map((monster: Monster) => ( 
              <div key={monster.id} className="monster">
                <h3>{monster.name}</h3>
                <img src={monster.sprites[0]} alt={monster.name} />
                <p>Level: {monster.level}</p>
              </div>
            ))}
          </div>
          <div className="habitat-buttons">
            <button className="upgrade-button" onClick={() => upgradeHabitat(habitat.id)}>Upgrade Habitat</button>
            <button className="build-button" onClick={() => buildLegendaryHabitat(habitats, gold, setHabitats, setGold)}>Build Legendary Habitat</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Habitats;
