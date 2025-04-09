<template>
  <section class="information-section">
    <div class="info-card">
      <h1>KONTAKT</h1>
      <p>Kristina Arizanović</p>
      <p>arizonaliftsmail@gmail.com</p>
      <div class="social-media-container">
        <a href="https://www.instagram.com/arizonalifts/" class="social-media-icon" aria-label="Instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://www.tiktok.com/@arizonalifts" class="social-media-icon" aria-label="TikTok">
          <font-awesome-icon :icon="['fab', 'tiktok']" />
        </a>
      </div>
    </div>
  </section>
  <section class="contact-section">
    <BaseCard class="contact-card">
      <h1>AKO IMAŠ NEKO PITANJE</h1>
      <form class="contact-form" @submit.prevent="submitForm" novalidate>
        <div class="form-group">
          <label for="email">Email:</label>
          <input id="email" v-model="form.email" type="email" required aria-required="true" />
        </div>
        <div class="form-group">
          <label for="subject">Naslov:</label>
          <input id="subject" v-model="form.subject" type="text" required aria-required="true" />
        </div>
        <div class="form-group">
          <label for="message">Poruka:</label>
          <textarea id="message" v-model="form.message" required aria-required="true"></textarea>
        </div>
        <BaseButton type="submit" aria-label="Pošalji upit">Pošalji</BaseButton>
      </form>
      <div v-if="status.message" role="alert" :class="{ success: status.success, error: !status.success }">
        {{ status.message }}
      </div>
    </BaseCard>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  subject: '',
  message: ''
})

const status = ref({
  message: '',
  success: false
})

const submitForm = async () => {
  status.value.message = ''
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    if (!response.ok) {
      const errorData = await response.json()
      status.value.message = errorData.statusMessage || 'Something went wrong.'
      status.value.success = false
    } else {
      const data = await response.json()
      status.value.message = data.message || 'Email sent successfully!'
      status.value.success = true
      form.value = { email: '', subject: '', message: '' }
    }
  } catch (error) {
    status.value.message = error.message || 'Something went wrong.'
    status.value.success = false
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.information-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh; 
  background-color: pink;
  padding: 2rem;
}

.info-card {
  text-align: center;
}

.info-card h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card p {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.social-media-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-media-icon {
  text-decoration: none;
  font-size: 4rem;
  color: #FFB6C1;
}

.contact-section {
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-card {
  width: 100%;
  max-width: 600px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #80CED6;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 3px solid #D6D6D6;
  border-radius: 4px;
  transition: border-width 0.2s ease;
}

input:hover,
textarea:hover,
input:focus,
textarea:focus {
  border-width: 4px;
  outline: none;
}

button {
  width: 100%;
}

.success {
  color: green;
  margin-top: 1rem;
}

.error {
  color: red;
  margin-top: 1rem;
}



@media (max-width: 768px) {
  .information-section {
    padding: 1rem;
    min-height: 50vh;
  }

  .info-card h1 {
    font-size: 2rem;
  }

  .info-card p {
    font-size: 1.5rem;
  }

  .social-media-container {
    gap: 1rem;
  }

  .social-media-icon {
    font-size: 2.5rem;
  }

  .contact-section {
    padding: 2rem 1rem;
  }

  .contact-card {
    margin: 0 1rem;
  }

  label {
    font-size: 1.25rem;
  }

  input,
  textarea {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
    padding: 0.5rem;
  } 
}
</style>
