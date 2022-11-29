# Register a new device identity to azure IOT hub

TODO: add command line instructions for setting up the hub:
https://learn.microsoft.com/en-us/azure/iot-hub/iot-hub-create-using-cli

```
az iot hub device-identity create --hub-name SomeIOTHubName --device-id SomeRuuviTag
az iot hub device-identity show-connection-string --hub-name SomeIOTHubName --device-id SomeRuuviTag --output table
```
