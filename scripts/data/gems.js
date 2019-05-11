DiabloCalc.gemQualities = [
  "Normal",
  "Flawless",
  "Square",
  "Flawless Square",
  "Star",
  "Marquise",
  "Imperial",
  "Flawless Imperial",
  "Royal",
  "Flawless Royal",
];
DiabloCalc.oldGemQualities = [
  0, 0, 0, 1, 2, 2, 2, 3, 4, 4, 4,
  5, 5, 5, 5, 6, 7, 8, 9,
];
DiabloCalc.gemColors = {
  amethyst: {
    id: "x1_Amethyst_",
    oldid: "Amethyst_",
    name: "Amethyst",
    weapon: {
      stat: "lph",
      amount: [6, 10, 35, 65, 300, 1750, 7500, 16000, 20000, 25000],
    },
    head: {
      stat: "life",
      amount: [7, 8, 11, 12, 15, 19, 20, 21, 22, 23],
    },
    other: {
      stat: "vit",
      amount: [14, 18, 30, 34, 46, 62, 100, 160, 220, 280],
    },
  },
  diamond: {
    id: "x1_Diamond_",
    oldid: "Diamond_",
    name: "Diamond",
    weapon: {
      stat: "edmg",
      amount: [4, 5, 8, 9, 12, 16, 17, 18, 19, 20],
    },
    head: {
      stat: "cdr",
      amount: [4.5, 5, 6.5, 7, 8.5, 10.5, 11, 11.5, 12, 12.5],
    },
    other: {
      stat: "resall",
      amount: [14, 18, 30, 34, 46, 62, 66, 70, 74, 78],
    },
  },
  emerald: {
    id: "x1_Emerald_",
    oldid: "Emerald_",
    name: "Emerald",
    weapon: {
      stat: "chd",
      amount: [20, 25, 40, 45, 70, 110, 115, 120, 125, 130],
    },
    head: {
      stat: "gf",
      amount: [9, 11, 17, 19, 25, 33, 35, 37, 39, 41],
    },
    other: {
      stat: "dex",
      amount: [14, 18, 30, 34, 46, 62, 100, 160, 220, 280],
    },
  },
  ruby: {
    id: "x1_Ruby_",
    oldid: "Ruby_",
    name: "Ruby",
    weapon: {
      stat: "wpnphy",
      amount: [9, 12, 21, 25, 60, 160, 190, 220, 250, 270],
    },
    head: {
      stat: "expmul",
      amount: [9, 11, 17, 19, 25, 33, 35, 37, 39, 41],
    },
    other: {
      stat: "str",
      amount: [14, 18, 30, 34, 46, 62, 100, 160, 220, 280],
    },
  },
  topaz: {
    id: "x1_Topaz_",
    oldid: "Topaz_",
    name: "Topaz",
    weapon: {
      stat: "thorns",
      amount: [6, 10, 50, 100, 600, 4000, 8000, 14000, 26000, 38000],
    },
    head: {
      stat: "rcr",
      amount: [4.5, 5, 6.5, 7, 8.5, 10.5, 11, 11.5, 12, 12.5],
    },
    other: {
      stat: "int",
      amount: [14, 18, 30, 34, 46, 62, 100, 160, 220, 280],
    },
  },
};
DiabloCalc.legendaryGems = {
  powerful: {
    id: "Unique_Gem_001_x1",
    name: "Bane of the Powerful",
    types: ["finger", "neck"],
    check: true,
    active: false,
    effects: [
      {
        format: "Gain 20%% increased damage for %.1f seconds after killing an elite pack.",
        value: [30],
        delta: [1],
      },
      {
        format: "Gain 15%% increased damage versus elites and take 15%% reduced damage from elites.",
      },
    ],
    buffs: function(level, stats) {
      var buffs = {dmgmul: 20};
      if (level >= 25) {
        buffs.edmg = 15;
        buffs.edef = 15;
      }
      return buffs;
    },
    inactive: function(level, stats) {
      if (level >= 25) return {edmg: 15, edef: 15};
    },
  },
  trapped: {
    id: "Unique_Gem_002_x1",
    name: "Bane of the Trapped",
    types: ["finger", "neck"],
    active: true,
    effects: [
      {
        stat: "dmgmul",
        format: "Increase damage against enemies under the effects of control-impairing effects by %.2f%%.",
        value: [15],
        delta: [0.3],
      },
      {
        format: "Gain an aura that reduces the movement speed of enemies within 15 yards by 30%%.",
      },
    ],
  },
  hoarder: {
    id: "Unique_Gem_014_x1",
    name: "Boon of the Hoarder",
    types: ["finger", "neck"],
    active: false,
    effects: [
      {
        format: "%.1f%% chance on killing an enemy to cause an explosion of gold.",
        value: [25],
        delta: [1.5],
      },
      {
        stat: "extrams",
        format: "Gain 30%% increased movement speed for 2 seconds after picking up gold.",
        value: [30],
      },
    ],
  },
  enforcer: {
    id: "Unique_Gem_010_x1",
    name: "Enforcer",
    types: ["finger", "neck"],
    always: true,
    active: true,
    effects: [
      {
        format: "Increase the damage of your pets by %.2f%%.",
        value: [15],
        delta: [0.3],
      },
      {
        format: "Your pets take 90%% less damage.",
      },
    ],
    buffs: function(level, stats) {
      return {dmgmul: {pet: true, percent: 15 + level * 0.3}};
    },
  },
  esoteric: {
    id: "Unique_Gem_016_x1",
    name: "Esoteric Alteration",
    types: ["finger", "neck"],
    always: true,
    active: true,
    effects: [
      {
        stat: "nonphys",
        format: "Gain %.1f%% non-Physical damage reduction.",
        value: [10],
        delta: [0.5],
      },
      {
        format: "While below half Life, your resistances to Cold, Fire, Lightning, Poison, and Arcane are increased by 75%%.",
      },
    ],
  },
  ease: {
    id: "Unique_Gem_003_x1",
    name: "Gem of Ease",
    types: ["onehand", "twohand"],
    always: true,
    active: true,
    effects: [
      {
        stat: "expadd",
        value: [500],
        delta: [50],
      },
      {
        format: "Level Requirement Set to 1.",
      },
    ],
  },
  toxin: {
    id: "Unique_Gem_005_x1",
    name: "Gem of Efficacious Toxin",
    types: ["finger", "neck"],
    active: true,
    effects: [
      {
        format: "Poison all enemies hit for %d%% weapon damage over 10 seconds.",
        value: [2000],
        delta: [50],
      },
      {
        stat: "dmgtaken",
        format: "All enemies you poison take 10%% increased damage from all sources and deal 10%% less damage.",
        value: [10],
      },
    ],
    info: function(level, stats) {
      return {"DPS": {elem: "psn", coeff: 20 + 0.5 * level, divide: {"Duration": 10}, total: true}};
    },
  },
  gogok: {
    id: "Unique_Gem_008_x1",
    name: "Gogok of Swiftness",
    types: ["finger", "neck"],
    active: true,
    effects: [
      {
        format: "Gain Swiftness with every attack, increasing your Attack Speed by 1%% and Dodge by %.2f%% for 4 seconds. This effect stacks up to 15 times.",
        value: [0.5],
        delta: [0.01],
      },
      {
        format: "Gain 1%% Cooldown Reduction per stack of Swiftness.",
      },
    ],
    params: [{min: 0, max: 15, name: "Stacks"}],
    buffs: function(level, stats) {
      var res = {ias: this.params[0].val, dodge: (0.5 + 0.01 * level) * this.params[0].val};
      if (level >= 25) {
        res.cdr = res.ias;
      }
      return res;
    },
  },
  invigorating: {
    id: "Unique_Gem_009_x1",
    name: "Invigorating Gemstone",
    types: ["finger", "neck"],
    effects: [
      {
        format: "Each hit done increases healing received by %.2f%% for 5 seconds. Stacks up to 10 times.",
        value: [1],
        delta: [0.02],
      },
      {
        format: "You are immune from control impairing effects.",
      },
    ],
  },
  mirinae: {
    id: "Unique_Gem_007_x1",
    name: "Mirinae, Teardrop of the Starweaver",
    types: ["finger", "neck"],
    effects: [
      {
        format: "15%% chance on hit to smite a nearby enemy for %d%% weapon damage as Holy and heal yourself for 3%% of your maximum Life.",
        value: [3000],
        delta: [60],
      },
      {
        format: "Smite a nearby enemy every 3 seconds.",
      },
    ],
    info: function(level, stats) {
      return {"Damage": {elem: "hol", coeff: 30 + 0.6 * level}};
    },
  },
  gizzard: {
    id: "Unique_Gem_017_x1",
    name: "Molten Wildebeest's Gizzard",
    types: ["finger", "neck"],
    always: true,
    active: true,
    effects: [
      {
        stat: "regen",
        value: [10000],
        delta: [1000],
      },
      {
        format: "After not taking damage for 4 seconds, gain an absorb shield for 200%% of your total Life per Second.",
      },
    ],
  },
  moratorium: {
    id: "Unique_Gem_011_x1",
    name: "Moratorium",
    types: ["finger", "neck"],
    effects: [
      {
        format: "35%% of all damage taken is instead staggered and dealt to you over %.2f seconds.",
        value: [3],
        delta: [0.1],
      },
      {
        format: "20%% chance on kill to clear all staggered damage.",
      },
    ],
  },
  pain: {
    id: "Unique_Gem_006_x1",
    name: "Pain Enhancer",
    types: ["finger", "neck"],
    effects: [
      {
        format: "Critical hits cause the enemy to bleed for %.1f%% weapon damage as Physical over 3 seconds.",
        value: [2500],
        delta: [50],
      },
      {
        format: "Gain Blood Frenzy, granting you 3%% increased Attack Speed for each bleeding enemy within 20 yards.",
      },
    ],
    info: function(level, stats) {
      return {"DPS": {elem: "phy", coeff: 25 + 0.5 * level, divide: {"Duration": 3}, total: true}};
    },
//    active: false,
//    check: true,
    params: [{min: 0, max: "gems.pain>=25?30:0", val: 0, name: "Stacks"}],
    buffs: function(level, stats) {
      if (level >= 25) {
        return {ias: this.params[0].val * 3};
      }
    },
  },
  simplicity: {
    id: "Unique_Gem_013_x1",
    name: "Simplicity's Strength",
    types: ["finger", "neck"],
    always: true,
    active: true,
    effects: [
      {
        format: "Increase the damage of primary skills by %.2f%%.",
        value: [25],
        delta: [0.5],
      },
      {
        format: "Hits with primary abilities heal you for 4%% of your maximum health.",
      },
    ],
    buffs: function(level, stats) {
      var value = 25 + level * 0.5;
      var skills = [];
      for (var skill in DiabloCalc.skills[stats.charClass]) {
        if (DiabloCalc.skills[stats.charClass][skill].category === "primary") {
          skills.push(skill);
          //res["skill_" + stats.charClass + "_" + skill] = value;
        }
      }
      return {dmgmul: {skills: skills, percent: value}};
    },
  },
  taeguk: {
    id: "Unique_Gem_015_x1",
    name: "Taeguk",
    types: ["finger", "neck"],
    active: true,
    effects: [
      {
        format: "Gain %.2f%% increased damage for 1.5 seconds when you spend resource on a channeled skill. This effect stacks up to 10 times.",
        value: [2],
        delta: [0.04],
      },
      {
        format: "Gain 2%% increased Armor for every stack.",
      },
    ],
    params: [{min: 0, max: 10, name: "Stacks"}],
    buffs: function(level, stats) {
      var res = {damage: (2 + level * 0.04) * this.params[0].val};
      if (level >= 25) {
        res.armor_percent = 2 * this.params[0].val;
      }
      return res;
    },
  },
  wreath: {
    id: "Unique_Gem_004_x1",
    name: "Wreath of Lightning",
    types: ["finger", "neck"],
    active: false,
    effects: [
      {
        format: "15%% chance on hit to gain a Wreath of Lightning, dealing %.1f%% weapon damage as Lightning every second to nearby enemies for 3 seconds.",
        value: [1250],
        delta: [25],
      },
      {
        stat: "extrams",
        format: "While under the effect of the Wreath of Lightning, gain 25%% increased movement speed.",
        value: [25],
      },
    ],
    info: function(level, stats) {
      return {"Damage": {elem: "lit", coeff: 12.5 + 0.25 * level, total: true}};
    },
  },
  zei: {
    id: "Unique_Gem_012_x1",
    name: "Zei's Stone of Vengeance",
    types: ["finger", "neck"],
    active: true,
    effects: [
      {
        format: "Damage you deal is increased by %.2f%% for every 10 yards between you and the enemy hit. Maximum %.2f%% increase at 50 yards.",
        value: [4, 20],
        delta: [0.08, 0.4],
      },
      {
        format: "20%% chance on hit to Stun the enemy for 1 second.",
      },
    ],
    params: [{min: 0, max: 50, name: "Distance"}],
    buffs: function(level, stats) {
      return {dmgmul: this.params[0].val * (4 + 0.08 * level) / 10};
    },
  },

  stricken: {
    id: "Unique_Gem_018_x1",
    local: true,
    name: "Bane of the Stricken",
    types: ["finger", "neck"],
    active: true,
    effects: [
      {
        format: "Each attack you make against an enemy increases the damage it takes from your attacks by %.2f%%.",
        value: [0.8],
        delta: [0.01],
      },
      {
        format: "Gain 25%% increased damage against bosses and Rift Guardians.",
      },
    ],
    params: [{min: 0, max: 50, name: "Stacks", inf: true}],
    buffs: function(level, stats) {
      var res = {dmgmul: this.params[0].val * (0.8 + 0.01 * level)};
      if (level >= 25) res.bossdmg = 25;
      return res;
    },
  },
  iceblink: {
    id: "Unique_Gem_021_x1",
    ids: ["ptr_Iceblink"],
    active: true,
    name: "Iceblink",
    types: ["finger", "neck"],
    effects: [
      {
        format: "Your Cold skills now apply Chill effects and your Chill effects now slow enemy movement speed by an additional %.1f%%.",
        value: [5],
        delta: [0.4],
      },
      {
        format: "Enemies you Chill have a 10%% increased chance to be Critically Hit.",
        stat: "chctaken",
        value: [10],
      },
    ],
  },
  mutilation: {
    id: "Unique_Gem_019_x1",
    ids: ["ptr_Mutilation"],
    name: "Mutilation Guard",
    types: ["finger", "neck"],
    effects: [
      {
        format: "Gain %d%% melee damage reduction.",
        stat: "meleedef",
        value: [10],
        delta: [0.5],
      },
      {
        format: "While below 50%% life, you may move through enemies unhindered.",
      },
    ],
  },
  boyarsky: {
    id: "Unique_Gem_020_x1",
    name: "Boyarsky's Chip",
    types: ["finger", "neck"],
    always: true,
    active: true,
    effects: [
      {
        format: "Adds %d Thorns.",
        stat: "thorns",
        value: [16000],
        delta: [800],
      },
      {
        format: "Taunt the first enemy hit by your Primary skills for 2 seconds.",
      },
    ],
  },
  soulshard: {
    id: "Unique_Gem_022_x1",
    name: "Red Soul Shard",
    types: ["head"],
    check: true,
    active: false,
    effects: [
      {
        format: "Periodically struggle for control, unleashing a ring of Fire that inflicts %d%% weapon damage to enemies it passes through.",
        value: [12500],
        delta: [50],
      },
      {
        format: "After gaining a level, your resource costs are removed and cooldowns on skills are reduced by 75%% for 30 seconds.",
      },
    ],
    info: function(level, stats) {
      return {"Damage": {elem: "fir", coeff: 125 + 0.5 * level}};
    },
    buffs: function(level, stats) {
      if (level >= 25) return {cdr: 75, rcr: 100};
    },
  },
};
