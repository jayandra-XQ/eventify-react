<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>About Page</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
          
          <style>
          	body{
          		min-height: 100vh;
          	}
          	
          	.about-section {
            padding: 40px 0; 
        }
        .about-section img {
            max-width: 100%; 
            height: auto;
        }
        .about-content {
            padding: 20px;
            margin-top: 120px;
        }
        .btn-primary{
            background-color: #2D3378;
            border: none;
        }
        
       .team-section {
            padding: 40px 0;
            text-align: center;
        }

        .team-member {
            margin: 20px;
            border: none;
            background-color: #D9D9D9; /* Card background color */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* More prominent shadow */
            border-radius: 8px;
            overflow: hidden;
            display: flex; /* Use flexbox for centering */
            flex-direction: column; /* Stack elements vertically */
            align-items: center; /* Center horizontally */
            padding: 20px; /* Add padding inside the card */
        }

        .team-member img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px; /* Space between image and text */
        }

        .team-member-content {
            text-align: center; /* Center text within card content */
            width: 100%; /* Ensure content takes full card width */
        }
        .team-member-title{
            font-size: 24px;
            font-weight: 700;
        }
        .team-member-designation{
            font-size: 18px;
        }


        .team-member-name {
            margin-bottom: 10px;
        }
        
        
                  </style>
</head>
<body>
	<header>
        <div>  
            <h1>EVENTIFY!!</h1>
        </div>
    </header>
    
    	<%@ include file="components/navbar.jsp"%>
    	
    	 <main>
        <div class="container">

            <section class="about-section">  
                <div class="row">
                    <div class="col-md-6">  <%-- Left column (content) --%>
                        <div class="about-content">
                            <h2>Welcome to EVENTIFY</h2>
                            <p>EVENTIFY is your ultimate event planning companion, helping you 
								create unforgettable experiences with ease.</p>
                        </div>
                    </div>
                    <div class="col-md-6">  
                        <img src="images/about1.webp" alt="About 1"> 
                    </div>
                </div>
            </section>

            <section class="about-section">  <%-- Section 2: Left content with button, right image --%>
                <div class="row">
                    <div class="col-md-6">  <%-- Left column (content with button) --%>
                        <div class="about-content">
                            <h2>Why Choose EVENTIFY?</h2>
                            <p>With a user-friendly interface and powerful tools, EVENTIFY makes it easy
								 to organize and manage events effortlessly. Our platform empowers you to 
								focus on what truly matters: creating meaningful experiences</p>
							<button class="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div class="col-md-6">  <%-- Right column (image) --%>
                        <img src="images/about2.webp" alt="About 2"> <%-- Replace with your image path --%>
                    </div>
                </div>
            </section>

           <section class="about-section">  
		    <div class="row">
		     <div class="col-md-6">  
		            <img src="images/about3.webp" alt="About 3"> 
		        </div>
		        <div class="col-md-6">  
		            <div class="about-content">
		                <h2>Discover Our Features</h2>
		                <p>From customizable event templates to real-time collaboration tools,
							 EVENTIFY provides everything you need to plan your event. Explore
							 our innovative features designed to save time and bring your ideas 
							to life..</p>
						<button class="btn btn-primary">Learn More</button>
		            </div>
		        </div>
		       
		    </div>
		</section>
		
			
			<section class="team-section">
        <div class="container">
            <h2>The People Behind EVENTIFY.</h2>
            <p>We're a passionate group of developers dedicated to creating impactful event management solutions.</p>

            <div class="row justify-content-center">  
                <div class="col-md-4">  
                    <div class="card team-member">
                        <img src="images/jayandra.png" alt="Jayandra Hamal">  <%-- Replace with your image path --%>
                        <div class="card-body team-member-content">
                            <h3 class="card-title team-member-title">Jayandra Hamal</h3>
                            <p class="card-text team-member-designation">CEO-FOUNDER</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">  <%-- Adjust column size for responsiveness --%>
                    <div class="card team-member">
                        <img src="images/ashik.png" alt="Ashik Sunar">  <%-- Replace with your image path --%>
                        <div class="card-body team-member-content">
                            <h3 class="card-title team-member-title">Ashik Sunar</h3>
                            <p class="card-text team-member-designation">CEO-FOUNDER</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">  <%-- Adjust column size for responsiveness --%>
                    <div class="card team-member">
                       <img src="images/bishwash.png" alt="Bishwash Acharya">  <%-- Replace with your image path --%>
                        <div class="card-body team-member-content">
                            <h3 class="card-title team-member-title">Bishwash Acharya</h3>
                            <p class="card-text team-member-designation">CEO-FOUNDER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div> 
    </main>
    	
    	
    	
    	
    	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> <%-- Footer with mt-auto for sticky footer behavior --%>
        <%@ include file="components/footer.jsp" %>
    </footer>

</body>
</html>