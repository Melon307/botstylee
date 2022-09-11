var handler = async m => m.reply(`
╭─「 Donasi Via  」
│ • INDOSAT [085770598246]
│ • DANA [085770598246]
│ • OVO [085770598246]
│ • GOPAY [085770598246]
│ • SHOPPY PAY [085770598246]
╰────
Donasi seikhlasnya walaupun hanya se persen pun
Tetap saya terima, karena donasi kamu berasal dari
Hati dan niat yang sangat baik. . .

Saya sangat berterima kasih bagi kamu yang sudah
Berdonasi kepada saya, saya mendoakan anda agar
*Amal* dan *Ibadah* anda senantiasa diterima di
Sisi tuhan ( Allah SWT ) selalu
Aamiin yaa rabbal allamiin. . .

╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285770598246
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
