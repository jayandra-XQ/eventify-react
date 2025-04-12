import Venue from "../models/venue.model.js";
import path from "path";
export const createVenue = async (req, res) => {
  try {
    const { eventType, capacity, cost, location, contact, date, } = req.body;
    const eventPhoto = req.file ? `/uploads/${req.file.filename}` : '';

    const newVenue = new Venue({
      eventType,
      capacity,
      cost,
      location,
      contact,
      date,
      eventPhoto
    });

    const savedVenue = await newVenue.save();
    res.status(201).json(savedVenue)
  } catch (error) {
    console.error('Error creating venue:', error);
    res.status(500).json({ message: 'Failed to create venue' });
  }
}

//get venues
export const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find()
    res.status(200).json(venues)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch venues' })
  }
}