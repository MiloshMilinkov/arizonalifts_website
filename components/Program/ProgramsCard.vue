<template>
  <BaseCard>
    <div v-if="ribbon" class="ribbon">{{ ribbon }}</div>
    <h2 class="plan-title">{{ title }}</h2>
    <ul class="plan-features">
      <li v-for="(feature, index) in features" :key="index">
        <span v-if="feature.hasOwnProperty('available')" 
              class="feature-icon" 
              :class="{
                availableFeature: feature.available,
                notAvailable: !feature.available
              }">
          <span v-if="feature.available">&#10004;</span>
          <span v-else>&#10008;</span>
        </span>
        {{ feature.name }}
      </li>
    </ul>
    <p v-if="price" class="plan-price">{{ price }}</p>
    <BaseButton @click="goToDocs(docsUrl)">PRIJAVI SE</BaseButton>
  </BaseCard>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  price: {
    type: String,
    default: '',
  },
  ribbon: {
    type: String,
    default: '',
  },
  docsUrl: {
    type: String,
    default: 'https://www.google.com'
  }
});

function goToDocs(url) {
  window.open(url);
}
</script>

<style scoped>
  .plan-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: #e76f51;
  }

  .plan-features {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: left;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }

  .feature-icon.availableFeature {
    color: #2ecc71;
  }
  .feature-icon.notAvailable {
    color: #e74c3c;
  }

  .plan-price {
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    margin-top: 1rem;
    text-align: center;
  }

  .ribbon {
    position: absolute;
    top: -5px;
    left: -10px;
    background-color: #f4a261;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    transform: rotate(-10deg);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
</style>
