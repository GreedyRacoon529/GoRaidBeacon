let raids = JSON.parse(localStorage.getItem("raids")) || [];
let currentTier = "all";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let chat = JSON.parse(localStorage.getItem("chat")) || [];
let likedChatMessages = JSON.parse(localStorage.getItem("likedChatMessages")) || [];

const tierMap = {
   // Tier 1 Pokémon
  "magikarp": "1",
  "shinx": "1",
  "timburr": "1",
  "espurr": "1",
  "klink": "1",
  "dratini": "1",
  "machop": "1",
  "snubbull": "1",
  "mawile": "1",
  "beldum": "1",
  "aron": "1",
  "lillipup": "1",
  "roggenrola": "1",
  "swinub": "1",
  "cubone": "1",
  "gastly": "1",
  "sableye": "1",
  "duskull": "1",
  "wailmer": "1",
  "treecko": "1",
  "torchic": "1",
  "mudkip": "1",
  "unown": "1",
  "hisuian growlithe": "1",
  "hisuian sneasel": "1",
  "unown u": "1",
  "shadow magnemite": "1",
  "shadow murkrow": "1",
  "shadow cyndaquil": "1",
  "shadow slakoth": "1",
  "igglybuff": "1",
  "magby": "1",
  "elekid": "1",
  "smoochum": "1",
  "tyrogue": "1",
  "wynaut": "1",
  "happiny": "1",
  "munchlax": "1",
  "riolu": "1",
  "snorunt": "1",
  "spheal": "1",
  "litwick": "1",
  "phantump": "1",
  "pumpkaboo": "1",
  "golett": "1",
  "bagon": "1",
  "gible": "1",
  "axew": "1",
  "deino": "1",
  "noibat": "1",

  // Tier 3 Pokémon
  "machoke": "3",
  "onix": "3",
  "scyther": "3",
  "aerodactyl": "3",
  "alolan raichu": "3",
  "alolan marowak": "3",
  "wobbuffet": "3",
  "donphan": "3",
  "lapras": "3",
  "piloswine": "3",
  "golem": "3",
  "hitmonlee": "3",
  "hitmonchan": "3",
  "electabuzz": "3",
  "magmar": "3",
  "cloyster": "3",
  "tentacruel": "3",
  "sandslash": "3",
  "weezing": "3",
  "haunter": "3",
  "graveler": "3",
  "glalie": "3",
  "froslass": "3",
  "banette": "3",
  "dusclops": "3",
  "mismagius": "3",
  "drifblim": "3",
  "dusknoir": "3",
  "dragonair": "3",
  "vibrava": "3",
  "shelgon": "3",
  "fraxure": "3",
  "gabite": "3",
  "noivern": "3",
  "hisuian braviary": "3",
  "hisuian avalugg": "3",
  "wyrdeer": "3",
  "kleavor": "3",
  "hisuian decidueye": "3",
  "shadow lapras": "3",
  "shadow gurdurr": "3",
  "shadow piloswine": "3",
  "shadow machoke": "3",
  "shadow electabuzz": "3",
  "shadow magmar": "3",
  "lickitung": "3",
  "sudowoodo": "3",
  "shuckle": "3",
  "granbull": "3",
  "breloom": "3",
  "claydol": "3",
  "crustle": "3",
  "boldore": "3",
  "gurdurr": "3",

  // Tier 4 Pokémon
  "snorlax": "4",
  "tyranitar": "4",
  "aggron": "4",
  "absol": "4",
  "togetic": "4",
  "shiftry": "4",
  "blastoise": "4",
  "venusaur": "4",
  "charizard": "4",
  "alolan golem": "4",
  "alolan exeggutor": "4",
  "mega charizard x": "4",
  "mega charizard y": "4",
  "mega blastoise": "4",
  "mega venusaur": "4",
  "mega aerodactyl": "4",
  "mega tyranitar": "4",
  "mega gyarados": "4",
  "mega garchomp": "4",
  "mega ampharos": "4",
  "mega sableye": "4",
  "mega heracross": "4",
  "mega abomasnow": "4",
  "mega gardevoir": "4",
  "mega diancie": "4",
  "mega pinsir": "4",
  "mega lopunny": "4",
  "mega houndoom": "4",
  "mega beedrill": "4",
  "mega banette": "4",
  "mega scizor": "4",
  "mega glalie": "4",
  "mega latias": "4",
  "mega latios": "4",
  "mega kangaskhan": "4",

  // Tier 5 Pokémon
  "articuno": "5",
  "zapdos": "5",
  "moltres": "5",
  "mewtwo": "5",
  "raikou": "5",
  "entei": "5",
  "suicune": "5",
  "lugia": "5",
  "ho-oh": "5",
  "regirock": "5",
  "regice": "5",
  "registeel": "5",
  "kyogre": "5",
  "groudon": "5",
  "rayquaza": "5",
  "latios": "5",
  "latias": "5",
  "dialga": "5",
  "palkia": "5",
  "giratina": "5",
  "heatran": "5",
  "cresselia": "5",
  "darkrai": "5",
  "tornadus": "5",
  "thundurus": "5",
  "landorus": "5",
  "zekrom": "5",
  "reshiram": "5",
  "kyurem": "5",
  "xerneas": "5",
  "yveltal": "5",
  "tapu koko": "5",
  "tapu lele": "5",
  "tapu bulu": "5",
  "tapu fini": "5",
  "nihilego": "5",
  "buzzwole": "5",
  "pheromosa": "5",
  "xurkitree": "5",
  "celesteela": "5",
  "kartana": "5",
  "stakataka": "5",
  "blacephalon": "5",
  "zacian": "5",
  "zamazenta": "5",
  "hoopa": "5",
  "enamorus": "5",
  "solgaleo": "5",
  "lunala": "5",
  "cobalion": "5",
  "terrakion": "5",
  "virizion": "5",
  "genesect": "5",
  "regieleki": "5",
  "regidrago": "5",

  // Dynamax
  "darmanitan": "dynamax",
  "metagross": "dynamax",
  "excadrill": "dynamax",
  "inteleon": "dynamax",
  "gengar": "dynamax",
  "hatterene": "dynamax",
  "machamp": "dynamax",
  "rillaboom": "dynamax",
  "cinderace": "dynamax",
  "toxtricity": "dynamax",
  "charizard": "dynamax",
  "kingler": "dynamax",
  "haunter": "dynamax",
  "unfezant": "dynamax",
  "passimian": "dynamax",
  "falinks": "dynamax",
  "cryogonal": "dynamax",
  "drizzile": "dynamax",
  "gastly": "dynamax",
  "wailord": "dynamax",
  "blastoise": "dynamax",
  "kubfu": "dynamax",
  "raboot": "dynamax",
  "butterfree": "dynamax",
  "thwackey": "dynamax",
  "corviknight": "dynamax",
  "greedent": "dynamax",
  "dubwool": "dynamax",
  "charmeleon": "dynamax",
  "drilbur": "dynamax",
  "hattrem": "dynamax",
  "darumaka": "dynamax",
  "ivysaur": "dynamax",
  "krabby": "dynamax",
  "tranquill": "dynamax",
  "wailmer": "dynamax",
  "metang": "dynamax",
  "sobble": "dynamax",
  "scorbunny": "dynamax",
  "blissey": "dynamax",
  "wartortle": "dynamax",
  "grookey": "dynamax",
  "bulbasaur": "dynamax",
  "charmander": "dynamax",
  "rookidee": "dynamax",
  "hatenna": "dynamax",
  "pidove": "dynamax",
  "skwovet": "dynamax",
  "wooloo": "dynamax",
  "chansey": "dynamax",
  "caterpie": "dynamax",
  "metapod": "dynamax",

  // Gigantamax
  "gigantamax charizard": "gigantamax",
  "gigantamax blastoise": "gigantamax",
  "gigantamax venusaur": "gigantamax",
  "gigantamax gengar": "gigantamax",
  "gigantamax machamp": "gigantamax",
  "gigantamax lapras": "gigantamax",
  "gigantamax snorlax": "gigantamax",
  "gigantamax kingler": "gigantamax",
  "gigantamax inteleon": "gigantamax",
  "gigantamax rillaboom": "gigantamax",
  "gigantamax cinderace": "gigantamax",
  "gigantamax toxtricity": "gigantamax",
  "gigantamax grimmsnarl": "gigantamax",
  "gigantamax butterfree": "gigantamax",
  "gigantamax hatterene": "gigantamax",
  "gigantamax copperajah": "gigantamax",
  "gigantamax duraludon": "gigantamax"
}

