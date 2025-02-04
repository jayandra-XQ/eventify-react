<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Venue Page</title>
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
            background-color: #e9ecef; 
        }

        main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0;
        }

        .venue-container {
            width: 60%; 
            max-width: 700px;
            background-color: #f8f9fa; 
            padding: 30px;
            border-radius: 10px;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #343a40; 
        }

        label {
            font-weight: 500;
            color: #343a40; 
        }

        .form-control {
            border-radius: 5px;
            border: 1px solid #ced4da; 
            padding: 10px; 
        }

        .btn-primary {
            background-color: #4d77e1; 
            border-color: #4d77e1;
            color: white;
            border-radius: 5px;
            width: auto; 
            padding: 10px 20px; 
            margin-top: 20px;
            transition: background-color 0.3s ease; 
        }

        .btn-primary:hover {
            background-color: #3a60c4; 
            border-color: #3a60c4;
            cursor: pointer;
        }
        .form-label{
            margin-bottom: 5px;
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
        <div class="venue-container">
            <h2>VENUE</h2>
            <hr>
            <form>
                <div class="mb-3">
                    <label for="eventType" class="form-label">Event Type:</label>
                    <input type="text" class="form-control" id="eventType" placeholder="College Events">
                </div>
                <div class="mb-3">
                    <label for="capacity" class="form-label">Capacity:</label>
                    <input type="text" class="form-control" id="capacity" placeholder="100">
                </div>
                <div class="mb-3">
                    <label for="cost" class="form-label">Cost:</label>
                    <input type="text" class="form-control" id="cost" placeholder="400000">
                </div>
                <div class="mb-3">
                    <label for="location" class="form-label">Location:</label>
                    <input type="text" class="form-control" id="location">
                </div>
                <div class="mb-3">
                    <label for="contact" class="form-label">Contact:</label>
                    <input type="text" class="form-control" id="contact">
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label">Date:</label>
                    <input type="text" class="form-control" id="date" placeholder="date here........">
                </div>
                <div class="mb-3">
                    <label for="eventPhoto" class="form-label">Event Photo:</label>
                    <input class="form-control" type="file" id="eventPhoto">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </main>
    



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> 
        <%@ include file="components/footer.jsp" %>
    </footer>

</body>
</html>