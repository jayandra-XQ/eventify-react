<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Register Page</title>
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
        .registration-container { 
            display: flex;
            width: 900px; 
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            background-color: white; 
        }

        .image-side {
            width: 50%; 
            background-image: url('images/holi.webp'); /
            background-size: cover;
            background-position: center;
        }

        .form-side {
            width: 60%; 
            padding: 40px;
        }

        main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0;
        }

        .registration-form {
            background-color: white;
            padding: 40px;
            border-radius: 15px; 
            width: 710px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
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

        .form-select { 
            border-radius: 8px;
            padding: 12px;
        }

        .btn-primary {
            background: linear-gradient(to right, #4D77E1, #3f51b5); 
            border-radius: 8px;
            width: 100%; 
            height: 45px; 
            font-size: 1rem; 
            font-weight: 500;
            transition: background 0.3s ease;
        }

        .btn-primary:hover {
            background: linear-gradient(to right, #3f51b5, #4D77E1); /
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
        <div class="registration-container">  
            <div class="image-side"></div>  
            <div class="form-side">  
                <h2 class="form-title">Event Registration</h2>
                <hr>
                <form>
                    <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="Enter your first name"> 
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Enter your last name"> 
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email*</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required> 
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password*</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" required> 
                </div>
                <div class="mb-3">
                    <label for="gender" class="form-label">Gender</label>
                    <select class="form-select" id="gender">
                        <option selected>Select your gender</option> 
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <footer class="mt-auto">
        <%@ include file="components/footer.jsp" %>
    </footer>

</body>

</html>