// Filters trigger display

// --- Submit Raid ---
function submitRaid() {
  const trainer = document.getElementById("trainer").value.trim();
  const boss = document.getElementById("boss").value.trim();
  const code = document.getElementById("code").value.trim();
  const team = document.getElementById("team").value;

  if (!trainer || !boss || !code || !team) {
    alert("Fill out all fields!");
    return;
  }

  let tier = tierMap[boss.toLowerCase()] || "unknown";
  if (boss.toLowerCase().includes("dynamax")) tier = "dynamax";
  else if (boss.toLowerCase().includes("gigantamax")) tier = "gigantamax";
  else if (boss.toLowerCase().includes("shadow")) tier = "shadow";

  const maxPlayers = tier === "dynamax" || tier === "gigantamax" ? 40 : 20;

  const raid = {
    trainer,
    boss,
    code,
    team,
    tier,
    maxPlayers,
    joined: [], // stores joined trainer names
    timestamp: new Date().toISOString(),
  };

  raids.push(raid);
  localStorage.setItem("raids", JSON.stringify(raids));
  renderRaidList();
  clearForm();
}

function clearForm() {
  document.getElementById("trainer").value = "";
  document.getElementById("boss").value = "";
  document.getElementById("code").value = "";
  document.getElementById("team").value = "";
}

