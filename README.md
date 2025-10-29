# 👥 User Records Manager

A high-performance, interactive **User Records Manager** built in **Next.js 15** for rendering 1000+ user records efficiently. This project demonstrates selection, filtering, sorting, searching, and state management for a large dataset while maintaining clean, accessible, and reusable React components.

## **Demo**

[View Live Project](https://users-record-manager-esovscnsc-aryan-sehgals-projects.vercel.app/)

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

- **Frontend**: Next.js 15, React 19  
- **State Management**: React Context / useState / optional library  
- **Data Mocking**: Route handler for 1000+ unique entries  
- **Testing**: Jest, React Testing Library  
- **Deployment**: Vercel  

---

## **Installation**

1. Clone the repository:  
   ```bash
   git clone https://github.com/AryanSehgal/user-records-manager.git
   cd user-records-manager
