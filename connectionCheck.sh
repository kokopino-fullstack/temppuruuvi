GATEWAY=192.168.1.1
timestamp=$(date)
logfile=/home/pi/connection.log
touch $logfile
ping -c4 192.168.1.1 > /dev/null

if [ $? != 0 ]
then
  echo "$timestamp - Can't react $GATEWAY, restarting wlan0..." >> $logfile
  /sbin/ifdown 'wlan0'
  sleep 5
  /sbin/ifup --force 'wlan0'
fi

ping -c4 opus > /dev/null

if [ $? != 0 ]
then
  echo "$timestamp - Can't react zerotier test host, restarting zerotier service..." >> $logfile
  sudo service zerotier-one restart
fi
