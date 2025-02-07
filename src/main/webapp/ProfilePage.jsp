<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Profile Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> 
</head>

	<style>
		 h1 {
            color: #123A85;
        }
         body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f4f4f4; /* Light gray background */
        }
        
        main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0;
        }

        .profile-container {
            width: 50%;
            max-width: 600px;
            background-color: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
            text-align: center; /* Center the content */
        }

        .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%; /* Make it circular */
            object-fit: cover; /* Maintain aspect ratio and cover the circle */
            margin-bottom: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        }

        h2 {
            color: #343a40;
            margin-bottom: 10px;
        }

        .profile-stats {
            display: flex;
            justify-content: center;
            gap: 40px; /* Add spacing between stats */
            margin-bottom: 30px;
        }

        .profile-stat {
            color: #555;
        }

        .profile-stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #007bff; /* Blue color for numbers */
        }

        .delete-button {
            background-color: #dc3545; /* Red for delete */
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .delete-button:hover {
            background-color: #c12a36; /* Darker red on hover */
        }
	</style>
<body>
	<header>
	        <div>  
            <h1>EVENTIFY!!</h1>
        </div>
    	</header>
    <%@ include file="components/navbar.jsp" %>
    
     <main>
        <div class="profile-container">
            <img src="images/ashik.png" alt="Profile Image" class="profile-image">
            <h2>Hello, Ashik</h2>

            <div class="profile-stats">
                <div class="profile-stat">
                    <span class="profile-stat-number">0</span>
                    Your Booking
                </div>
                <div class="profile-stat">
                    <span class="profile-stat-number">0</span>
                    Your Events
                </div>
            </div>

            <button class="delete-button" onclick="redirectToLogin()">Delete Account</button>
        </div>
    </main>
    
      <script>
        function redirectToLogin() {
            // Redirect to the payment page
            window.location.href = "./LoginPage.jsp"; 
        }
    </script>


	 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> 
        <%@ include file="components/footer.jsp" %>
    </footer>
</body>
</html>