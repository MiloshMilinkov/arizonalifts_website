<template>
    <button>
        <slot></slot>
    </button>
</template>
<style scoped>

button {
    padding: 0.8rem 1.5rem;
    background-color: #f3c198;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover,
  button:active {
    background-color: #f4a261;
    border-color: #f4a261;
  }

</style>