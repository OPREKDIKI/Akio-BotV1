import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;DikiXd\nNICKNAME:๐ Owner Akio Bot\nORG:DikiXd\nTITLE:soft\nitem1.TEL;waid=6281260730830:+62 812-6073-0830\nitem1.X-ABLabel:๐ Nomor Owner\nitem2.URL:https://dikisimarmata.simdif.com\nitem2.X-ABLabel:๐ฌ More\nitem3.EMAIL;type=INTERNET: dikyrafaelsimarmata@gmail.com\nitem3.X-ABLabel:๐ Mail Owner Akio Bot\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:๐ฌ More\nitem4.X-ABLabel:๐ Lokasi Saya\nBDAY;value=date:๐ Kepo Ya\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `๐ Hai *${name} @${who.split("@")[0]}*, Nih Owner Saya Kak๐ฟ`
    await conn.sendButton(m.chat, caption, author, null, [['๐ Sapa', 'Huuu']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'pengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6281260730830:+62 812-6073-0830\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg terus meresetku๐.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
}
if (command == 'creator') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `๐ Owner Bot `, `๐ซ Jangan Di Call Cok`, `dikyrafaelsimarmata@gmail.com`, `๐ฎ๐ฉ Indonesia`, `๐ https://dikisimarmata.simdif.com`, `๐ค Pawang Saya Saha?`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `๐ฅ Bot WhatsApp`, `๐ต Jangan Di Spam Call/Text`, `Nothing`, `๐ฎ๐ฉ Indonesia`, `๐ https://dikisimarmata.simdif.com`, `๐ค Hanya Bot By DikiXd`]
  ], fkontak)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , spam di block`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team owner, jangan di apa-apain ya kak๐`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler