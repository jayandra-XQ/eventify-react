<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Event Categories</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background: linear-gradient(to bottom right, #e0eafc, #cfdef3); /* Gradient background */
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

        .category-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px; 
            padding: 40px;
            max-width: 1400px; 
        }

        .category-item {
            width: 380px; 
            border-radius: 20px; 
            overflow: hidden;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
            transition: transform 0.2s ease; 
            background-color: white; 
        }

        .category-item:hover {
            transform: scale(1.03);
        }

        .category-image {
            width: 100%;
            height: 280px; 
            object-fit: cover;
        }

        .category-details {
            padding: 25px;
        }

        .category-title {
            font-weight: 600; 
            font-size: 1.3rem; 
            margin-bottom: 15px;
            color: #333; 
        }

        .category-description {
            color: #555; /
            margin-bottom: 20px;
        }

        .category-link {
            display: inline-flex;
            align-items: center; 
            gap: 8px; /
            padding: 12px 25px;/
            background: linear-gradient(to right, #007bff, #0056b3); 
            color: white;
            text-decoration: none;
            border-radius: 10px; 
            transition: background 0.3s ease;
        }

        .category-link:hover {
            background: linear-gradient(to right, #0056b3, #007bff);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .category-link i{
            font-size: 1.2rem;
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

    <%@ include file="components/navbar.jsp"%>

    <main>
        <div class="category-container">
            <div class="category-item">
                <img src="images/wedding.avif" alt="Wedding" class="category-image">
                <div class="category-details">
                    <h3 class="category-title">Weddings</h3>
                    <p class="category-description">Elegant and unforgettable wedding celebrations.  From intimate gatherings to grand affairs, we curate every detail to create your dream wedding.</p>
                    <a href="#" class="category-link"><i class="fas fa-info-circle"></i> Learn More</a>
                </div>
            </div>

            <div class="category-item">
                <img src="images/coprate.avif" alt="Corporate Events" class="category-image">
                <div class="category-details">
                    <h3 class="category-title">Corporate Events</h3>
                    <p class="category-description">Professional and impactful corporate events. We specialize in conferences, seminars, product launches, and team-building activities.</p>
                    <a href="#" class="category-link"><i class="fas fa-info-circle"></i> Learn More</a>
                </div>
            </div>

            <div class="category-item">
                <img src="images/birthday.avif" alt="Birthday" class="category-image">
                <div class="category-details">
                    <h3 class="category-title">Birthdays</h3>
                    <p class="category-description">Fun and memorable birthday celebrations for all ages.  We handle everything from decorations to entertainment.</p>
                    <a href="#" class="category-link"><i class="fas fa-info-circle"></i> Learn More</a>
                </div>
            </div>

            <div class="category-item">
                <img src="images/conference.webp" alt="Conferences" class="category-image">
                <div class="category-details">
                    <h3 class="category-title">Conferences</h3>
                    <p class="category-description">Well-organized and productive conferences that foster collaboration and knowledge sharing.</p>
                    <a href="#" class="category-link"><i class="fas fa-info-circle"></i> Learn More</a>
                </div>
            </div>
            <div class="category-item">
                <img src="images/party1.jpg" alt="Parties" class="category-image">
                <div class="category-details">
                    <h3 class="category-title">Parties</h3>
                    <p class="category-description">From casual get-togethers to themed extravaganzas, we create parties that leave a lasting impression.</p>
                    <a href="#" class="category-link"><i class="fas fa-info-circle"></i> Learn More</a>
                </div>
            </div>
            
             <div class="category-item">
                <img src="images/holi.webp" alt="Parties" class="category-image">
                <div class="category-details">
                    <h3 class="category-title">Holi</h3>
                    <p class="category-description">Experience the true essence of Holi with our traditional celebrations. Enjoy folk music, traditional dances, and the use of natural, eco-friendly colors.</p>
                    <a href="#" class="category-link"><i class="fas fa-info-circle"></i> Learn More</a>
                </div>
            </div>

            

        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <footer class="mt-auto">
        <%@ include file="components/footer.jsp"%>
    </footer>

</body>

</html>