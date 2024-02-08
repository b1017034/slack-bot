import { App } from "@slack/bolt"
import 'dotenv/config'

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    processBeforeResponse: true
});

app.message('help', async ({message, say}) => {
    await say(`Hey there <@${message.channel}>!`)
});

(async () => {
    await app.start(process.env.PORT || 3000)
})();