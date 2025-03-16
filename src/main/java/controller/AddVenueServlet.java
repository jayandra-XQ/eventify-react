package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import model.Venue;
import dao.VenueDAO;
import java.io.File;
import java.io.IOException;
import java.sql.Date;
@WebServlet("/add-venue")
@MultipartConfig(
    fileSizeThreshold = 1024 * 1024 * 1, // 1 MB
    maxFileSize = 1024 * 1024 * 10,      // 10 MB
    maxRequestSize = 1024 * 1024 * 100   // 100 MB
)
public class AddVenueServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Admin check
        String role = (String) request.getSession().getAttribute("role");
        if(!"admin".equals(role)) {
            response.sendRedirect("index.jsp");
            return;
        }

        try {
            // Get form data
            String eventType = request.getParameter("eventType");
            int capacity = Integer.parseInt(request.getParameter("capacity"));
            double cost = Double.parseDouble(request.getParameter("cost"));
            String location = request.getParameter("location");
            String contact = request.getParameter("contact");
            Date eventDate = Date.valueOf(request.getParameter("eventDate"));

            // Handle file upload
            Part filePart = request.getPart("eventPhoto"); // Get the file part
            String fileName = filePart.getSubmittedFileName(); // Get the file name
            String uploadPath = getServletContext().getRealPath("/uploads"); // Define upload directory
            File uploadDir = new File(uploadPath);
            if (!uploadDir.exists()) {
                uploadDir.mkdir(); // Create the directory if it doesn't exist
            }
            String filePath = uploadPath + File.separator + fileName;
            filePart.write(filePath); // Save the file

            // Create Venue object
            Venue venue = new Venue(eventType, capacity, cost, location, contact, eventDate, fileName);
            VenueDAO venueDAO = new VenueDAO();
            
            if(venueDAO.addVenue(venue)) {
                response.sendRedirect("VenuePage.jsp?success= Event + Created");
            } else {
                request.setAttribute("errorMessage", "Failed to add venue");
                request.getRequestDispatcher("VenuePage.jsp").forward(request, response);
            }
        } catch (Exception e) {
            e.printStackTrace();
            request.setAttribute("errorMessage", "An error occurred: " + e.getMessage());
            request.getRequestDispatcher("VenuePage.jsp").forward(request, response);
        }
    }
}