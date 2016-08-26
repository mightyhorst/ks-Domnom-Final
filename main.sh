#!/bin/bash

sudo git clone https://github.com/mitni455/ks-Domnom-Final /home/Domnom/ks-Domnom-Final
sudo chmod -R 777 /home/Domnom/ks-Domnom-Final
sudo docker-compose -f /home/Domnom/ks-Domnom-Final/docker-compose.yml up -d 
sudo docker exec ksdomnomfinal_frontend_1 /var/www/angular/run.sh
sudo docker exec ksdomnomfinal_workspace_1 /var/www/laravel/run.sh