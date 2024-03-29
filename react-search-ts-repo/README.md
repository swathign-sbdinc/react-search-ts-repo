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

```bash
cd github-repo-search
```

Install dependencies.

```bash
npm install
```

Running the App
Run the app in development mode:

```bash
npm start
```

Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

Running Tests
Launch the test runner in interactive watch mode:

```bash
npm test
```

Building for Production
Build the app for production:

```bash
npm run build
```

The production-ready files will be in the build folder.

### Extras Added

**Unit Testing**: Unit Testing with Jest

**Loading Spinner**: Added a loading spinner while fetching data from the GitHub API.

**Error Handling**: Implemented error handling for failed API requests, displaying appropriate messages to the user.

**Flagging Repositories**: Added a flag button to toggle the visibility of repositories and stored the state in local storage.

**Styling Improvements**: Enhanced the styling of components, including buttons and error messages.

**Added Bable and Eslint**: For transpiling and linting.

**Lazy Loading** Images: Improved performance by lazy loading repository images.

## What Would Have Been Done with More Time

**SEO Optimization**: Further optimize the application for search engines.

**Unit Testing**: Would have added more test suite and test cases.

**Image Caching**: Implement image caching for better performance.

**Responsive Design**: Enhance the responsiveness of the application for various screen sizes.

**Persist Page** State: Store and retrieve the page state, including flag settings, on page refresh.

## Deployment

To project has been deployed to my personal AWS account one can access though the below URL

http://github-repo-list.s3-website-us-east-1.amazonaws.com/
