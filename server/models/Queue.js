const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema(
  {
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    tickets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
      },
    ],
    currentServing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
      default: null,
    },
    status: {
      type: String,
      enum: ['open', 'paused', 'closed'],
      default: 'open',
    },
  },
  { timestamps: true }
);

queueSchema.index({ department: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Queue', queueSchema);