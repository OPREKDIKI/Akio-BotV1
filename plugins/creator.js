import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;DikiXd\nNICKNAME:👑 Owner Akio Bot\nORG:DikiXd\nTITLE:soft\nitem1.TEL;waid=6281260730830:+62 812-6073-0830\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://dikisimarmata.simdif.com\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: dikyrafaelsimarmata@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Akio Bot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 Kepo Ya\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner Saya Kak🗿`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa', 'Huuu']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'pengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6281260730830:+62 812-6073-0830\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg terus meresetku😔.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
}
if (command == 'creator') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `👑 Owner Bot `, `🚫 Jangan Di Call Cok`, `dikyrafaelsimarmata@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://dikisimarmata.simdif.com`, `👤 Pawang Saya Saha?`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🔥 Bot WhatsApp`, `📵 Jangan Di Spam Call/Text`, `Nothing`, `🇮🇩 Indonesia`, `🚀 https://dikisimarmata.simdif.com`, `🤖 Hanya Bot By DikiXd`]
  ], fkontak)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , spam di block`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team owner, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler