const what = [
  "Hide", "Infiltrate", "Smuggling", "Extract", "Search", "Scavenge",
  "Evacuate", "Guard", "Tow", "Retrieve", "Transfer", "Pay", "Defend",
  "Locate", "Investigate", "Raid", "Heist", "Parley", "Repair", "Destroy"
]
const payment = [
  "Holo debt that needs to be collected", "Gear", "Favor", "Spare parts",
  "Big contract", "Module"
]
const person = [
  "Impostor", "Smuggler", "AI", "Traitor", "Union worker", "Company employee"
]
const group = [
  "Cult", "Ring gang", "Miners", "Scavengers", "Outlaws", "Station marshals"
]
const object = [
  "Unique gem", "Prototype", "Robotics", "Creature", "Weapon", "Module"
]
const unknown = [
  "Strange cosmic mutation", "Anomaly", "New planet", "Wormhole",
  "Strange code", "Void static"
]
const event = [
  "Missing person", "Backstabbing", "Murder", "Riot", "Ritual", "Festival"
]
const area = [
  "Derelict spacecraft", "Space bar", "Visiting asteroid",
  "Forgotten mining station", "Planet ruin", "Underground colony", "Asteroid",
  "Rogue planet", "Abandoned bunker", "Rebuilt satellite", "Old mining town",
  "Nomad outpost"
]

