/* =================================================================
   Rendering & filtering logic.
   Reads PAPERS and CATEGORIES from papers.js
   ================================================================= */

(function () {
  'use strict';

  const state = {
    activeCategories: new Set(),
    query: '',
    sort: 'year-desc',
  };

  const $list   = document.getElementById('papers-list');
  const $empty  = document.getElementById('papers-empty');
  const $chips  = document.getElementById('chips');
  const $search = document.getElementById('search');
  const $sort   = document.getElementById('sort');

  /* ----- meta strip ----- */
  document.getElementById('meta-count').textContent =
    String(PAPERS.length).padStart(2, '0');
  document.getElementById('meta-cats').textContent =
    String(Object.keys(CATEGORIES).length).padStart(2, '0');
  document.getElementById('meta-updated').textContent = LAST_UPDATED;
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ----- build chips ----- */
  function buildChips() {
    const counts = {};
    Object.keys(CATEGORIES).forEach(k => (counts[k] = 0));
    PAPERS.forEach(p =>
      (p.categories || []).forEach(c => {
        if (counts[c] !== undefined) counts[c] += 1;
      })
    );

    const frag = document.createDocumentFragment();

    const allBtn = document.createElement('button');
    allBtn.className = 'chip is-active';
    allBtn.dataset.cat = '__all';
    allBtn.innerHTML =
      `All <span class="chip__count">${PAPERS.length}</span>`;
    frag.appendChild(allBtn);

    Object.entries(CATEGORIES).forEach(([slug, label]) => {
      const btn = document.createElement('button');
      btn.className = 'chip';
      btn.dataset.cat = slug;
      btn.innerHTML =
        `${label} <span class="chip__count">${counts[slug]}</span>`;
      frag.appendChild(btn);
    });

    $chips.appendChild(frag);

    $chips.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      const cat = btn.dataset.cat;

      if (cat === '__all') {
        state.activeCategories.clear();
      } else {
        if (state.activeCategories.has(cat)) {
          state.activeCategories.delete(cat);
        } else {
          state.activeCategories.add(cat);
        }
      }
      syncChipsUI();
      render();
    });
  }

  function syncChipsUI() {
    $chips.querySelectorAll('.chip').forEach(btn => {
      const cat = btn.dataset.cat;
      if (cat === '__all') {
        btn.classList.toggle('is-active', state.activeCategories.size === 0);
      } else {
        btn.classList.toggle('is-active', state.activeCategories.has(cat));
      }
    });
  }

  /* ----- filter + sort ----- */
  function filtered() {
    const q = state.query.trim().toLowerCase();
    let list = PAPERS.filter(p => {
      if (state.activeCategories.size > 0) {
        const hits = (p.categories || []).some(c => state.activeCategories.has(c));
        if (!hits) return false;
      }
      if (q) {
        const hay = [
          p.title, p.authors, p.venue, String(p.year),
          (p.categories || []).map(c => CATEGORIES[c] || c).join(' '),
          p.tldr || ''
        ].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    switch (state.sort) {
      case 'year-asc':
        list.sort((a, b) => (a.year - b.year) || a.title.localeCompare(b.title));
        break;
      case 'title-asc':
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'year-desc':
      default:
        list.sort((a, b) => (b.year - a.year) || a.title.localeCompare(b.title));
    }
    return list;
  }

  /* ----- render ----- */
  function paperHTML(p) {
    const tags = (p.categories || [])
      .map(c => `<span class="paper__tag">${CATEGORIES[c] || c}</span>`)
      .join('');

    const linkOrder = [
      ['pdf', 'PDF'],
      ['code', 'Code'],
      ['project', 'Project'],
    ];
    const links = linkOrder
      .filter(([key]) => p.links && p.links[key])
      .map(([key, label]) =>
        `<a class="paper__link" href="${p.links[key]}" target="_blank" rel="noopener">${label} ↗</a>`
      )
      .join('');

    const venue = p.venue
      ? `<span class="paper__venue">${escapeHtml(p.venue)}</span>`
      : '';

    const tldr = p.tldr
      ? `<p class="paper__tldr">${escapeHtml(p.tldr)}</p>`
      : '';

    return `
      <li class="paper">
        <div class="paper__year">${p.year}</div>
        <div class="paper__body">
          <h3 class="paper__title">${escapeHtml(p.title)}</h3>
          <p class="paper__authors">${escapeHtml(p.authors)}</p>
          <div>${venue}</div>
          ${tldr}
          <div class="paper__foot">
            <div class="paper__tags">${tags}</div>
            <div class="paper__links">${links}</div>
          </div>
        </div>
      </li>`;
  }

  function render() {
    const list = filtered();
    if (list.length === 0) {
      $list.innerHTML = '';
      $empty.hidden = false;
      return;
    }
    $empty.hidden = true;
    $list.innerHTML = list.map(paperHTML).join('');
  }

  /* ----- listeners ----- */
  $search.addEventListener('input', (e) => {
    state.query = e.target.value;
    render();
  });
  $sort.addEventListener('change', (e) => {
    state.sort = e.target.value;
    render();
  });

  /* ----- bootstrap ----- */
  buildChips();
  render();

  /* ----- helpers ----- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
