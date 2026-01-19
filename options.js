// muda tema do site (sem mexer no index depois)
window.setTheme = (name) => {
  document.body.classList.remove("theme-neon","theme-red","theme-glass");
  document.body.classList.add(name);
  localStorage.setItem("extraTheme", name);
};

window.loadTheme = () => {
  const t = localStorage.getItem("extraTheme");
  if(t) document.body.classList.add(t);
};
