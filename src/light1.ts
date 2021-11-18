import dotenv from 'dotenv';
import eWeLink from 'ewelink-api';

dotenv.config();

async function run() {
  if (!process.env.USER || !process.env.PASSWORD) {
    throw new Error('env is not set');
  }
  
  const connection = new eWeLink({
    email: process.env.USER,
    password: process.env.PASSWORD
  });
  
  //const devices = await connection.getDevices();
  //console.log(devices);

  // device id can be taken from getDevices above response
  await connection.toggleDevice('100023714c');
}

run().then(() => {
  console.log('done');  
});