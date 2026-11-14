
/*
 * Aparna's 16th Birthday Website
 * --------------------------------
 * Works immediately in browser-only preview mode using localStorage.
 * To sync RSVPs and votes between friends' devices, add the Supabase URL
 * and anon key below and run supabase-setup.sql in your Supabase project.
 */

// CLOUD SETUP: paste your project's values here to enable shared voting.
const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const GUESTS = ["Anvi", "Maanya", "Eliana", "Aanya", "Sravya", "Anoushka", "Varsha", "Kearthi", "Savi", "Samhita"];

const CRAFTS = [
  { id: "cookies", name: "Cookie Decorating", emoji: "🍪" },
  { id: "snowglobe", name: "Snow Globe Making", emoji: "❄️" },
  { id: "magnets", name: "Clay Magnets", emoji: "🧲" },
  { id: "frames", name: "Photo Frame Decorating", emoji: "🖼️" },
  { id: "caps", name: "Baseball Cap Painting & Decorating", emoji: "🧢" }
];

const WISHLIST = {
  small: [
    { title: "Trolli Sour Brite Crawlers", emoji: "🐛", note: "A sweet-and-sour treat", url: "https://www.walmart.com/ip/365639425" },
    { title: "Cadbury Dairy Milk Bar", emoji: "🍫", note: "Classic milk chocolate", url: "https://www.walmart.com/ip/10449888" },
    { title: "Nutter Butter Cookies", emoji: "🥜", note: "Peanut butter sandwich cookies", url: "https://www.walmart.com/ip/137950205" },
    { title: "Flamin' Hot Cheetos", emoji: "🌶️", note: "A little spicy snack", url: "https://www.walmart.com/ip/14823320533" },
    { title: "Mini Detail Paint Brushes", emoji: "🖌️", note: "For tiny creative details", url: "https://www.amazon.com/dp/B09HH97QTK" },
    { title: "Eyeglass Cleaning Cloths", emoji: "🫧", note: "Useful little essentials", url: "https://www.amazon.com/dp/B0D8HP24TP" },
    { title: "Seamless Hair Elastics", emoji: "🎀", note: "Everyday hair ties", url: "https://www.amazon.com/dp/B0DB1HPB3J" },
    { title: "Coquette Waterproof Stickers", emoji: "🎀", note: "Decorative sticker pack", url: "https://www.amazon.com/dp/B0CYNZ1K6H" },
    { title: "Aesthetic Scrapbook Stickers", emoji: "🌷", note: "For journals and notebooks", url: "https://www.amazon.com/dp/B0C8T7G5PX" }
  ],
  mid: [
    { title: "Arcane-Inspired Sticker Pack", emoji: "⚙️", note: "For laptops and notebooks", url: "https://www.amazon.com/dp/B09NTHCZ89" },
    { title: "My Little Pony Squishy", emoji: "🦄", note: "A little nostalgic collectible", url: "https://www.amazon.com/dp/B01M711DEV" },
    { title: "Spot It! Classic Card Game", emoji: "🔎", note: "A quick game for friends", url: "https://www.amazon.com/dp/B0D51F42SW" },
    { title: "Aesthetic Sticker Set", emoji: "✨", note: "More stickers for decorating", url: "https://www.amazon.com/dp/B0C9M64RPD" },
    { title: "Bright Cardstock Sheets", emoji: "📄", note: "Colorful paper for projects", url: "https://www.amazon.com/dp/B003A2I5T8" },
    { title: "Double-Sided Craft Paper", emoji: "🎨", note: "For cards and scrapbooking", url: "https://www.amazon.com/dp/B0F99ST1PR" },
    { title: "Snoopy Plush", emoji: "🐶", note: "A soft Peanuts friend", url: "https://www.amazon.com/dp/B0D54W9TXQ" },
    { title: "DAS Air-Dry Modeling Clay", emoji: "🪴", note: "For small sculpting projects", url: "https://www.amazon.com/dp/B001GAP4YA" },
    { title: "Sharpie Highlighters", emoji: "🖍️", note: "Bright colors for notes", url: "https://www.amazon.com/dp/B0C1HQZ4VY" },
    { title: "EXPO Marker Starter Set", emoji: "📝", note: "Markers for a mini whiteboard", url: "https://www.amazon.com/dp/B000MK2PZ6" },
    { title: "Portable Double-Sided Whiteboard", emoji: "📋", note: "For brainstorming and doodling", url: "https://www.amazon.com/dp/B0CDGVZ812" },
    { title: "LEGO Botanicals Daisies", emoji: "🌼", note: "A cheerful little build", url: "https://www.amazon.com/dp/B0FMS7CRHX" }
  ],
  bigger: [
    { title: "My Little Pony Collectible Cards", emoji: "🃏", note: "Collectible character cards", url: "https://www.amazon.com/dp/B0H8RQL1PV" },
    { title: "GUND Sanrio Unicorn Plush", emoji: "🦄", note: "A colorful plush companion", url: "https://www.amazon.com/dp/B0BYPQG4MS" },
    { title: "TeeTurtle Rainbow Cloudheads Plush", emoji: "☁️", note: "A soft, colorful plushie", url: "https://www.amazon.com/dp/B0FLRRS62M" },
    { title: "Squishmallows Plush", emoji: "🧸", note: "A soft collectible plush", url: "https://www.amazon.com/dp/B0BQ53KPR1" },
    { title: "Harry Potter Funko Pop", emoji: "⚡", note: "A wizarding-world collectible", url: "https://www.amazon.com/dp/B00TQ6RORQ" },
    { title: "Marauders Map Tapestry", emoji: "🗺️", note: "A Harry Potter room accent", url: "https://www.amazon.com/dp/B00BT17YVC" },
    { title: "Hermione Granger Funko Pop", emoji: "📚", note: "A favorite character collectible", url: "https://www.amazon.com/dp/B00TQ4ZSFS" },
    { title: "LEGO Creator Camera", emoji: "📷", note: "A creative display build", url: "https://www.amazon.com/dp/B0CGY3FHDR" },
    { title: "Caitlyn Funko Pop", emoji: "🔹", note: "Arcane character collectible", url: "https://www.amazon.com/dp/B0D6D5PZGJ" },
    { title: "My Little Pony Funko Figure", emoji: "🌈", note: "A character collectible", url: "https://www.amazon.com/dp/B08HH6CWZR" },
    { title: "LEGO Botanicals Set", emoji: "🌿", note: "A decorative botanical build", url: "https://www.amazon.com/dp/B0G2SZQS1C" },
    { title: "Botanical Building Flowers", emoji: "💐", note: "A bouquet-style building set", url: "https://www.amazon.com/dp/B0CR1BCQ3R" },
    { title: "Butterfly Building Set", emoji: "🦋", note: "A butterfly-themed build", url: "https://www.amazon.com/dp/B0F8QK1DL8" },
    { title: "Butterfly Construction Kit", emoji: "🦋", note: "A decorative butterfly build", url: "https://www.amazon.com/dp/B0D4HDPBK7" },
    { title: "Butterfly Necklace", emoji: "🦋", note: "A delicate butterfly accessory", url: "https://www.amazon.com/dp/B0D3KT3TT5" },
    { title: "Luminous Butterfly Necklace", emoji: "✨", note: "A glowing butterfly accessory", url: "https://www.amazon.com/dp/B0H79DLVFM" },
    { title: "Uni-ball Colored Pens", emoji: "🖊️", note: "Colorful pens for writing", url: "https://www.amazon.com/dp/B00DT81OZK" }
  ]
};

