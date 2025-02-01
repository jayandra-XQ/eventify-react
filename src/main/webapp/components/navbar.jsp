<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Navbar</title>
    <style>
        .navbar {
            height: 83px; 
            background-color: #676B98; 
        }

        .navbar-brand, .navbar-nav .nav-link {
            color: #2D3378 !important; 
            font-weight:500;
        }
        .navbar-brand{
            font-size: 24px;
            font-weight: 700;
        }
        .nav-item .nav-link{
            font-size: 20px;
        }

        .navbar-nav .nav-link.active {
            color: #2D3378 !important;
        }
        
        .dropdown-menu {
            background-color: #FFFFFF; /* Dropdown background color */
        }

        .dropdown-item {
            color: #2D3378; /* Dropdown item text color */
        }
        .btn{
            background-color: #2D3378;
            color: white;
            border-radius: 30px;
            padding: 10px 20px;
        }
        .btn:hover{
            background-color: #2D3378;
            color: white;
        }

        /* Optional: Add some spacing between navbar items if needed */
        .navbar-nav .nav-item {
            margin-left: 20px; /* Adjust as needed */
        }
        .navbar-toggler{
            border: none;
        }
        
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    	<li class="nav-item ">
                    		<a class="nav-link" href="#">Home</a>
                    	</li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
                <div class="d-flex">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Let's Connect
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end"> <%-- dropdown-menu-end for right alignment --%>
                            <li><a class="dropdown-item" href="#">Sign Up</a></li>
                            <li><a class="dropdown-item" href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script> </body>
</html>