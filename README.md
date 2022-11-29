#Temppuruuvi RuuviTag reader script

##Prerequisites:

Connect raspberry pi to internet, and

1. Install node

Node.js installation:

- Open console on rpi and enter:

```
sudo apt install -y nodejs
node -v
npm -v
```

## Installing the utility

1. Clone the repository

```
git clone git@github.com:kokopino-fullstack/temppuruuvi.git
```

== Configure connection to Azure IoT Hub

```
node index.js "HostName=temppuruuvi.azure-devices.net;DeviceId=temppuruuvi;SharedAccessKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx="
```

The utility starts scanning for Ruuvi Tags in the area and once it finds one or more, starts to
push data to IoT gateway for each one of them.

