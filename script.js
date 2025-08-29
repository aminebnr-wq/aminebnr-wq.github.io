document.getElementById('year').textContent = new Date().getFullYear();
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light');
  darkToggle.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
});
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const name = encodeURIComponent(data.get('name'));
  const msg = encodeURIComponent(data.get('message'));
  const to = 'bnr@example.com';
  const subject = encodeURIComponent('رسالة من الموقع: '+name);
  const body = encodeURIComponent(msg+"\n\nمن: "+name);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});