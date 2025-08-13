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