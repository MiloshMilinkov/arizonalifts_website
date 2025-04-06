<template>
    <div class="plan-card">
        <slot />
    </div>
</template>
  
<style scoped>
  .plan-card {
    background-color: #fff; 
    border-radius: 8px;
    width: 400px;
    padding: 2rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
 
  .plan-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .plan-card {
      padding: 1.5rem 1rem;
      margin-bottom: 1rem;
    }
  }
</style>
  