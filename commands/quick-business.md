# Generaci�n R�pida de Proyectos

Genera un sistema completo de gesti�n para: $ARGUMENTS

## Uso del Comando

```bash
node auto-generator.js <tipo> "<nombre>"
```

## Tipos Disponibles

- **restaurant** - Mesas, comensales, reservas
- **clinic** - Consultorios, pacientes, citas
- **rental** - Caba�as, hu�spedes, reservas
- **gym** - Clases, miembros, inscripciones
- **salon** - Servicios, clientes, citas
- **workshop** - Cursos, estudiantes, matr�culas

## Caracter�sticas Generadas

 Backend Express + MongoDB
 Frontend React + Material-UI
 Modelos adaptados al negocio
 Terminolog�a autom�tica
 Sin sistema de pagos

## Ejemplos

```bash
# Para caba�as
node auto-generator.js rental "Caba�as del Lago"

# Para restaurante
node auto-generator.js restaurant "La Parrilla Gourmet"

# Para cl�nica
node auto-generator.js clinic "Centro M�dico Integral"
```