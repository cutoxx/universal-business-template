// Configuraciones pre-definidas para diferentes industrias

const industryConfigs = {
  
  // RESTAURANTE
  restaurant: {
    terminology: {
      resource: "mesa",
      resources: "mesas", 
      customer: "comensal",
      customers: "comensales",
      booking: "reserva",
      bookings: "reservas"
    },
    
    businessRules: {
      maxAdvanceBooking: 60,
      cancellationPolicy: 24,
      defaultDuration: 120,
      bufferTime: 15,
      maxPartySize: 12
    },
    
    dashboardMetrics: [
      "ocupacion_promedio",
      "ingresos_diarios", 
      "mesas_mas_populares",
      "horarios_pico",
      "cancelaciones"
    ]
  },

  // CLÍNICA/CONSULTORIO MÉDICO
  clinic: {
    terminology: {
      resource: "consultorio",
      resources: "consultorios",
      customer: "paciente", 
      customers: "pacientes",
      booking: "cita",
      bookings: "citas"
    },
    
    businessRules: {
      maxAdvanceBooking: 90,
      cancellationPolicy: 2,
      defaultDuration: 30,
      bufferTime: 10
    },
    
    dashboardMetrics: [
      "citas_diarias",
      "pacientes_atendidos",
      "tiempo_promedio_consulta", 
      "no_shows",
      "seguimientos_pendientes"
    ]
  },

  // GIMNASIO
  gym: {
    terminology: {
      resource: "clase",
      resources: "clases",
      customer: "miembro",
      customers: "miembros", 
      booking: "inscripcion",
      bookings: "inscripciones"
    },
    
    businessRules: {
      maxAdvanceBooking: 14,
      cancellationPolicy: 2,
      defaultDuration: 60,
      bufferTime: 15,
      maxWaitlist: 10
    },
    
    dashboardMetrics: [
      "asistencia_promedio",
      "clases_mas_populares",
      "retencion_miembros",
      "ocupacion_horarios"
    ]
  },

  // TALLER/CENTRO EDUCATIVO
  workshop: {
    terminology: {
      resource: "curso",
      resources: "cursos",
      customer: "estudiante", 
      customers: "estudiantes",
      booking: "matricula",
      bookings: "matriculas"
    },
    
    businessRules: {
      maxAdvanceBooking: 120,
      cancellationPolicy: 168,
      minStudentsToRun: 5,
      maxStudents: 15,
      attendanceRequired: 80
    },
    
    dashboardMetrics: [
      "inscripciones_periodo",
      "tasa_completacion",
      "satisfaccion_cursos",
      "certificados_emitidos"
    ]
  },

  // SALÓN DE BELLEZA
  salon: {
    terminology: {
      resource: "servicio",
      resources: "servicios",
      customer: "cliente",
      customers: "clientes", 
      booking: "cita",
      bookings: "citas"
    },
    
    businessRules: {
      maxAdvanceBooking: 60,
      cancellationPolicy: 24,
      bufferTime: 15,
      colorServiceBuffer: 30
    },
    
    dashboardMetrics: [
      "citas_diarias",
      "ingresos_servicios",
      "productividad_estilistas", 
      "servicios_mas_populares"
    ]
  },

  // ARRIENDOS/CABAÑAS
  rental: {
    terminology: {
      resource: "cabaña",
      resources: "cabañas",
      customer: "huesped",
      customers: "huespedes", 
      booking: "reserva",
      bookings: "reservas"
    },
    
    businessRules: {
      maxAdvanceBooking: 365,
      cancellationPolicy: 48,
      defaultDuration: 1440,
      bufferTime: 60,
      maxGuests: 8
    },
    
    dashboardMetrics: [
      "ocupacion_mensual",
      "ingresos_por_cabana",
      "estadia_promedio",
      "huespedes_recurrentes",
      "temporada_alta_baja"
    ]
  },

  // VETERINARIA
  veterinary: {
    terminology: {
      resource: "consultorio",
      resources: "consultorios",
      customer: "mascota",
      customers: "mascotas",
      booking: "cita",
      bookings: "citas",
      staff: "veterinario",
      manager: "coordinador"
    },
    
    businessRules: {
      maxAdvanceBooking: 60,
      cancellationPolicy: 4,
      defaultDuration: 45,
      bufferTime: 15,
      emergencySlots: 3
    },
    
    dashboardMetrics: [
      "citas_diarias",
      "mascotas_atendidas",
      "emergencias_atendidas",
      "vacunaciones_pendientes",
      "cirugias_programadas",
      "ingresos_servicios"
    ]
  },

  // TALLER MECÁNICO
  mechanic: {
    terminology: {
      resource: "bahia",
      resources: "bahias",
      customer: "vehiculo",
      customers: "vehiculos",
      booking: "orden",
      bookings: "ordenes",
      staff: "mecanico",
      manager: "jefe_taller"
    },
    
    businessRules: {
      maxAdvanceBooking: 30,
      cancellationPolicy: 12,
      defaultDuration: 180,
      bufferTime: 30,
      emergencyService: true
    },
    
    dashboardMetrics: [
      "ordenes_diarias",
      "vehiculos_reparados",
      "tiempo_promedio_reparacion",
      "repuestos_utilizados",
      "ingresos_servicios",
      "satisfaccion_cliente"
    ]
  },

  // SPA Y WELLNESS
  spa: {
    terminology: {
      resource: "sala",
      resources: "salas",
      customer: "cliente",
      customers: "clientes",
      booking: "sesion",
      bookings: "sesiones",
      staff: "terapeuta",
      manager: "coordinador_spa"
    },
    
    businessRules: {
      maxAdvanceBooking: 90,
      cancellationPolicy: 24,
      defaultDuration: 90,
      bufferTime: 20,
      packageDeals: true
    },
    
    dashboardMetrics: [
      "sesiones_diarias",
      "clientes_recurrentes",
      "servicios_mas_populares",
      "ocupacion_salas",
      "paquetes_vendidos",
      "satisfaccion_terapeutas"
    ]
  },

  // FARMACIA
  pharmacy: {
    terminology: {
      resource: "producto",
      resources: "productos",
      customer: "cliente",
      customers: "clientes",
      booking: "pedido",
      bookings: "pedidos",
      staff: "farmaceutico",
      manager: "jefe_farmacia"
    },
    
    businessRules: {
      maxAdvanceBooking: 7,
      cancellationPolicy: 2,
      defaultDuration: 15,
      bufferTime: 5,
      prescriptionRequired: true
    },
    
    dashboardMetrics: [
      "ventas_diarias",
      "medicamentos_dispensados",
      "recetas_atendidas",
      "inventario_bajo",
      "clientes_frecuentes",
      "productos_mas_vendidos"
    ]
  },

  // LIBRERÍA/PAPELERÍA
  bookstore: {
    terminology: {
      resource: "producto",
      resources: "productos",
      customer: "cliente",
      customers: "clientes",
      booking: "pedido",
      bookings: "pedidos",
      staff: "vendedor",
      manager: "encargado"
    },
    
    businessRules: {
      maxAdvanceBooking: 14,
      cancellationPolicy: 24,
      defaultDuration: 30,
      bufferTime: 10,
      specialOrders: true
    },
    
    dashboardMetrics: [
      "ventas_diarias",
      "libros_mas_vendidos",
      "pedidos_especiales",
      "inventario_rotacion",
      "eventos_literarios",
      "clientes_frecuentes"
    ]
  },

  // BARBERÍA
  barbershop: {
    terminology: {
      resource: "silla",
      resources: "sillas",
      customer: "cliente",
      customers: "clientes",
      booking: "cita",
      bookings: "citas",
      staff: "barbero",
      manager: "encargado"
    },
    
    businessRules: {
      maxAdvanceBooking: 21,
      cancellationPolicy: 2,
      defaultDuration: 45,
      bufferTime: 10,
      walkInsAllowed: true
    },
    
    dashboardMetrics: [
      "cortes_diarios",
      "clientes_atendidos",
      "servicios_populares",
      "barberos_productivos",
      "tiempo_promedio_servicio",
      "clientes_recurrentes"
    ]
  }
};

// Función para obtener configuración específica
function getIndustryConfig(industryType) {
  return industryConfigs[industryType] || industryConfigs.restaurant;
}

module.exports = {
  industryConfigs,
  getIndustryConfig
};