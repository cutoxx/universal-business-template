#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🏢 Universal Business Generator v1.0.0');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Uso: node auto-generator.js <tipo> "<nombre>"');
  console.log('Tipos: restaurant, clinic, rental, gym, salon, workshop');
  process.exit(1);
}

const [businessType, businessName] = args;
const projectName = businessName.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');

console.log(`Generando: ${businessName}`);
console.log(`Tipo: ${businessType}`);

try {
  if (!fs.existsSync(projectName)) {
    fs.mkdirSync(projectName);
  }
  
  const readme = `# ${businessName}\nSistema de gestión para ${businessType}`;
  fs.writeFileSync(path.join(projectName, 'README.md'), readme);
  
  console.log(`✅ Proyecto ${projectName} creado!`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}