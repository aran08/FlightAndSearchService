
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

- Once you have added you db config as listed above, go to src folder from terminal and execute `npx sequelize db:create`
```
