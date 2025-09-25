# SocialApp

<img width="606" height="260" alt="Picture5" src="https://github.com/user-attachments/assets/db40a1b6-51cf-4ae1-903c-1e2e43711f00" />
<img width="606" height="232" alt="Picture4" src="https://github.com/user-attachments/assets/aaf31e1d-0dcc-4458-a368-e47c316d92a2" />
<img width="608" height="260" alt="Picture3" src="https://github.com/user-attachments/assets/2fb2a02c-00dd-4330-b06e-d2a5623a0304" />
<img width="606" height="194" alt="Picture2" src="https://github.com/user-attachments/assets/5cbcbb8d-b96d-475e-b8ef-3dc3b15b18c1" />
<img width="794" height="421" alt="Picture1" src="https://github.com/user-attachments/assets/fa7d3dd4-d815-4254-8fc5-d796a5fa7de4" />

Commercial Credit Management Application (Web API + Angular)

A web application that allows customers to apply for loans, track their application status, and enables authorized staff to manage and update records.
The backend is built with ASP.NET Core Web API + EF Core, and the frontend is developed with Angular. Authentication is handled with JWT.

Features
	•	User Management
	•	Register / Login with JWT-based authentication
	•	Role-based access control (different views per role)
	•	Loan Applications
	•	Create, list, update, and delete applications (CRUD)
	•	Track application status (e.g., Pending / Approved / Rejected)
	•	Data Access
	•	Repository & service layers with EF Core
	•	MSSQL for production (SQLite for development/testing)
	•	API
	•	RESTful endpoints (POST/GET/PUT/DELETE)
	•	Configured CORS support
	•	UI (Angular)
	•	Modular component-based structure
	•	Reactive Forms with validation rules
	•	Service layer for HTTP requests
	•	Tools
	•	Postman collections for testing
	•	Git for version control

Architecture

root
├─ server/                # ASP.NET Core Web API
│  ├─ Controllers/
│  ├─ Models/             # Entities & DTOs
│  ├─ Data/               # DbContext, Migrations
│  ├─ Services/           # Business logic
│  └─ appsettings.json
└─ client/                # Angular (SPA)
   ├─ src/app/
   │  ├─ auth/            # login/register, guards, interceptors
   │  ├─ credits/         # loan application list/form/details
   │  └─ shared/
   └─ angular.json

Technologies
	•	Backend: .NET 7/8, ASP.NET Core Web API, Entity Framework Core
	•	Frontend: Angular 16+, TypeScript, RxJS, Bootstrap
	•	Database: MSSQL (prod), SQLite (dev/test)
	•	Authentication: JWT (Bearer)
	•	Others: Postman, Git, VS Code

Setup

Prerequisites
	•	.NET 7/8 SDK
	•	Node.js 18+ and Angular CLI (npm i -g @angular/cli)
	•	MSSQL Server (or SQLite for dev)
	•	(Optional) Postman

1) Run Backend

cd server

# Update appsettings.json:
# "ConnectionStrings": { "DefaultConnection": "Server=.;Database=CreditDb;Trusted_Connection=True;TrustServerCertificate=True" }
# "Jwt": { "Key": "your-secret-key" }

dotnet ef database update
dotnet run

2) Run Frontend

cd client
npm install
ng serve -o

The app will be available at:
	•	API: http://localhost:5000
	•	Frontend: http://localhost:4200

⸻
