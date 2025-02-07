<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>EVENTIFY</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
     body { 
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        h1{
        	color: #123A85;
        }
        .carousel {
            height: 712px; 
        }
        .carousel-inner {
            height: 100%; 
        }
        .carousel-item {
            height: 100%; 
        }
        .carousel-item img {
            object-fit: cover; /
            height: 100%; 
            width: 100%; 
        }
        .carousel-caption{
        	font-size: 30px;
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

    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/party1.jpg" class="d-block w-100" alt="Carousel 1">  <%-- Replace with your image paths --%>
                <div class="carousel-caption d-none d-md-block">
                    
                    <p>"Your event, your way - we make it happen!.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/photo.avif" class="d-block w-100" alt="Carousel 2">
                <div class="carousel-caption d-none d-md-block">
                    
                    <p>"Unleash your imagination, we'll bring it to life.".</p>
                </div>
            </div>
               
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> <%-- Footer with mt-auto for sticky footer behavior --%>
        <%@ include file="components/footer.jsp" %>
    </footer>

    
</body>
</html>