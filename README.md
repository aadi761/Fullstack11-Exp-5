📌 Experiment 5.1
Lazy Loading of a Dashboard Component in React
📖 Overview
This experiment demonstrates how to implement Lazy Loading for a single Dashboard component in a React application.

The Dashboard includes:

Title Section
Skills List
About Section
Clean Card-Based UI
The component is dynamically imported and rendered using Suspense with a loading fallback.

🎯 Objective
To understand React.lazy()
To implement dynamic component loading
To use Suspense for fallback UI
To improve performance using code splitting
🔄 Loading State
Before the dashboard loads, a fallback message is displayed:
<img width="1904" height="890" alt="Screenshot 2026-02-19 095436" src="https://github.com/user-attachments/assets/68ff12aa-89c0-4ad5-b485-406abf13259f" />

<img width="1892" height="880" alt="Screenshot 2026-02-19 095535" src="https://github.com/user-attachments/assets/150ecac0-5794-4410-a421-c08765667f5d" />



Dashboard Loading

🖥 Dashboard Output
Dashboard

📊 Observations
The Dashboard component loads only when required.
A fallback loading message improves user experience.
Code splitting reduces initial bundle size.
The application structure remains clean and modular.
🎓 Learning Outcomes
Learned dynamic imports in React.
Understood Suspense usage.
Applied lazy loading for performance optimization.
Built a structured and reusable component.
🚀 Conclusion – Experiment 1
This experiment successfully demonstrates lazy loading of a single component in React.
It improves application performance by reducing the initial load size and enhances user experience with a fallback loading state.


📌 Experiment 5.2
Route-Based Lazy Loading using React Router
📖 Overview
This experiment extends lazy loading to a multi-page React application using React Router.

The application includes:

Home Page
About Page
Contact Page
Each route is dynamically loaded only when accessed.

🎯 Objective
To implement client-side routing
To apply lazy loading per route
To use Suspense for each page
To understand performance optimization in multi-page apps
🖥 Application Screenshots
🔄 Loading State (While Navigating Between Pages)

<img width="1915" height="883" alt="Screenshot 2026-02-19 095443" src="https://github.com/user-attachments/assets/4b644735-ea56-4e6c-8985-bef3342127fd" />|

<img width="1892" height="880" alt="Screenshot 2026-02-19 095535" src="https://github.com/user-attachments/assets/571358e4-bd75-4b67-b5fd-a2c9abfa0c78" />


Route Loading

🏠 Home Page
Home Page

📄 About Page
About Page

📞 Contact Page
Contact Page

📊 Observations
Pages load only when visited.
Navigation occurs without full page refresh.
Suspense displays loading feedback during component load.
Route-based lazy loading improves scalability.
🎓 Learning Outcomes
Implemented route-based lazy loading.
Used React Router with dynamic imports.
Improved performance in multi-page applications.
Structured scalable React project architecture.
🚀 Conclusion – Experiment 2
The route-based lazy loading experiment successfully demonstrates how React Router and dynamic imports can be combined to build optimized multi-page applications.

This approach enhances performance, reduces initial load time, and ensures smooth navigation across routes.

🛠 Technologies Used
React JS
Vite
React Router DOM
React.lazy()
Suspense
HTML5
CSS3
JavaScript (ES6+)
