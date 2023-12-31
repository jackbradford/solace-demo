### Description
This is a very simple “Notes” Web App. An app that will allow a user to index, create, update and delete notes.


### Requirements
```
node:     v16.6.1
npm:      8.9.0
mariadb:  10.3.36-MariaDB-0+deb10u2 Debian 10
```

### Install
Install the database, create a database user, and install the app, including the UI.
```
chmod 744 schema/install.sh
chmod 744 schema/uninstall.sh
./schema/install.sh
npm install
npm run build
npm run start
```

### Uninstall
To uninstall the database and the database-user:
```
./schema/uninstall.sh
```

### Development Instructions
To setup your environment for development:
1. Clone the UI repository and the common repository.
2. In the UI repo, edit this file: `src/lib/datasource/config.ts` and change the API_URL constant to point to the backend's development server.

