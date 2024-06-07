import { useState } from 'react';
import { Shop } from './types'; // Adjust the path as needed

export const useShopData = () => {
  const [shopData] = useState<Shop>({
    monsters: [
      { id: 2, name: 'Vadamagma', category: 'starterMonsters', level: 1, gold: 0, goldPerSecond: 6, price: 100, sprites: ['/sprites/vadamagma_egg.png', '/sprites/vadamagma_baby.png', '/sprites/vadamagma_teen.png', '/sprites/vadamagma_adult.png'], feedingProgress: 0 },
      { id: 3, name: 'Rockantium', category: 'starterMonsters', level: 1, gold: 0, goldPerSecond: 6, price: 200, sprites: ['/sprites/rockantium_egg.png', '/sprites/rockantium_baby.png', '/sprites/rockantium_teen.png', '/sprites/rockantium_adult.png'], feedingProgress: 0 },
      { id: 4, name: 'Thorder', category: 'starterMonsters', level: 1, gold: 0, goldPerSecond: 6, price: 300, sprites: ['/sprites/thorder_egg.png', '/sprites/thorder_baby.png', '/sprites/thorder_teen.png', '/sprites/thorder_adult.png'], feedingProgress: 0 },
      { id: 6, name: 'Lord Of Atlantis', category: 'starterMonsters', level: 1, gold: 0, goldPerSecond: 6, price: 500, sprites: ['/sprites/lord_of_atlantis_egg.png', '/sprites/lord_of_atlantis_baby.png', '/sprites/lord_of_atlantis_teen.png', '/sprites/lord_of_atlantis_adult.png'], feedingProgress: 0 },
      { id: 7, name: 'Darkzgul', category: 'starterMonsters', level: 1, gold: 0, goldPerSecond: 6, price: 600, sprites: ['/sprites/darkzgul_egg.png', '/sprites/darkzgul_baby.png', '/sprites/darkzgul_teen.png', '/sprites/darkzgul_adult.png'], feedingProgress: 0 },
      { id: 8, name: 'Goldfield', category: 'starterMonsters', level: 1, gold: 0, goldPerSecond: 6, price: 700, sprites: ['/sprites/goldfield_egg.png', '/sprites/goldfield_baby.png', '/sprites/goldfield_teen.png', '/sprites/goldfield_adult.png'], feedingProgress: 0 },
      { id: 9, name: 'Arch Knight', category: 'starterMonsters', level: 1, gold: 0, goldPerSecond: 6, price: 800, sprites: ['/sprites/arch_knight_egg.png', '/sprites/arch_knight_baby.png', '/sprites/arch_knight_teen.png', '/sprites/arch_knight_adult.png'], feedingProgress: 0 },
    ],
    habitats: [], 
    RouletteMonsters: [ 
      { id: 10, name: 'White Walker', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/white_walker_egg.png', '/sprites/white_walker_baby.png', '/sprites/white_walker_teen.png', '/sprites/white_walker_adult.png'], feedingProgress: 0 },
      { id: 11, name: 'Nebotus', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/nebotus_egg.png', '/sprites/nebotus_baby.png', '/sprites/nebotus_teen.png', '/sprites/nebotus_adult.png'], feedingProgress: 0 },
      { id: 12, name: 'Worker Hulk', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/worker_hulk_egg.png', '/sprites/worker_hulk_baby.png', '/sprites/worker_hulk_teen.png', '/sprites/worker_hulk_adult.png'], feedingProgress: 0 },
      { id: 13, name: 'Firelequin', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/firelequin_egg.png', '/sprites/firelequin_baby.png', '/sprites/firelequin_teen.png', '/sprites/firelequin_adult.png'], feedingProgress: 0 },
      { id: 14, name: 'Uriel', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/uriel_egg.png', '/sprites/uriel_baby.png', '/sprites/uriel_teen.png', '/sprites/uriel_adult.png'], feedingProgress: 0 },
      { id: 15, name: 'Lord Moltus', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/lord_moltus_egg.png', '/sprites/lord_moltus_baby.png', '/sprites/lord_moltus_teen.png', '/sprites/lord_moltus_adult.png'], feedingProgress: 0 },
      { id: 16, name: 'C.Y.M.O', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/cymo_egg.png', '/sprites/cymo_baby.png', '/sprites/cymo_teen.png', '/sprites/cymo_adult.png'], feedingProgress: 0 },
      { id: 17, name: 'Metalhead', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/metalhead_egg.png', '/sprites/metalhead_baby.png', '/sprites/metalhead_teen.png', '/sprites/metalhead_adult.png'], feedingProgress: 0 },
      { id: 18, name: 'Laomu', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/laomu_egg.png', '/sprites/laomu_baby.png', '/sprites/laomu_teen.png', '/sprites/laomu_adult.png'], feedingProgress: 0 },
      { id: 19, name: 'Draza', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/draza_egg.png', '/sprites/draza_baby.png', '/sprites/draza_teen.png', '/sprites/draza_adult.png'], feedingProgress: 0 },
      { id: 20, name: 'Varuna', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/varuna_egg.png', '/sprites/varuna_baby.png', '/sprites/varuna_teen.png', '/sprites/varuna_adult.png'], feedingProgress: 0 },
      { id: 21, name: 'The Firestorm', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/the_firestorm_egg.png', '/sprites/the_firestorm_baby.png', '/sprites/the_firestorm_teen.png', '/sprites/the_firestorm_adult.png'], feedingProgress: 0 },
      { id: 22, name: 'Ultrabot', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/ultrabot_egg.png', '/sprites/ultrabot_baby.png', '/sprites/ultrabot_teen.png', '/sprites/ultrabot_adult.png'], feedingProgress: 0 },
      { id: 23, name: 'Pixelion', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/pixelion_egg.png', '/sprites/pixelion_baby.png', '/sprites/pixelion_teen.png', '/sprites/pixelion_adult.png'], feedingProgress: 0 },
      { id: 24, name: 'Dr. Hazard', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/dr_hazard_egg.png', '/sprites/dr_hazard_baby.png', '/sprites/dr_hazard_teen.png', '/sprites/dr_hazard_adult.png'], feedingProgress: 0 },
      { id: 25, name: 'Cyan Nathura', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/cyan_nathura_egg.png', '/sprites/cyan_nathura_baby.png', '/sprites/cyan_nathura_teen.png', '/sprites/cyan_nathura_adult.png'], feedingProgress: 0 },
      { id: 26, name: 'MMOMonster', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/mmomonster_egg.png', '/sprites/mmomonster_baby.png', '/sprites/mmomonster_teen.png', '/sprites/mmomonster_adult.png'], feedingProgress: 0 },
      { id: 27, name: 'Killeraptor', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/killeraptor_egg.png', '/sprites/killeraptor_baby.png', '/sprites/killeraptor_teen.png', '/sprites/killeraptor_adult.png'], feedingProgress: 0 },
      { id: 28, name: 'Reptie', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/reptie_egg.png', '/sprites/reptie_baby.png', '/sprites/reptie_teen.png', '/sprites/reptie_adult.png'], feedingProgress: 0 },
      { id: 29, name: 'Master Skeel', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/master_skeel_egg.png', '/sprites/master_skeel_baby.png', '/sprites/master_skeel_teen.png', '/sprites/master_skeel_adult.png'], feedingProgress: 0 },
      { id: 30, name: 'Exo Skeel', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/exo_skeel_egg.png', '/sprites/exo_skeel_baby.png', '/sprites/exo_skeel_teen.png', '/sprites/exo_skeel_adult.png'], feedingProgress: 0 },
      { id: 31, name: 'Dr. Viktor', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/dr_viktor_egg.png', '/sprites/dr_viktor_baby.png', '/sprites/dr_viktor_teen.png', '/sprites/dr_viktor_adult.png'], feedingProgress: 0 },
      { id: 32, name: 'Gullin', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/gullin_egg.png', '/sprites/gullin_baby.png', '/sprites/gullin_teen.png', '/sprites/gullin_adult.png'], feedingProgress: 0 },
      { id: 33, name: 'Tyros', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/tyros_egg.png', '/sprites/tyros_baby.png', '/sprites/tyros_teen.png', '/sprites/tyros_adult.png'], feedingProgress: 0 },
      { id: 34, name: 'Kulkan', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/kulkan_egg.png', '/sprites/kulkan_baby.png', '/sprites/kulkan_teen.png', '/sprites/kulkan_adult.png'], feedingProgress: 0 },
      { id: 35, name: 'D.A.D Unit', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/dad_unit_egg.png', '/sprites/dad_unit_baby.png', '/sprites/dad_unit_teen.png', '/sprites/dad_unit_adult.png'], feedingProgress: 0 },
      { id: 36, name: 'Octex', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/octex_egg.png', '/sprites/octex_baby.png', '/sprites/octex_teen.png', '/sprites/octex_adult.png'], feedingProgress: 0 },
      { id: 37, name: 'Jabaline', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/jabaline_egg.png', '/sprites/jabaline_baby.png', '/sprites/jabaline_teen.png', '/sprites/jabaline_adult.png'], feedingProgress: 0 },
      { id: 38, name: 'Discobolus', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/discobolus_egg.png', '/sprites/discobolus_baby.png', '/sprites/discobolus_teen.png', '/sprites/discobolus_adult.png'], feedingProgress: 0 },
      { id: 39, name: 'Hayman', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/hayman_egg.png', '/sprites/hayman_baby.png', '/sprites/hayman_teen.png', '/sprites/hayman_adult.png'], feedingProgress: 0 },
      { id: 40, name: 'Monky', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/monky_egg.png', '/sprites/monky_baby.png', '/sprites/monky_teen.png', '/sprites/monky_adult.png'], feedingProgress: 0 },
      { id: 41, name: 'Drekk', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/drekk_egg.png', '/sprites/drekk_baby.png', '/sprites/drekk_teen.png', '/sprites/drekk_adult.png'], feedingProgress: 0 },
      { id: 42, name: 'Monster D.Vice', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/monster_dvice_egg.png', '/sprites/monster_dvice_baby.png', '/sprites/monster_dvice_teen.png', '/sprites/monster_dvice_adult.png'], feedingProgress: 0 },
      { id: 43, name: 'Hercule', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/hercule_egg.png', '/sprites/hercule_baby.png', '/sprites/hercule_teen.png', '/sprites/hercule_adult.png'], feedingProgress: 0 },
      { id: 44, name: 'Chill Bill', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/chill_bill_egg.png', '/sprites/chill_bill_baby.png', '/sprites/chill_bill_teen.png', '/sprites/chill_bill_adult.png'], feedingProgress: 0 },
      { id: 45, name: 'Olafur', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/olafur_egg.png', '/sprites/olafur_baby.png', '/sprites/olafur_teen.png', '/sprites/olafur_adult.png'], feedingProgress: 0 },
      { id: 46, name: 'Leviana', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/leviana_egg.png', '/sprites/leviana_baby.png', '/sprites/leviana_teen.png', '/sprites/leviana_adult.png'], feedingProgress: 0 },
      { id: 47, name: 'Brynhilda', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/brynhilda_egg.png', '/sprites/brynhilda_baby.png', '/sprites/brynhilda_teen.png', '/sprites/brynhilda_adult.png'], feedingProgress: 0 },
      { id: 48, name: 'Sylvannis', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/sylvannis_egg.png', '/sprites/sylvannis_baby.png', '/sprites/sylvannis_teen.png', '/sprites/sylvannis_adult.png'], feedingProgress: 0 },
      { id: 49, name: 'Ahran', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/ahran_egg.png', '/sprites/ahran_baby.png', '/sprites/ahran_teen.png', '/sprites/ahran_adult.png'], feedingProgress: 0 },
      { id: 50, name: 'Pinky Flash', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/pinky_flash_egg.png', '/sprites/pinky_flash_baby.png', '/sprites/pinky_flash_teen.png', '/sprites/pinky_flash_adult.png'], feedingProgress: 0 },
      { id: 51, name: 'Vanitus', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/vanitus_egg.png', '/sprites/vanitus_baby.png', '/sprites/vanitus_teen.png', '/sprites/vanitus_adult.png'], feedingProgress: 0 },
      { id: 52, name: 'Baltasar', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/baltasar_egg.png', '/sprites/baltasar_baby.png', '/sprites/baltasar_teen.png', '/sprites/baltasar_adult.png'], feedingProgress: 0 },
      { id: 53, name: 'Gangsterosaurus', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/gangsterosaurus_egg.png', '/sprites/gangsterosaurus_baby.png', '/sprites/gangsterosaurus_teen.png', '/sprites/gangsterosaurus_adult.png'], feedingProgress: 0 },
      { id: 54, name: 'Avarita', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/avarita_egg.png', '/sprites/avarita_baby.png', '/sprites/avarita_teen.png', '/sprites/avarita_adult.png'], feedingProgress: 0 },
      { id: 55, name: 'Jakugan', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/jakugan_egg.png', '/sprites/jakugan_baby.png', '/sprites/jakugan_teen.png', '/sprites/jakugan_adult.png'], feedingProgress: 0 },
      { id: 56, name: 'Fightreer', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/fightreer_egg.png', '/sprites/fightreer_baby.png', '/sprites/fightreer_teen.png', '/sprites/fightreer_adult.png'], feedingProgress: 0 },
      { id: 57, name: 'Watinhart', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/watinhart_egg.png', '/sprites/watinhart_baby.png', '/sprites/watinhart_teen.png', '/sprites/watinhart_adult.png'], feedingProgress: 0 },
      { id: 58, name: 'Kiridar', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/kiridar_egg.png', '/sprites/kiridar_baby.png', '/sprites/kiridar_teen.png', '/sprites/kiridar_adult.png'], feedingProgress: 0 },
      { id: 59, name: 'Globrush', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/globrush_egg.png', '/sprites/globrush_baby.png', '/sprites/globrush_teen.png', '/sprites/globrush_adult.png'], feedingProgress: 0 },
      { id: 60, name: 'Himass', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/himass_egg.png', '/sprites/himass_baby.png', '/sprites/himass_teen.png', '/sprites/himass_adult.png'], feedingProgress: 0 },
      { id: 61, name: 'Bo Tai', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/bo_tai_egg.png', '/sprites/bo_tai_baby.png', '/sprites/bo_tai_teen.png', '/sprites/bo_tai_adult.png'], feedingProgress: 0 },
      { id: 62, name: 'Famperium', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/famperium_egg.png', '/sprites/famperium_baby.png', '/sprites/famperium_teen.png', '/sprites/famperium_adult.png'], feedingProgress: 0 },
      { id: 63, name: 'Thyra', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/thyra_egg.png', '/sprites/thyra_baby.png', '/sprites/thyra_teen.png', '/sprites/thyra_adult.png'], feedingProgress: 0 },
      { id: 64, name: 'Vodyanoy', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/vodyanoy_egg.png', '/sprites/vodyanoy_baby.png', '/sprites/vodyanoy_teen.png', '/sprites/vodyanoy_adult.png'], feedingProgress: 0 },
      { id: 65, name: 'Crissandre', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/crissandre_egg.png', '/sprites/crissandre_baby.png', '/sprites/crissandre_teen.png', '/sprites/crissandre_adult.png'], feedingProgress: 0 },
      { id: 66, name: 'Tulekahju', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/tulekahju_egg.png', '/sprites/tulekahju_baby.png', '/sprites/tulekahju_teen.png', '/sprites/tulekahju_adult.png'], feedingProgress: 0 },
      { id: 67, name: 'Ukuduma', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/ukuduma_egg.png', '/sprites/ukuduma_baby.png', '/sprites/ukuduma_teen.png', '/sprites/ukuduma_adult.png'], feedingProgress: 0 },
      { id: 68, name: 'Petro Loa', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/petro_loa_egg.png', '/sprites/petro_loa_baby.png', '/sprites/petro_loa_teen.png', '/sprites/petro_loa_adult.png'], feedingProgress: 0 },
      { id: 69, name: 'Sparking Mantis', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/sparking_mantis_egg.png', '/sprites/sparking_mantis_baby.png', '/sprites/sparking_mantis_teen.png', '/sprites/sparking_mantis_adult.png'], feedingProgress: 0 },
      { id: 70, name: 'Gaia Nova', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/gaia_nova_egg.png', '/sprites/gaia_nova_baby.png', '/sprites/gaia_nova_teen.png', '/sprites/gaia_nova_adult.png'], feedingProgress: 0 },
      { id: 71, name: 'Living Forest', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/living_forest_egg.png', '/sprites/living_forest_baby.png', '/sprites/living_forest_teen.png', '/sprites/living_forest_adult.png'], feedingProgress: 0 },
      { id: 72, name: 'Teskita', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/teskita_egg.png', '/sprites/teskita_baby.png', '/sprites/teskita_teen.png', '/sprites/teskita_adult.png'], feedingProgress: 0 },
      { id: 73, name: 'Voytek', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/voytek_egg.png', '/sprites/voytek_baby.png', '/sprites/voytek_teen.png', '/sprites/voytek_adult.png'], feedingProgress: 0 },
      { id: 74, name: 'Quixote', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/quixote_egg.png', '/sprites/quixote_baby.png', '/sprites/quixote_teen.png', '/sprites/quixote_adult.png'], feedingProgress: 0 },
      { id: 75, name: 'Rabooka', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/rabooka_egg.png', '/sprites/rabooka_baby.png', '/sprites/rabooka_teen.png', '/sprites/rabooka_adult.png'], feedingProgress: 0 },
      { id: 76, name: 'Viperhotep', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/viperhotep_egg.png', '/sprites/viperhotep_baby.png', '/sprites/viperhotep_teen.png', '/sprites/viperhotep_adult.png'], feedingProgress: 0 },
      { id: 77, name: 'Bandses', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/bandses_egg.png', '/sprites/bandses_baby.png', '/sprites/bandses_teen.png', '/sprites/bandses_adult.png'], feedingProgress: 0 },
      { id: 78, name: 'Scaraborg', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/scaraborg_egg.png', '/sprites/scaraborg_baby.png', '/sprites/scaraborg_teen.png', '/sprites/scaraborg_adult.png'], feedingProgress: 0 },
      { id: 79, name: 'Firca', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/firca_egg.png', '/sprites/firca_baby.png', '/sprites/firca_teen.png', '/sprites/firca_adult.png'], feedingProgress: 0 },
      { id: 80, name: 'Francine Frank', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/francine_frank_egg.png', '/sprites/francine_frank_baby.png', '/sprites/francine_frank_teen.png', '/sprites/francine_frank_adult.png'], feedingProgress: 0 },
      { id: 81, name: 'Kozorg', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/kozorg_egg.png', '/sprites/kozorg_baby.png', '/sprites/kozorg_teen.png', '/sprites/kozorg_adult.png'], feedingProgress: 0 },
      { id: 82, name: 'Saulout', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/saulout_egg.png', '/sprites/saulout_baby.png', '/sprites/saulout_teen.png', '/sprites/saulout_adult.png'], feedingProgress: 0 },
      { id: 83, name: 'Frosilka', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/frosilka_egg.png', '/sprites/frosilka_baby.png', '/sprites/frosilka_teen.png', '/sprites/frosilka_adult.png'], feedingProgress: 0 },
      { id: 84, name: 'Eeltron', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/eeltron_egg.png', '/sprites/eeltron_baby.png', '/sprites/eeltron_teen.png', '/sprites/eeltron_adult.png'], feedingProgress: 0 },
      { id: 85, name: 'Shademoon', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/shademoon_egg.png', '/sprites/shademoon_baby.png', '/sprites/shademoon_teen.png', '/sprites/shademoon_adult.png'], feedingProgress: 0 },
      { id: 86, name: 'Makugan', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/makugan_egg.png', '/sprites/makugan_baby.png', '/sprites/makugan_teen.png', '/sprites/makugan_adult.png'], feedingProgress: 0 },
      { id: 87, name: 'Zameleon', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/zameleon_egg.png', '/sprites/zameleon_baby.png', '/sprites/zameleon_teen.png', '/sprites/zameleon_adult.png'], feedingProgress: 0 },
      { id: 88, name: 'Grumpex', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/grumpex_egg.png', '/sprites/grumpex_baby.png', '/sprites/grumpex_teen.png', '/sprites/grumpex_adult.png'], feedingProgress: 0 },
      { id: 89, name: 'Sunblast', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/sunblast_egg.png', '/sprites/sunblast_baby.png', '/sprites/sunblast_teen.png', '/sprites/sunblast_adult.png'], feedingProgress: 0 },
      { id: 90, name: 'Yimburbur', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/yimburbur_egg.png', '/sprites/yimburbur_baby.png', '/sprites/yimburbur_teen.png', '/sprites/yimburbur_adult.png'], feedingProgress: 0 },
      { id: 91, name: 'Wangzhou', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/wangzhou_egg.png', '/sprites/wangzhou_baby.png', '/sprites/wangzhou_teen.png', '/sprites/wangzhou_adult.png'], feedingProgress: 0 },
      { id: 92, name: 'Qinling', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/qinling_egg.png', '/sprites/qinling_baby.png', '/sprites/qinling_teen.png', '/sprites/qinling_adult.png'], feedingProgress: 0 },
      { id: 93, name: 'Olnir', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/olnir_egg.png', '/sprites/olnir_baby.png', '/sprites/olnir_teen.png', '/sprites/olnir_adult.png'], feedingProgress: 0 },
      { id: 94, name: 'Helgudin', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/helgudin_egg.png', '/sprites/helgudin_baby.png', '/sprites/helgudin_teen.png', '/sprites/helgudin_adult.png'], feedingProgress: 0 },
      { id: 95, name: 'Saika', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/saika_egg.png', '/sprites/saika_baby.png', '/sprites/saika_teen.png', '/sprites/saika_adult.png'], feedingProgress: 0 },
      { id: 96, name: 'Gorg', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/gorg_egg.png', '/sprites/gorg_baby.png', '/sprites/gorg_teen.png', '/sprites/gorg_adult.png'], feedingProgress: 0 },
      { id: 97, name: 'Hobkin', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/hobkin_egg.png', '/sprites/hobkin_baby.png', '/sprites/hobkin_teen.png', '/sprites/hobkin_adult.png'], feedingProgress: 0 },
      { id: 98, name: 'Nabuline', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/nabuline_egg.png', '/sprites/nabuline_baby.png', '/sprites/nabuline_teen.png', '/sprites/nabuline_adult.png'], feedingProgress: 0 },
      { id: 99, name: 'Wasper', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/wasper_egg.png', '/sprites/wasper_baby.png', '/sprites/wasper_teen.png', '/sprites/wasper_adult.png'], feedingProgress: 0 },
      { id: 100, name: 'Pierceid', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/pierceid_egg.png', '/sprites/pierceid_baby.png', '/sprites/pierceid_teen.png', '/sprites/pierceid_adult.png'], feedingProgress: 0 },
      { id: 101, name: 'Mirak', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/mirak_egg.png', '/sprites/mirak_baby.png', '/sprites/mirak_teen.png', '/sprites/mirak_adult.png'], feedingProgress: 0 },
      { id: 102, name: 'Dr. Marihelson', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/dr_marihelson_egg.png', '/sprites/dr_marihelson_baby.png', '/sprites/dr_marihelson_teen.png', '/sprites/dr_marihelson_adult.png'], feedingProgress: 0 },
      { id: 103, name: 'Narok', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/narok_egg.png', '/sprites/narok_baby.png', '/sprites/narok_teen.png', '/sprites/narok_adult.png'], feedingProgress: 0 },
      { id: 104, name: 'Zizania', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/zizania_egg.png', '/sprites/zizania_baby.png', '/sprites/zizania_teen.png', '/sprites/zizania_adult.png'], feedingProgress: 0 },
      { id: 105, name: 'Silverleaf', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/silverleaf_egg.png', '/sprites/silverleaf_baby.png', '/sprites/silverleaf_teen.png', '/sprites/silverleaf_adult.png'], feedingProgress: 0 },
      { id: 106, name: 'Zorgon', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/zorgon_egg.png', '/sprites/zorgon_baby.png', '/sprites/zorgon_teen.png', '/sprites/zorgon_adult.png'], feedingProgress: 0 },
      { id: 107, name: 'Lighterium', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/lighterium_egg.png', '/sprites/lighterium_baby.png', '/sprites/lighterium_teen.png', '/sprites/lighterium_adult.png'], feedingProgress: 0 },
      { id: 108, name: 'Gurlik', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/gurlik_egg.png', '/sprites/gurlik_baby.png', '/sprites/gurlik_teen.png', '/sprites/gurlik_adult.png'], feedingProgress: 0 },
      { id: 109, name: 'Kronx', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/kronx_egg.png', '/sprites/kronx_baby.png', '/sprites/kronx_teen.png', '/sprites/kronx_adult.png'], feedingProgress: 0 },
      { id: 110, name: 'Gualgui', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/gualgui_egg.png', '/sprites/gualgui_baby.png', '/sprites/gualgui_teen.png', '/sprites/gualgui_adult.png'], feedingProgress: 0 },
      { id: 111, name: 'Nikasia', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/nikasia_egg.png', '/sprites/nikasia_baby.png', '/sprites/nikasia_teen.png', '/sprites/nikasia_adult.png'], feedingProgress: 0 },
      { id: 112, name: 'Rociuko', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/rociuko_egg.png', '/sprites/rociuko_baby.png', '/sprites/rociuko_teen.png', '/sprites/rociuko_adult.png'], feedingProgress: 0 },
      { id: 113, name: 'Yedra', category: 'Common', level: 1, gold: 0, goldPerSecond: 9, hasBought: false, sprites: ['/sprites/yedra_egg.png', '/sprites/yedra_baby.png', '/sprites/yedra_teen.png', '/sprites/yedra_adult.png'], feedingProgress: 0 }
    ],
  });

  return shopData;
};