const first_name = [
  "Marshal", "Tarlow", "Cee", "Aoi", "Niko", "Sakura", "Naoto", "Jun",
  "Ichiro", "Koa", "Ravi", "Mishka", "Yuma", "Roy", "Fushigi", "Mateo", "Aiko",
  "Ezra", "Bo", "Elizi", "Hina", "Iwata", "Baker", "Bowie", "Rowa", "Mirai",
  "Kev", "Khari", "Isa", "Lovi", "Sura", "Anik", "Nauja", "Sheyma", "Mira",
  "Yatin", "Yuval", "Jienni", "Tami", "Mufasa", "Ao", "Bell", "Blink", "Clock", "Cord", "Duzi", "Fase", "Fu", "Glam", "Glare", "Gul", "Hira", "Hla", "Ia", "Kei", "Key", "Lhamo", "Måne", "Mehr", "Mille", "Mpho", "Nur", "Phix", "Reeve", "Riz", "Shade", "Soma", "Tick", "Vac", "Wick", "Xleo", "Yann", "Zalec", "Zenit", "Zign", "Zola"
]
const last_name = [
  "Grozo", "Rife", "Shimasu", "Aiseke", "Helm", "Astreio", "Tungertok",
  "Casker", "Cash", "Blaze", "Mellowe", "Atticus", "Dimber", "Cage", "Rose",
  "Whiz", "Zapper", "Crow", "Cage", "Tide", "Yamada", "Bhat", "Ortiz", "Behl",
  "Brahm", "Oak", "Nori", "Guide", "Bird", "Sunn", "Lock", "Keone", "Beconne",
  "Lumen", "Canero", "Crowne", "Home", "Rover", "Lamassu", "Shorell",
]
const origin = [
  "carbon", "chrome", "punk", "solpod", "velocity cursed", "void"
]
const background = [
  "Doctor of Philosophy", "Ringborn", "Roughneck", "Technomant",
  "Astrochemist", "Explorer", "Clone", "Legionnaire", "Prospector", "Nomad"
]
const bg_1 = [
  "Gas", "Data", "Record", "Auction", "DNA", "Black market", "AI", "Drone",
  "Subtiliteminn", "Military", "Vector", "Company", "Cyro", "Moon", "Asteroid",
  "Nebular", "Zero-g", "Ring", "Clone", "Monolith", "Event horizon",
  "Intersteller", "Orbit", "Gravity", "Intergalatic", "Freight", "Isotope",
  "Station", "Static noise", "Tow", "Star", "Bounty", "Deep field", "Void"
]
const bg_2 = [
  "farmer", "pusher", "holder", "gemologist", "modifier", "salvager", "coder",
  "driller", "addict", "linguist", "pilot", "marshal", "engineer", "mercenary",
  "owner", "pathfinder", "fighter", "thug", "bodyguard", "welder", "vagabond",
  "soldier", "swindler", "cultist", "diver", "tracer", "translator", "trucker",
  "hunter", "outlaw", "crew", "hijacker", "merchant", "bandit", "hauler"
]
const impression = [
  "Always stares at people’s teeth.",
  "Reckless in combat.", "Boasts about what they did in the war.", "Whistles war hymns.",
  "Cautious around others.", "Moves slowly if you stare at them.",
  "Talks with a vibrant language and large gestures.", "Constantly snacking on something.",
  "Hard-boiled with scars.", "Keeps looking behind objects like they could be trapped.",
  "Has several homemade augmented reality tattoos.",
  "Perfectionist with control issues.", "Swallows strange colorful pills every now and then.",
  "Nearsighted.", "Looks at people like they want to eat them.",
  "Just overall creepy.", "Long nails, teeth and hair.",
  "Wears very, very thick 3D glasses.",
  "Has control issues and needs a plan for everything.", "Won’t look people in the eyes.",
  "Too old for this shit.", "Gray-haired, smoking actual, real cigars.",
  "Speaks with a unique accent.", "Disarming gaze.",
  "Frustrated about small things.",
  "Old-fashioned.", "Never smiles.", "Likes things simple.",
  "Calm, cold and calculated with a stiff body language.",
  "Caring and helpful but hates being touched.",
  "Peaceful, soft-spoken.", "Soft, gentle movements.",
  "Pessimist, with a fake smile.",
  "Sad and distant, I have seen colony crafts on fire off the shoulders of...",
]
const trait = [
  "Bored",
  "Jaded",
  "So polite it hurts",
  "Polite",
  "Optimist",
  "Cynical",
  "Eccentric",
  "Hypochondriac",
  "Honest",
  "Proud",
  "Relentless",
  "Perfectionist",
  "Dishonest",
  "Remorseful",
  "Nearsighted",
  "Creepy",
  "Lazy",
  "Talkative",
  "Inventive",
  "Rough",
  "Unnecessarily rough",
  "Hard-boiled",
  "Savage",
  "Passionate",
  "Endlessly aggravated", "Inferiority complex", "Problems with authority", "Loud mouth", "Cruel", "Egocentric", "Nihilistic", "Prone to substance abuse", "Conflicted", "Shrewd", "Vindictive", "Cowardly", "Lazy", "Suspicious", "Ruthless", "Worried", "Bitter", "Deceitful", "Wasteful", "Arrogant", "Abrasive", "Mannerless", "Self-assured", "Fanatical", "Hypocritical", "Eccentric", "Morbid", "One-sided", "Enigmatic", "Hesitant", "Scared of commitment", "Aggressive", "Shortsighted", "Stubborn", "Mischievous", "Grim", "Ritualistic", "Brutal", "Unpredictable", "Prejudiced", "Vulgar", "Sloppy", "Impulsive", "Calculating", "Pedantic", "Gullible", "Demanding", "Whiny", "Ungrateful", "Hedonistic", "Shallow", "Fearless", "Scheming", "Nagging", "Fatalistic", "Defensive", "Hateful", "Argumentative", "Tormenting", "Self-conscious", "Irresponsible", "Melancholic", "Arbitrary", "Inconsistent", "Imitative", "Sarcastic", "Rude", "Vain", "Petty", "Resentful", "Disloyal", "Strict", "Anarchistic", "Dependent", "Snobbish", "Untrusting", "Assertive", "Charmless", "Pompous", "Greedy", "Tactless", "Unhelpful", "Anxious", "Gloomy", "Undisciplined", "Careless", "Nosy", "Domineering", "Dull", "Rebellious",
  "Chainsmoker", "Chews on hair", "Compulsive swearing", "Constantly watching holos", "Coughs", "Fiddles with jewelry", "Flirty", "Gestures a lot", "Giggles inappropriately", "Hat/hood and shades, always", "Itchy", "Loudly chews gum", "Must tag every location", "Never look anyone in the eye", "Nosepicker", "Rapid blinking", "Reeks of lighter fluid", "Scratches facial scar", "Twitchy", "Wheezes",
]
const look = [
  "Filthy EVA suit.", "Fashionable robotic hands.",
  "Clothes made of synthetic feathers.", "Space dock workwear.",
  "White civilian clothes.",
  "Vest, nothing under, and shorts, no matter the climate.",
  "Fake military fashion.", "No shoes, tight t-shirt, black pants.",
  "Tool belt and waistbag.", "Antique colony suit.",
  "Robe covered in asymmetric patterns.", "Similar clothes as one of the PCs.",
  "Expensive gear and pretty new clothes.",
  "Worn marshal cap and a fake cigar.", "Jumpsuit with driller oil patch.",
  "Holographic visor, branded clothes.",
  "Untied big boots, patched broken nose.",
  "G-suit, covered in planet patches.",
  "Gray thick lab coat with blue stains.",
  "Vest knitted out of wires, tattoos in a strange language.",
  "Embroidered helmets, faux fur, and dark cloth with symbols showing affiliation.",
  "Patched up clothes, mixture of many materials and tech.",
  "Reinforced blue and yellow workwear with patches from all the spacedocks in Tenebris.",
  "Boots and vests.", "Strange fancy caps.",
  "Flamboyant robes in reflective materials.",
  "Torn, old space docket jacket.",
  "Foreign, realisitic tattos.",
  "Filthy, dark makeup",
  "Undersized hologlasses.",
  "Perfectly weathered clothes.",
  "Botany patches on arms and back saying 'I love plants'.",
  "Fashionable interstellar clothes.",
  "Too clean civilian clothes.",
  "Bags and pockets everywhere for everything but never anything important in them.",
  "Layers of black fabric, wrapped loosely",
  "Robotic hands/arm.",
  "Covered in scars.",
  "Asymmetric, patterned hood.",
  "Antique space gloves.",
  "Hazard pants.",
  "Trucker cap with patch.",
  "Necklace with odd animal skulls.",
  "Decorated cape.",
  "Suit with holographic patterns."
]
const weapon = [
  "Accretion shuriken (d4 c1 s1 u-)",
  "Heat seeking micro caltrops (d4 c1 s1 u-)",
  "Gravity dirk (d4 c1 s1 u-)",
  "Oscillator knife (d4 c1 s1 u-)",
  "LRAD hammer (d4 c1 s1 u-)",
  "Vacuum pistol (d6 c3 s1 u5)",
  "Prospector handgun (d6 c3 s1 u5)",
  "AI revolver (d6 c3 s1 u5)",
  "Messier shotgun (2d4* c3 s2 u4)",
  "Direcaster defense pump-action (2d4* c3 s2 u4)",
  "Silenced apastron (d8 c3 s2 u10)",
  "Micro manifold (d8 c3 s2 u10)",
  "Procyon raid rifle (d10 c3 s3 u10)",
  "Bullpup vacuum rifle (d10 c3 s3 u10)",
  "Arc rifle (d10 c3 s3 u10)",
  "Thermite crossbow (d12 c3 s3 u4)",
  "Luminance marksman barrel (d12 c3 s3 u4)",
  "Crescent limb cutter (d12 c3 s3 u4)",
  "Caacero coaxial gun (3d6* c4 s6 u4)",
  "Frontier light vehicle gun (3d6* c4 s6 u4)",
  "Deadbug (liquid fuel incendiary device) (3d6* c4 s5 u3)"
]
const grenade = [
  "Plerion grenade (2d6* c- s1 u-)",
  "Quasar incendiary (2d6* c- s1 u-)",
  "Dust cleaner flashbang (2d6* c- s1 u-)",
]
const armor = [
  "Stab proof armor (DR+1 s2)",
  "Flak jacket armor (DR+2 s3)",
  "Bulletproof armor (DR+2 s4)",
  "Riot shield (- s4)",
]

