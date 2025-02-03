<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Register Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

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
            flex: 1; /* Allow main content to expand */
            display: flex;
            justify-content: center; 
            align-items: center; 
            padding: 40px 0; 
        }

        .registration-form {
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            width: 710px;
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
    	<div class="registration-form">
        <h2 class="mb-4">Registration</h2>
        <hr>
        <form>
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First Name">
            </div>
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Last Name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email*</label>
                <input type="email" class="form-control" id="email" placeholder="abcdef1234@gmail.com" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password*</label>
                <input type="password" class="form-control" id="password" placeholder="..................." required>
            </div>
            <div class="mb-3">
                <label for="gender" class="form-label">Gender</label>
                <select class="form-select" id="gender">
                    <option selected>----Select----</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
    </main>
    
    
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> <%-- Footer with mt-auto for sticky footer behavior --%>
        <%@ include file="components/footer.jsp" %>
    </footer>
	
</body>
</html>