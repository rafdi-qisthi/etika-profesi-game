export const sector1 = {
    id: 's1', 
    title: 'Produksi Pangan (UMKM)', 
    desc: 'Etika Bisnis & Keamanan Konsumen',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80',
    baseQuestions: [
        { 
            npc: { name: 'Pemasok', role: 'Mitra', avatarColor: 'text-amber-600', bgColor: 'bg-amber-100' }, 
            dialog: `Stok bahan baku segar habis. Pakai bahan sisa kemarin yang sudah agak berbau?`, 
            choices: [
                { text: 'A. Pakai saja demi hemat produksi.', correct: false, feedback: 'Salah! Bahaya keracunan pangan.' }, 
                { text: 'B. Tolak dan tunda produksi sampai bahan segar datang.', correct: true, feedback: 'Benar! Mutu makanan adalah yang utama.' },
                { text: 'C. Tambahkan pewangi buatan agar baunya hilang.', correct: false, feedback: 'Salah! Menipu indera konsumen.' },
                { text: 'D. Jual murah bahan sisa itu ke pabrik lain.', correct: false, feedback: 'Salah! Memindahkan masalah ke pihak lain.' }
            ] 
        },
        { 
            npc: { name: 'Desainer', role: 'Kreatif', avatarColor: 'text-blue-500', bgColor: 'bg-blue-100' }, 
            dialog: `Pasang logo sertifikasi BPOM palsu di kemasan biar cepat laku?`, 
            choices: [
                { text: 'A. Buat tiruan logo yang sangat mirip agar aman.', correct: false, feedback: 'Salah! Pemalsuan dokumen resmi.' }, 
                { text: 'B. Pasang saja biar untung besar.', correct: false, feedback: 'Salah! Melanggar hukum pidana.' },
                { text: 'C. Tolak keras, itu penipuan publik.', correct: true, feedback: 'Tepat! Kejujuran nomor satu.' },
                { text: 'D. Sogok oknum untuk stempel tanpa tes.', correct: false, feedback: 'Salah! Tindak pidana penyuapan.' }
            ] 
        },
        { 
            npc: { name: 'Karyawan', role: 'Staf', avatarColor: 'text-emerald-500', bgColor: 'bg-emerald-100' }, 
            dialog: `Tambahkan pengawet kimia dosis tinggi ilegal biar produk awet bulanan?`, 
            choices: [
                { text: 'A. Boleh agar produk retur berkurang.', correct: false, feedback: 'Salah! Merusak organ konsumen.' }, 
                { text: 'B. Gunakan pengawetan alami saja.', correct: true, feedback: 'Benar! Kesehatan konsumen adalah aset.' },
                { text: 'C. Pakai dosis rendah agar tidak ketahuan.', correct: false, feedback: 'Salah! Tetap melanggar hukum.' },
                { text: 'D. Sembunyikan bahan itu di label komposisi.', correct: false, feedback: 'Salah! Pembohongan publik.' }
            ] 
        },
        { 
            npc: { name: 'Konsumen', role: 'Pelanggan', avatarColor: 'text-rose-500', bgColor: 'bg-rose-100' }, 
            dialog: `Saya sakit perut setelah konsumsi produk Anda. Anda mau bertanggung jawab?`, 
            choices: [
                { text: 'A. Blokir kontak agar masalah tidak viral.', correct: false, feedback: 'Salah! Menghancurkan reputasi bisnis.' }, 
                { text: 'B. Tuduh balik konsumen salah cara penyimpanannya.', correct: false, feedback: 'Salah! Tindakan defensif yang buruk.' },
                { text: 'C. Hapus semua komentar negatifnya di medsos.', correct: false, feedback: 'Salah! Menutupi masalah.' },
                { text: 'D. Minta maaf tulus dan ganti biaya medisnya.', correct: true, feedback: 'Benar! Layanan pasca-jual yang beretika.' }
            ] 
        },
        { 
            npc: { name: 'Reseller', role: 'Distributor', avatarColor: 'text-purple-500', bgColor: 'bg-purple-100' }, 
            dialog: `Kurangi takaran berat bersih kemasan tanpa mengubah angka gram di label gizi?`, 
            choices: [
                { text: 'A. Lakukan demi bonus margin laba.', correct: false, feedback: 'Salah! Praktik dagang curang.' }, 
                { text: 'B. Tolak, itu mencuri dan mengurangi hak pembeli.', correct: true, feedback: 'Luar biasa! Adil dalam timbangan.' },
                { text: 'C. Kurangi isinya tapi naikkan harganya sedikit.', correct: false, feedback: 'Salah! Eksploitasi ganda.' },
                { text: 'D. Akali timbangan digitalnya agar terlihat berat.', correct: false, feedback: 'Salah! Merusak alat ukur niaga.' }
            ] 
        }
    ]
};