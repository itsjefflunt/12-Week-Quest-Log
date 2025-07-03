# **App Name**: 12-Week Quest Log

## Core Features:

- Application State Controller (App Component): The top-level component that orchestrates the entire user experience. It manages core application state, including user authentication and routing, ensuring users are directed to the appropriate view based on their session status.
- User Authentication Gateway (Login Component): A secure entry point for users to access their personal quest data. It will feature an email and password form designed to be simple and clear. The initial build will simulate login to establish the user flow, preparing for the full Firebase Authentication integration.
- Primary App Shell (Layout Component): A persistent and responsive layout that provides the main application structure. It includes a header with the app title and user profile access. It also features a primary navigation bar to guide users to key screens defined in the PRD, such as the 'Dashboard' and 'My Quests' views.
- Mission Control (Dashboard Component): The user's central hub upon logging in. This component is designed to provide an at-a-glance overview of the user's current progress. It will feature placeholder sections for today's habits, upcoming tasks, and a snapshot of the weekly accountability score, directly aligning with the "Key Screens" outlined in the PRD.

## Style Guidelines:

- Background color: Light gray (#f1f2f2).
- Primary color: Opkie blue (#20466f) used for primary buttons and interactive element highlights.
- Accent color: Opkie Yellow (#ffd147) used for callouts, secondary buttons, and visual highlights like progress bar accents.
- Text color: Black (#000000).
- Contrast Text Color: White (#FFFFFF) used for text on dark-colored backgrounds.
- Font: 'Poppins' (sans-serif).
- Design System: Use rounded corners on all elements (buttons, cards, inputs) for a soft, modern aesthetic. Implement consistent padding and margins to ensure a clean, uncluttered layout.