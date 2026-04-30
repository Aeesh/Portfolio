/**
 * render.js — reads data.js constants and builds the entire page.
 *
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV ──────────────────────────────────────────────────────────
  document.querySelector('.nav-logo').innerHTML = `${BIO.initials}<span>.</span>`;
  document.querySelector('.nav-cta').href = `mailto:${BIO.email}`;

  // ── HERO ─────────────────────────────────────────────────────────
  document.getElementById('hero-tag').textContent = BIO.tagline;
  document.getElementById('hero-name').innerHTML =
    BIO.name.split(' ').map((w, i) => i === 1 ? `<em>${w}</em>` : w).join('<br>');
  document.getElementById('hero-blurb').textContent = BIO.blurb;
  document.querySelector('.hero-ctas').innerHTML = `
    <a href="#projects" class="btn btn-primary">View Projects</a>
    <a href="${BIO.github}" target="_blank" class="btn btn-ghost">GitHub ↗</a>
    <a href="${BIO.linkedin}" target="_blank" class="btn btn-ghost">LinkedIn ↗</a>
  `;

  // hero stats card
  const statsEl = document.getElementById('hero-stats');
  statsEl.innerHTML = STATS.map((s, i) => `
    <div class="hero-stat">
      <div class="stat-val">${s.val}</div>
      <div class="stat-label">${s.label}</div>
    </div>
    ${i < STATS.length - 1 ? '<div class="hero-divider"></div>' : ''}
  `).join('') + `
    <div class="hero-divider"></div>
    <div>
      <div class="open-to-label">Open to</div>
      <div class="open-to-tags">
        ${OPEN_TO.map(t => `<span class="open-tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  // ── ABOUT ─────────────────────────────────────────────────────────
  document.getElementById('about-text').innerHTML =
    BIO.about.map(p => `<p>${p}</p>`).join('');
  document.getElementById('about-currently').innerHTML = BIO.currently;
  document.getElementById('about-education').innerHTML = BIO.education;
  document.getElementById('about-contact').innerHTML = `
    <a href="mailto:${BIO.email}">${BIO.email}</a><br>
    <a href="${BIO.github}" target="_blank">${BIO.github.replace('https://', '')}</a><br>
    <a href="${BIO.linkedin}" target="_blank">LinkedIn</a>
  `;

  // ── PROJECTS ──────────────────────────────────────────────────────
  const container = document.getElementById('projects-container');

  const featured = PROJECTS.find(p => p.featured);
  if (featured) {
    container.appendChild(buildFeaturedCard(featured));
  }

  // group non-featured by rowGroup
  const nonFeatured = PROJECTS.filter(p => !p.featured);
  const groups = {};
  nonFeatured.forEach(p => {
    const g = p.rowGroup ?? 'ungrouped';
    if (!groups[g]) groups[g] = [];
    groups[g].push(p);
  });

  Object.values(groups).forEach(group => {
    const size = group[0].groupSize || 3;
    const row = document.createElement('div');
    row.className = `projects-row projects-row-${size === 2 ? '2' : size === 3 ? '3' : ''}`;
    group.forEach(p => row.appendChild(buildCard(p)));
    container.appendChild(row);
  });

  // ── EXPERIENCE ────────────────────────────────────────────────────
  const timeline = document.getElementById('exp-timeline');
  timeline.innerHTML = EXPERIENCE.map(e => `
    <div class="exp-item">
      <div>
        <div class="exp-period">${e.period}</div>
        <div class="exp-org">${e.org}</div>
      </div>
      <div>
        <div class="exp-role">${e.role}</div>
        <div class="exp-desc">
          ${e.bullets.length > 1
            ? `<ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
            : `<p>${e.bullets[0] || ''}</p>`}
        </div>
      </div>
    </div>
  `).join('');

  // ── SKILLS ───────────────────────────────────────────────────────
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = SKILLS.map(g => `
    <div class="skill-group">
      <div class="skill-group-label">${g.label}</div>
      <div class="skill-tags">
        ${g.items.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // ── CONTACT ──────────────────────────────────────────────────────
  document.getElementById('contact-open').innerHTML =
    OPEN_TO.slice(0, 3).join(', ') + (OPEN_TO.length > 3 ? ', and more' : '');
  document.getElementById('contact-links').innerHTML = [
    { type: 'Email', val: BIO.email, href: `mailto:${BIO.email}` },
    { type: 'GitHub', val: BIO.github.replace('https://', ''), href: BIO.github },
    { type: 'LinkedIn', val: 'Aisha Opaluwa', href: BIO.linkedin },
  ].map(l => `
    <a href="${l.href}" target="_blank" class="contact-link">
      <div class="cl-meta">
        <span class="cl-type">${l.type}</span>
        <span class="cl-val">${l.val}</span>
      </div>
      <span class="cl-arrow">↗</span>
    </a>
  `).join('');

  document.getElementById('footer-name').textContent = BIO.name;

  // ── NAV SHRINK ON SCROLL ─────────────────────────────────────────
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    nav.style.padding = window.scrollY > 60 ? '0.7rem 3rem' : '1.1rem 3rem';
  });

});

// ── CARD BUILDERS ─────────────────────────────────────────────────────────────

function linksHTML(p) {
  const links = [];
  if (p.liveUrl)        links.push(`<a href="${p.liveUrl}" target="_blank" class="proj-link live">Live Demo ↗</a>`);
  if (p.githubUrl)      links.push(`<a href="${p.githubUrl}" target="_blank" class="proj-link">GitHub ↗</a>`);
  if (p.huggingfaceUrl) links.push(`<a href="${p.huggingfaceUrl}" target="_blank" class="proj-link">HF Hub ↗</a>`);
  return links.length ? `<div class="proj-links">${links.join('')}</div>` : '';
}

function stackHTML(p) {
  return `<div class="proj-stack">${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}</div>`;
}

function highlightsHTML(p) {
  if (!p.highlights.length) return '';
  return `<ul class="proj-highlights">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`;
}

function previewHTML(p) {
  if (p.previewImage) {
    return `<img src="${p.previewImage}" class="preview-img" alt="${p.title} preview">`;
  }
  if (p.liveUrl) {
    return `
      <span class="preview-label">Live</span>
      <iframe src="${p.liveUrl}" class="preview-frame" title="${p.title} preview"></iframe>
    `;
  }
  return `
    <div class="preview-placeholder">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
      <span>Add screenshot to assets/ and set previewImage in data.js</span>
    </div>
  `;
}

function buildFeaturedCard(p) {
  const el = document.createElement('div');
  el.className = 'project-featured';
  el.innerHTML = `
    <div class="project-featured-content">
      <div class="proj-category">${p.category} · ${p.year}</div>
      <div class="proj-title">${p.title}</div>
      <div class="proj-subtitle">${p.subtitle}</div>
      <p class="proj-desc">${p.description.replace(/\n/g, ' ')}</p>
      ${highlightsHTML(p)}
      ${stackHTML(p)}
      ${linksHTML(p)}
    </div>
    <div class="project-featured-preview">
      ${previewHTML(p)}
    </div>
  `;
  return el;
}

function buildCard(p) {
  const el = document.createElement('div');
  el.className = 'project-card';
  el.innerHTML = `
    <div class="proj-category">${p.category}</div>
    <div class="proj-title">${p.title}</div>
    <div class="proj-subtitle">${p.subtitle}</div>
    <p class="proj-desc">${p.description.replace(/\n/g, ' ')}</p>
    ${highlightsHTML(p)}
    ${stackHTML(p)}
    ${linksHTML(p)}
    <span class="proj-year">${p.year}</span>
  `;
  return el;
}
