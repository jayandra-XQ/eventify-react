<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Footer</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <style>
        .custom-footer {
            width: 100%; 
            height: auto; 
            background: linear-gradient(to right, #0c6085, #094560); 
            color: white;
            padding: 20px; 
            display: flex;
            flex-direction: column; 
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .footer-content {
            display: flex;
            flex-wrap: wrap; 
            justify-content: center;
            gap: 30px; 
            margin-bottom: 15px; 
        }

        .footer-item {
            margin: 0 15px; 
        }

        .footer-item a {
            color: white;
            text-decoration: none;
            transition: color 0.3s ease; 
        }

        .footer-item a:hover {
            color: #ddd; 
        }

        .social-icons {
            display: flex;
            gap: 15px; 
        }

        .social-icons a {
            color: white;
            font-size: 20px;
            transition: color 0.3s ease;
        }
        .social-icons a:hover{
            color: #ddd;
        }

        .copyright {
            font-size: 14px;
        }
    </style>
</head>
<body>
    <footer class="custom-footer">
        <div class="footer-content">
            <div class="footer-item">
                <a href="#">Privacy Policy</a>
            </div>
            <div class="footer-item">
                <a href="#">Terms of Service</a>
            </div>
            <div class="footer-item">
                <a href="#">FAQ</a>
            </div>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2025 EVENTIFY. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>