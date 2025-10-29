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
2. Install dependencies:  
   ```bash
   npm install
3. Start dev server:  
   ```bash
   npm run dev
4. Open http://localhost:3000 in your browser.

---

## **Usage**

1. Select users using the checkboxes in the first column.

2. Filter by Health using the dropdown in the header.

3. Search by Name or Location in real-time.

4. Sort by Power using the chevron icon.

5. Mark selected rows as viewed or unviewed and check the console for selected IDs.

---

## **Screenshots and screen recordings**

**Loading State**

<img width="1512" height="982" alt="Screenshot 2025-10-29 at 5 06 35 PM" src="https://github.com/user-attachments/assets/679e4403-4c23-448c-b4ce-3bfad90a3e96" />


**Error State**

<img width="1512" height="982" alt="Screenshot 2025-10-29 at 5 08 19 PM" src="https://github.com/user-attachments/assets/15acc953-d2f2-450e-85f0-5c8650135e42" />


**Table View**

<img width="1512" height="982" alt="Screenshot 2025-10-29 at 5 10 03 PM" src="https://github.com/user-attachments/assets/10366077-95a6-4e08-bca3-75de7e63eeb3" />


**UX Screen Recording**

[UX Video Link](https://drive.google.com/file/d/131eBb6ld_sByTqSgejlyCsUvhE6Ai2Rh/view?usp=sharing) 

---

## **Author**

Aryan Sehgal – Frontend Engineer

[LinkedIn](https://www.linkedin.com/in/aryansehgal2001/) | [Github](https://github.com/AryanSehgal)