const STORAGE_KEY = "aparnas16BirthdayV1";
const VOTER_KEY = "aparnas16VoterId";

const emptyState = () => ({
  rsvps: {},
  planVotes: {},
  craftVotes: [],
  suggestions: [],
  suggestionVotes: []
});

let state = emptyState();
let cloudClient = null;
let cloudReady = false;
let toastTimer = null;

function makeId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `voter-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getVoterId() {
  let id = localStorage.getItem(VOTER_KEY);
  if (!id) {
    id = makeId();
    localStorage.setItem(VOTER_KEY, id);
  }
  return id;
}

const voterId = getVoterId();

function readLocalState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && typeof saved === "object") {
      return { ...emptyState(), ...saved };
    }
  } catch (error) {
    console.warn("Could not read saved birthday data:", error);
  }
  return emptyState();
}

function saveLocalState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save birthday data:", error);
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2700);
}

function setSyncStatus(text, mode) {
  const node = document.getElementById("syncStatus");
  if (!node) return;
  node.textContent = text;
  node.dataset.mode = mode || "local";
}

async function setupCloud() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !window.supabase) {
    cloudReady = false;
    setSyncStatus("Preview mode · responses are saved in this browser only", "local");
    return;
  }

  try {
    cloudClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    await refreshCloudData();
    cloudReady = true;
    setSyncStatus("Shared mode · RSVPs and votes sync across devices", "cloud");
  } catch (error) {
    console.error("Cloud setup failed:", error);
    cloudReady = false;
    setSyncStatus("Preview mode · cloud connection could not be reached", "local");
  }
}

async function refreshCloudData() {
  if (!cloudClient) return;

  const names = [
    "rsvps",
    "plan_votes",
    "craft_votes",
    "craft_suggestions",
    "suggestion_votes"
  ];

  const responses = await Promise.all(
    names.map(name => cloudClient.from(name).select("*"))
  );

  const failed = responses.find(result => result.error);
  if (failed) throw failed.error;

  const [rsvps, planVotes, craftVotes, suggestions, suggestionVotes] =
    responses.map(result => result.data || []);

  state = {
    rsvps: Object.fromEntries(rsvps.map(row => [row.guest, row.status])),
    planVotes: Object.fromEntries(planVotes.map(row => [row.voter_id, row.choice])),
    craftVotes: craftVotes.map(row => ({
      voter_id: row.voter_id,
      craft_id: row.craft_id
    })),
    suggestions: suggestions.map(row => ({
      id: row.id,
      creator: row.creator,
      idea: row.idea,
      created_at: row.created_at
    })),
    suggestionVotes: suggestionVotes.map(row => ({
      voter_id: row.voter_id,
      suggestion_id: row.suggestion_id
    }))
  };

  saveLocalState();
  renderAll();
}

async function cloudAction(action) {
  if (!cloudReady || !cloudClient) return false;

  try {
    const result = await action();
    if (result && result.error) throw result.error;
    await refreshCloudData();
    return true;
  } catch (error) {
    console.error("Could not sync this change:", error);
    showToast("Saved here, but cloud sync had a problem.");
    setSyncStatus("Cloud sync issue · changes may be local only", "local");
    return false;
  }
}

function populateGuestSelects() {
  const options = GUESTS.map(name =>
    `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`
  ).join("");

  ["rsvpGuest", "suggestionCreator"].forEach(id => {
    const select = document.getElementById(id);
    select.insertAdjacentHTML("beforeend", options);
  });
}

async function saveRsvp(status) {
  const guest = document.getElementById("rsvpGuest").value;
  const message = document.getElementById("rsvpMessage");

  if (!guest) {
    message.textContent = "Please choose your name first.";
    showToast("Choose your name before RSVPing.");
    return;
  }

  state.rsvps[guest] = status;
  saveLocalState();
  renderAll();

  document.getElementById("rsvpYes").classList.toggle("selected", status === "yes");
  document.getElementById("rsvpNo").classList.toggle("selected", status === "no");

  message.textContent = status === "yes"
    ? `You're on the list, ${guest}! See you there ✨`
    : `Thanks for letting me know, ${guest}.`;

  if (status === "yes") launchConfetti();

  showToast(status === "yes"
    ? "RSVP saved — can't wait to celebrate!"
    : "Your RSVP has been updated."
  );

  if (cloudReady) {
    const ok = await cloudAction(() =>
      cloudClient.from("rsvps").upsert({
        guest,
        status,
        updated_at: new Date().toISOString()
      })
    );

    if (ok) {
      message.textContent = status === "yes"
        ? "Your RSVP is saved and shared with the guest list."
        : "Your response is saved and shared with the guest list.";
    }
  }
}

