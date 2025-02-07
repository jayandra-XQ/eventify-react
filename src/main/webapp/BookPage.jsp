<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Book Page</title>
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

        .venue-container {
            width: 100%; 
            max-width: 1600px; 
            margin-bottom: 300px;
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
            background-color: #D7B687;
            font-weight: bold;
            color: #2D3378;
        }
        td{
        	background-color: #A8A196;
        }
        

       
        .venue-image {
            max-width: 100px; 
            height: auto;
        }

        
        .book-button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        </style>
<body>
<header>
	        <div>  
            <h1>EVENTIFY!!</h1>
        </div>
    	</header>
    <%@ include file="components/navbar.jsp" %>
    
            <h2>Venue List</h2>
    <main>
        <div class="venue-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Location</th>
                        <th>Capacity</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>EventType</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src="images/about2.webp" alt="Venue Image" class="venue-image"></td>  <%-- Add image here --%>
                        <td>Mumbai</td>
                        <td>500</td>
                        <td>500000</td>
                        <td>2025-05-21</td>
                        <td>Wedding Ceremony</td>
                        <td><button class="book-button" onclick="redirectToPayment()">Book & Pay</button></td>
                    </tr>
                    <%-- Add more rows here --%>
                </tbody>
            </table>
        </div>
    </main>
    
        <script>
        function redirectToPayment() {
            // Redirect to the payment page
            window.location.href = "./PaymentPage.jsp"; 
        }
    </script>
    
    
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> 
        <%@ include file="components/footer.jsp" %>
    </footer>
    

</body>
</html>