// --- Favorite Button ---
function toggleFavorite(raidId) {
  if (favorites.includes(raidId)) {
    favorites = favorites.filter((id) => id !== raidId);
  } else {
    favorites.push(raidId);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderRaidList();
}

// --- Copy Friend Code ---
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => alert("Friend code copied!"));
}

// --- Filter by Tier ---
function filterByTier(tier) {
  currentTier = tier;
  renderRaidList();
}

// --- Join Raid (FIXED) ---
function joinRaid(raidId) {
  const trainerName = prompt("Enter your trainer name to join:");
  if (!trainerName) return;

  // Extract code and index from raidId
  const lastDash = raidId.lastIndexOf("-");
  const codePart = raidId.slice(0, lastDash);
  const index = parseInt(raidId.slice(lastDash + 1));

  // Find the raid by matching code + index
  const matchedRaids = raids.filter(r => r.code.replace(/[^a-z0-9]/gi, "") === codePart);
  const raid = matchedRaids[index];

  if (!raid) return alert("Raid not found!");

  if (raid.joined.includes(trainerName)) {
    return alert("You already joined this raid!");
  }

  if (raid.joined.length >= raid.maxPlayers) {
    return alert("This raid is full!");
  }

  raid.joined.push(trainerName);
  localStorage.setItem("raids", JSON.stringify(raids));
  renderRaidList();
}

// --- Render Raid List with Favorite Sorting ---
function renderRaidList() {
  const container = document.getElementById("raid-list");
  if (!container) return;

  const now = new Date();
  raids = raids.filter((r) => now - new Date(r.timestamp) < 10 * 60 * 1000);
  localStorage.setItem("raids", JSON.stringify(raids));

  const bossFilter = document.getElementById("search-boss")?.value.toLowerCase() || "";
  const teamFilter = document.getElementById("filter-team")?.value || "";

  let filteredRaids = raids.filter((r) =>
    (!bossFilter || r.boss.toLowerCase().includes(bossFilter)) &&
    (!teamFilter || r.team === teamFilter) &&
    (currentTier === "all" || r.tier === currentTier)
  );

  // Sort favorites on top
  filteredRaids.sort((a, b) => {
    const aIndex = raids.indexOf(a);
    const bIndex = raids.indexOf(b);
    const aId = `${a.code.replace(/[^a-z0-9]/gi, "")}-${aIndex}`;
    const bId = `${b.code.replace(/[^a-z0-9]/gi, "")}-${bIndex}`;
    const aFav = favorites.includes(aId);
    const bFav = favorites.includes(bId);
    return aFav === bFav ? 0 : aFav ? -1 : 1;
  });

  container.innerHTML = "";

  filteredRaids.forEach((r) => {
    const index = raids.indexOf(r);
    const raidId = `${r.code.replace(/[^a-z0-9]/gi, "")}-${index}`;
    const countdownId = `countdown-${raidId}`;
    const imageUrl = `https://img.pokemondb.net/artwork/${r.boss.toLowerCase().replace(/[^a-z0-9]/gi, "").replace(/ /g, "-")}.jpg`;

    const card = document.createElement("div");
    card.className = "raid-card";
    if (favorites.includes(raidId)) card.classList.add("favorite");

    card.dataset.timestamp = r.timestamp;
    card.dataset.countdownId = countdownId;

    card.innerHTML = `
      <img src="${imageUrl}" alt="${r.boss}" class="boss-icon"><br>
      <strong>${r.boss}</strong><br>
      Trainer: ${r.trainer}<br>
      Code: <span class="friend-code">${r.code}</span>
      <button onclick="copyCode('${r.code}')">📋</button>
      <button onclick="toggleFavorite('${raidId}')">${favorites.includes(raidId) ? "⭐" : "☆"}</button><br>
      Team: ${r.team}<br>
      Tier: ${r.tier}<br>
      Expires in: <span id="${countdownId}">Loading...</span><br>
      Players: ${r.joined.length}/${r.maxPlayers}<br>
      <button onclick="joinRaid('${raidId}')">Join Raid</button>
    `;

    container.appendChild(card);
  });
}