async function castPlanVote(choice) {
  state.planVotes[voterId] = choice;
  saveLocalState();
  renderPlanVotes();

  showToast(choice === "olive"
    ? "Your vote for Olive Garden is in!"
    : "Your vote for Crafts + Dinner is in!"
  );

  if (cloudReady) {
    await cloudAction(() =>
      cloudClient.from("plan_votes").upsert({ voter_id: voterId, choice })
    );
  }
}

async function toggleCraftVote(craftId) {
  const exists = state.craftVotes.some(
    vote => vote.voter_id === voterId && vote.craft_id === craftId
  );

  const current = state.craftVotes.filter(
    vote => vote.voter_id === voterId
  );

  if (!exists && current.length >= 2) {
    showToast("You can choose up to two crafts.");
    return;
  }

  if (exists) {
    state.craftVotes = state.craftVotes.filter(
      vote => !(vote.voter_id === voterId && vote.craft_id === craftId)
    );
  } else {
    state.craftVotes.push({ voter_id: voterId, craft_id: craftId });
  }

  saveLocalState();
  renderCrafts();

  if (cloudReady) {
    await cloudAction(async () => {
      if (exists) {
        return cloudClient
          .from("craft_votes")
          .delete()
          .eq("voter_id", voterId)
          .eq("craft_id", craftId);
      }

      return cloudClient.from("craft_votes").insert({
        voter_id: voterId,
        craft_id: craftId
      });
    });
  }
}

