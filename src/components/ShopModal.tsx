import React, { useState } from 'react';
import '../css/ShopModal.css';
import { Monster } from '../types';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  monsters: Monster[];
  buyMonster: (monster: Monster) => void;
  gold: number;
  capacity: number; // Add capacity prop
  size: number; // Add size prop
}

function ShopModal({ show, setShow, monsters, buyMonster, gold, capacity, size }: Props) {
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);

  const handleBuy = (monster: Monster) => {
    const enoughMoney = gold >= monster.price;
    const enoughSpace = size < capacity;

    if (!enoughMoney) {
      alert('Not enough gold');
      return;
    }

    if (!enoughSpace) {
      alert('Not enough space in habitat!');
      return;
    }

    // If both conditions are met, buy the monster
    buyMonster(monster);
    setFilteredMonsters(filteredMonsters.filter((m) => m.id !== monster.id));
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-overlay" onClick={() => setShow(false)}></div>
      <div className="modal-container">
        <div className="modal-content">
          <span className="close" onClick={() => setShow(false)}>
            &times;
          </span>
          <h2>Shop</h2>
          <div className="monsters-list">
            {filteredMonsters.map((monster) => (
              <div key={monster.id} className="monster">
                <h3>{monster.name}</h3>
                <img src={monster.sprites[0]} alt={monster.name} />
                <p>Price: {monster.price}</p>
                <p>Gold Production: {monster.goldPerSecond}</p>
                <button onClick={() => handleBuy(monster)}>Buy</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopModal;
