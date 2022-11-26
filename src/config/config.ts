require('dotenv').config();

export default {
  jwtSecret: process.env.JWT_SECRET || 'SomeSecretAca',
  DB: {
    CLUSTER: process.env.MONGODB_CLUSTER,
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};
