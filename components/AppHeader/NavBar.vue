<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <h1>ARIZONA<span>LIFTS</span></h1>
    </div>
    <div class="navbar-desktop">
      <div class="navbar-links">
        <NuxtLink to="/" class="nav-link">Početna</NuxtLink>
        <NuxtLink to="/programs" class="nav-link">Programi</NuxtLink>
        <NuxtLink to="/nutrition" class="nav-link">Ishrana</NuxtLink>
        <NuxtLink to="/about" class="nav-link">O Meni</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Kontakt</NuxtLink>
      </div>
    </div>

    <div class="navbar-mobile">
      <div class="hamburger" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mobile-menu" v-if="showMobileMenu">
        <NuxtLink to="/" class="mobile-link">Početna</NuxtLink>
        <NuxtLink to="/programs" class="mobile-link">Programi</NuxtLink>
        <NuxtLink to="/nutrition" class="mobile-link">Ishrana</NuxtLink>
        <NuxtLink to="/about" class="mobile-link">O Meni</NuxtLink>
        <NuxtLink to="/contact" class="mobile-link">Kontakt</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
  const showMobileMenu = ref(false)
  const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
  }
</script>

<style scoped>
  .navbar {
    position: fixed;
    width: 100vw;
    background: #FFDAB9; 
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    height: 3.5rem;
  }

  .navbar-logo h1 {
    margin-left: 1rem;
    font-size: 2rem;
    color: #A1C6EA;
  }
  
  .navbar-logo h1 span {
    color: #FFB6C1;
  }

  .navbar-desktop {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .navbar-links {
    display: flex;
    gap: 1.5rem;
    padding-right: 5rem;
  }

  .nav-link {
    color: white; 
    text-decoration: none;
    font-weight:bold;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background 0.3s ease, color 0.3s ease;
    text-shadow: 0 4px 4px rgba(0,0,0,0.25);
  }

  .nav-link:hover {
    background: linear-gradient(180deg, #FFDAB9 0%, #FFB6C1 150%);
  }

  .nav-link.router-link-active, .nav-link.router-link-active  {
    background: linear-gradient(180deg, #FFDAB9 0%, #FFB6C1 150%);
  }

  .navbar-mobile {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2rem;
  }

  .hamburger {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .hamburger span {
    display: block;
    width: 2rem;
    height: 3px;
    background: #80CED6;
    border-radius: 2px;
  }

  .mobile-menu {
    background: #FFDAB9; 
    position: absolute;
    top: 100%;
    right: 0rem;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    z-index: 999;
  }

  .mobile-link {
    padding: 0.75rem 1.5rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s ease;
  }

  @media (max-width: 768px) {
    .navbar-desktop {
      display: none;
    }
    .navbar-mobile {
      display: flex;
    }
    .navbar-logo h1 {
    margin-left: 1rem;
    font-size: 2rem;
    color: #80CED6;
    text-shadow: 0 3px 3px rgba(0,0,0,0.3);
    }
    .navbar-logo h1 span {
      color: #FFB6C1;
      text-shadow: 0 3px 3px rgba(0,0,0,0.3);
    }
    .mobile-link:hover, .mobile-link.router-link-active, .mobile-link.router-link-active  {
      background: linear-gradient(180deg, #FFDAB9 0%, #FFB6C1 150%);
     }
  }
</style>
