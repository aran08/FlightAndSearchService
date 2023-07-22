
## Welcome to Flights service


## project setup
- clone the project on your locel
- Execute the `npm instell` on the same path as of your root directory of the downloaded project
- Create a `.env` file in your root directory and add the following environment veriable
   - `PORT:3000`
- Inside the `src/config` folder create a new file `config.json` and add the following peace of json

```
{
  "development": {
    "username": "YOUR_DB_NAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flight_Search DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you have added you db config as listed above, go to src folder from terminal and execute `npx sequelize db:create` and then execute 

`npx sequelize db:migrate`
```

## Db Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belong to an airplane but one airplane can be used in multiple flights
  - A City has many airports but one airport belong to a city
  - One Airports can have many flights. but a flight belongs to one airport


  ##Tables

  ### City -> id, name, created_at, updated_at
  ### Airport -> id, name, address, city_id, created_at, updated_at
      Relationship -> City has many airports and Airport belongs to a City (One to Many)
  
  ```
   npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer
  ```