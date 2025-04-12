import mongoose from 'mongoose'

const venueSchema = new mongoose.Schema({
  eventType: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  eventPhoto: {
    type: String,
  }
},
  { timestamps: true }
)

const Venue = mongoose.model('Venue', venueSchema)

export default Venue