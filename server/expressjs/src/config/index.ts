import env from 'dotenv';

env.config();

export const config = {
  port: process.env.PORT,
}
