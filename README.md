# My_Project
why name css file with .module.css extension?
🧩 What Are CSS Modules?
CSS Modules are a way to scope CSS to a specific component, so class names don’t clash globally. In regular CSS, styles are global by default, but CSS Modules solve that.
🧾 Why .module.css?
When you name your file like:
Home.module.css
React (via your build tool like Create React App or Vite) knows to treat it as a CSS Module, which means:

Class names in the CSS are locally scoped to the component.

They are automatically renamed to something unique behind the scenes (e.g., homeSection_xyz123).

Prevents style leakage or clashes across components.

