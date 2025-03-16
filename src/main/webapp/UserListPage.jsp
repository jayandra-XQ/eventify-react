<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List, model.User, dao.UserDAO" %>
<%@ include file="components/navbar.jsp" %>

<%
    // Security check using existing 'role' from navbar.jsp
    if (!"admin".equals(role)) {
        response.sendRedirect("index.jsp");
        return;
    }

    UserDAO userDAO = new UserDAO();
    List<User> users = userDAO.getAllUsers();
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>UserList Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<style>
    body {
        display: flex;
        flex-direction: column; 
        min-height: 100vh;
    }
    h1 {
        color: #123A85;
    }
    main {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
    }
    .user-list-container {
        width: 80%;
        max-width: 1500px;
        margin-bottom: 50px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    h2 {
        text-align: center;
        margin-top: 30px;
    }
    .table-responsive {
        overflow-x: auto;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }
    .btn-danger {
        background-color: #2D3378;
        border: none;
        transition: background-color 0.3s ease;
    }
    .btn-danger:hover {
        background-color: #c14224;
    }
    .text-center {
        text-align: center;
    }
</style>
</head>
<body>
    <header>
        <div>  
            <h1>EVENTIFY!!</h1>
        </div>
    </header>
    
    <h2>User List</h2>
    
    <main>
        <div class="user-list-container">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <% if(users.isEmpty()) { %>
                            <tr>
                                <td colspan="7" class="text-center">No registered users found</td>
                            </tr>
                        <% } else { 
                            for(User currentUser : users) { %>
                            <tr>
                                <td><%= currentUser.getId() %></td>
                                <td><%= currentUser.getFirstName() %></td>
                                <td><%= currentUser.getLastName() %></td>
                                <td><%= currentUser.getEmail() %></td>
                                <td><%= currentUser.getGender() %></td>
                                <td><%= currentUser.getRole() %></td>
                                <td>
                                    <form action="delete-user" method="POST" 
                                          onsubmit="return confirm('Are you sure you want to delete this user?');">
                                        <input type="hidden" name="userId" value="<%= currentUser.getId() %>">
                                        <button type="submit" class="btn btn-danger">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        <% } 
                        } %>
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <footer class="mt-auto"> 
        <%@ include file="components/footer.jsp" %>
    </footer>
</body>
</html>