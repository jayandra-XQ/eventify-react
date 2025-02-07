<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Payment Page</title>
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

        .payment-container {
            width: 50%;
            max-width: 500px;
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        label {
            font-weight: 500;
            color: #555;
        }

        .form-control {
            border-radius: 5px;
            border: 1px solid #ced4da;
            padding: 10px;
        }
        .expiry-cvv{
            display: flex;
            gap: 10px;
        }

        .btn-primary {
            background-color: #007bff; /* Blue button */
            border-color: #007bff;
            color: white;
            border-radius: 5px;
            width: 30%;
            margin: 20px auto 0;
            display: block;
            padding: 10px;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
            background-color: #0069d9;
            border-color: #0062cc;
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
        <div class="payment-container">
            <h2>Payment Details</h2>
            <form>
                <div class="mb-3">
                    <label for="personName" class="form-label">Person Name</label>
                    <input type="text" class="form-control" id="personName" placeholder="Enter your full name">
                </div>
                <div class="mb-3">
                    <label for="cardNumber" class="form-label">Card Number</label>
                    <input type="text" class="form-control" id="cardNumber" placeholder="1234 5678 9101 1121">
                </div>
                <div class="expiry-cvv">
                    <div class="mb-3">
                        <label for="expiry" class="form-label">Expiry</label>
                        <input type="text" class="form-control" id="expiry" placeholder="MM/YY">
                    </div>
                    <div class="mb-3">
                        <label for="cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cvv" placeholder="123">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" onclick="redirectToBookingHistory()">Pay</button>
            </form>
        </div>
    </main>
    
     <script>
        function redirectToBookingHistory() {
            // Redirect to the payment page
            window.location.href = "./BookingHistoryPage.jsp"; 
        }
    </script>
    
    
      
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> 
        <%@ include file="components/footer.jsp" %>
    </footer>
	
</body>

</html>