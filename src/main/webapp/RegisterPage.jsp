<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Event Registration</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background: linear-gradient(to bottom right, #e0eafc, #cfdef3); min-height: 100vh; display: flex; flex-direction: column; }
        .registration-container { width: 900px; border-radius: 15px; box-shadow: 0 6px 12px rgba(0,0,0,0.15); background: white; }
        .image-side { width: 40%; background: url('images/holi.webp') center/cover; } /* Change image path */
        .form-side { width: 60%; padding: 40px; }
        .form-title { font-size: 1.8rem; font-weight: 600; color: #333; }
        footer { margin-top: auto; }
    </style>
</head>
<body>
    <%@ include file="components/navbar.jsp" %>
    
    <main class="container d-flex justify-content-center align-items-center py-5">
        <div class="registration-container d-flex">
            <div class="image-side"></div>
            <div class="form-side">
                <h2 class="form-title text-center mb-4">Event Registration</h2>
                <hr>
                
                <%-- Error Message --%>
                <% if (request.getAttribute("errorMessage") != null) { %>
                    <div class="alert alert-danger">${errorMessage}</div>
                <% } %>

                <form action="register" method="POST">
                    <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" name="firstName" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" name="lastName" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" name="password" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Gender</label>
                        <select class="form-select" name="gender" required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Register</button>
                </form>
            </div>
        </div>
    </main>

    <%@ include file="components/footer.jsp" %>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>