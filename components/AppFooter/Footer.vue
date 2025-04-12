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
        background-color: #FFDAB9;
        text-align: center;
        padding: 1rem 0;
        width: 100%;
        box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.1);
        height: 7rem;
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
        transition: color 0.3s;
        cursor: pointer;
        font-size: 1.2rem;
    }
    .footer-links li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    .footer-links li a:hover {
        color: #e76f51
    }

    .footer-bottom p {
        font-size: 0.8rem;
        color: #80CED6;
    }
    
    .footer-bottom a {
        color: #FFB6C1;
        text-decoration: none;
    }

    .footer-bottom a:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
    .footer-bottom p {
        font-size: 0.6rem;
    }
  }
  </style>
  