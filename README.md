# glacksite

Hello everyone!

### Setup Guide
For the main site:
1. Clone the github repo
2. install npm in whatever way is preferred
3. `npm install` in the main directory to get all the necessary react modules and such
4. `npm start` to run the server - will go to http://localhost:3000 by default

For the hands on react tutorial components
1. Run the above
2. In a seperate terminal window - `npm run api` to launch the 'project database'
3. When navigating to the *Hands on React* page, it should load all the related projects

### Publishing
For publishing changes - use `npm run deploy`

Will use the gh-pages library to deploy the project folder to the gh-pages branch.
This will publish the github pages site automatically within a few minutes.

## Learn More

Created with reference to Nelson Michael's Guide - [Deploy React apps to GitHub Pages](https://blog.logrocket.com/deploying-react-apps-github-pages/)

Also referenced [Hands on React](https://handsonreact.com/docs/) , [React Bootstrap](https://react-bootstrap.netlify.app/)
