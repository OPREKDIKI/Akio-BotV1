let handler = async (m, { conn, args }) => {
   if (!args[0]) return m.reply('Masukan Item Yang Mau Di Cheat !')
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].${args[0]} = 99999999999
}
handler.command = /^(cheat)$/i

handler.mods = true

export default handler