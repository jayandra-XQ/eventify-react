<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Event List Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<style>
    /* Background styling */
    body {
       
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    h2 {
        text-align: center;
        margin-top: 30px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Event List Container */
    main {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
         background: url('images/coprate.avif') no-repeat center center/cover;
    }

    .event-type-container {
        width: 90%;
        max-width: 1000px;
        background: rgba(255, 255, 255, 0.9);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
    }

    /* Table Styling */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #123A85;
        color: white;
        font-weight: bold;
    }

    tbody tr:hover {
        background-color: rgba(0, 0, 0, 0.05);
        cursor: pointer;
    }

    /* Action Buttons */
    .btn-container {
        text-align: center;
        margin-top: 15px;
    }

    .btn-action {
        padding: 8px 15px;
        font-size: 14px;
        border-radius: 5px;
        transition: transform 0.2s ease-in-out;
    }

    .btn-edit {
        background-color: #ffc107;
        color: black;
    }

    .btn-edit:hover {
        background-color: #e0a800;
        transform: scale(1.05);
    }

    .btn-delete {
        background-color: #dc3545;
        color: white;
    }

    .btn-delete:hover {
        background-color: #c82333;
        transform: scale(1.05);
    }
</style>

</head>
<body>

<header>
    <h1>EVENTIFY!!</h1>
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
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Birthday Party</td>
                    <td>Fun and personalized birthday parties with unique activities and decorations.</td>
                    <td class="btn-container">
                        <button class="btn btn-delete btn-action">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Corporate Event</td>
                    <td>Professional corporate event planning with seamless execution.</td>
                    <td class="btn-container">
                        <button class="btn btn-delete btn-action">Delete</button>
                    </td>
                </tr>
                <%-- Add more rows dynamically from the database --%>
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
