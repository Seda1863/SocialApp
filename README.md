# SocialApp


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
