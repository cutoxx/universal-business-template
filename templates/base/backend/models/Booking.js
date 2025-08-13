const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  resource: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resource',
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  duration: Number,
  participants: {
    type: Number,
    default: 1,
    min: 1
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  details: {
    specialRequests: String,
    notes: String
  },
  pricing: {
    basePrice: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  confirmationCode: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

bookingSchema.pre('save', function(next) {
  if (!this.confirmationCode) {
    this.confirmationCode = this.generateConfirmationCode();
  }
  if (this.startDate && this.endDate) {
    this.duration = Math.ceil((this.endDate - this.startDate) / (1000 * 60));
  }
  next();
});

bookingSchema.methods.generateConfirmationCode = function() {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 6);
  return `${timestamp}${random}`.toUpperCase();
};

module.exports = mongoose.model('Booking', bookingSchema);