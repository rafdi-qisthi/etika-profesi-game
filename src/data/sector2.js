export const sector2 = {
    id: 's2', 
    title: 'Biro Jasa Karir', 
    desc: 'Etika Dokumen & Integritas Profesional',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80',
    baseQuestions: [
        { 
            npc: { name: 'Klien Baru', role: 'Pencari Kerja', avatarColor: 'text-cyan-500', bgColor: 'bg-cyan-100' }, 
            dialog: `Mohon naikkan IPK saya di CV menjadi 3.90 agar lolos seleksi berkas administrasi.`, 
            choices: [
                { text: 'A. Buatkan saja sesuai permintaan, yang penting dibayar.', correct: false, feedback: 'Salah! Membantu memalsukan data akademis.' }, 
                { text: 'B. Naikkan sedikit saja jadi 3.00 biar masuk akal.', correct: false, feedback: 'Salah! Kebohongan kecil tetap pemalsuan.' },
                { text: 'C. Tolak dan bantu optimalkan narasi skill aslinya.', correct: true, feedback: 'Benar! Integritas dokumen CV wajib dijaga.' },
                { text: 'D. Tawarkan jasa pemalsuan ijazah sekalian.', correct: false, feedback: 'Salah! Kejahatan dokumen negara.' }
            ] 
        },
        { 
            npc: { name: 'Klien Senior', role: 'Eksekutif', avatarColor: 'text-indigo-500', bgColor: 'bg-indigo-100' }, 
            dialog: `Masukkan portofolio proyek milik orang lain sebagai klaim karya pribadi saya.`, 
            choices: [
                { text: 'A. Tolak tegas, itu plagiarisme karya fatal.', correct: true, feedback: 'Tepat! Menghargai hak kekayaan intelektual (HAKI).' }, 
                { text: 'B. Edit sedikit warnanya agar tidak ketahuan.', correct: false, feedback: 'Salah! Modifikasi tanpa izin tetap plagiat.' },
                { text: 'C. Ambil saja portofolio dari web desainer asing.', correct: false, feedback: 'Salah! Mencuri karya internasional.' },
                { text: 'D. Terima, asal bayarannya dinaikkan.', correct: false, feedback: 'Salah! Mendukung kebohongan publik demi uang.' }
            ] 
        },
        { 
            npc: { name: 'Agensi Kompetitor', role: 'Rival', avatarColor: 'text-red-600', bgColor: 'bg-red-100' }, 
            dialog: `Jual data nomor HP dan email para pelamar kerja aktif yang ada di database Anda?`, 
            choices: [
                { text: 'A. Tukar data database dengan agensi mereka.', correct: false, feedback: 'Salah! Berbagi data klien ilegal.' },
                { text: 'B. Tolak keras, lindungi privasi data klien.', correct: true, feedback: 'Benar! Data privacy adalah amanah.' },
                { text: 'C. Jual demi pendapatan tambahan kas.', correct: false, feedback: 'Salah! Pelanggaran privasi UU ITE.' },
                { text: 'D. Berikan gratis untuk menjalin koneksi.', correct: false, feedback: 'Salah! Data pribadi bukan barang publik.' }
            ] 
        },
        { 
            npc: { name: 'Klien Joki', role: 'Peserta Ujian', avatarColor: 'text-amber-500', bgColor: 'bg-amber-100' }, 
            dialog: `Tolong gantikan saya mengerjakan tes online seleksi kerja lewat remote screen.`, 
            choices: [
                { text: 'A. Terima tawaran joki, komisinya besar.', correct: false, feedback: 'Salah! Merusak sistem rekrutmen.' }, 
                { text: 'B. Suruh teman programmer Anda yang mengerjakan.', correct: false, feedback: 'Salah! Mengalihkan tindakan joki.' },
                { text: 'C. Beri contekan via chat selama ujian.', correct: false, feedback: 'Salah! Memfasilitasi kecurangan tes.' },
                { text: 'D. Tolak tegas menyediakan layanan joki.', correct: true, feedback: 'Sempurna! Menjaga muruah profesionalisme rekrutmen.' }
            ] 
        },
        { 
            npc: { name: 'Pelanggan Telat', role: 'Debitur', avatarColor: 'text-rose-500', bgColor: 'bg-rose-100' }, 
            dialog: `Saya belum bisa bayar sisa tagihan jasa CV. Apakah Anda akan memviralkan KTP saya?`, 
            choices: [
                { text: 'A. Sebarkan datanya agar viral dan jera (Doxing).', correct: false, feedback: 'Salah! Doxing melanggar hukum ITE.' }, 
                { text: 'B. Selesaikan penagihan secara hukum & profesional.', correct: true, feedback: 'Luar biasa! Penagihan beretika menghargai klien.' },
                { text: 'C. Teror keluarga dan teman kantornya.', correct: false, feedback: 'Salah! Intimidasi ilegal.' },
                { text: 'D. Sita barang pribadinya secara paksa.', correct: false, feedback: 'Salah! Main hakim sendiri.' }
            ] 
        }
    ]
};