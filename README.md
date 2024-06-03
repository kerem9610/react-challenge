# Handling the project
* The project can be started with `docker-compose up`
* The project can be shut down with `docker-compose down`

## For local development
### Starting Frontend
* cd frontend
* npm install
* npm run dev
* server will start at: http://localhost:5173/

### Starting GraphQL-Server
* cd graphql-server
* npm install
* npm run dev (uses nodemon)
* server will start at: http://localhost:4000/

The DB will be setup by starting the server. Otherwise the init.sql on the root folder can be used to create database tables.