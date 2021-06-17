# Logger Telegram

## Pre-requisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Initialize steps

- Clone this repo on a machine where you'd like to deploy
- Create `docker-compose.override.yml` based on `docker-compose.override.yml.dist` and edit the variables in it
- Execute `docker-compose build --no-cache --compress && docker-compose up -d`

## ENV details
- Create a Telegram bot using https://t.me/BotFather to get `TELEGRAM_BOT_TOKEN` variable
- Create a Telegram channel and set Telegram bot as an administrator
- Send Telegram channel's link to https://t.me/username_to_id_bot to get `TELEGRAM_CHANNEL_ID` variable

## How to use

Simply publish a message with payload
```
{ "pattern": "log-message", "data": "test" }
```
