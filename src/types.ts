export interface Monster {
  id: number;
  name: string;
  level: number;
  category: string;
  gold: number;
  goldPerSecond: number;
  price?: number;
  hasBought?: boolean;
  sprites: string[];
  feedingProgress: number;
  habitatId?: number;
}


export interface Habitat {
  habitatMonsters: any[];
  id: number;
  name: string;
  gold: number;
  maxGold: number;
  price: number;
  maxMonsters: number;
  sprites: string[];
  level: number; 
}

export interface Shop {
  monsters: Monster[];
  habitats: Habitat[];
}
