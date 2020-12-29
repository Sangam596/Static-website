# Static-website
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon"  href="https://media-exp1.licdn.com/dms/image/C5103AQHc-l44PPzriQ/profile-displayphoto-shrink_100_100/0/1576838589753?e=1614211200&v=beta&t=VZ1ySkrzczaJqtlz0JGIDppgWIuk3W30sE4e0DZW5vs">
        <title>Login Page</title>
</head>
<body style="background-image: url(./12.jpg); background-repeat: no-repeat; background-size: cover;">
   <div style="width: 500px;margin-left: 420px;">
    
            <div>
                <h4  style="text-align: right;margin-top: 80px;color: rgb(240, 8, 58);font-weight: bolder;font-size: 30px; ">Created By Sangamesh Bagalkot</h4>
            </div>
        
       
        <fieldset style="background-color: rgba(218, 24, 169, 0.5);"  >
            <legend style="text-align: center;" ><h1>LogIn</h1>  </legend>
         <br>  
        <h2>Welcome To My Website</h2><br><small style="color:tomato;" > Login With given credentials</small>
       
        <form action="./Home.html" method="POST" target="_blank" onsubmit=" return valid()" >
        <label for="Username">Username</label>
        <input  type="username" placeholder="Enter any username"> <br><br>
        <label for="Password">Password</label> 
        <input id="root" type="password" placeholder="Enter 'Bangalore' as password" ><br> <br>
        <button>LogIn</button>
        </form>

    </fieldset>
</div>

<script src="./login.js"></script>
</body>
</html>
