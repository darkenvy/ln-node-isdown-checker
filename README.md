

## Why?

I needed a tracker that would tell me if the node went down for over an hour. Since I have a rather complicated setup with ddns, I didn't want to be alerted the first moment that the server appears offline. Mostly because these were false positives.

## Install.
1. `npm install`
1. `cp .env.example .env`. Populate with the correct information
1. `crontab -e` add to crontab. I chose an interval of 1 minute. Other intervals may require modification to the code
1. success

## Email provider
I use mail.ee as it was easy to set up and works well with node-mailer. 