const fs = require("fs");

// Load data
const projects = JSON.parse(
  fs.readFileSync("data/projects.json", "utf-8")
);

const template = fs.readFileSync(
  "project-template.html",
  "utf-8"
);

// ---------- helpers ----------

function renderTags(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join("\n");
}

function renderDescription(text) {
  return text
    .split("\n\n")
    .map(p => `<p>${p}</p>`)
    .join("\n");
}

function renderLinks(project) {
  const links = [];

  if (project.github) {
    links.push(
      `<a href="${project.github}" target="_blank">
        <i class="fa fa-github"></i> Code
      </a>`
    );
  }

  if (project.pdf) {
    links.push(
      `<a href="${project.pdf}" target="_blank">
        <i class="fa fa-file-pdf-o"></i> PDF
      </a>`
    );
  }

  return links.length ? links.join(" • ") : "";
}

function renderThumbnail(project) {
  if (!project.thumbnail) return "";
  return `
    <figure>
      <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />
    </figure>
  `;
}

function renderPdfEmbed(project) {
  if (!project.pdf) return "";
  return `
    <section style="margin-top: 3rem;">
      <h3>Report / Poster</h3>
      <iframe
        src="${project.pdf}"
        width="100%"
        height="600"
        style="border: 1px solid #ccc;"
      ></iframe>
    </section>
  `;
}

// ---------- generation ----------

projects.forEach(project => {
  let html = template;

  html = html.replace(/{{title}}/g, project.title);
  html = html.replace("{{type}}", project.type);
  html = html.replace("{{date}}", project.date);
  html = html.replace("{{tags}}", renderTags(project.tags));
  html = html.replace("{{links}}", renderLinks(project));
  html = html.replace("{{description}}", renderDescription(project.description));
  html = html.replace("{{thumbnail}}", renderThumbnail(project));
  html = html.replace("{{pdf_embed}}", renderPdfEmbed(project));

  const outFile = `project-${project.id}.html`;
  fs.writeFileSync(outFile, html);

  console.log(`✔ Generated ${outFile}`);
});
