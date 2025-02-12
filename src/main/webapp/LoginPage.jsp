<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
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

        .login-container {  
            display: flex;
            width: 900px; 
            border-radius: 10px;
            overflow: hidden; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        }

        .image-side {
            width: 450px; 
            background-image: url('images/login.jpg'); 
            background-size: cover;
            background-position: center;
        }

        .form-side {
            width: 450px; 
            background-color: white;
            padding: 40px;
        }

        .form-control {
            border-radius: 10px;
        }

        .form-label {
            font-weight: 500;
        }

        .btn-primary {
            background-color: #4D77E1;
            border: none;
            border-radius: 10px;
            width: 119px;
            height: 43px;
            transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
            background-color: #1f2550;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
                <h2 class="mb-4">Login</h2>
                <hr>
                <form onsubmit="simulateLogin(event)">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email*</label>
                        <input type="email" class="form-control" id="email" placeholder="abcdef1234@gmail.com" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password*</label>
                        <input type="password" class="form-control" id="password" placeholder="..................." required>
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