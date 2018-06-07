Ruuvin reggaus:

juha@JuhaMBP TemppuRuuvi $ az iot hub device-identity create --hub-name RuuviTagIoTHub --device-id MarkonRuuvi
{
  "authentication": {
    "symmetricKey": {
      "primaryKey": "lPQ+ZLrzwzjcVLSE0IzZ0teYr+VTv3iDXcJCfGpZoVY=",
      "secondaryKey": "K0tQaKu+RRbniP6L6DWNKziYdCZMgiRUOC51GLsCP8c="
    },
    "type": "sas",
    "x509Thumbprint": {
      "primaryThumbprint": null,
      "secondaryThumbprint": null
    }
  },
  "capabilities": {
    "iotEdge": false
  },
  "cloudToDeviceMessageCount": 0,
  "connectionState": "Disconnected",
  "connectionStateUpdatedTime": "0001-01-01T00:00:00",
  "deviceId": "MarkonRuuvi",
  "etag": "ODUyNjM5Mjkx",
  "generationId": "636633855022326311",
  "lastActivityTime": "0001-01-01T00:00:00",
  "status": "enabled",
  "statusReason": null,
  "statusUpdatedTime": "0001-01-01T00:00:00"
}

az iot hub device-identity show-connection-string --hub-name RuuviTagIoTHub --device-id MarkonRuuvi --output table

HostName=RuuviTagIoTHub.azure-devices.net;DeviceId=MarkonRuuvi;SharedAccessKey=lPQ+ZLrzwzjcVLSE0IzZ0teYr+VTv3iDXcJCfGpZoVY=