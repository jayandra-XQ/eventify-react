<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Event List Page</title>
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
        	h2{
       		text-align: center;
       		margin-top: 30px;
       	}
       	main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0;
        }

        .event-type-container {
            width: 100%;
            max-width: 1500px;
            margin-bottom: 400px;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
            font-weight: bold;
            color: #123A85;
        }

      
        </style>
<body>
	<header>
	        <div>  
            <h1>EVENTIFY!!</h1>
        </div>
    	</header>
    <%@ include file="components/navbar.jsp" %>
    
      <h2>Event Type List</h2>
      
      <main>
        <div class="event-type-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Event Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Birthday Party</td>
                        <td>Fun and personalized birthday parties for all ages with unique activities and designs</td>
                    </tr>
                    <%-- Add more rows here --%>
                </tbody>
            </table>
        </div>
    </main>
    
    
    
    
    
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> 
        <%@ include file="components/footer.jsp" %>
    </footer>

</body>
</html>