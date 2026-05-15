function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleString("pt-BR");
}
setInterval(updateClock, 1000);
updateClock();

const ageEl = document.getElementById("age");
if (ageEl) ageEl.textContent = new Date().getFullYear() - 2008;