async function addSuggestion(event) {
  event.preventDefault();

  const creator = document.getElementById("suggestionCreator").value;
  const input = document.getElementById("suggestionText");
  const idea = input.value.trim();
  const message = document.getElementById("suggestionMessage");

  if (!creator || !idea) {
    message.textContent = "Choose your name and add a craft idea.";
    return;
  }

  if (idea.length > 70) {
    message.textContent = "Keep your idea under 70 characters.";
    return;
  }

  if (cloudReady) {
    const result = await cloudClient
      .from("craft_suggestions")
      .insert({ creator, idea })
      .select()
      .single();

    if (result.error) {
      console.error(result.error);
      message.textContent = "That idea couldn't be synced. Please try again.";
      return;
    }

    await refreshCloudData();
  } else {
    state.suggestions.unshift({
      id: `local-${makeId()}`,
      creator,
      idea,
      created_at: new Date().toISOString()
    });

    saveLocalState();
    renderSuggestions();
  }

  input.value = "";
  message.textContent = "Added! Everyone can vote for your idea.";
  showToast("Your craft idea has been added ✨");
}

async function toggleSuggestionVote(suggestionId) {
  const exists = state.suggestionVotes.some(
    vote => vote.voter_id === voterId && vote.suggestion_id === suggestionId
  );

  if (exists) {
    state.suggestionVotes = state.suggestionVotes.filter(
      vote => !(vote.voter_id === voterId && vote.suggestion_id === suggestionId)
    );
  } else {
    state.suggestionVotes.push({
      voter_id: voterId,
      suggestion_id: suggestionId
    });
  }

  saveLocalState();
  renderSuggestions();

  if (cloudReady) {
    await cloudAction(async () => {
      if (exists) {
        return cloudClient
          .from("suggestion_votes")
          .delete()
          .eq("voter_id", voterId)
          .eq("suggestion_id", suggestionId);
      }

      return cloudClient.from("suggestion_votes").insert({
        voter_id: voterId,
        suggestion_id: suggestionId
      });
    });
  }
}

