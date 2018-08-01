#Temppuruuvi RuuviTag reader script

##Prerequisites:

Connect raspberry pi to internet, and

1. Install node (programming environment and runtime; https://nodejs.org/en/)

Node.js installation:

- Open command line console on raspian and enter:

```
sudo apt install -y nodejs
node -v
```

Should output something like:

```
v9.10.1
```

Enter:

```
npm -v
```

Should output something like:

```
3.10.10
```

## Installing the utility

When both the "node" and "npm" commands work, then download, install and run the "Temppuruuvi"-app package in it's own directory:

```
mkdir Temppuruuvi
cd Temppuruuvi
wget https://s3.eu-central-1.amazonaws.com/temppuruuvi-releases/Temppuruuvi-0.0.1.zip
unzip Temppuruuvi-0.0.1.zip
npm install
```

This installs the packages required to run the utility. In case you get an error in the "wget" command, read (<b>SEE1</b>). Next, edit (<b>SEE2</b>) the file index.js and add the 
Azure IoT device connection string:

```
// Replace this with the connectionID for the Azure IOT gw registered device

let connectionString = 'HostName=RuuviTagIoTHub.azure-devices.net;DeviceId=MarkonRuuvi;SharedAccessKey=lPQ+ZLrzwzjcVLSE0IzZ0teYr+VTv3iDXcJCfGpZoVY=';
```

(Change the string between the single quote marks)

When this is done, you can run the utility:

```
node index.js
```

The utility starts scanning for Ruuvi Tags in the area and once it finds one or more, starts to
push data to IoT gateway for each one of them.

## Notes

The utility runs as long as you keep the console window open or you terminate it using CTRL-X to stop it.

(<b>SEE1</b>) Wget is an utility download files on command line. This may now be always installed. To install it on raspberry PI, run

```
sudo apt install wget
```

(<b>SEE2</b>) Editing text files on Raspberry PI. You can use the instruction in here to get a text editor of your 
choice: https://www.raspberrypi.org/documentation/linux/usage/text-editors.md