// lib/mongodb.js
import { MongoClient } from 'mongodb';

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error('Por favor, agrega MONGODB_URI a .env.local');
}

// En desarrollo, usamos una conexión global para evitar múltiples conexiones
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, creamos una nueva conexión
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db('quotes_db'); // Nombre de la base de datos
}