const common = [
  ["Nano Pods", 3, 5, 3], ["Bio tanker", 12, 17, 20],
  ["Bulk freighter", 10, 16, 8], ["Scout ship", 5, 11, 5],
  ["Frontier lander", 5, 11, 6], ["Hauler", 5, 13, 5],
  ["Liberation raider", 5, 13, 5], ["Sector shuttle", 3, 9, 6],
]
const c_power = [
  ["Radiation pressure sail", "too slow"],
  ["Chemical engine", "slow"],
]
const unusual = [
  ["Honeyguide driller", 5, 11, 6], ["Interceptor", 5, 11, 5],
  ["Mining carrier", 12, 18, 20], ["Light freighter", 8, 14, 7],
]
const u_power = [
  ["Diamagnetic fusion reactor", "fast"]
]
const rare = [
  ["Exobase dropship", 5, 15, 4], ["Alsviðr barge", 8, 16, 5],
  ["Solar barque", 6, 10, 3], ["Colony ship", 10, 18, 10],
]
const r_power = [
  ["Gravity reactor", "fast"]
]
const v_rare = [
  ["Monolith runner", 10, 18, 10], ["Redshift explorer", 8, 12, 15],
  ["Gravity ship", 10, 16, 10], ["Black hole crawler", 12, 19, "—"], 
]
const v_r_power = [
  ["Quantum entanglement reactor", "bridging"]
]
const general = [
  [1, "bar"], [1, "brig"], [1, "cargo cluster"], [1, "cryopods"],
  [1, "escape pods"], [1, "fire extinguishing system"], [1, "fuel tanks"],
  [1, "garbage burner"], [1, "hidden module"], [1, "interrogation room"],
  [1, "meeting room"], [1, "moonshine distillery"], [1, "passenger quarters"],
  [1, "storage"], [1, "workshop"], [2, "cargo bay"], [2, "cargo tractor"],
  [2, "deep space communication dish"], [2, "hull plating"],
  [2, "hydroponic farm"], [2, "medical bay"], [2, "merchant deck"],
  [2, "panic room"], [2, "repair bay"], [2, "space dock"], [2, "vault"]
]
const tech = [
  [1, "anti-hacking systems"], [1, "automaton caretaker"], [1, "biometric locks"],
  [1, "deceptive communication systems"], [1, "decoy"], [1, "driller echo"],
  [1, "galactic navigation system"], [1, "named ai"], [1, "self-destruct system"],
  [1, "surveillance system"], [1, "uav system"], [1, "hazard chamber"],
  [1, "master system"], [1, "radio network"], [2, "radio network"],
  [2, "scanners"], [2, "military-issued ai"], [2, "science lab"],
  [3, "stealth hull"]
]
const confrontation = [
  [1, "deep space torpedoes"], [1, "kinetic mines"], [1, "hull grapplers"],
  [1, "mobile drill arm"], [1, "modified asteroid drill"], [1, "monodispatcher"],
  [1, "shotgun harpoon"], [1, "thrower"], [1, "hypervelocity projectiles"],
  [1, "grapeshot carronade"], [2, "isotope bunker buster"], [2, "emp harpoon"],
  [3, "orbital shotgun"]
]
const trigger = [
  "laser", "pressure plate", "motion detector", "microphone", "magnetic",
  "heat detector", "sniffer", "metal detector", "echo wire", "counter",
]
const obstacle = [
  "centiglass", "mind scanner", "wormhole", ["electromagnetic pulse", "emp"],
  "pipe bomb", "jump mine", "hotwired air lock", "tracking chip", "flechettes",
  "ultrasonic burst", "titanic foam", "photoreceptor flash", "tesla spike",
  "laser", "molten metal", "crusher", "cooker", "flammable gas",
  "electroshock projectiles", "skin transformer",
]

