# Documentation for Temple Scheduling App

# React (Vite) + ASP.NET Core Web API

We have only worked in ASP.NET Core Web App to this point but a Web API is very similar.

## Comparison: ASP.NET Web App vs. ASP.NET Web API

| **Aspect**         | **ASP.NET Web App (MVC / Razor Pages)**                        | **ASP.NET Web API**                                                          |
| ------------------ | -------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Purpose**        | Serve HTML views to render UI directly.                        | Serve data (JSON/XML) to clients like React, mobile apps, or other services. |
| **Response Type**  | Typically returns Views (HTML + CSS + JS).                     | Returns data objects, typically in JSON or XML format.                       |
| **Controllers**    | Inherits from `Controller` and uses `View()` to return HTML.   | Inherits from `ControllerBase` and uses `return Ok()` to return data.        |
| **Routing**        | Uses attribute routing or conventional routing for view paths. | Primarily uses attribute routing for API endpoints.                          |
| **Model Binding**  | Works with forms and query strings.                            | Works with JSON data, query strings, or route parameters.                    |
| **Authentication** | Often uses cookie-based authentication.                        | Commonly uses JWT tokens, API keys, or OAuth for authentication.             |
| **Views**          | Includes `.cshtml` Razor views.                                | No views—just controllers that return data.                                  |
| **Usage**          | Great for server-rendered apps.                                | Ideal for serving data to SPAs (like React) or mobile apps.                  |

## Project Setup

### Cloning the Repository

To get started with the Temple Scheduling App, you need to clone the repository to your local machine. Open your terminal or command prompt and run the following command:

```sh
git clone https://github.com/lkehl247/TempleAppRepo.git
```

Replace `yourusername` with your actual GitHub username.

### Clone Respository and Install Dependencies

After cloning the repository, navigate to the project directory and install the necessary dependencies for both the React frontend and the ASP.NET Core backend.

1. **Navigate to the project directory:**

```sh
cd templeapp
```

2. **Install frontend dependencies:**

Navigate to the `frontend` directory and install the dependencies using npm:

```sh
cd frontend
npm install
```

3. **Install backend dependencies:**

Navigate to the backend directory and install the dependencies for the ASP.NET Core backend:

```sh
cd ../backend
dotnet restore
```

Now you have successfully cloned the repository and installed all the necessary dependencies.

### Starting the React App and ASP.NET Core API

After installing the dependencies, you can start both the React frontend and the ASP.NET Core backend.

1. **Start the React frontend:**

Navigate to the `frontend` directory and start the development server:

```sh
cd frontend
npm start
```

This will start the React app and you can view it in your browser at `http://localhost:5173/`.

2. **Start the ASP.NET Core backend:**

Navigate to the `backend` directory and start the ASP.NET Core Web API:

```sh
cd ../backend
dotnet run
```

This will start the API server and it will be available at `http://localhost:5000`.
/\*\*

- This code is part of an API that can be viewed using Swagger.
-
- Swagger is a tool that allows developers to design, build, document, and consume RESTful web services.
- It provides a user interface to visualize and interact with the API's resources without having any of the implementation logic in place.
-
- To view the API in Swagger:
- 1.  Run your application.
- 2.  Open a web browser and navigate to the Swagger UI endpoint, typically `http://localhost:8080/swagger-ui.html` or a similar URL depending on your configuration. (`https://localhost:7243/swagger/index.html`) on my computer when i run from Visual Studio
- 3.  The Swagger UI will display the available endpoints, request methods, parameters, and response formats.
      \*/
