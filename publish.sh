#!/bin/bash
./node_modules/.bin/exp login -u $EXPO_USERNAME -p $EXPO_PASSWORD
./node_modules/.bin/exp publish
