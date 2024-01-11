# GitHub Repo Search

This project is a GitHub repository search application built with Create React App.

## Getting Started

These instructions will help you run the app locally for development purposes.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installing

1. Clone the repository.

   ```bash
   git clone https://github.com/your-username/github-repo-search.git
   Change into the project directory.
   ```

bash
Copy code
cd github-repo-search
Install dependencies.

bash
Copy code
npm install
Running the App
Run the app in development mode:

bash
Copy code
npm start
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

Running Tests
Launch the test runner in interactive watch mode:

bash
Copy code
npm test
Building for Production
Build the app for production:

bash
Copy code
npm run build
The production-ready files will be in the build folder.

Extras Added
Pagination: Implemented a pagination component to navigate through the search results.

Loading Spinner: Added a loading spinner while fetching data from the GitHub API.

Error Handling: Implemented error handling for failed API requests, displaying appropriate messages to the user.

Flagging Repositories: Added a flag button to toggle the visibility of repositories and stored the state in local storage.

Styling Improvements: Enhanced the styling of components, including buttons and error messages.

Lazy Loading Images: Improved performance by lazy loading repository images.

What Would Have Been Done with More Time
SEO Optimization: Further optimize the application for search engines.

Image Caching: Implement image caching for better performance.

Responsive Design: Enhance the responsiveness of the application for various screen sizes.

Persist Page State: Store and retrieve the page state, including flag settings, on page refresh.

Learn More
Learn more in the Create React App documentation.

To learn React, check out the React documentation.
