*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#050816;
    color:white;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:#0b1120;
    position:sticky;
    top:0;
}

.logo{
    font-size:30px;
    font-weight:bold;
    color:#3b82f6;
}

nav ul{
    display:flex;
    list-style:none;
}

nav ul li{
    margin-left:25px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    transition:.3s;
}

nav ul li a:hover{
    color:#3b82f6;
}

.hero{
    text-align:center;
    padding:100px 20px;
}

.hero h1{
    font-size:55px;
    line-height:70px;
}

.hero p{
    margin-top:20px;
    font-size:20px;
    color:#cbd5e1;
}

.buttons{
    margin-top:40px;
}

.btn,
.btn2{
    display:inline-block;
    padding:14px 35px;
    margin:10px;
    border-radius:12px;
    text-decoration:none;
    transition:.3s;
}

.btn{
    background:#2563eb;
    color:white;
}

.btn:hover{
    background:#1d4ed8;
}

.btn2{
    border:2px solid #2563eb;
    color:white;
}

.btn2:hover{
    background:#2563eb;
}

.cards{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:30px;
    padding:70px 8%;
}

.card{
    background:#111827;
    width:320px;
    padding:30px;
    border-radius:18px;
    transition:.3s;
}

.card:hover{
    transform:translateY(-10px);
    box-shadow:0 0 20px rgba(37,99,235,.5);
}

.card h2{
    color:#3b82f6;
    margin-bottom:15px;
}

.card p{
    color:#d1d5db;
    line-height:26px;
}

footer{
    text-align:center;
    padding:25px;
    background:#0b1120;
    margin-top:60px;
}

@media(max-width:768px){

.hero h1{
    font-size:38px;
    line-height:50px;
}

nav{
    flex-direction:column;
}

nav ul{
    margin-top:15px;
}

.cards{
    flex-direction:column;
    align-items:center;
}

}
