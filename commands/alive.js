const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const aliveMessage = `
╭─❖ 「 ${settings.botName || "𓄂𝐑𝐀𝐉𝐔 𝟒𝐗 Bot"} 」 ❖─⬣
│ 🤖 Status : ONLINE ✅
│ ⚡ Version : ${settings.version || "4.0.0"}
│ 🌐 Mode : ${settings.mode || "Private"}
╰──────────────⬣

┌─〔 Features 〕
│ • Group Tools
│ • Antilink / Antispam
│ • Fun & Games
│ • AI Commands
└─────────────

📌 Use *.menu* to explore commands
⚡ Fast • Smooth • Reliable
`;

        await sock.sendMessage(chatId, {
            text: aliveMessage,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029VbC8MBZHrDZelHN6bJ2C@newsletter',
                    newsletterName: settings.botName || '𓄂𝐑𝐀𝐉𝐔 𝟒𝐗 Bot',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, {
            text: `🤖 ${settings.botName || "𓄂𝐑𝐀𝐉𝐔 𝟒𝐗 Bot"} is online!`
        }, { quoted: message });
    }
}

module.exports = aliveCommand;
