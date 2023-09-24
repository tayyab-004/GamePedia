# GamePedia

Welcome to GamePedia - Our Ultimate Game Hub!

## Overview

GamePedia is a React-Vite project built to exemplify best practices in React utility. It serves as a clone of rawg.io, providing a comprehensive platform for game enthusiasts. The project leverages the API key from rawg.io, as per the provided documentation.

## Technologies Used

- **React-Vite**: The project is built on the React-Vite framework, ensuring efficiency and high-performance.

- **Chakra UI**: Styling components with Chakra UI guarantees a sleek and visually appealing user interface.

- **Axios**: Utilized for seamless HTTP requests to the API, ensuring a smooth flow of data.

- **Custom Hooks**: Created for clear separation of concerns, enhancing the maintainability of the codebase.

- **React-Icons**: Employs the React-Icon library to enhance visual elements within the GameCard component.

- **State Lifting**: Efficiently passes data from one component to another, ensuring a cohesive user experience.

## Getting Started

Follow these steps to get GamePedia up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/GamePedia.git
   ```

2. Navigate to the project directory:

   ```
   cd GamePedia
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Obtain an API key from [rawg.io documentation](https://rawg.io/apidocs).

5. Create a `src/services/api-client.ts` file in the root directory and add your API key:

   ```
   params : {
        key: your_api_key_here
    }
   ```

6. Start the development server:

   ```
   npm run dev
   ```

7. Open your browser and visit `http://localhost:5173/` to view GamePedia.

## Contribution Guidelines

We welcome contributions to enhance GamePedia. To contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```
   git commit -m 'Description of changes'
   ```

4. Push your changes to your forked repository:

   ```
   git push origin feature-name
   ```

5. Create a Pull Request, providing a detailed description of your changes.

---

Thank you for using GamePedia! We hope you have a fantastic experience exploring the world of games. If you have any questions or feedback, please don't hesitate to reach out. Happy gaming! 🎮
