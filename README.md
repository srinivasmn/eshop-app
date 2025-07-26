📦 EShop App

A full-stack eCommerce prototype with a React frontend and .NET backend.



🔧 Project Structure

graphql

Copy

Edit

eshop-app/

├── eshop-frontend/      # React (Vite or CRA) application

└── eshop-backend/       # ASP.NET Core Web API backend





🚀 Getting Started

🖥 Frontend (React)

bash

Copy

Edit

cd eshop-frontend

npm install

npm run dev  # or npm start

Make sure .env is configured with the correct backend API base URL.



⚙️ Backend (.NET)

bash

Copy

Edit

cd eshop-backend

dotnet restore

dotnet run

Adjust appsettings.json as needed for database or environment configs.



📁 Environment Files

Each project contains its own .env file (excluded in .gitignore):



eshop-frontend/.env



eshop-backend/.env (optional if using secrets manager or appsettings.json)



✅ To-Do / Enhancements

&nbsp;Catalog Module



&nbsp;Basket Module



&nbsp;Orders API



&nbsp;User Authentication



&nbsp;Frontend UI Polish



Let me know if you want separate README files inside each project folder too — that’s common when subprojects grow independently.

