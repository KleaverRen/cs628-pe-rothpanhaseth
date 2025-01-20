# cs628-pe-rothpanhaseth

# PE01-MyResume

# Input

The MyResume web application is built using React, where the input consists of personal data such as name, contact information, education, skills, work experience, and projects. This data is hardcoded into the Resume.js component as structured JavaScript objects and JSX elements.

# Process

The core process involves the React component structure. The App.js file serves as the root component and imports the Resume.js component, which further applies CSS styling from Resume.css. When the development server (npm start) is run, React dynamically renders the data, ensuring a structured layout. The CSS file styles the content by setting fonts, margins, and colors.

# Output

The final output is a visually formatted resume webpage displayed in the browser. It presents the user’s details in a clear, styled layout, with headings, sections, and proper alignment as defined in the CSS file. The background color, fonts, and text alignment match the provided design specifications.

# PE02-MovieList

# Input

The program accepts a predefined list of movies, each represented as an object with properties: title, genre, and releaseYear. Users can interact with the application through a dropdown menu to select a movie genre and by clicking on a movie title for additional functionality.

# Process

When the application starts, it initializes the movie list and a state variable to track the selected genre. The dropdown menu dynamically populates unique genres extracted from the movie list, including “All Genres” to display all movies. Upon selecting a genre, the program filters the movie list based on the user’s choice using a conditional statement. When a user clicks on a movie, an event handler displays an alert showing the movie’s title. The program relies on React’s useState hook to manage the selected genre and re-render the filtered movie list dynamically.

# Output

The application displays a list of movies in card format, showing each movie’s title, genre, and release year. Selecting a genre updates the displayed list to include only movies of the chosen type. Clicking on a movie triggers an alert displaying its title. The UI is styled for readability and user-friendly interaction.