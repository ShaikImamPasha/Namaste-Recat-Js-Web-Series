# 🚀Namaste Jo_Dikhta_Hai_Vo_Bikta_Hai Chapter-10❤️
## ->1.Explore all the ways of writing css.
- sass 
- style components 
- Maitiariel UI
- bootstrap 
- Tailwind CSS (it is a framework)
## ->2.How do we configure tailwind? 
```
npm install -D tailwindcss 
npx tailwindcss init
```
### ✔️now modify require filed in tailwind.config.js like content: ["./src/**/*.{html,js}"],Theme ...
### ✔️finally add in index.css this below code-> 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## ->3.In tailwind.config.js,what does all the keys mean(content,theme,extend,plugins)?
### ✔️content : The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.it meanes you add extensions where you can use it in this section.
```
  content: [ "./Jo_Dikhta_Hai_Vo_Bikta_Hai_Chapter_10/Coding/src/**/*.{html,js,ts,jsx,tsx}"]
```
### ✔️theme : The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.
```
 theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
 }
```
### ✔️plugins :The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

```
 plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ]
```
## ->4.Why do we have .postcssrc file?
### ✔️it is used for parcel to understand tha tailwindcss. 

