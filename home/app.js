// Add new redesigns here. `path` is where it lives on microsoft.robbyj.dev.
// Links are made relative ("/main" → "main/") so the page also works under robbidev.github.io/microsoft-redesign/.
const REDESIGNS = [
  {
    name: "Main Website",
    path: "/main",
    description: "A cleaner, less bloated microsoft.com that leans on brand recognition to simplify the journey.",
    status: "Work In Progress",
    caseStudy: "https://github.com/RobbiDev/microsoft-redesign/tree/main/website",
    accent: "#0078d4",
  },
  {
    name: "Copilot",
    path: "/copilot",
    description: "Reimagining the Copilot experience with a more cohesive, consumer-friendly feel.",
    status: "Work In Progress",
    caseStudy: "https://github.com/RobbiDev/microsoft-redesign/blob/main/products/copilot/case-study.md",
    accent: "#8a5cf6",
  },
  {
    name: "SharePoint",
    path: "/sharepoint",
    description: "Bringing a more refined, premium design to an enterprise staple.",
    status: "Work In Progress",
    caseStudy: "https://github.com/RobbiDev/microsoft-redesign/blob/main/products/sharepoint/case-study.md",
    accent: "#038387",
  },
];

const RAW_BASE = "https://raw.githubusercontent.com/RobbiDev/microsoft-redesign/main/";
// README sections handled elsewhere on the page.
const SKIP_SECTIONS = ["directory & links"];

function renderGrid(filter = "") {
  const grid = document.getElementById("grid");
  const q = filter.trim().toLowerCase();
  const items = REDESIGNS.filter((r) =>
    (r.name + " " + r.description + " " + r.status).toLowerCase().includes(q)
  );
  grid.innerHTML = "";
  for (const r of items) {
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--accent", r.accent);
    card.innerHTML = `
      <div class="card-top">
        <span class="badge">${r.status}</span>
        <code>${r.path}</code>
      </div>
      <h3>${r.name}</h3>
      <p>${r.description}</p>
      <div class="card-links">
        <a class="btn primary" href="${r.path.replace(/^\//, "")}/">View redesign</a>
        <a class="btn" href="${r.caseStudy}" target="_blank" rel="noopener">Case study</a>
      </div>`;
    grid.appendChild(card);
  }
  document.getElementById("empty").hidden = items.length > 0;
}

// Keep only the "## " sections of the README (the HTML header is replaced by the hero),
// drop skipped and empty sections.
function extractSections(md) {
  const start = md.indexOf("\n## ");
  const body = start === -1 ? md : md.slice(start + 1);
  return body
    .split(/\n(?=## )/)
    .filter((s) => {
      const [heading, ...rest] = s.split("\n");
      const title = heading.replace(/^##\s*/, "").trim().toLowerCase();
      return !SKIP_SECTIONS.includes(title) && rest.join("").trim().length > 0;
    })
    .join("\n\n");
}

async function loadReadme() {
  const el = document.getElementById("readme");
  // The copy the build puts beside this page first, then GitHub.
  for (const src of ["README.md", RAW_BASE + "README.md"]) {
    try {
      const res = await fetch(src, { cache: "no-cache" });
      if (!res.ok) continue;
      const md = await res.text();
      const html = marked.parse(extractSections(md));
      el.innerHTML = DOMPurify.sanitize(html);
      // Point relative links/images at the repo.
      el.querySelectorAll("img[src^='./'], a[href^='./']").forEach((n) => {
        const attr = n.tagName === "IMG" ? "src" : "href";
        n.setAttribute(attr, RAW_BASE + n.getAttribute(attr).slice(2));
      });
      return;
    } catch (_) {
      // try next source
    }
  }
  el.innerHTML = `<p class="muted">Couldn't load the README. Read it on
    <a href="https://github.com/RobbiDev/microsoft-redesign">GitHub</a>.</p>`;
}

document.getElementById("filter").addEventListener("input", (e) => renderGrid(e.target.value));
renderGrid();
loadReadme();
