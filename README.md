# Job.Bnb
Welcome to Job.Bnb

# Features

 Job.Bnb helps you keep track of all your connections and allows you to search through all of your job listings.
 

## Technologies Implemented

1. React.js
2. Redux to handle state
3. Rails to handle any backend data/logic
4. Built API with Rails backend to handle database
5. Utilized React library to build user experience
6. Used Redux to respond to and modify state change
7. Made use of async actions, used redux-thunk to send and receive data

Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

### Installation

1. git clone [jobnb-client](https://github.com/ShamelLakin/jobnb-client.git)
2. git clone [jobnb-backend](https://github.com/ShamelLakin/jobnb-backend.git)
3. Run bundle install to install all of Jobnb dependencies
4. Create the database by running rails db:create
5. Create migrations by running rails db:migrate
6. If applicable, run rails db:seed to generate any seed data
Lastly, run rails s or rails server to generate a live server

