<template>
    <section class="information-section">
    <div class="info-card">
      <h1>KONTAKT</h1>
      <p>Kristina Arizanović</p>
      <p>arizonaliftsmail@gmail.com</p>
      <div class="social-media-container">
        <a href="https://www.instagram.com/arizonalifts/" class="social-media-icon"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="https://www.tiktok.com/@arizonalifts" class="social-media-icon"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
      </div>
    </div>
    </section>
    <section class="contact-section">
        <BaseCard class="contact-card">
            <h1>AKO IMAŠ NEKO PITANJE</h1>
            <form class="contact-form"@submit.prevent="submitForm">
                <div class="form-group">
                <label for="email">Email:</label>
                <input id="email" v-model="form.email" type="email" required />
                </div>
                <div class="form-group">
                <label for="subject">Naslov:</label>
                <input id="subject" v-model="form.subject" type="text" required />
                </div>
                <div class="form-group">
                <label for="message">Poruka:</label>
                <textarea id="message" v-model="form.message" required></textarea>
                </div>
                <BaseButton type="submit">Pošalji</BaseButton>
            </form>
            <div v-if="status.message" 
                :class="{ success: status.success, 
                    error: !status.success }">
                {{ status.message }}
            </div>
        </BaseCard>
    </section>
</template>
  
<script setup>
  import { ref } from 'vue'
 
  const form = ref({
    name: '',
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
      })
  
      if (!res.ok) {
        const errorData = await res.json()
        status.value.message = errorData.statusMessage || 'Something went wrong.'
        status.value.success = false
      } else {
        const data = await res.json()
        status.value.message = data.message || 'Email sent successfully!'
        status.value.success = true
        form.value = {email: '', subject: '', message: '' }
      }
    } catch (error) {
      status.value.message = error.message || 'Something went wrong.'
      status.value.success = false
    }
  }
</script>
  
<style scoped>
  .contact-section, .information-section {
    padding: 4rem 1rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 95%;
    padding: 0.5rem;
    border: 3px solid #D6D6D6;;
    border-radius: 4px;
  }
  input:hover,
  textarea:hover {
    width: 95%;
    border: 4px solid #D6D6D6;;
  }
  
  button{
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
  .info-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info-card h1{
    font-size: 2.5rem;
    margin: 0 auto;
    margin-bottom: 3rem;
  }
  .info-card p {
    font-size: 2rem;
    margin: 0  auto;
    margin-bottom: 3rem;
  }
  .social-media-container{
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .social-media-icon{
    text-decoration: none;
    font-size: 5rem;
    color: #FFB6C1;;
  }
</style>
  