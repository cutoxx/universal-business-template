# Generación Rápida de Proyectos

Genera un sistema completo de gestión para: $ARGUMENTS

## Uso del Comando

```bash
node auto-generator.js <tipo> "<nombre>"
```

## Tipos Disponibles

- **restaurant** - Mesas, comensales, reservas
- **clinic** - Consultorios, pacientes, citas
- **rental** - Cabañas, huéspedes, reservas
- **gym** - Clases, miembros, inscripciones
- **salon** - Servicios, clientes, citas
- **workshop** - Cursos, estudiantes, matrículas

## Características Generadas

 Backend Express + MongoDB
 Frontend React + Material-UI
 Modelos adaptados al negocio
 Terminología automática
 Sin sistema de pagos

## Ejemplos

```bash
# Para cabañas
node auto-generator.js rental "Cabañas del Lago"

# Para restaurante
node auto-generator.js restaurant "La Parrilla Gourmet"

# Para clínica
node auto-generator.js clinic "Centro Médico Integral"
```