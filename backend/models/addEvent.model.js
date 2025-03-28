import mongoose from 'mongoose'

const addEventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},
  { timestamps: true }
)

const AddEvent = mongoose.model('AddEvent', addEventSchema)

export default AddEvent