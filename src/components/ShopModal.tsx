import React, { useState, useEffect } from 'react';
import '../css/ShopModal.css';
import { Monster } from '../types';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  monsters: Monster[];
  buyMonster: (monster: Monster) => void;
  gold: number;
  capacity: number; 
  size: number;
}

function ShopModal({ show, setShow, monsters, buyMonster, gold, capacity, size }: Props) {
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);
  const [category, setCategory] = useState<string>('Common');

  useEffect(() => {
    filterMonsters(category);
  }, [category, monsters]);

  const filterMonsters = (category: string) => {
    const filtered = monsters.filter(monster => monster.category === category);
    setFilteredMonsters(filtered);
  };

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
          <div className="category-buttons">
            <button onClick={() => setCategory('Event')}>Event</button>
            <button onClick={() => setCategory('Common')}>Common</button>
            <button onClick={() => setCategory('Rare')}>Rare</button>
            <button onClick={() => setCategory('Epic')}>Epic</button>
            <button onClick={() => setCategory('Legendary')}>Legendary</button>
            <button onClick={() => setCategory('VIP')}>VIP</button>
            <button onClick={() => setCategory('Nemesis')}>Nemesis</button>
            <button onClick={() => setCategory('War')}>War</button>
            <button onClick={() => setCategory('Roulette')}>Roulette</button>
          </div>
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
