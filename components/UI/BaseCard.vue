<template>
    <div class="plan-card">
        <slot />
    </div>
</template>
  
<style scoped>
  .plan-card {
    background-color: #fff; 
    border-radius: 8px;
    width: 300px;
    padding: 2rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    display: flex;
    flex-direction: column;
  }
 
  .plan-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
</style>
  