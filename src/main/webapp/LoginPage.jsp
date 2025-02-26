<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Event Login</title>  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: linear-gradient(to bottom right, #e0eafc, #cfdef3); 
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

        .login-container {
            display: flex;
            width: 900px;
            border-radius: 15px; 
            overflow: hidden;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
            background-color: white; 
        }

        .image-side {
            width: 450px;
            background-image: url('images/party1.jpg'); 
            background-size: cover;
            background-position: center;
        }

        .form-side {
            width: 450px;
            padding: 40px;
        }

        .form-title {  
            font-size: 1.8rem;
            font-weight: 600;
            color: #333; 
            margin-bottom: 25px;
            text-align: center; 
        }

        .form-control {
            border-radius: 8px;
            padding: 12px; 
        }

        .form-label {
            font-weight: 500;
            color: #555;
        }

        .btn-primary {
            background: linear-gradient(to right, #4D77E1, #3f51b5); 
            border: none;
            border-radius: 8px; 
            width: 100%; 
            height: 45px; 
            font-size: 1rem; 
            font-weight: 500;
            transition: background 0.3s ease;
        }

        .btn-primary:hover {
            background: linear-gradient(to right, #3f51b5, #4D77E1); 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        footer {
            margin-top: auto;
        }
    </style>
</head>

<body>
    <header>
        <div>
            <h1>EVENTIFY!!</h1>
        </div>
    </header>
    <%@ include file="components/navbar.jsp" %>

    <main>
        <div class="login-container">
            <div class="image-side"></div>
            <div class="form-side">
                <h2 class="form-title">Event Login</h2>  
                <hr>
                <form onsubmit="simulateLogin(event)">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email*</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password*</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </main>

    <script>
    function simulateLogin(event) {
    	event.preventDefault();
    	const email = document.getElementById("email").value;
    	let role = "user"; // Default role is user
    	if (email.includes("admin")) {
    	role = "admin"; // If email contains "admin", assign admin role
    	}
    	// Store login status and role in localStorage
    	localStorage.setItem("isLoggedIn", "true");
    	localStorage.setItem("userRole", role);
    	// Redirect to index.jsp
    	window.location.href = "./index.jsp";
    	}
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <footer class="mt-auto">
        <%@ include file="components/footer.jsp" %>
    </footer>

</body>

</html>