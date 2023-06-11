### Github Login App
This is a sample app which lists all the trending repositories.

### Installation and Setup
- Clone the repository.
- Install the required dependencies: npm install
- start the app: npm start
- The app should open in your default browser at http://localhost:3000/.
- To run the app in local environment replace the 'domain' and 'clientId' with your values.

### Dependencies
- ReactJS
- Redux
- TypeScript
- React Router
- Auth0
- react icons
- styled components

### Site URL
https://temp-github-login-cra.netlify.app/

## Page Functionalities
### Login
Displays login page.
### Home
Displays all the trending repositories.
### SingleRepo
Displays particular repository details.

### API endpoints
- Trending Repository: https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}