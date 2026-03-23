# AI Usage Transparency

This project was developed with the assistance of an AI coding agent (Antigravity).

## Workflow and Prompts

- **Initial Request**: `index this`. This prompted the AI to explore the directory and clarify the requirements.
- **Implementation Request**: `@[README.md] implement this and act like a senior developer. and make plan how you will implment this`.
- **Refinement**: `for api call dont use fetch instead use either axion or techstack, because it is easy to cache and make it even more faster`.

## AI Contributions

1. **Architecture & Planning**: Generated the `implementation_plan.md` detailing the component structures and styling rules.
2. **Core Logic**:
   - `src/services/api.ts`: Created an `axios` wrapper for the Open PLZ API.
   - `src/hooks/useOpenPlz.ts`: Implemented `@tanstack/react-query` to cache requests for 1 hour, reducing redundant lookups.
   - `src/hooks/useDebounce.ts`: Custom hook to delay API calls by 1 second during typing, effectively resolving the debounce optional task.
3. **UI Components**:
   - `src/components/AddressForm.tsx`: Developed the form with dynamic cross-validation (auto-filling the locality or PLZ, displaying dropdowns for multiple matches).
4. **Styling**:
   - Crafted a premium Vanilla CSS layout (`index.css`, `App.css`, `AddressForm.css`) featuring glassmorphism (backdrop-filters, soft borders), animated loading states, and dynamic gradients.

No significant generated code snippets were outright rejected, but the data fetching layer was actively modified from standard `fetch` to `axios` + `@tanstack/react-query` based on direct user instruction.
