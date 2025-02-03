<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>UserList Page</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
	<style>
		body {
            display: flex;
            flex-direction: column; 
            min-height: 100vh;
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

        .user-list-container {
            width: 80%;
            max-width: 1500px;
            margin-bottom: 550px;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
       
        

       	h2{
       		text-align: center;
       		margin-top: 30px;
       	}
       	
        .table-responsive{
            overflow-x: auto;
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
            background-color: #f2f2f2;
            font-weight: bold;
        }
        .btn-danger{
            background-color: #2D3378;
            border: none;
        }
        .btn-danger:hover{
            background-color: #c14224;
        }
	</style>
<body>

	<header>
	        <div>  
            <h1>EVENTIFY!!</h1>
        </div>
    	</header>
    <%@ include file="components/navbar.jsp" %>
    
            <h2>User List</h2>
           
      <main>
        <div class="user-list-container">
            <div class="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>mukesh</td>
                        <td>yadav</td>
                        <td>mukesh1234@gmail.com</td>
                        <td>Male</td>
                        <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        </div>
    </main>
	
	
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <footer class="mt-auto"> 
        <%@ include file="components/footer.jsp" %>
    </footer>
</body>
</html>