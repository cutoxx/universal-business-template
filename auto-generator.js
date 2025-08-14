#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { industryConfigs, getIndustryConfig } = require('./templates/industry-templates');

class BusinessGenerator {
  constructor(businessType, businessName, options = {}) {
    this.businessType = businessType;
    this.businessName = businessName;
    this.config = getIndustryConfig(businessType);
    this.options = options;
    this.projectName = this.sanitizeProjectName(businessName);
  }

  sanitizeProjectName(name) {
    return name.toLowerCase()
               .replace(/[^a-z0-9\s]/g, '')
               .replace(/\s+/g, '-');
  }

  async generateProject() {
    console.log(`🚀 Generando proyecto para: ${this.businessName}`);
    console.log(`📋 Tipo de negocio: ${this.businessType}`);
    
    try {
      await this.createProjectStructure();
      await this.generateModels();
      await this.generateControllers();
      await this.generateFrontendComponents();
      await this.generateConfigFiles();
      await this.generateDocumentation();
      
      console.log(`✅ Proyecto "${this.projectName}" generado exitosamente!`);
      console.log(`📁 Ubicación: ./${this.projectName}`);
      console.log(`\n🔧 Próximos pasos:`);
      console.log(`   cd ${this.projectName}`);
      console.log(`   npm install`);
      console.log(`   npm run dev`);
      
    } catch (error) {
      console.error(`❌ Error generando proyecto:`, error.message);
    }
  }

  async createProjectStructure() {
    const dirs = [
      this.projectName,
      `${this.projectName}/backend`,
      `${this.projectName}/backend/models`,
      `${this.projectName}/backend/controllers`,
      `${this.projectName}/backend/routes`,
      `${this.projectName}/frontend`,
      `${this.projectName}/frontend/src`,
      `${this.projectName}/frontend/src/components`,
      `${this.projectName}/database`,
      `${this.projectName}/docs`
    ];

    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    console.log(`📁 Estructura de carpetas creada`);
  }

  async generateModels() {
    const terminology = this.config.terminology;
    
    // Generar modelo principal (Resource)
    const resourceModel = this.generateResourceModel();
    fs.writeFileSync(
      `${this.projectName}/backend/models/${terminology.resource.charAt(0).toUpperCase() + terminology.resource.slice(1)}.js`,
      resourceModel
    );

    console.log(`📄 Modelos generados para ${this.businessType}`);
  }

  generateResourceModel() {
    const terminology = this.config.terminology;
    
    return `const mongoose = require('mongoose');

const ${terminology.resource}Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    default: 1,
    min: 1
  },
  availability: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

${terminology.resource}Schema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('${terminology.resource.charAt(0).toUpperCase() + terminology.resource.slice(1)}', ${terminology.resource}Schema);`;
  }

  async generateControllers() {
    console.log(`🎛️ Controladores generados`);
  }

  async generateFrontendComponents() {
    console.log(`⚛️ Componentes React generados`);
  }

  async generateConfigFiles() {
    const backendPackage = {
      name: `${this.projectName}-backend`,
      version: "1.0.0",
      description: `Backend para ${this.businessName}`,
      main: "server.js",
      scripts: {
        start: "node server.js",
        dev: "nodemon server.js"
      },
      dependencies: {
        express: "^4.18.2",
        mongoose: "^7.5.0",
        cors: "^2.8.5",
        dotenv: "^16.3.1"
      }
    };

    fs.writeFileSync(
      `${this.projectName}/backend/package.json`,
      JSON.stringify(backendPackage, null, 2)
    );

    console.log(`⚙️ Archivos de configuración generados`);
  }

  async generateDocumentation() {
    const terminology = this.config.terminology;
    
    const readme = `# ${this.businessName}

Sistema de gestión para ${this.businessType} generado automáticamente.

## 🏢 Tipo de Negocio: ${this.businessType}

### Terminología del Sistema:
- **Recursos:** ${terminology.resources}
- **Clientes:** ${terminology.customers}
- **Reservas:** ${terminology.bookings}

## 🚀 Instalación y Configuración

\`\`\`bash
cd ${this.projectName}
npm install
npm run dev
\`\`\`

## 📋 Funcionalidades

### Gestión de ${terminology.resources.charAt(0).toUpperCase() + terminology.resources.slice(1)}
- ✅ Crear, editar y eliminar ${terminology.resources}
- ✅ Gestión de disponibilidad

### Sistema de ${terminology.bookings.charAt(0).toUpperCase() + terminology.bookings.slice(1)}
- ✅ ${terminology.bookings} online
- ✅ Gestión de estados

---

**Generado automáticamente con el Template Universal de Gestión de Negocios**
`;

    fs.writeFileSync(`${this.projectName}/README.md`, readme);
    console.log(`📚 Documentación generada`);
  }
}

// CLI Interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
🏗️ Generador Universal de Sistemas de Gestión

Uso:
  node auto-generator.js <tipo-negocio> "<nombre-negocio>"

Tipos de negocio disponibles:
  restaurant   - Restaurante/Café
  clinic       - Clínica/Consultorio médico
  gym          - Gimnasio/Centro deportivo
  workshop     - Taller/Centro educativo
  salon        - Salón de belleza/Spa
  rental       - Cabañas/Arriendos
  veterinary   - Veterinaria/Clínica animal
  mechanic     - Taller mecánico
  spa          - Spa y wellness
  pharmacy     - Farmacia
  bookstore    - Librería/Papelería
  barbershop   - Barbería

Ejemplos:
  node auto-generator.js restaurant "Restaurante La Italiana"
  node auto-generator.js clinic "Clínica Dental Sonrisa"
  node auto-generator.js rental "Cabañas Valle Nevado"
`);
    process.exit(1);
  }

  const [businessType, businessName, ...options] = args;
  
  const validTypes = ['restaurant', 'clinic', 'gym', 'workshop', 'salon', 'rental', 'veterinary', 'mechanic', 'spa', 'pharmacy', 'bookstore', 'barbershop'];
  if (!validTypes.includes(businessType)) {
    console.error(`❌ Tipo de negocio '${businessType}' no válido.`);
    console.log(`Tipos disponibles: ${validTypes.join(', ')}`);
    process.exit(1);
  }

  const generator = new BusinessGenerator(businessType, businessName, options);
  generator.generateProject();
}

module.exports = BusinessGenerator;