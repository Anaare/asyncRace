<<<<<<< HEAD
# Async-Race
=======

Deployment Link: https://main--asyncraceprjct.netlify.app/

Score: 310

## Getting Started with the Project

1. **Clone the Repository**: 
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Async-Race
   ```

3. **Install Dependencies**: 
   After navigating to the project directory, install dependencies using npm:
   ```bash
   npm install
   ```

4. **Start the Development Server**: 
   Once the dependencies are installed, start the development server using the following command:
   ```bash
   npm run dev
   ```

5. **Open in Browser**: 
   Open your web browser and navigate to the development server URL (typically http://localhost:5173/) to view the project.

# Async-Race Checklist

## 1. View Configuration (30 points)
- [x] **Two Views (10 points):** Implement "Garage" and "Winners" views.
- [x] **Garage View Content (5 points):** Display name, current page number, and total number of cars.
- [x] **Winners View Content (5 points):** Display name, current page number, and total count of records.
- [x] **Persistent State (10 points):** Ensure view state consistency when navigating.

## 2. Garage View Functionality (55 points)
- [+-] **CRUD Operations (20 points):** Enable create, update, delete cars, and display list.
- [x] **Color Selection (10 points):** Allow RGB palette selection, display color on car's image.
- [x] **Management Buttons (5 points):** Provide buttons for update/delete near each car.
- [x] **Pagination (10 points):** Implement pagination, 7 cars per page.
- [+-] **Random Car Creation (10 points):** Button to create random cars, 100 per click.

## 3. Car Animation (50 points)
- [x] **Engine Control Buttons (10 points):** Start/stop engine buttons near each car.
- [x] **Start Engine Animation (20 points):** Initiate animation upon start, handle errors.
- [x] **Stop Engine Animation (10 points):** Stop animation and reset position.
- [x] **Button States (5 points):** Disable buttons as appropriate.
- [x] **Responsive Animation (5 points):** Ensure fluidity on small screens.

## 4. Race Animation (35 points)
- [x] **Start Race Button (15 points):** Initiate race for all cars on current page.
- [x] **Reset Race Button (10 points):** Reset all cars to starting positions.
- [] **Winner Announcement (10 points):** Display winner after race completion.

## 5. Winners View (45 points)
- [x] **Display Winners (15 points):** Show winners in table after race.
- [x] **Pagination for Winners (10 points):** Implement pagination, 10 winners per page.
- [x] **Winners Table (10 points):** Include car details and sorting functionality.
- [x] **Sorting Functionality (10 points):** Allow sorting by wins and best time.

## 6. Application Architecture (40 points)
- [x] **Modular Design (40 points):** Clearly divide into logical modules.

## 7. Dynamic Content Generation (30 points)
- [x] **JavaScript-Generated HTML (30 points):** Dynamically generate all HTML content.

## 8. Single Page Application (25 points)
- [x] **SPA Implementation (25 points):** Implement as a Single Page Application.

## 9. Use of Webpack or Similar (20 points)
- [x] **Webpack Implementation (20 points):** Compile into minimal set of files.

## 10. Code Quality and Standards (15 points)
- [x] **Eslint with Airbnb Style Guide (15 points):** Adhere to Airbnb ESLint configuration.

## 11. Code Organization and Efficiency (15 points)
- [+-] **Function Modularization (10 points):** Organize code into small, clear functions.
- [x] **Code Duplication and Magic Numbers (5 points):** Minimize duplication and avoid magic numbers.

## 12. Prettier and ESLint Configuration (10 points)
- [x] **Prettier Setup (5 points):** Configure Prettier for auto-formatting.
- [x] **ESLint Configuration (5 points):** Configure ESLint with Airbnb style guide.
>>>>>>> 
