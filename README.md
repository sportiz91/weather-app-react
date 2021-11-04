# Weather App - Create-React App

Third App done using React. In this case, we use create-react-app and weather API. The goal of the project was to practice my react skills + hitting API.

# Table of Contents

- [Quick Start](#quick-start)
- [Next Steps](#next-steps)
- [Learnings](#learnings)
- [Special Thanks](#special-thanks)

# Quick Start

1. Init a new repo: `git init`
1. Clone the repo: `git clone https://github.com/sportiz91/weather-app-react.git`
1. CD over `weather-app-react` folder.
1. Install dependencies with npm: `npm install`
1. Run it locally on your machine: `npm start`

# Next Steps

Nothings, everything's done :)

# Learnings

- More practice into create-react-app & basic hooks.
- Hitting an API from the Client.
- Set up SASS with create-react-app (no real difference compared to a normal App).
- Using ENV variables in create-react-app. Basically React has the dotenv packaged incorporated, so you have to create an .ENV file, and add your enviorment variables there. The name of the variables must start with `REACT_APP_...=...`

* Specific Learnings
  1. When deploying to Vercel, there must not be warnings, if there are warnings, deployment will fail. You have two options here
     - Clear all those warnings in your code
     - Go to your project setting in vercel.com -> Go to General -> In the "Build & Development Settings", override the Build command and write `CI='' npm run build`. Special thanks to this stackoverflow: [Link](https://stackoverflow.com/questions/66840942/vercel-deployment-error-command-npm-run-build-exited-with-1).
  1. SO FUCKING IMPORTANT TO ADD THE HTTPS:// BEFORE THE API ENDPOINT, IF NOT, THE GET REQUEST WON'T PROCEED AND YOU'LL GET A SUPER ANOYING ERROR!
  1. You can initialize state to an empty "" and then override it to have an object.
  1. If you want to ask if a variable is undefined (not created) you should do -> `typeof nameOfVariable == "undefined" ? ... : ...`

# Special Thanks

This project was possible thanks to [Tyler Potts](https://www.youtube.com/c/TylerPotts) YouTube Channel.
