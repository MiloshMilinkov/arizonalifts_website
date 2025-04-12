
<template>
    <div id="app">
    <NavBar />
    <div class="renderedViews">
        <NuxtPage />
    </div>
    <Footer />
    </div>
</template>
  

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #4A4A4A;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .renderedViews{
    margin-top: 3.5rem; 
    flex: 1;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.2s ease-out;
  }
</style>
  