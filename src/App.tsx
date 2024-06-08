import { useState, useEffect } from 'react';
import Monsters from './components/Monsters';
import Habitats from './components/Habitats';
import ShopModal from './components/ShopModal';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import LandingPage from './components/LandingPage';
import { useShopData } from './shopData';
import { Habitat, Monster } from './types';
import { auth, db } from '../firebase'; 
import { onAuthStateChanged, User } from 'firebase/auth';
import { ref, onValue, set } from 'firebase/database';
import './css/App.css';
import './css/Habitats.css';
import './css/Monsters.css';
import './css/ShopModal.css';
const maxCapacities = [400000, 600000, 800000, 1000000];

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [gold, setGold] = useState<number>(100);
  const [gems, setGems] = useState<number>(0);
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [habitats, setHabitats] = useState<Habitat[]>([]);
  const [showForms, setShowForms] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<'Monsters' | 'Habitats'>('Monsters');
  const [showShop, setShowShop] = useState<boolean>(false);
  const shop = useShopData();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        loadGameData(user.uid);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadGameData = async (userId: string) => {
    const userRef = ref(db, `users/${userId}`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setGold(data.gold || 100);
        setGems(data.gems || 0);
        setHabitats(data.habitats || []);
        setMonsters(data.monsters || []);
      }
    });

    const localGameData = localStorage.getItem('gameData');
    if (localGameData) {
      const { gold: localGold, monsters: localMonsters, habitats: localHabitats } = JSON.parse(localGameData);
      if (localGold) setGold(localGold);
      if (localMonsters) setMonsters(localMonsters);
      if (localHabitats) setHabitats(localHabitats);
    }
  };

  const saveGameData = () => {
    if (user) {
      const userData = {
        gold,
        gems,
        habitats,
        monsters,
      };
      set(ref(db, `users/${user.uid}`), userData);
      localStorage.setItem('gameData', JSON.stringify(userData));
    }
  };

  useEffect(() => {
    saveGameData();
  }, [gold, gems, habitats, monsters]);


  const handleLoginSuccess = () => {
    setShowForms(false);
    saveGameData();
  };

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
    let totalCollectedGold = 0;

    const updatedHabitats = habitats.map(habitat => {
      const habitatGold = habitat.gold;
      totalCollectedGold += habitatGold;
      return { ...habitat, gold: 0 };
    });

    setHabitats(updatedHabitats);
    setGold(prevGold => prevGold + totalCollectedGold);
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

  const getTotalMonsters = (): number => {
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

  const buildLegendaryHabitat = () => {
    const buildCost = 2500000;
    if (gold >= buildCost) {
      const newGold = gold - buildCost;
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

      setGold(newGold);
      setHabitats((prevHabitats) => [...prevHabitats, newHabitat]);
    } else {
      alert('Not enough gold to build a new habitat');
    }
  };

  return (
    <div className="App">
      {showForms ? (
        <>
          <LandingPage />
          <SignUpForm />
          <LoginForm onSuccess={handleLoginSuccess} />
        </>
      ) : (
        <>
          <h1>Monster Legends Idle RPG</h1>
          <div className="resources">
            <p>Gold: {gold}</p>
            <p>Gems: {gems}</p>
            <div>
              <button onClick={collectGold}>Collect Gold</button>
              <button onClick={() => setShowShop(true)}>Shop</button>
            </div>
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
              setGold={setGold}
              setHabitats={setHabitats}
            />
          )}
          <ShopModal
            show={showShop}
            setShow={setShowShop}
            monsters={shop.monsters}
            gold={gold}
            buyMonster={buyMonster}
            capacity={getTotalMonsters()}
            size={monsters.length}
          />
        </>
      )}
    </div>
  );
}

export default App;