function renderPlanVotes() {
  const counts = { olive: 0, crafts: 0 };

  Object.values(state.planVotes).forEach(choice => {
    if (counts[choice] !== undefined) counts[choice]++;
  });

  const total = counts.olive + counts.crafts;
  const olivePct = total ? Math.round(counts.olive / total * 100) : 0;
  const craftsPct = total ? 100 - olivePct : 0;

  document.getElementById("oliveVotes").textContent = counts.olive;
  document.getElementById("craftsVotes").textContent = counts.crafts;
  document.getElementById("olivePercent").textContent = `${olivePct}%`;
  document.getElementById("craftsPercent").textContent = `${craftsPct}%`;
  document.getElementById("oliveBar").style.width = `${olivePct}%`;
  document.getElementById("craftsBar").style.width = `${craftsPct}%`;

  document.querySelectorAll(".vote-plan").forEach(button => {
    const selected = state.planVotes[voterId] === button.dataset.choice;

    button.innerHTML = selected
      ? `Your vote is in <span>✓</span>`
      : `${button.dataset.choice === "olive"
          ? "Vote for Olive Garden"
          : "Vote for Crafts + Olive Garden"} <span>→</span>`;

    button.classList.toggle("selected-vote", selected);
  });
}

function renderCrafts() {
  const mine = state.craftVotes
    .filter(vote => vote.voter_id === voterId)
    .map(vote => vote.craft_id);

  document.getElementById("craftSelectionCount").textContent = `${mine.length}/2`;

  const counts = Object.fromEntries(CRAFTS.map(craft => [craft.id, 0]));

  state.craftVotes.forEach(vote => {
    if (counts[vote.craft_id] !== undefined) counts[vote.craft_id]++;
  });

  const maxVotes = Math.max(1, ...Object.values(counts));

  const ranked = [...CRAFTS].sort(
    (a, b) => counts[b.id] - counts[a.id] || CRAFTS.indexOf(a) - CRAFTS.indexOf(b)
  );

  CRAFTS.forEach(craft => {
    const button = document.querySelector(`[data-craft="${craft.id}"]`);
    button.classList.toggle("selected", mine.includes(craft.id));

    document.getElementById(`count-${craft.id}`).textContent =
      `${counts[craft.id]} ${counts[craft.id] === 1 ? "vote" : "votes"}`;
  });

  document.getElementById("craftLeaderboard").innerHTML = ranked.map((craft, index) => {
    const top = state.craftVotes.length > 0 && index < 2;
    const width = counts[craft.id] / maxVotes * 100;

    return `<div class="leader-row">
      <div class="leader-rank">${String(index + 1).padStart(2, "0")}</div>
      <div class="leader-main">
        <div class="leader-name">
          <span>${craft.emoji} ${craft.name}</span>
          ${top ? '<span class="top-badge">TOP 2</span>' : ""}
        </div>
        <div class="leader-track"><span style="width:${width}%"></span></div>
      </div>
      <div class="leader-votes">${counts[craft.id]}</div>
    </div>`;
  }).join("");
}

function renderSuggestions() {
  const voteCounts = {};

  state.suggestionVotes.forEach(vote => {
    voteCounts[vote.suggestion_id] = (voteCounts[vote.suggestion_id] || 0) + 1;
  });

  const suggestions = [...state.suggestions].sort(
    (a, b) =>
      (voteCounts[b.id] || 0) - (voteCounts[a.id] || 0) ||
      new Date(b.created_at) - new Date(a.created_at)
  );

  document.getElementById("suggestionTotal").textContent =
    `${suggestions.length} ${suggestions.length === 1 ? "IDEA" : "IDEAS"}`;

  const list = document.getElementById("suggestionList");

  if (!suggestions.length) {
    list.innerHTML = '<div class="empty-state">No extra ideas yet. Yours could be the first ✧</div>';
    return;
  }

  const maxSuggestionVotes = Math.max(
    1,
    ...suggestions.map(item => voteCounts[item.id] || 0)
  );

  list.innerHTML = suggestions.map(suggestion => {
    const votes = voteCounts[suggestion.id] || 0;

    const voted = state.suggestionVotes.some(
      vote => vote.voter_id === voterId && vote.suggestion_id === suggestion.id
    );

    const width = votes / maxSuggestionVotes * 100;

    return `<article class="suggestion-card">
      <div class="suggestion-avatar">${escapeHtml(suggestion.creator.slice(0, 1).toUpperCase())}</div>
      <div class="suggestion-info">
        <strong>${escapeHtml(suggestion.idea)}</strong>
        <small>Suggested by ${escapeHtml(suggestion.creator)}</small>
        <div class="suggestion-meter"><span style="width:${width}%"></span></div>
      </div>
      <button class="suggestion-vote ${voted ? "voted" : ""}" data-suggestion-vote="${escapeHtml(suggestion.id)}" type="button">
        ${voted ? "♥ " : "♡ "}${votes}
      </button>
    </article>`;
  }).join("");
}

