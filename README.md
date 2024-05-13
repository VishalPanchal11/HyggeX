# HyggeX - instructions

### 1. Setting up:

All the code snippets provided can be found on official [tailwindcss](https://tailwindcss.com/docs/guides/vite) website.

a. Creating React project: I installed Tailwind CSS with Vite and created react project.

"npm create vite@latest my-project -- --template react" (creating a new Vite project if you don’t have one set up already.)
"npm create vite@latest ./ -- --template react" (I created in existing current folder.)

b. Installing Tailwind CSS

"npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p"

c. Configuring template paths: Adding the paths of template files in "./tailwind.config.js" file. Also, I extended some Font-families and box-shadow as per requirement.

"/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
fontFamily: {
inter: ['Inter', 'sans-serif'],
montserrat: ['Montserrat', 'sans-serif'],
},
boxShadow: {
'circular': '0px 0px 10px 1px rgba(6, 28, 147, 0.5)',
}
},
},
plugins: [],
}"

d. Then erasing all initial code present in "./src/App.jsx" file and adding

"export default function App() {
return (

   <h1 className="text-3xl font-bold underline">
   Hello world!
   </h1>
   )
   }"

Similarly, erasing all initial code present in "./src/index.css" file and adding

"@tailwind base;
@tailwind components;
@tailwind utilities;"

e. Running build process with "npm run dev": It will run build and host the project on local device.

### 2. Development:

The project is developed optimally Dividing all parts of website into different sections and then developing them making maximum use of reusable components whereever possible.
After developing the website as instructed in the design, website was further made completely responsive on all devices; Responsivity was added making use of [Breakpoint prefix-media queries/responsive utility variants in tailwindcss](https://tailwindcss.com/docs/responsive-design).
After that some Functionalities were added into the Website using onClick events and handling it via [React useState](https://react.dev/reference/react/useState).

### 3.Deployment:

At last run command "npm run build" to create a build directory "./dist" with a production build of the website. Thus, the Project is now ready to be hosted.