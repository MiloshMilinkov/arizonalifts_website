<template>
    <nav class="navbar">
      <div class="navbar-links">
        <NuxtLink to="/" class="nav-link">Početna</NuxtLink>
        <div class="dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <NuxtLink to="/programs" class="nav-link">Programi</NuxtLink>
          <div class="dropdown-menu" v-if="showDropdown">
            <NuxtLink to="/programs" class="dropdown-item">Trening</NuxtLink>
            <NuxtLink to="/nutrition" class="dropdown-item">Ishrana</NuxtLink>
          </div>
        </div>
      </div>
      <div class="navbar-logo">
        <h1>ARIZONA<span>LIFTS</span></h1>
      </div>
      <div class="navbar-links">
        <NuxtLink to="/" class="nav-link">O Meni</NuxtLink>
        <NuxtLink to="/programs" class="nav-link">Kontakt</NuxtLink>
      </div>
    </nav>
</template>

<script setup>
  import { ref } from 'vue';
    const showDropdown = ref(false);
</script>
  
<style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 99%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F4E1D2;
    padding-top: 1rem;
    height: 3rem;
    width: 100vw;
    gap: 5rem;
  }

  
  .navbar-links {
    display: flex;
    gap: 5rem;
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

  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #FADAC3;
    padding: 0.5rem 0;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    min-width: 100%;
  }

  .dropdown-item {
    display: block;
    padding: 0.5rem 1rem;
    color: #e76f51;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  .dropdown-item:hover {
    background: #f4a261;
    color: #fff;
  }
  </style>
  