<template>
  <div class="nutrition-section">
    <div class="nutrition-content">
      <h1 class="title">TVOJ PRIRUČNIK O ISHRANI</h1>
      <p class="subtitle">Da ishrana bude zdrava i zabavna</p>
      <BaseButton class="btn">PRIJAVI SE</BaseButton>
    </div>
    <div class="img-container">
      <img src="../assets/1image.png" class="img" />
    </div>   
  </div>
</template>

<style scoped>
.nutrition-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #A1C6EA 0%, #FFB6C1 90%);
  color: #333;
  position: relative;
  overflow: hidden;
}

.nutrition-content {
  max-width: 35%;
  margin-right: auto;
  z-index: 1;
}

.title {
  font-size: 4rem;
  font-weight: bolder;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.btn{
  border: none;
  width: 15em;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #fff;
}

.img-container {
  margin-left: auto;
  z-index: 1;
}

.img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 10%;
}

.nutrition-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 70%);
  transform: rotate(45deg);
  z-index: 0;
}

@media (max-width: 768px) {
  .nutrition-section {
    flex-direction: column;
    padding: 2rem 1rem;
  }
  .nutrition-content {
    margin: 0 0 2rem 0;
    text-align: center;
    max-width: 100%;
  }
  .img-container {
    margin-left: 0;
  }
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.25rem;
  }
}
</style>
