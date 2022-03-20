#!/bin/bash
connectionLog=/home/pi/connection.log
replacement=/home/pi/connection.log.tmp
cat $connectionLog | tail -n 10000 >> $replacement
rm $connectionLog
mv $replacement $connectionLog
