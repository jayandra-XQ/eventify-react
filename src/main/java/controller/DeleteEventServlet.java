package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import dao.EventDAO;

@WebServlet("/delete-event")
public class DeleteEventServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        if(!"admin".equals(request.getSession().getAttribute("role"))) {
            response.sendRedirect("index.jsp");
            return;
        }

        int eventId = Integer.parseInt(request.getParameter("eventId"));
        EventDAO eventDAO = new EventDAO();
        
        // Implement delete method in EventDAO
        if(eventDAO.deleteEvent(eventId)) {
            response.sendRedirect("EventListPage.jsp");
        } else {
            request.setAttribute("errorMessage", "Failed to delete event");
            request.getRequestDispatcher("EventListPage.jsp").forward(request, response);
        }
    }
}
