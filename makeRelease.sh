#!/usr/bin/env bash

function build {
    rm -r dist
    mkdir dist
    cp index.js dist/
    cp package.json dist/
    cp CHANGELOG.md dist/
    cp README.md dist/
    cp installer/installer.sh dist/
    chmod 755 dist/installer.sh
    cd dist
    zip Temppuruuvi-$1.zip *
    aws s3 cp Temppuruuvi-$1.zip s3://temppuruuvi-releases/ --profile temppuruuvigit
}

echo "Making release with version $1"
while true; do
    read -p "Yes, I have updated that number to config.xml and want to build a release!!!" yn
    case $yn in
        [Yy]* ) build $1; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

