# COL-CollectData-App
Colon Cancer Screening Additional Data Collection Reference App

## Building Releases
A Dockerfile is included for customization to easily distribute complete application images. For example:

    docker build -t hspc/davinci-col-collectdata:latest .
    docker run -it --name davinci-col-collectdata --rm -p 9090:9090 hspc/davinci-col-collectdata:latest