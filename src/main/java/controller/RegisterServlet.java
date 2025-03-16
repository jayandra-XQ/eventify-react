package controller;

import java.io.IOException;

import dao.UserDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.User;


@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        User user = new User();
        user.setFirstName(request.getParameter("firstName"));
        user.setLastName(request.getParameter("lastName"));
        user.setEmail(request.getParameter("email"));
        user.setPassword(request.getParameter("password")); // Plain text
        user.setGender(request.getParameter("gender"));

        UserDAO userDAO = new UserDAO();
        if (userDAO.registerUser(user)) {
            response.sendRedirect("LoginPage.jsp?registration=success");
        } else {
            request.setAttribute("errorMessage", "Registration failed!");
            request.getRequestDispatcher("RegisterPage.jsp").forward(request, response);
        }
    }
}