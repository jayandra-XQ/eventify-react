package model;

public class Event {
    private int id;
    private String eventName;
    private String description;
    
    // Constructors
    public Event() {}
    
    public Event(String eventName, String description) {
        this.eventName = eventName;
        this.description = description;
    }
    
    // Getters & Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getEventName() { return eventName; }
    public void setEventName(String eventName) { this.eventName = eventName; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}	