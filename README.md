# BattleFit

BattleFit is a gamified workout tracker to motivate people to stay fit. Users to create custom exercises, keep logs of the exercises they've done and use these exercises to battle monsters with or without friends. This application is inspired by Habitica, WorkIt, and Pokemon.

<!-- [See the site live here!](https://the-battle-fit.herokuapp.com/) -->

* [MVP Feature List Document](https://github.com/bobaguardian/battlefit/wiki/MVP-Feature-List)
* [User Stories](https://github.com/bobaguardian/battlefit/wiki/User-Stories)
* [Database Schema](https://github.com/bobaguardian/battlefit/wiki/Database-Schema)
* [Frontend Routes](https://github.com/choi-jihoon/SplittaBill/wiki/Frontend-Routes)
* [API Documentation](https://github.com/choi-jihoon/SplittaBill/wiki/API-Documentation)

## Technologies Used
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height=40/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height=40/> <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>


<!-- ## Application Screenshots -->

## Getting started
1. Clone this repository

   ```git@github.com:bobaguardian/battlefit.git```

2. CD into the /app directory and install dependencies

    ```pipenv install```

3. CD into the /react-app directory and install dependencies

    ```npm install```

4.  Create a .env file based on the .env.example given (An AWS S3 account is required for adding/editing user and exercise images!)

5.  Create a user in psql based on your .env DATABASE_URL app_name

    ```psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"```

6.  Create a databse in psql based on your.env DATABASE_URL app_db_name

7. Start your shell, migrate your database, seed your database, and run the flask app

   ```pipenv shell```

   ```flask db upgrade```

    ```flask seed all```

    ```flask run```

8. Open another terminal and change directory into /react-app and run the React app

	```npm start```

#### Awesome! Now you can navigate to http://localhost:3000 and use the application!

<!-- ## Future Implementations

## Redux Store Tree
 -->
