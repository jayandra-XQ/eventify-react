<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>About Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<style>
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
main {
    flex: 1;
    padding: 40px 0;
}
h1 {
    color: #123A85;
}
.about-section {
    padding: 40px 0;
}
.about-section img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.about-content {
    padding: 20px;
}
.btn-primary {
    background-color: #2D3378;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
}
.team-section {
    padding: 40px 0;
    background-color: #f8f9fa;
}
.team-member {
    margin: 20px;
    border: none;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
.team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    border: 3px solid #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.team-member-content {
    text-align: center;
    width: 100%;
}
.team-member-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
}
.team-member-designation {
    font-size: 16px;
    color: #777;
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
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="images/about1.webp" alt="About 1">
                    </div>
                    <div class="col-md-6">
                        <div class="about-content">
                            <h2>Welcome to EVENTIFY</h2>
                            <p>EVENTIFY is your ultimate event planning companion, helping you create unforgettable experiences with ease.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-section">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="about-content">
                            <h2>Why Choose EVENTIFY?</h2>
                            <p>With a user-friendly interface and powerful tools, EVENTIFY makes it easy to organize and manage events effortlessly. Our platform empowers you to focus on what truly matters: creating meaningful experiences</p>
                            <button class="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="images/about2.webp" alt="About 2">
                    </div>
                </div>
            </section>
            <section class="about-section">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="images/about3.webp" alt="About 3">
                    </div>
                    <div class="col-md-6">
                        <div class="about-content">
                            <h2>Discover Our Features</h2>
                            <p>From customizable event templates to real-time collaboration tools, EVENTIFY provides everything you need to plan your event. Explore our innovative features designed to save time and bring your ideas to life.</p>
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
                                <img src="images/jayandra.png" alt="Jayandra Hamal">
                                <div class="card-body team-member-content">
                                    <h3 class="card-title team-member-title">Jayandra Hamal</h3>
                                    <p class="card-text team-member-designation">CEO-FOUNDER</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card team-member">
                                <img src="images/ashik.png" alt="Ashik Sunar">
                                <div class="card-body team-member-content">
                                    <h3 class="card-title team-member-title">Ashik Sunar</h3>
                                    <p class="card-text team-member-designation">CEO-FOUNDER</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card team-member">
                                <img src="images/bishwash.png" alt="Bishwash Acharya">
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <footer class="mt-auto">
        <%@ include file="components/footer.jsp"%>
    </footer>
</body>
</html>