function roll(n) {
  return Math.floor(Math.random() * n) + 1;
}
function stat() {
  s = roll(4) - roll(4);
  if (s == 0) {
    s = "±" + s;
  } else if (s > 0) {
    s = "+" + s;
  }
  return s;
}
function roll_r(s, e) {
  return Math.floor(Math.random() * (e - s + 1)) + s;
}
function add_mod(power, mod, modules) {
  if ((power - mod[0]) >= 0) {
    modules.push(mod);
    return power - mod[0];
  } else {
    return power
  }
}
Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
}
Array.prototype.remove = function(value) {
  return this.filter(item => item !== value);
}
Array.prototype.shuffle = function() {
  for (var i = this.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}

function generate() {
  if (roll(100) == 1) {
    frame = v_rare.sample();
  } else if (roll(36) == 1) {
    frame = rare.sample();
  } else if (roll(10) == 1) {
    frame = unusual.sample();
  } else {
    frame = common.sample();
  }
  if (roll(100) == 1) {
    op = roll_r(7, 30)
    power = v_r_power.sample();
  } else if (roll(36) == 1) {
    op = roll_r(9, 13)
    power = r_power.sample();
  } else if (roll(10) == 1) {
    op = roll_r(6, 10);
    power = u_power.sample();
  } else {
    op = roll_r(3, 7);
    power = c_power.sample();
  }

  dis = document.getElementById('display');
  dis.innerHTML = "";
  dis.innerText += "WARNING: DETECTED UNKNOWN CRAFT\n";
  dis.innerText += "Scanning...\n";
  dis.innerText += "Auto-detecting model information...\n";
  dis.innerText += "Identified. Registered craft " + roll(100_000_000).toString(16) + "\n";
  dis.innerHTML += "Tracking heading and locked...\n\n";
  dis.innerText += "Frame: " + frame[0].toUpperCase() + "\n";
  dis.innerText += "Status:\n\tcondition " + frame[1] + "\n\tDR " + frame[2] + "\n\tfuel depot " + frame[3] + "\n";
  dis.innerText += "Engine: " + power[0].toUpperCase() + "\n";
  dis.innerText += "Status:\n\tpower " + op + "\n\tspeed " + power[1].toUpperCase() + "\n";

  possible_mods = general.shuffle().concat(tech.shuffle());
  confront_dup = [...confrontation.shuffle()];
  modules = [];
  confrontation_chance = [10, 20, 36];

  for(var i = 0; i < 3; i++) {
    if (roll(confrontation_chance[i]) == 1) {
      op = add_mod(op, confront_dup.pop(), modules);
    }
  }
  while(op != 0) {
    op = add_mod(op, possible_mods.pop(), modules);
  }
  dis.innerText += "MODULES:"
  dis.innerText += modules.sort().map(el => "\n\t" + el[1] + "(" + el[0] + ")");
  dis.innerText += "\nDANGER ONBOARD: " + obstacle.sample() + " (triggered by " + trigger.sample().toUpperCase() + ")\n\n";

  // CREW
  c = document.getElementById('crew_details');
  c.innerHTML = "";
  crew = roll(6);
  c.innerText += "Personnel detected onboard...\n";
  c.innerText += "Scanning...\n";
  c.innerText += "Identified " + crew + " human-life forms onboard craft.\n";
  c.innerText += "Cross-referencing TENEBRIS civilian DB v." + roll(10000) + "." + roll(10000) + ":";

  first_name_dup = [...first_name.shuffle()];
  background_dup = [...background.shuffle()];
  bg_1_dup = [...bg_1.shuffle()];
  bg_2_dup = [...bg_2.shuffle()];
  look_dup = [...look.shuffle()];
  trait_dup = [...trait.shuffle()];
  impression_dup = [...impression.shuffle()];

  for(var i = 0; i < crew; i++) {
    c.innerText += "\n\n" + (i + 1) + ". " + first_name_dup.pop() + " " + last_name.sample() + "(" + origin.sample() + ") | ";
    if (roll(10) == 1) {
      c.innerText += background_dup.pop();
    } else {
      c.innerText += bg_1_dup.pop() + " " + bg_2_dup.pop();
    }

    c.innerText += "\nHP  " + roll(8) + "  ML  " + (roll(6) + roll(6)) +
                     "  BDY " + stat() + "  DEX " + stat() + "  SVY " + stat() + "  TEC " + stat();
    if (roll(10) == 1) { c.innerText += "\n" + armor.pop(); }
    c.innerText += "\n" + weapon.pop();
    if (roll(10) == 1) { c.innerText += "\n" + grenade.pop(); }

    c.innerText += "\n" + look_dup.pop() + " ";
    c.innerText += trait_dup.pop() + " and ";
    if (roll(6) == 1) {
      c.innerText += trait_dup.pop().toLowerCase() + ".";
    } else {
      c.innerText += impression_dup.pop().toLowerCase();
    }
  }
  c.innerHTML += "\n\n<span class='small'>d: damage, c: condition, s: slots, u: uses</span>"

  // CONTRACT
  dis.innerText += "Searching for last port landing..."
  dis.innerText += "\nThis vessel is known to be on contract " + roll(1000000).toString(16) + ":";
  dis.innerText += "\nTASK:\t " + what.sample() + "\n";
  dis.innerText += "TARGET:\t " + object.sample() + "\n";
  dis.innerText += "WHO:\t " + person.sample() + "\n";
  dis.innerText += "WHY:\t " + event.sample() + "\n";
  dis.innerText += "WHERE:\t " + area.sample() + "/" + unknown.sample() + "\n";
  dis.innerText += "PAYMENT: " + payment.sample();
}

generate();
document.getElementById("scan").addEventListener("click", function() {
  generate();
})