function renderGuests() {
  const order = { yes: 0, none: 1, no: 2 };

  const rows = GUESTS
    .map(name => ({ name, status: state.rsvps[name] || "none" }))
    .sort((a, b) =>
      order[a.status] - order[b.status] || a.name.localeCompare(b.name)
    );

  const yes = rows.filter(row => row.status === "yes").length;
  const no = rows.filter(row => row.status === "no").length;

  document.getElementById("attendingTotal").textContent = yes;
  document.getElementById("notAttendingTotal").textContent = no;
  document.getElementById("noResponseTotal").textContent = rows.length - yes - no;

  document.getElementById("guestList").innerHTML = rows.map(({ name, status }) => {
    const label = status === "yes"
      ? "Attending"
      : status === "no"
        ? "Not attending"
        : "No response yet";

    const className = status === "yes"
      ? "status-attending"
      : status === "no"
        ? "status-declined"
        : "status-pending";

    return `<div class="guest-row">
      <div class="guest-name">
        <span class="guest-initial">${escapeHtml(name.slice(0, 1))}</span>
        ${escapeHtml(name)}
      </div>
      <span class="status-badge ${className}">${label}</span>
    </div>`;
  }).join("");
}

function renderWishlist() {
  const budget = Number(document.getElementById("budgetSlider").value);
  const valueLabel = document.getElementById("budgetValue");
  const slider = document.getElementById("budgetSlider");

  valueLabel.textContent = `$${budget}`;

  slider.style.background =
    `linear-gradient(90deg,#b5e1ff ${budget / 20 * 100}%,rgba(167,216,255,.16) ${budget / 20 * 100}%)`;

  let key, title;

  if (budget <= 5) {
    key = "small";
    title = "Little treats · $0–$5";
  } else if (budget <= 10) {
    key = "mid";
    title = "Creative finds · $5–$10";
  } else {
    key = "bigger";
    title = "Something special · $10–$20";
  }

  const products = WISHLIST[key];

  document.getElementById("wishlistRangeTitle").textContent = title;
  document.getElementById("wishlistItemCount").textContent = `${products.length} IDEAS`;

  document.getElementById("wishlistGrid").innerHTML = products.map(product => `
    <article class="wish-card">
      <div class="wish-thumb" aria-hidden="true">${product.emoji}</div>
      <div class="wish-info">
        <h4>${escapeHtml(product.title)}</h4>
        <p>${escapeHtml(product.note)}</p>
        <a href="${escapeHtml(product.url)}" target="_blank" rel="noopener noreferrer">
          View item <span>↗</span>
        </a>
      </div>
    </article>
  `).join("");
}

function renderAll() {
  renderPlanVotes();
  renderCrafts();
  renderSuggestions();
  renderGuests();
  renderWishlist();

  const selectedGuest = document.getElementById("rsvpGuest").value;
  const status = selectedGuest ? state.rsvps[selectedGuest] : null;

  document.getElementById("rsvpYes").classList.toggle("selected", status === "yes");
  document.getElementById("rsvpNo").classList.toggle("selected", status === "no");
}

