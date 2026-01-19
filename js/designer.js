// Painel designer (não precisa ser module)
const designerPanel = document.getElementById("designerPanel");

window.toggleDesigner = () => {
  designerPanel.style.display = (designerPanel.style.display === "block") ? "none" : "block";
};

function clearDesignerClasses(){
  document.body.classList.remove("theme-neon","theme-glass","theme-red","font-sm","font-md","font-lg","compact");
}

function loadDesigner(){
  const cfg = JSON.parse(localStorage.getItem("designerCfg") || "{}");
  clearDesignerClasses();

  if(cfg.theme) document.body.classList.add(cfg.theme);
  if(cfg.font) document.body.classList.add(cfg.font);
  if(cfg.layout) document.body.classList.add(cfg.layout);
}
loadDesigner();

window.applyDesigner = () => {
  const theme = document.getElementById("designerTheme").value;
  const font = document.getElementById("designerFont").value;
  const layout = document.getElementById("designerLayout").value;

  localStorage.setItem("designerCfg", JSON.stringify({ theme, font, layout }));
  loadDesigner();
  designerPanel.style.display = "none";
};

window.resetDesigner = () => {
  localStorage.removeItem("designerCfg");
  loadDesigner();
  designerPanel.style.display = "none";
};
