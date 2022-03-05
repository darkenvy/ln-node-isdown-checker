

## Why?

I needed a tracker that would tell me if the node went down for over an hour. Since I have a rather complicated setup with ddns, I didn't want to be alerted the first moment that the server appears offline. Mostly because these were false positives.

## Install.
1. `npm install`
1. `cp .env.example .env`. Populate with the correct information
1. `crontab -e` add to crontab. I chose an interval of 1 minute. Other intervals may require modification to the code
1. success

## Email provider
I use mail.ee as it was easy to set up and works well with node-mailer. 

## Low Memory Mode
I use a low-memory VPN. You will need to set the cieling of NodeJS's memory allotment.

`node --max-old-space-size=224`

## Crontab
Check every 5 minutes. If it is down for an hour, send an email. Then do the same for every 6 hours thereafter. Eg: the second email will be at hour 7.

`crontab -e`

`*/5 * * * * /usr/bin/node --max-old-space-size=224 /home/darkenvy/ln-node-isdown-checker/index.js >> /home/darkenvy/ln-node-isdown-checker/error.log`