const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {

const helpMessage = `
╭━━━〔 ⚡ 𓄂𝐑𝐀𝐉𝐔 𝟒𝐗  •  M E N U ⚡ 〕━━━╮
┃ ⚔️ Bot: ${settings.botName || '𓄂𝐑𝐀𝐉𝐔 𝟒𝐗-Bot'}
┃ 👑 Owner: ${settings.botOwner || '𓄂𝐑𝐀𝐉𝐔 𝟒𝐗'}
┃ ⚙️ Version: ${settings.version || '4.0.0'}
┃ 🌙 Mode: Thunder Breathing
╰━━━━━━━━━━━━━━━━━━━━━━━╯

⚡ *GENERAL*
╭──────────────
│ ⚡ .menu / .help
│ ⚡ .ping
│ ⚡ .alive
│ ⚡ .tts <text>
│ ⚡ .owner
│ ⚡ .joke / .quote / .fact
│ ⚡ .weather <city>
│ ⚡ .lyrics <song>
│ ⚡ .vv / .trt / .ss
╰──────────────

👥 *ADMIN CONTROL*
╭──────────────
│ ⚡ .ban / .kick
│ ⚡ .promote / .demote
│ ⚡ .mute / .unmute
│ ⚡ .warn / .warnings
│ ⚡ .antilink / .antibadword
│ ⚡ .tagall / .hidetag
│ ⚡ .welcome / .goodbye
│ ⚡ .setgname / .setgdesc
╰──────────────

👑 *OWNER CORE*
╭──────────────
│ ⚡ .mode <public/private>
│ ⚡ .update / .settings
│ ⚡ .autoread / .autotyping
│ ⚡ .anticall / .pmblocker
│ ⚡ .setpp / .clearsession
╰──────────────

🎨 *MEDIA / STICKER*
╭──────────────
│ ⚡ .sticker / .simage
│ ⚡ .removebg / .remini
│ ⚡ .meme / .take
│ ⚡ .emojimix
│ ⚡ .igs / .igsc
╰──────────────

🎮 *GAMES*
╭──────────────
│ ⚡ .tictactoe
│ ⚡ .hangman
│ ⚡ .trivia
│ ⚡ .truth / .dare
╰──────────────

🤖 *AI POWER*
╭──────────────
│ ⚡ .gpt
│ ⚡ .gemini
│ ⚡ .imagine
│ ⚡ .flux / .sora
╰──────────────

🎭 *FUN ZONE*
╭──────────────
│ ⚡ .compliment / .insult
│ ⚡ .flirt / .shayari
│ ⚡ .ship / .simp
│ ⚡ .character
╰──────────────

🔤 *TEXT MAKER*
╭──────────────
│ ⚡ .neon / .matrix
│ ⚡ .glitch / .fire
│ ⚡ .hacker / .devil
│ ⚡ .thunder ⚡
╰──────────────

📥 *DOWNLOADER*
╭──────────────
│ ⚡ .play / .song
│ ⚡ .spotify
│ ⚡ .tiktok / .instagram
│ ⚡ .ytmp4
╰──────────────

💻 *GITHUB*
╭──────────────
│ ⚡ .repo / .script
│ ⚡ .github / .sc
╰──────────────

╭━━━〔 ⚡ STATUS ⚡ 〕━━━╮
┃ “Sleep... then strike like thunder.”
┃        — 𓄂𝐑𝐀𝐉𝐔 𝟒𝐗 Mode ⚡
╰━━━━━━━━━━━━━━━━━━━━━━━╯
`;

try {
    const imagePath = path.join(__dirname, '../assets/bot_image.jpg');

    if (fs.existsSync(imagePath)) {
        const imageBuffer = fs.readFileSync(imagePath);

        await sock.sendMessage(chatId, {
            image: imageBuffer,
            caption: helpMessage,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029VbC8MBZHrDZelHN6bJ2C@newsletter',
                    newsletterName: '⚡ 𓄂𝐑𝐀𝐉𝐔 𝟒𝐗 Bot',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

    } else {
        await sock.sendMessage(chatId, {
            text: helpMessage,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029VbC8MBZHrDZelHN6bJ2C@newsletter',
                    newsletterName: '⚡ 𓄂𝐑𝐀𝐉𝐔 𝟒𝐗 Bot',
                    serverMessageId: -1
                }
            }
        });
    }

} catch (error) {
    console.error('Menu Error:', error);
    await sock.sendMessage(chatId, { text: helpMessage });
}
}

module.exports = helpCommand;
