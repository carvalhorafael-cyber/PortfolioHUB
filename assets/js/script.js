function updateClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleString("pt-BR");
}
setInterval(updateClock, 1000);
updateClock();

function calculateAge(birthYear) {
  const year = new Date().getFullYear();
  return year - birthYear;
}

const ageEl = document.getElementById("age");
if (ageEl) ageEl.textContent = calculateAge(2008);
