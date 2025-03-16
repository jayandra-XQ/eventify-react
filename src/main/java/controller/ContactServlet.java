package controller;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import model.Contact;
import dao.ContactDAO;
import java.io.IOException;

@WebServlet("/contact")
public class ContactServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Get form parameters
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String message = request.getParameter("message");

        // Validate inputs
        if(name == null || name.isEmpty() || 
           email == null || email.isEmpty() || 
           message == null || message.isEmpty()) {
            
            response.sendRedirect("ContactPage.jsp?error=All fields are required");
            return;
        }

        // Create Contact object
        Contact contact = new Contact();
        contact.setName(name);
        contact.setEmail(email);
        contact.setMessage(message);

        // Save to database
        ContactDAO contactDAO = new ContactDAO();
        boolean success = contactDAO.saveContact(contact);

        if(success) {
            response.sendRedirect("ContactPage.jsp?success=Message sent successfully");
        } else {
            response.sendRedirect("ContactPage.jsp?error=Failed to send message");
        }
    }
}