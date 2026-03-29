function normalizeSongName(name) {
  return String(name || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const songsListEl = document.getElementById("songsList");
const songSearchInput = document.getElementById("songSearchInput");

const normalizedSongLinks = Object.fromEntries(
  Object.entries(songLinks || {}).map(([key, value]) => [normalizeSongName(key), value])
);

function getAllSongs() {
  const songCountMap = new Map();

  (setlists || []).forEach((live) => {
    const allSongs = [
      ...(live.setlistMain || []),
      ...(live.setlistEncore || [])
    ];

    const uniqueSongsInLive = new Set(
      allSongs.map((song) => normalizeSongName(song)).filter(Boolean)
    );

    uniqueSongsInLive.forEach((song) => {
      songCountMap.set(song, (songCountMap.get(song) || 0) + 1);
    });
  });

  return Array.from(songCountMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.name.localeCompare(b.name, "ja");
    });
}

const allSongs = getAllSongs();

function renderSongs(keyword = "") {
  const q = normalizeSongName(keyword).toLowerCase();

  const filtered = allSongs.filter((song) =>
    song.name.toLowerCase().includes(q)
  );

  if (!filtered.length) {
    songsListEl.innerHTML = `
      <li class="song-item-empty">該当する曲がありません</li>
    `;
    return;
  }

  songsListEl.innerHTML = filtered
    .map((song) => {
      const appleUrl = normalizedSongLinks[song.name];
      const encodedQuery = encodeURIComponent(song.name);

      return `
        <li class="song-item">
          <div class="song-item-main">
            <a href="index.html?q=${encodedQuery}" class="song-name-link">
              ${escapeHtml(song.name)}
            </a>
            <span class="song-count">${song.count}回</span>
          </div>

          <div class="song-item-actions">
            ${
              appleUrl
                ? `<a href="${appleUrl}" target="_blank" rel="noopener noreferrer" class="song-play-btn" aria-label="${escapeHtml(song.name)} を Apple Music で聴く">▶︎</a>`
                : `<span class="song-play-btn is-disabled" aria-hidden="true">▶︎</span>`
            }
          </div>
        </li>
      `;
    })
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

songSearchInput?.addEventListener("input", (e) => {
  renderSongs(e.target.value);
});

renderSongs();