function launchConfetti() {
  const layer = document.getElementById("confettiLayer");
  const colors = ["#a7d8ff", "#e1f3ff", "#7db6e9", "#d4c7ff", "#f0d9a6"];

  for (let i = 0; i < 76; i++) {
    const piece = document.createElement("i");

    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--fall", `${2.5 + Math.random() * 2.3}s`);
    piece.style.setProperty("--drift", `${Math.round((Math.random() - .5) * 250)}px`);
    piece.style.animationDelay = `${Math.random() * .45}s`;

    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 5600);
  }
}

function createSparkles() {
  const field = document.getElementById("sparkleField");
  const symbols = ["✦", "✧", "·", "⋆"];

  for (let i = 0; i < 42; i++) {
    const star = document.createElement("span");

    star.className = "sparkle";
    star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.fontSize = `${7 + Math.random() * 11}px`;
    star.style.setProperty("--duration", `${3 + Math.random() * 5}s`);
    star.style.setProperty("--delay", `${-Math.random() * 5}s`);

    field.appendChild(star);
  }
}

function updateCountdown() {
  const target = new Date("2026-12-05T16:00:00-05:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);

  document.getElementById("daysLeft").textContent = days;
  document.getElementById("hoursLeft").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutesLeft").textContent = String(minutes).padStart(2, "0");
}

function setupInteractions() {
  document.getElementById("rsvpYes").addEventListener("click", () => saveRsvp("yes"));
  document.getElementById("rsvpNo").addEventListener("click", () => saveRsvp("no"));

  document.getElementById("rsvpGuest").addEventListener("change", () => {
    const guest = document.getElementById("rsvpGuest").value;
    const status = state.rsvps[guest];

    document.getElementById("rsvpMessage").textContent = status
      ? `Current response: ${status === "yes" ? "Attending" : "Not attending"}. You can change it below.`
      : "Your response will appear in the guest list.";

    document.getElementById("rsvpYes").classList.toggle("selected", status === "yes");
    document.getElementById("rsvpNo").classList.toggle("selected", status === "no");
  });

  document.querySelectorAll(".vote-plan").forEach(button =>
    button.addEventListener("click", () => castPlanVote(button.dataset.choice))
  );

  document.getElementById("craftGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-craft]");
    if (button) toggleCraftVote(button.dataset.craft);
  });

  document.getElementById("suggestionForm").addEventListener("submit", addSuggestion);

  document.getElementById("suggestionList").addEventListener("click", event => {
    const button = event.target.closest("[data-suggestion-vote]");
    if (button) toggleSuggestionVote(button.dataset.suggestionVote);
  });

  document.getElementById("budgetSlider").addEventListener("input", renderWishlist);

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () =>
    backToTop.classList.toggle("visible", window.scrollY > 550),
    { passive: true }
  );

  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  window.addEventListener("storage", event => {
    if (event.key === STORAGE_KEY && !cloudReady) {
      state = readLocalState();
      renderAll();
    }
  });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: .12,
    rootMargin: "0px 0px -35px 0px"
  });

  elements.forEach(el => observer.observe(el));
}

function setupActiveNavigation() {
  if (!("IntersectionObserver" in window)) return;

  const sections = ["home", "rsvp", "vote", "crafts", "invitees", "wishlist"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const links = [...document.querySelectorAll(".nav-links a")];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          )
        );
      }
    });
  }, {
    rootMargin: "-32% 0px -58% 0px"
  });

  sections.forEach(section => observer.observe(section));
}

async function init() {
  state = readLocalState();

  populateGuestSelects();
  createSparkles();
  setupInteractions();
  setupRevealAnimations();
  setupActiveNavigation();

  updateCountdown();
  setInterval(updateCountdown, 60000);

  renderAll();

  await setupCloud();

  if (cloudReady) {
    setInterval(
      () => refreshCloudData().catch(error =>
        console.warn("Cloud refresh failed:", error)
      ),
      18000
    );
  }

  document.getElementById("loadingScreen").classList.add("is-hidden");
}

document.addEventListener("DOMContentLoaded", init);
