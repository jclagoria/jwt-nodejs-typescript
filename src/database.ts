import mongoose, { connection, ConnectOptions } from 'mongoose';
import config from './config/config';

const dbOptions: ConnectOptions = {
  bufferCommands: true,
  autoIndex: true,
  autoCreate: true,
};

const username = config.DB.USER;
const password = config.DB.PASSWORD;
const cluster = config.DB.CLUSTER;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`,
  dbOptions
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function () {
  console.log('Connected successfully');
});
