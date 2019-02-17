# Pizza List
Project overview:

Pizza List is a project focused on showing the developer and its abilities. In this case the Frontend.

I have chosen to use React, Apollo and Webpack. The State Management is done using simple setState from React.

It is a simple page which gets from the backend through GraphQL the "menu" of pizzas available for the user to choose. It brings the sizes and, for each sizing, the available toppings. 
The user can choose the toppings he wants and check the price of each while he chooses. Also, on each size, there is a counter which tells how many toppings he has already chosen and how much he can pick. 
When he clicks on the "Add to cart" button, the selected pizza is sent to the Cart list. It will show the selected size together with all the toppings he has chosen, as well as the total prize for that pizza. On the footer of the cart, the user can check the total value of his cart.

# Technologies:

NPM
- Node Package Manager - a library that manages the available packages of node.

REACT
- JavaScript framework for building reactive UI applications.

APOLLO
- A JavaScript library to make requisitions to the backend using GraphQL, and threat the response on the frontend.

ECMASCRIPT 6 (2015)
- JavaScript recent updates on language, released in 2015.

BABEL
- Once EcmaScript6 was so recently released, many browsers still doesn't have support for its new features. So Babel is a translator, which converts all the code to simple EcmaScript5.

CSS/FILE/HTML/SASS/STYLE/URL LOADERS
- Loaders to be used on webpack. Just like Babel, they convert the files for an understandable language and structure for the browser.

BOOTSTRAP
- Styling library for a better CSS development.

SASS/SCSS
- CSS developing method, turns CSS development much easier and more readable.

FONTAWESOME
- Free online icon library.

WEBPACK
- Module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

GIT
- Version control system, aiming on performance.

PRETTIER
- Simple code formatter, to keep the good practices.

# Project Installation:

This project is installed using Node's Package Manager (NPM). If you don't have it on your machine yet, you can download it here: https://nodejs.org/en/;

To do so, you have to use Linux or MAC's Terminal. If you are using Windows, the command prompt won't work. I recommend downloading Git Bash.

This project contains a package.json file, which means that the necessary libraries will be installed once you type the specified command. Being so, please go to the Terminal and access the root file of your project. Once done, run "npm install".

All libraries will be installed inside the node_modules folder.

Once done, go to the terminal again and run "npm start".

Webpack will start the server and, once done, you can access it by http://localhost:8080.

# Project Structure:

The structure was all build using React's component concept.

the config files are all put on the root folder, and te development project stays on the 'src' folder.

Inside the 'src' folder, I have the main JS file of this project, 'index.js'. Here I divide the project in two folders: 'media' and 'components'.

On the 'media' folder I have the style SASS/SCSS files, and in the 'image', I have the used images for tests.

The 'components' folder has the main project, divided in two folders: 'Pizza' and 'ui'.

The 'ui' folder carries the small components, which are used inside the 'Pizza' components.

the 'Pizza' components are the big ones, used to build the page. It has four files:

- Pizza.jsx: the main Pizza file;
- PizzaBoard: the main layout shown on the browser.
- utilities: contains the generic functions used in more than one files.