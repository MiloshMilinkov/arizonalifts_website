<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="social-media">
            <div class="footer-links">
              <ul>
                <li><a href="https://www.instagram.com/arizonalifts/">Instagram <i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.tiktok.com/@arizonalifts">Tiktok <i class="fab fa-tiktok"></i></a></li>
              </ul>
            </div>
        </div>
        <div class="footer-bottom">
          <p>© 2025 Arizanović Kristina. All rights reserved. Website developed and maintained by <a href="https://www.linkedin.com/in/milošmilinkov/">Miloš Milinkov</a>.</p>
        </div>
      </div>
    </footer>
</template>
  
<style scoped>
    .footer {
        background-color: #F4E1D2;
        color: #e76f51;
        text-align: center;
        padding: 1rem 0;
        width: 100%;
    }
    .footer-links {
        display: flex;
        justify-content: center;
        gap: 4rem;
    }

    .footer-links ul {
        list-style: none;
        padding: 0;
    }

    .footer-links li {
        margin: 0.3rem 0;
        color: #f4a261;
        transition: color 0.3s;
        cursor: pointer;
        font-size: 1.2rem;
        padding-left: 1rem;
    }
    .footer-links li a {
        text-decoration: none;
        color: #f4a261;
    }

    .footer-links li a:hover {
        color: #e76f51
    }

    .footer-bottom p {
        font-size: 0.8rem;
        color: #6d6d6d;
    }
    
    .footer-bottom a {
        color: #f4a261;
        text-decoration: none;
    }

    .footer-bottom a:hover {
        text-decoration: underline;
    }
  </style>
  