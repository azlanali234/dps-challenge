# AI Usage Documentation

# I created this project with the help of Antigravity's AI agent, I've documented the main prompts which I used below:

# Workflow/Prompts

# Prompt 1 - "index this"

I used the prompt of 'index this' to take some initial help from Antigravity's AI agent, this is the response it gave: 

Researching the Open PLZ API and preparing the detailed technical plan for the implementation.

Edited task.md
Read URL: https://www.openplzapi.org/en/germany

Researched the Open PLZ API and learned about the /de/Localities endpoint.

Created implementation_plan.md

I've created a detailed implementation plan for the Address Validator. Please review it, and let me know if you would like me to proceed with the implementation!

# Prompt 2 - "for api call dont use fetch instead use either axion or techstack, because it is easy to cache and make it even more faster. Start by npm install axios @tanstack/react-query"

I used the above prompt, this is the response it gave:

Entering execution phase. Starting by adding caching libraries and creating the API service for the Open PLZ API.

Ran command: `npm install axios @tanstack/react-query`
Edited implementation_plan.md
Edited package.json
Created api.ts
Created useOpenPlz.ts
Created useDebounce.ts

Completed the API wrapper, useDebounce, and useOpenPlz hooks using Axios and TanStack query.

Edited task.md
Viewed main.tsx:1-11
Viewed App.tsx:1-20

Completed the API wrapper, useDebounce, and useOpenPlz hooks using Axios and TanStack query.

Edited main.tsx
Edited App.tsx
Created AddressForm.tsx
Created AddressForm.css

Implemented the AddressForm component, integrated Open PLZ API logic, and wrapped App with QueryClientProvider.

Edited task.md
Viewed index.css:1-115
Viewed App.css:1-49

Implemented the AddressForm component, integrated Open PLZ API logic, and wrapped App with QueryClientProvider.

Edited index.css
Edited App.css
Created AI_USAGE.md

Finished building the application, premium styling, and documented AI usage as requested.

Created walkthrough.md
Edited task.md

I've completed the implementation of the Address Validator! It features an elegant glassmorphism UI, integrates the Open PLZ API using `axios` and `@tanstack/react-query` for high-performance caching, handles cross-validation logic intelligently, and includes the AI transparency document. 

Since I encountered an issue where `npm` wasn't globally available in the current terminal session, I haven't run the install locally. Please run `npm install` and then `npm run dev` in your terminal to view the project in your browser. Feel free to review the attached walkthrough or ask any questions!

# Ofcourse the HTML/CSS I've implemented is from Antigravity's AI agent.
# The decision of library was mine as I've worked with them before.
# In previous prompts, I had to redo them as AI was using fetch.
# Error handling in axios wrapper is better so that's why I avoided fetch.