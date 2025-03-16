package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import dao.UserDAO;

@WebServlet("/delete-user")
public class DeleteUserServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        if(!"admin".equals(request.getSession().getAttribute("role"))) {
            response.sendRedirect("index.jsp");
            return;
        }

        int userId = Integer.parseInt(request.getParameter("userId"));
        UserDAO userDAO = new UserDAO();
        
        if(userDAO.deleteUser(userId)) {
            response.sendRedirect("UserListPage.jsp");
        } else {
            request.setAttribute("errorMessage", "Failed to delete user");
            request.getRequestDispatcher("UserListPage.jsp").forward(request, response);
        }
    }
}
