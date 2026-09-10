import { existsSync, readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const app = read("src/App.jsx");
const css = read("src/index.css");
const html = read("index.html");
const nodeVersion = read(".nvmrc").trim();

const failures = [];

function requireText(source, value, label) {
  if (!source.includes(value)) failures.push(`${label}: missing ${JSON.stringify(value)}`);
}

function forbidText(source, value, label) {
  if (source.includes(value)) failures.push(`${label}: forbidden legacy text ${JSON.stringify(value)}`);
}

for (const value of [
  "Crohnoz Forge",
  "Crohnoz Fresh Market",
  "IncluMe",
  "Rental Operations",
  "L2+ · ADVANCED PILOT / PRODUCTION-ORIENTED",
  "L1 · Prototype / R&D",
  "https://github.com/Crohnoz/Crohnoz/blob/main/evidence/fdr.md",
  "https://crohnozlabs.cl/demos/fdr-centro-podologico",
  "https://crohnozlabs.cl/profile",
]) {
  requireText(app, value, "App contract");
}

requireText(css, 'font-family: "Inter"', "Typography contract");
requireText(css, 'font-family: "Sora"', "Typography contract");
requireText(html, "Product & Systems Architect", "Document metadata");
requireText(html, 'name="description"', "Document metadata");
requireText(html, 'property="og:title"', "Social metadata");
requireText(html, 'name="twitter:card"', "Social metadata");

forbidText(html, "Full-Stack Developer", "Positioning contract");
forbidText(app, ">CZ<", "Brand mark contract");

if (nodeVersion !== "20") {
  failures.push(`Runtime contract: expected .nvmrc to contain 20, got ${JSON.stringify(nodeVersion)}`);
}

const requiredFiles = [
  "public/favicon.svg",
  "public/portfolio/fdr-podologia/Screenshot_20260510_010603.png",
];

for (const path of requiredFiles) {
  const fileUrl = new URL(`../${path}`, import.meta.url);
  if (!existsSync(fileUrl)) failures.push(`Asset contract: missing ${path}`);
}

if (failures.length) {
  console.error("\nCrohnoz public portfolio contract failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Crohnoz public portfolio contract: PASS");
