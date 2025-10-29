# 👥 User Records Manager

A high-performance, interactive **User Records Manager** built in **Next.js 15** for rendering 1000+ user records efficiently. This project demonstrates selection, filtering, sorting, searching, and state management for a large dataset while maintaining clean, accessible, and reusable React components.

## **Table of Contents**

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Testing](#testing)  
- [Accessibility & UX](#accessibility--ux)  
- [Future Improvements](#future-improvements)  
- [License](#license)

---

## **Demo**

[View Live Project](https://your-vercel-deployment-link.vercel.app)

---

## **Features**

- **High-Performance Table**: Renders **1000+ user records** without performance degradation.  
- **Row Selection**: Select one or multiple users using checkboxes.  
- **Health Filtering**: Filter users by `Healthy`, `Injured`, or `Critical` status via a dropdown with multi-select checkboxes.  
- **Search**: Real-time search on `name` or `location`.  
- **Sorting**: Sort rows by `power` with a chevron icon in the header.  
- **Mark Viewed/Unviewed**: Button toggles selection state and logs selected user IDs to the console.  
- **Loading State**: Displays loading feedback while fetching data.  
- **Accessible & Responsive**: Keyboard navigable and ARIA-friendly.  
- **Tested with Jest**: Basic tests simulate user interactions for search and selection functionality.

---

## **Tech Stack**

- **Frontend**: Next.js 15, React 18  
- **Styling**: Tailwind CSS / CSS Modules (adjust depending on your project)  
- **State Management**: React Context / useState / optional library  
- **Data Mocking**: JSON Server for 1000+ unique entries  
- **Testing**: Jest, React Testing Library  
- **Deployment**: Vercel  

---

## **Installation**

