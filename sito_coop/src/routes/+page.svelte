<script>

  </script>
  
  <style>
   
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
      
    }
  
    body {
      font-size: 16px;
      line-height: 1.6;

    }
  
    /* Header */
    header {
      background-color: #fa654e; /* Verde */
      color: white;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    header h1 {
      font-size: 1.8rem;
    }
  
    nav {
      display: flex;
      align-items: center;
    }
  
    nav img {
      height: 60px; /* Dimensione del logo */
      margin-right: 20px;
    }
  
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }
  
    nav ul li {
      display: inline;
    }
  
    nav ul li a {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      padding: 5px 10px;
    }
  
    nav ul li a:hover {
      background-color: #45a049;
      border-radius: 5px;
    }
    main{
        background-color: #9ee2a2;
    }
  
    
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 10px 0;
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  </style>
  
  <header>
    <h1>E-Coop</h1>
    <nav>
    
      <img src="/immagini/logo.png" alt="Logo E-Coop" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Prodotti</a></li>
        <li><a href="#">Offerte</a></li>
        <li><a href="#">Contatti</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>Benvenuto su E-Coop!</h2>
      <p>Scopri i nostri prodotti e le migliori offerte.</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2025 E-Coop. Tutti i diritti riservati.</p>
  </footer>
  