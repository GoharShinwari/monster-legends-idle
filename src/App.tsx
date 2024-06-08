import React, { useState, useEffect } from 'react';
import Monsters from './components/Monsters';
import Habitats from './components/Habitats';
import ShopModal from './components/ShopModal';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import LandingPage from './components/LandingPage';
import { useShopData } from './shopData';
import { Habitat, Monster, Shop } from './types'; // Assuming the correct types are Habitat, Monster, and Shop
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const maxCapacities = [400000, 600000, 800000, 1000000];  

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id",
  measurementId: "your_measurement_id"
}; 

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [user, setUser] = useState<any>(null); // Use 'any' temporarily, you should replace it with the correct user type
  const [gold, setGold] = useState<number>(100);
  const [gems, setGems] = useState<number>(0);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const app: FirebaseApp = initializeApp(firebaseConfig);
    setFirebaseInitialized(true);
    return () => {
      // Cleanup function if needed
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        loadGameData(user.uid);
      } else {
        setUser(null);
      }
    });
  }, [auth]);

  const handleLoginSuccess = () => {
    setShowForms(false);
    saveGameData();
  };

  const loadGameData = async (userId: string) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setGold(data.gold || 100);
        setGems(data.gems || 0);
        setHabitats(data.habitats || []);
        setMonsters(data.monsters || []);
      }
    } catch (error) {
      console.error('Error loading game data:', error);
    }
  };
  
  const saveGameData = async () => {
    try {
      if (user) {
        const userData = {
          gold,
          gems,
          habitats,
          monsters,
        };
        await setDoc(doc(db, 'users', user.uid), userData);
      }
    } catch (error) {
      console.error('Error saving game data:', error);
    }
  };

  const [showForms, setShowForms] = useState<boolean>(true);
  const shop = useShopData();
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
  const [monsters, setMonsters] = useState<Monster[]>([ // Assuming Monster is the correct type
    { 
      id: 1, 
      name: 'Nemestrinus', 
      category: 'category',
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
  
  
  const buildLegendaryHabitat = (
    habitats: Habitat[],
    gold: number,
    setHabitats: React.Dispatch<React.SetStateAction<Habitat[]>>,
    setGold: React.Dispatch<React.SetStateAction<number>>
  ) => {
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
