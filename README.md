# 🥗 TastyGenie Frontend (Angular)

TastyGenie Frontend is the Angular-based web application , an AI-powered recipe generator platform that crafts personalized recipes based on user-selected ingredients, cuisine styles, allergies, and more.

## 🌟 Features

- Modern Angular UI
- Dynamic food form with ingredient and utility inputs
- Recipe card list view with images
- Detailed recipe view with AI-generated steps
- Smooth user flow with routing
- Responsive and mobile-friendly design

## 🧰 Tech Stack

- Angular 18
- TypeScript
- RxJS, Angular Router
- Tailwind CSS / SCSS (optional), Ionic
- Integration with Node.js backend

1. **Clone the repository**
```bash
git clone https://github.com/your-username/tastygeni-frontend.git
cd TastyGenie-web
```
2. **Install dependencies**
```bash
npm install
```

4. **Run the server**
```bash
npm start       # for production
npm run dev     # for development
```
🔗 API Connection
Make sure your backend (TastyGeni Server) is running and update the API base URL in environment.ts:
```bash
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api' // or your TastyGenie-server backend URL
};

```
