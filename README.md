# React

Complete Intro to React v8 - ttps://react-v8.holt.courses/

### Npm & Prettier Setup

npm init -y

save-dev or -D will save it a development dependency.

npm install --save-dev prettier
or
npm i -D prettier

"prettier": "^3.3.3" the ^ means it will install latest patch of the current version

create .prettierrc file


for vscode settings select prettier: require config ⬇️
so it wound not format files that we are not suppose to 

To install eslint run the following ⬇️

npm i -D eslint eslint-config-prettier

for configs create .eslintrc.json file

the above is used for all version before eslint 9 
so to migrate it run ⬇️
npx @eslint/migrate-config .eslintrc.json

npm run lint -- --debug 
npm run lint -- --fix

vite 

 npm i -D vite @vitejs/plugin-react

 or just npm create vite&latest

 then in root of the project create vite.config.js file

finally npm i -D react react-dom

vite has a cool feature which is called tree shaking that 
basically only includes code that you are using 

#### Render Functionality

Must be fast without side effects and stateless so no modification of global state

Never ship react development to production use vite or parcel to not think about it 
otherwise NODE_ENV=development

react strict mode runs the app 2 times - 🤔


react dev tools is available as an extension 

props are read only