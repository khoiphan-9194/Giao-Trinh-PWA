// Import the 'idb' package to use with IndexedDB.
import { openDB } from 'idb';

// Create a function that can be used to start up the database.
const initdb = async () =>
// Create a database named demo-db and we will use version 1.
  openDB('demo-db', 1, {
    // Sets the database schema if it isn't already defined.
    upgrade(db) {
      if (db.objectStoreNames.contains('demo-db_objectStore')) {
        console.log('demo-db_objectStore database already exists');
        return;
      }

      // Create an object store for our data inside of the 'demo-db'.
      // We create a key named 'id' which will automatically be incremented for us.
      db.createObjectStore('demo-db_objectStore', { keyPath: 'id', autoIncrement: true });
      console.log('demo-db_objectStore store object created');
    },
  });

  // Call our database function.
initdb();
