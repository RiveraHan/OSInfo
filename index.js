const os = require('node:os')

const infoMachine = {
    'HOSTNAME': os.hostname(),
    'OSNAME': os.platform(),
    'VERSION': os.version(),
    'ARCHITECTURY': os.arch(),
    'CPUs': os.cpus(),
    'MEMORY': os.freemem() / 1024 / 1024,
    'ALLMEMORY': os.totalmem() / 1024 / 1024,
    'USER': os.userInfo(),
    'UPTIME': os.uptime() / 60 / 60,
    'TYPE': os.type(),
}

console.log(infoMachine)