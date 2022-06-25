import 'dotenv/config';
import checkPort from 'is-port-reachable';

const host = process.env.HOST;
const port = process.env.PORT;

async function main() {
  const isReachable = await checkPort(port, { host });

  if (isReachable) {
    console.log(`⚡🟢 Online! ${host}:${port} is reachable`);
    return;
  }

  console.log(`⚡🛑 Offline. ${host}:${port} is not reachable`);
}

main();