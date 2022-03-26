#!/bin/bash
if [ -f config ]
then
  source config
else
  echo "Configuration file missing! exiting"
  exit 1
fi

if [ -z $CONNECTION_LOG ]
then
  echo "Missing config: CONNECTION_LOG"
  exit 1
fi

if [ -z $LOCAL_NETWORK_TEST_HOST ]
then
  echo "Missing config: LOCAL_NETWORK_TEST_HOST"
  exit 1
fi

if [ -z $ZEROTIER_TEST_HOST ]
then
  echo "Missing config: ZEROTIER_TEST_HOST"
  exit 1
fi

timestamp=$(date)
sudo setcap 'cap_net_raw=+ep' $(which ping)
touch $CONNECTION_LOG
sudo ping -c4 "$LOCAL_NETWORK_TEST_HOST" > /dev/null

if [ $? != 0 ]
then
  echo "$timestamp - Can't react $GATEWAY, restarting wlan0..." | tee -a $CONNECTION_LOG
  /sbin/ifdown 'wlan0'
  sleep 5
  /sbin/ifup --force 'wlan0'
else
  echo "Local network connection up."
fi

sudo ping -c4 "$ZEROTIER_TEST_HOST" > /dev/null

if [ $? != 0 ]
then
  echo "$timestamp - Can't react zerotier test host, restarting zerotier service..." | tee -a $CONNECTION_LOG
  sudo service zerotier-one restart
else
  echo "Zerotier network connection up."
fi
