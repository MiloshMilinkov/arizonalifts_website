<template>
    <section class="pricing-section">
      <h1 class="title">Paketi online mentorstva</h1>
      <div class="plans-wrapper">
        <ProgramsCard
          v-for="plan in onlinePlans"
          :key="plan.id"
          :title="plan.title"
          :features="plan.features"
          :ribbon="plan.ribbon"
        />
      </div>
  
      <div class="notes">
        <p>*Za standard i premium pakete postoje pogodnosti za uplatu 3 meseca unapred.</p>
        <p>**Članarina u teretani nije uključena.</p>
      </div>
  
      <h1 class="title">Paketi personalnih mentorstva</h1>
      <div class="plans-wrapper">
        <ProgramsCard
          v-for="plan in inPersonPlans"
          :key="plan.id"
          :title="plan.title"
          :features="plan.features"
        />
      </div>
    </section>
</template>
  
<script setup>
  const onlinePlans = [
    {
      id: 'online-basic',
      title: 'BASIC',
      price: '€50 / mesečno',
      features: [
        { name: 'Plan u PDF-u', available: true },
        { name: 'Plan u aplikaciji', available: false },
        { name: 'Ebook sa 100+ recepata, primerima jelovnika i informacija o ishrani', available: true },
        { name: 'Video prikaz vežbi', available: true },
        { name: 'Konsultacije', available: false },
        { name: 'Provera forme na WhatsApp-u', available: false },
        { name: 'Prilagođavanje plana po potrebi', available: false },
        { name: '1 trening uživo mesečno', available: false }
      ],
      ribbon: ''
    },
    {
      id: 'online-standard',
      title: 'STANDARD',
      price: '€65 / mesečno',
      features: [
        { name: 'Plan u PDF-u', available: true },
        { name: 'Plan u aplikaciji', available: true },
        { name: 'Ebook sa 100+ recepata, primerima jelovnika i informacija o ishrani', available: true },
        { name: 'Video prikaz vežbi', available: true },
        { name: 'Konsultacije', available: true },
        { name: 'Provera forme na WhatsApp-u', available: true },
        { name: 'Prilagođavanje plana po potrebi', available: true },
        { name: '1 trening uživo mesečno', available: false }
      ],
      ribbon: 'NAJPOPULARNIJE'
    },
    {
      id: 'online-premium',
      title: 'PREMIUM',
      price: '€80 / mesečno',
      features: [
        { name: 'Plan u PDF-u', available: true },
        { name: 'Plan u aplikaciji', available: true },
        { name: 'Ebook sa 100+ recepata, primerima jelovnika i informacija o ishrani', available: true },
        { name: 'Video prikaz vežbi', available: true },
        { name: 'Konsultacije', available: true },
        { name: 'Provera forme na WhatsApp-u', available: true },
        { name: 'Prilagođavanje plana po potrebi', available: true },
        { name: '1 trening uživo mesečno', available: true }
      ],
      ribbon: 'NAJBOLJA PONUDA'
    }
  ];
  
  const inPersonPlans = [
    {
      id: 'inPerson-personalni',
      title: 'PERSONALNI (INDIVIDUALNI, 1 NA 1)',
      features: [
        { name: '1 termin - 1400RSD' },
        { name: '8 treninga mesečno - 11200RSD' },
        { name: '10 treninga mesečno - 14000RSD' },
        { name: '12 treninga mesečno - 16800RSD \n BONUS: Priručnik o ishrani (100+ recepata, jelovnici sa različitim kalorijskim unosom)' },
        { name: '16 treninga mesečno - 22400RSD \n BONUS: Priručnik o ishrani (100+ recepata, jelovnici sa različitim kalorijskim unosom)' },
      ]
    },
    {
      id: 'inPerson-polupersonalni',
      title: 'POLUPERSONALNI (DO MAX 3 OSOBE, ZAJEDNIČKA PRIJAVA)',
      features: [
        { name: '1 termin - 700RSD (po osobi)' },
        { name: '8 treninga mesečno - 5600RSD (po osobi)' },
        { name: '10 treninga mesečno - 7000RSD (po osobi)' },
        { name: '12 treninga mesečno - 8400RSD (po osobi)' },
        { name: '16 treninga mesečno - 11200RSD (po osobi)' },
      ]
    }
  ];
</script>
  
<style scoped>
  .pricing-section {
    padding: 4rem 1rem;
  }
  
  .title {
    font-size: 2.5rem;
    margin-top: 0rem;
    margin-bottom: 2rem;
    color: #80CED6;
    letter-spacing: 1px;
    text-align: center;
    text-shadow: 2px 2px #5399a1;
  }
  
  .plans-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .notes {
    margin-top: 2rem;
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  @media (max-width: 768px) {
    .pricing-section {
      padding: 2rem 1rem;
    }
    .title {
      font-size: 1.5rem;
    }
    .plans-wrapper {
      gap: 1rem;
    }
    .notes {
      font-size: 0.9rem;
    }
  }

</style>
  