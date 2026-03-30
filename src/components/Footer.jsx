import React from 'react'

function Footer() {
  return (
    <footer class="bg-[#626F8C] text-white py-8">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">

    <h2 class="text-2xl font-bold text-white">
      Thrift-Solute
    </h2>

    <div class="flex justify-center space-x-6 mt-4 text-white font-semibold">
      <a href="#about" class="hover:text-white transition">About</a>
      <a href="#contact" class="hover:text-white transition">Contact</a>
      <a href="faq.html" class="hover:text-white transition">FAQ</a>
    </div>

    <div class="flex justify-center space-x-8 mt-6 text-xl">
      <a href="mailto:youremail@example.com" class="hover:text-[#8BAE66] transition">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://facebook.com" target="_blank" class="hover:text-[#8BAE66] transition">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://x.com" target="_blank" class="hover:text-[#8BAE66] transition">
        <i class="fab fa-x-twitter"></i>
      </a>
      <a href="https://github.com" target="_blank" class="hover:text-[#8BAE66] transition">
        <i class="fab fa-github"></i>
      </a>
    </div>

    <p class="text-white text-sm mt-6">
      © 2026 Literary Oasis. All rights reserved.
    </p>

  </div>
</footer>
  )
}

export default Footer