<template>
    <nav class="navbar">
      <div class="navbar-links">
        <NuxtLink to="/" class="nav-link">Početna</NuxtLink>
        <NuxtLink to="/programs" class="nav-link">Programi</NuxtLink>
      </div>
      <div class="navbar-logo">
        <h1>ARIZONA<span>LIFTS</span></h1>
      </div>
      <div class="navbar-links">
        <a href="#" class="nav-link">O meni</a>
        <a href="#" class="nav-link">Kontakt</a>
      </div>
    </nav>
</template>
  
  
<style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 99%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F4E1D2;
    padding: 1rem 2rem;
    height: 2rem;
  }

  
  .navbar-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-link {
    color: #f4a261;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    transition: background 0.3s ease, color 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-family: inherit;
    margin-right: 4rem;
    margin-left: 2rem;
  }
  
  .nav-link:hover {
    color: #e76f51;
  }
  
  .navbar-logo h1 {
    color: #e76f51;
    font-size: 2rem;
    text-shadow: 2px 2px #f4a261;
    margin: 0;
  }

  .navbar-logo h1 span{
    color: #f4a261;
    font-size: 2rem;
    text-shadow: 2px 2px #e76f51;
  }

  .nav-link:hover {
    color: #e76f51;
  }

  .nav-link.router-link-active {
    background: linear-gradient(180deg,#F4E1D2 0%,#FADAC3 50%);
    color: #e76f51;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  }
  </style>
  