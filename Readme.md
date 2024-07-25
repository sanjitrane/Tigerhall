# TigerHall Frontend Assignment

- Clone the repository.
- npm install
- npm run dev
- http://localhost:5173/

# Project Structure

- App Component loads RootLayout component
- RootComponent loads Header and SearchResults component
- Header component hosts Logo and Search component
- SearchResults hosts ResultCard component

- ResultCard component hosts CardHeader, ProgressBar, CardBody, CardFooter component
- CardHeader hosts Tag component and Listen component and Timer component

- Contexts:
- Theme Context - To set the color theme as per the mode
- Search Context - To save the search data

- Settings - To capture the static values
- Queries - The graphql query to fetch from api
- Theme - To set the color codes for dark and light mode

- Types - Collection of type used in the project
