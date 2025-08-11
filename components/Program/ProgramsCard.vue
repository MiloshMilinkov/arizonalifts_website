<template>
  <BaseCard>
    <div v-if="ribbon" class="ribbon" aria-hidden="true">{{ ribbon }}</div>

    <h2 class="plan-title">{{ title }}</h2>

    <ul class="plan-features" role="list">
      <li v-for="(feature, index) in features" :key="index" class="feature">
        <span
          v-if="feature.hasOwnProperty('available')"
          class="feature-icon"
          :data-ok="feature.available"
          aria-hidden="true"
        />
        <span class="feature-text">{{ feature.name }}</span>
      </li>
    </ul>

    <p v-if="price" class="plan-price">{{ price }}</p>

    <BaseButton @click="goToDocs(docsUrl)" class="btn">PRIJAVI SE</BaseButton>
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
  const w = window.open(url, '_blank');
  if (w) w.opener = null;
}

</script>

<style scoped>
  .plan-title {
  font-size: 1.15rem;
  margin-bottom: .75rem;
  text-transform: uppercase;
  letter-spacing: .8px;
  text-align: center;
}

.plan-features {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: grid;
  gap: .5rem .75rem;
}

.feature {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: .5rem;
  line-height: 1.55;
  font-size: 1rem;
  white-space: pre-line; 
}

.feature-icon {
  width: 1.1rem; height: 1.1rem;
  border-radius: 999px;
  border: 2px solid;
  display: inline-block;
}
.feature-icon[data-ok="true"]  { border-color: #10b981; background: #10b98122; }
.feature-icon[data-ok="false"] { border-color: #ef4444; background: #ef444422; }

.feature-text { color: #111827; }

.plan-price {
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  margin: .25rem 0 1rem;
}

/* Ribbon with better placement & depth, keeping your idea */
.ribbon {
  position: absolute;
  top: 15px; 
  right: -44px;
  transform: rotate(35deg);
  background: linear-gradient(90deg, #fca5a5, #fda4af);
  color: #fff;
  padding: .35rem 2.25rem;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: .06em;
  text-transform: uppercase;
  box-shadow: 0 6px 16px rgba(0,0,0,.18);
  pointer-events: none;
  border-radius: 2px;
}

.btn { font-weight: 800; width: 100%; border-radius: 999px; }


@media (max-width: 768px) {
  .plan-title { font-size: 1.05rem; }
  .plan-features { font-size: 1rem; line-height: 1.5; }
  .plan-price { font-size: 1.2rem; }
  .ribbon { font-size: 1rem; padding: .3rem 1rem; }
}
</style>
