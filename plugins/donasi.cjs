var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [085770598246]
│ • DANA [085770598246]
│ • OVO [085770598246]
│ • GOPAY [085770598246]
│ • SHOPPY PAY [085770598246]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285770598246
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
