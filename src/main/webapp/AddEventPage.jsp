<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Event Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
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

        .event-type-container {
            width: 50%; 
            max-width: 600px;
            background-color: #f8f9fa; 
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
            border-radius: 10px;
            border: 1px solid #ced4da; 
            padding: 10px; 
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        textarea.form-control{
            height: 150px;
        }

        .btn-primary {
            background-color: #4d77e1; 
            border-color: #4d77e1;
            color: white;
            border-radius: 5px;
            width: 25%; 
            padding: 10px;
            margin-top: 20px;
            transition: background-color 0.3s ease; 
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
            background-color: #3a60c4;
            border-color: #3a60c4;
            cursor: pointer;
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
        <div class="event-type-container">
            <h2>Add Event Type</h2>
            <form>
                <div class="mb-3">
                    <label for="eventName" class="form-label">Event Name:</label>
                    <input type="text" class="form-control" id="eventName" placeholder="Enter Event Name">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description:</label>
                    <textarea class="form-control" id="description"></textarea>
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