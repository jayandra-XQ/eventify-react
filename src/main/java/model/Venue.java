package model;

import java.sql.Date;

public class Venue {
    private int id;
    private String eventType;
    private int capacity;
    private double cost;
    private String location;
    private String contact;
    private Date eventDate;
    private String photoUrl;

    // Constructors
    public Venue() {}

    public Venue(String eventType, int capacity, double cost, String location, 
                 String contact, Date eventDate, String photoUrl) {
        this.eventType = eventType;
        this.capacity = capacity;
        this.cost = cost;
        this.location = location;
        this.contact = contact;
        this.eventDate = eventDate;
        this.photoUrl = photoUrl;
    }

    // Getters & Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getEventType() { return eventType; }
    public void setEventType(String eventType) { this.eventType = eventType; }
    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }
    public double getCost() { return cost; }
    public void setCost(double cost) { this.cost = cost; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }
    public Date getEventDate() { return eventDate; }
    public void setEventDate(Date eventDate) { this.eventDate = eventDate; }
    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }
}