// --- Update Countdown Timer ---
function updateCountdowns() {
  const now = new Date();
  const cards = document.querySelectorAll(".raid-card");

  cards.forEach((card) => {
    const timestamp = card.dataset.timestamp;
    const countdownId = card.dataset.countdownId;

    const countdownEl = document.getElementById(countdownId);
    if (!countdownEl || !timestamp) return;

    const timeRemaining = 10 * 60 * 1000 - (now - new Date(timestamp));
    if (timeRemaining <= 0) {
      countdownEl.textContent = "Expired";
    } else {
      const minutes = Math.floor(timeRemaining / 60000);
      const seconds = Math.floor((timeRemaining % 60000) / 1000);
      countdownEl.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  });
}

// --- Post Chat Message ---
function postChat() {
  const name = document.getElementById("chat-name").value.trim();
  const message = document.getElementById("chat-message").value.trim();
  if (!name || !message) return alert("Please fill out name and message");

  const chatEntry = {
    id: Date.now(),
    name,
    message,
    timestamp: new Date().toISOString(),
    likes: 0,
  };

  chat.push(chatEntry);
  localStorage.setItem("chat", JSON.stringify(chat));
  displayChat();
  document.getElementById("chat-message").value = "";
}

// --- Display Chat (with messages expiring after 24 hours) ---
function displayChat() {
  const now = new Date();
  chat = chat.filter((msg) => now - new Date(msg.timestamp) < 24 * 60 * 60 * 1000);
  localStorage.setItem("chat", JSON.stringify(chat));

  const container = document.getElementById("chat-messages");
  container.innerHTML = "";

  chat.forEach((msg) => {
    const div = document.createElement("div");
    div.className = "chat-message";

    const isLiked = likedChatMessages.includes(msg.id);
    const likeButtonClass = isLiked ? "like-button liked" : "like-button";

    div.innerHTML = `
      <strong>${msg.name}:</strong> ${msg.message}
      <button class="${likeButtonClass}" onclick="toggleLikeMessage(${msg.id})">
        ❤️ ${msg.likes}
      </button>
    `;
    container.appendChild(div);
  });
}

// --- Toggle Like on Chat Message ---
function toggleLikeMessage(id) {
  const msgIndex = chat.findIndex((msg) => msg.id === id);
  if (msgIndex === -1) return;

  const likedIndex = likedChatMessages.indexOf(id);
  if (likedIndex === -1) {
    chat[msgIndex].likes = (chat[msgIndex].likes || 0) + 1;
    likedChatMessages.push(id);
  } else {
    chat[msgIndex].likes = Math.max((chat[msgIndex].likes || 1) - 1, 0);
    likedChatMessages.splice(likedIndex, 1);
  }

  localStorage.setItem("chat", JSON.stringify(chat));
  localStorage.setItem("likedChatMessages", JSON.stringify(likedChatMessages));
  displayChat();
}

// --- Info Button ---
function showInfo() {
  alert(
    "How to Use:\n" +
    "- Click 'Join Raid' and enter your trainer name to join that raid.\n" +
    "- Click '⭐' to favorite raids; favorited raids will move to the top.\n" +
    "- Chat messages older than 24 hours are automatically removed.\n" +
    "- Raids expire after 10 minutes and are removed.\n" +
    "- Click '📋' to copy the friend code.\n" +
    "- Type Shadow, Dynamax, or Gigantamax before the pokemon's name to distinguish those raids."
  );
}

// --- Event Listeners for Filters ---
if (document.getElementById("search-boss")) {
  document.getElementById("search-boss").addEventListener("input", renderRaidList);
}
if (document.getElementById("filter-team")) {
  document.getElementById("filter-team").addEventListener("change", renderRaidList);
}

const darkToggleBtn = document.getElementById('dark-toggle');

function updateDarkModeIcon(isDark) {
  if (darkToggleBtn) {
    darkToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
}

// Apply saved dark mode setting on load
window.addEventListener('DOMContentLoaded', () => {
  const darkModeSetting = localStorage.getItem('darkMode');
  const isDark = darkModeSetting === 'enabled';
  document.body.classList.toggle('dark-mode', isDark);
  updateDarkModeIcon(isDark);
});

// Toggle dark mode and save preference
if (darkToggleBtn) {
  darkToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    updateDarkModeIcon(isDark);
    renderRaidList();
    displayChat();
  });
}

// --- Initial Calls ---
displayChat();
renderRaidList();
setInterval(updateCountdowns, 1000);
