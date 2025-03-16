package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Event;

import java.io.IOException;

import dao.EventDAO;
@WebServlet("/add-event")
public class AddEventServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Admin check
        String role = (String) request.getSession().getAttribute("role");
        if(!"admin".equals(role)) {
            response.sendRedirect("index.jsp");
            return;
        }

        String eventName = request.getParameter("eventName");
        String description = request.getParameter("description");
        
        Event event = new Event(eventName, description);
        EventDAO eventDAO = new EventDAO();
        
        if(eventDAO.addEvent(event)) {
            response.sendRedirect("EventListPage.jsp");
        } else {
            request.setAttribute("errorMessage", "Failed to add event");
            request.getRequestDispatcher("AddEventPage.jsp").forward(request, response);
        }
    }
}