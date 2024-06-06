import React, { useState, useEffect } from 'react';
import Monsters from './components/Monsters';
import Habitats from './components/Habitats';
import ShopModal from './components/ShopModal';
import { Habitat, Monster, Shop as ShopType } from './types';
import '../src/css/App.css';
import '../src/css/Monsters.css';
import '../src/css/Habitats.css';
const maxCapacities = [400000, 600000, 800000, 1000000]; 

function App() {
  const [gold, setGold] = useState<number>(100);
  const [habitats, setHabitats] = useState<Habitat[]>([
    { 
      id: 1, 
      name: 'Legendary Habitat', 
      gold: 0, 
      maxGold: 400000, 
      price: 0, 
      maxMonsters: 3, 
      sprites: ['/sprites/LegendaryHabitat_1.png'], 
      habitatMonsters: [],
      level: 0, 
    },
  ]);
  const [monsters, setMonsters] = useState<Monster[]>([
    { 
      id: 1, 
      name: 'Nemestrinus', 
      level: 1, 
      gold: 0, 
      goldPerSecond: 6, 
      price: 0, 
      sprites: [
        '/sprites/nemestrinus_egg.png', 
        '/sprites/nemestrinus_baby.png', 
        '/sprites/nemestrinus_teen.png', 
        '/sprites/nemestrinus_adult.png'
      ], 
      feedingProgress: 0, 
      habitatId: 1 
    }
  ]);

  //poop

  const [shop] = useState<ShopType>({
    monsters: [
      { id: 2, name: 'Vadamagma', level: 1, gold: 0, goldPerSecond: 6, price: 100, sprites: ['/sprites/vadamagma_egg.png', '/sprites/vadamagma_baby.png', '/sprites/vadamagma_teen.png', '/sprites/vadamagma_adult.png'], feedingProgress: 0 },
      { id: 3, name: 'Rockantium', level: 1, gold: 0, goldPerSecond: 6, price: 200, sprites: ['/sprites/rockantium_egg.png', '/sprites/rockantium_baby.png', '/sprites/rockantium_teen.png', '/sprites/rockantium_adult.png'], feedingProgress: 0 },
      { id: 4, name: 'Thorder', level: 1, gold: 0, goldPerSecond: 6, price: 300, sprites: ['/sprites/thorder_egg.png', '/sprites/thorder_baby.png', '/sprites/thorder_teen.png', '/sprites/thorder_adult.png'], feedingProgress: 0 },
      { id: 6, name: 'Lord Of Atlantis', level: 1, gold: 0, goldPerSecond: 6, price: 500, sprites: ['/sprites/lord_of_atlantis_egg.png', '/sprites/lord_of_atlantis_baby.png', '/sprites/lord_of_atlantis_teen.png', '/sprites/lord_of_atlantis_adult.png'], feedingProgress: 0 },
      { id: 7, name: 'Darkzgul', level: 1, gold: 0, goldPerSecond: 6, price: 600, sprites: ['/sprites/darkzgul_egg.png', '/sprites/darkzgul_baby.png', '/sprites/darkzgul_teen.png', '/sprites/darkzgul_adult.png'], feedingProgress: 0 },
      { id: 8, name: 'Goldfield', level: 1, gold: 0, goldPerSecond: 6, price: 700, sprites: ['/sprites/goldfield_egg.png', '/sprites/goldfield_baby.png', '/sprites/goldfield_teen.png', '/sprites/goldfield_adult.png'], feedingProgress: 0 },
      { id: 9, name: 'Arch Knight', level: 1, gold: 0, goldPerSecond: 6, price: 800, sprites: ['/sprites/arch_knight_egg.png', '/sprites/arch_knight_baby.png', '/sprites/arch_knight_teen.png', '/sprites/arch_knight_adult.png'], feedingProgress: 0 },
    ],
    habitats: [],
  });
  const [currentTab, setCurrentTab] = useState<'Monsters' | 'Habitats'>('Monsters');
  const [showShop, setShowShop] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      generateGold();
    }, 1000);

    return () => clearInterval(interval);
  }, [habitats, monsters]);

  const generateGold = () => {
    setHabitats((prevHabitats) =>
      prevHabitats.map((habitat) => {
        const totalGold = monsters.reduce((acc, monster) => {
          if (monster.habitatId === habitat.id) {
            const monsterGold = monster.goldPerSecond * Math.min(monster.level, 100);
            monster.gold = monsterGold;
            return acc + monsterGold;
          }
          return acc;
        }, 0);
        const newGold = habitat.gold + totalGold;
        return { ...habitat, gold: newGold > habitat.maxGold ? habitat.maxGold : newGold };
      })
    );
  };
  
  const buyMonster = (monster: Monster) => {
    let added = false;
    
    habitats.some((habitat) => {
      if (monsters.filter((m) => m.habitatId === habitat.id).length < habitat.maxMonsters) {
        setMonsters((prevMonsters) => [...prevMonsters, { ...monster, habitatId: habitat.id }]);
        added = true;
        return true; 
      }
      return false; 
    });
  
    if (!added) {
      alert('All habitats are full!');
    }
  };
  

  const collectGold = () => {
    console.log(gold);
    try {
      let totalGold = 0;
      
      setHabitats((prevHabitats) => {
        const newHabitats = prevHabitats.map((habitat) => {
          totalGold += habitat.gold;
          return { ...habitat, gold: 0 };
        });
        return newHabitats;
      });
    
      setGold((prevGold) => prevGold + totalGold);
    } catch (error) {
      console.error("Error collecting gold:", error);
    }
  };
  
  

  const feedMonster = (monsterId: number) => {
    let alertShown = false; 
    
    setMonsters((prevMonsters) => {
      return prevMonsters.map((monster) => {
        const feedingCost = calculateFeedingCost(monster);
        
        if (gold >= feedingCost) {
          if (monster.id === monsterId) {
            const newFeedingProgress = monster.feedingProgress + 1;
            setGold((prevGold) => prevGold - feedingCost);
            
            if (newFeedingProgress >= 4) {
              const newLevel = Math.min(monster.level + 1, 100);
              return { ...monster, level: newLevel, feedingProgress: 0 };
            } else {
              return { ...monster, feedingProgress: newFeedingProgress };
            }
          }
        } else if (!alertShown) { 
          alert('Not enough gold!');
          alertShown = true; 
        }
        
        return monster;
      });
    });
  };
  

  const calculateFeedingCost = (monster: Monster): number => {
    let feedingCost = 10;
  
    feedingCost += monster.level * 5;
  
    return feedingCost;
  };
  
  const getTotalMonsters = () => {
    return habitats.reduce((acc, habitat) => acc + habitat.maxMonsters, 0);
  };

  const upgradeHabitat = (habitatId: number) => {
    const upgradeCosts = [10000000, 25000000, 75000000]; 
    const holdingSizes = [3, 6, 9, 12]; 
  
    const upgradedHabitat = habitats.find((habitat) => habitat.id === habitatId);
  
    if (!upgradedHabitat) {
      alert('Habitat not found');
      return;
    }
  
    const currentLevel = upgradedHabitat.level || 0;
    const nextLevel = currentLevel + 1;
  
    const nextUpgradeCost = upgradeCosts[currentLevel] || 0;
    const nextHoldingSize = holdingSizes[nextLevel] || holdingSizes[currentLevel];
    const nextMaxGold = maxCapacities[nextLevel] || maxCapacities[currentLevel];
  
    if (gold >= nextUpgradeCost) {
      setGold((prevGold) => prevGold - nextUpgradeCost);
      setHabitats((prevHabitats) => {
        return prevHabitats.map((habitat) => {
          if (habitat.id === habitatId) {
            return {
              ...habitat,
              level: nextLevel,
              maxGold: nextMaxGold,
              maxMonsters: nextHoldingSize,
            };
          }
          return habitat;
        });
      });
    } else {
      alert('Not enough gold to upgrade the habitat');
    }
  };
  
  
  const buildLegendaryHabitat = (
    habitats: Habitat[],
    gold: number,
    setHabitats: React.Dispatch<React.SetStateAction<Habitat[]>>
  ) => {
    const buildCost = 2500000;
    if (gold >= buildCost) {
      const newGold = gold - buildCost;
      gold = newGold;
      const newId = habitats.length + 1;
      const newHabitatLevel = 0; 
      const newHabitatMaxGold = maxCapacities[newHabitatLevel] || 0; 
      const newHabitat: Habitat = {
        id: newId,
        name: `Legendary Habitat ${newId}`,
        gold: 0,
        maxGold: newHabitatMaxGold, 
        price: 0,
        maxMonsters: 3,
        sprites: [`/sprites/LegendaryHabitat_${newId}.png`],
        habitatMonsters: [],
        level: newHabitatLevel, 
      };
  
      setHabitats((prevHabitats) => [...prevHabitats, newHabitat]);
    } else {
      alert('Not enough gold to build a new habitat');
    }
  };

  
  return (
    <div className="App">
      <h1>Monster Legends Idle RPG</h1>
      <div className="resources">
        <p>Gold: {gold}</p>
        <button onClick={collectGold}>Collect Gold</button>
        <button onClick={() => setShowShop(true)}>Shop</button>
      </div>
      <div className="tabs">
        <button onClick={() => setCurrentTab('Monsters')}>Monsters</button>
        <button onClick={() => setCurrentTab('Habitats')}>Habitats</button>
      </div>
      {currentTab === 'Monsters' ? (
        <Monsters monsters={monsters} feedMonster={feedMonster} />
      ) : (
      <Habitats
        habitats={habitats}
        upgradeHabitat={upgradeHabitat}
        buildLegendaryHabitat={buildLegendaryHabitat}
        gold={gold}
        setHabitats={setHabitats}
      />
      )}
      <ShopModal
        show={showShop}
        setShow={setShowShop}
        monsters={shop.monsters}
        buyMonster={buyMonster}
        gold={gold}
        capacity={getTotalMonsters()}
        size={monsters.length}
      />
    </div>
  );
}

export default App;