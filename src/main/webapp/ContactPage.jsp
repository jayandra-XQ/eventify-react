<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Contact Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
	integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

	<style>
	h1{
		color: #123A85;
	}
		  body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f8f9fa; /* Light gray background */
           
        }

        main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0;
        }

        .contact-container {
            width: 60%;
            max-width: 800px;
            background-color: white;
            padding: 50px;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); 
            transition: transform 0.2s ease-in-out; /* Smooth hover effect */
        }
        .contact-container:hover{
            transform: scale(1.02);
        }

        h2 {
            text-align: center;
            margin-bottom: 40px;
            color: #343a40;
            font-weight: 600; /
        }

        .contact-info {
            margin-bottom: 40px;
        }

        .contact-info h3 {
            color: #343a40;
            margin-bottom: 15px;
        }

        .contact-info p {
            color: #555;
            margin-bottom: 8px;
        }
        .contact-info i{
            margin-right: 10px;
            color: #007bff;
        }

        .form-group {
            margin-bottom: 25px;
        }

        label {
            font-weight: 500;
            color: #343a40;
        }

        .form-control {
            border-radius: 8px;
            border: 1px solid #ced4da;
            padding: 12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle input shadow */
        }
        textarea.form-control{
            height: 150px;
        }

        .btn-primary {
            background: linear-gradient(to right, #007bff, #0056b3);
            border: none;
            color: white;
            border-radius: 8px;
            padding: 12px 25px;
            transition: background 0.3s ease;
        }

        .btn-primary:hover {
            background: linear-gradient(to right, #0056b3, #007bff);
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
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
        <div class="contact-container">
            <h2>Contact Us</h2>

            <div class="contact-info">
                <h3>Our Address</h3>
                <p><i class="fas fa-map-marker-alt"></i> 123 Main Street</p>
                <p>Gaushala, Kathmandu</p>
                <p>Nepal</p>
            </div>

            <div class="contact-info">
                <h3>Contact Details</h3>
                <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                <p><i class="fas fa-envelope"></i> info@eventify.com</p>
            </div>

            <form>
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Your Message</label>
                    <textarea class="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </main>
    
    
    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" 
	    marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gaushala,%20Kathmandu,%20Nepal+(Eventify)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
	    <a href="https://www.gps.ie/">gps trackers</a></iframe>
    </div>


    
    
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> 
        <%@ include file="components/footer.jsp" %>
    </footer>

</body>
</html>