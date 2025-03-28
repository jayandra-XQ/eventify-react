import AddEvent from '../models/addEvent.model.js'

//controller for addevent
export const addEvent = async (req, res) => {
  try {
    const { name, description } = req.body;

    //validate the fields
    if (!name || !description) {
      return res.status(400).json({ message: 'Name , description are required' });
    }

    //Create new event
    const newEvent = new AddEvent({
      name,
      description
    })

    //Save to the database
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}