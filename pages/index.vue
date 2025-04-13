<template>
  <section class="banner-section">
    <div class="banner-content">
      <h1 class="banner-title">
        Ovde ide neki naslov slogan
      </h1>
      <p class="banner-subtitle">
        Ovde ide neki tekst slogana
      </p>
      <div class="btn-container">
        <NuxtLink to="/programs" class="nav-link"><BaseButton class="btn">Trening programi</BaseButton></NuxtLink>
        <NuxtLink to="/nutrition" class="nav-link"><BaseButton class="btn">Priručnik o ishrani</BaseButton></NuxtLink>
      </div>
    </div>
    <div class="banner-shape"></div>
  </section>
</template>

<style scoped>
.banner-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #A1C6EA, #FFDAB9);
  overflow: hidden;
}

.banner-content {
  z-index: 1;
  max-width: 600px;
  padding: 2rem;
}
.btn-container{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.banner-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.banner-subtitle {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  transform: translateY(-3px);
}

.banner-shape {
  position: absolute;
  right: 0;
  width: 95%;
  height: 97.5%;
  background-color: #FFDAB9;
  border-bottom-left-radius: 25%;
  border-top-left-radius: 25%;
  transform: translateX(30%);
  z-index: 0;
}

@media (max-width: 768px) {
  .banner-section {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }

  .banner-content {
    max-width: 100%;
    margin-bottom: 2rem;
    padding: 0;
  }

  .banner-title {
    font-size: 2.5rem;
  }

  .banner-subtitle {
    font-size: 1rem;
  }

  .banner-shape {
    display: none;
  }
}
</style>
