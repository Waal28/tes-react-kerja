import os from 'os';

export function getLocalIPAddresses() {
  const networkInterfaces = os.networkInterfaces();
  const ipAddresses = [];

  for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName];

    for (const address of addresses) {
      if (address.family === 'IPv4' && !address.internal) {
        ipAddresses.push(address.address);
      }
    }
  }

  return ipAddresses;
}
console.log(getLocalIPAddresses());