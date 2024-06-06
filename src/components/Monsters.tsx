import { Monster } from '../types';
import '../css/Monsters.css';

interface MonstersProps {
  monsters: Monster[];
  feedMonster: (monsterId: number) => void;
}

function Monsters({ monsters, feedMonster }: MonstersProps) {
  const getMonsterSprite = (monster: Monster) => {
    let spriteIndex = 0;

    if (monster.level >= 50) {
      spriteIndex = 3;
    } else if (monster.level >= 25) {
      spriteIndex = 2;
    } else {
      spriteIndex = 1;
    }

    return monster.sprites[spriteIndex];
  };

  const getGoldPerHour = (monster: Monster) => {
    return monster.gold * 60;
  };

  const getProgressBarWidth = (feedingProgress: number) => {
    return (feedingProgress / 4) * 100 + '%';
  };

  return (
    <div className="monsters-container">
      {monsters.map((monster) => (
        <div key={monster.id} className="monster-card">
          <h2 className="monster-name">{monster.name}</h2>
          <p>{`Habitat ${monster.habitatId}`}</p>
          <img className="monster-sprite" src={getMonsterSprite(monster)} alt={`${monster.name} Sprite`} />
          <p className="monster-level">Level: {monster.level}</p>
          <p className="monster-gold">Gold per hour: {getGoldPerHour(monster)}</p>
          <button className="feed-button" onClick={() => feedMonster(monster.id)}>Feed</button>
          <div className="feeding-progress">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: getProgressBarWidth(monster.feedingProgress) }}></div>
            </div>
            <div className="progress-text">{monster.feedingProgress}/4</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Monsters;
