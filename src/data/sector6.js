export const sector6 = {
    id: 's6', 
    title: 'Rekayasa Software & AI', 
    desc: 'IT Sektor - Etika Algoritma',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&q=80',
    baseQuestions: [
        { 
            npc: { name: 'Peneliti AI', role: 'Spesialis', avatarColor: 'text-cyan-500', bgColor: 'bg-cyan-100' }, 
            dialog: `Algoritma screening CV kita mendiskriminasi pelamar dari etnis tertentu karena bias data latih lama. Biarkan?`, 
            choices: [
                { text: 'A. Biarkan saja, output mesin komputasi tidak pernah salah.', correct: false, feedback: 'Salah! Mesin mewariskan diskriminasi (Algorithmic Bias).' },
                { text: 'B. Sembunyikan hasil audit algoritma dari laporan rapat.', correct: false, feedback: 'Salah! Tindakan menutupi cacat sistem kritis.' },
                { text: 'C. Hapus paksa pendaftar tersebut sebelum AI memproses.', correct: false, feedback: 'Salah! Manipulasi sistematis rekrutmen.' },
                { text: 'D. Lakukan *retraining* model dengan dataset yang inklusif/seimbang.', correct: true, feedback: 'Benar! Tanggung jawab menjaga keadilan (Fairness) kecerdasan buatan.' }
            ] 
        },
        { 
            npc: { name: 'Lead Dev', role: 'Atasan', avatarColor: 'text-blue-500', bgColor: 'bg-blue-100' }, 
            dialog: `Salin seluruh modul library *open-source* berlisensi ketat ke dalam *proprietary software* kita secara diam-diam.`, 
            choices: [
                { text: 'A. Ganti nama variabel (Obfuscate) agar plagiat tidak terdeteksi.', correct: false, feedback: 'Salah! Upaya perusakan dan penipuan digital.' },
                { text: 'B. Salin saja, semua baris kode publik itu gratis dipakai.', correct: false, feedback: 'Salah! Mengabaikan term dan kondisi lisensi HAKI perangkat lunak.' },
                { text: 'C. Tolak instruksi, patuhi kewajiban lisensi *open-source* asli.', correct: true, feedback: 'Tepat! Kepatuhan *software license* (*copyleft/copyright*) itu mutlak.' },
                { text: 'D. Beli modul bajakannya dari web reseler eksternal.', correct: false, feedback: 'Salah! Mendanai pembajakan kode.' }
            ] 
        },
        { 
            npc: { name: 'Product Owner', role: 'Manajemen', avatarColor: 'text-emerald-500', bgColor: 'bg-emerald-100' }, 
            dialog: `Aplikasi medis kita memiliki *bug* perhitungan krusial, tapi rilis terjadwal besok pagi. *Push to production* sekarang?`, 
            choices: [
                { text: 'A. Tunda rilis, utamakan QA (Quality Assurance) memblokir bug.', correct: true, feedback: 'Benar! Tanggung jawab moral developer menahan *software* cacat/berbahaya.' },
                { text: 'B. Matikan fitur validasi error log agar pengguna tidak tahu.', correct: false, feedback: 'Salah! Menyembunyikan malfungsi aplikasi.' },
                { text: 'C. Push saja, *patch* perbaikan menyusul dua bulan kemudian.', correct: false, feedback: 'Salah! Mengorbankan keandalan dan keselamatan pengguna sistem.' },
                { text: 'D. Salahkan tim Quality Assurance jika aplikasi diretas.', correct: false, feedback: 'Salah! Pelepasan tanggung jawab teknis.' }
            ] 
        },
        { 
            npc: { name: 'UX Designer', role: 'Rekan Tim', avatarColor: 'text-rose-500', bgColor: 'bg-rose-100' }, 
            dialog: `Kita pasang jebakan antarmuka (*Dark Pattern*): tombol "Batalkan Langganan" dibuat tidak bisa diklik.`, 
            choices: [
                { text: 'A. Tolak tegas, manipulasi antarmuka menipu pengguna konsumen.', correct: true, feedback: 'Sempurna! Desain pengalaman pengguna (UX) harus transparan.' },
                { text: 'B. Cemerlang, trik ini bisa memeras retensi pendapatan tahunan.', correct: false, feedback: 'Salah! *Dark pattern* eksploitatif dikecam regulasi.' },
                { text: 'C. Paksa klien bayar admin fee tambahan untuk tombol batal.', correct: false, feedback: 'Salah! Praktik pemerasan layanan digital.' },
                { text: 'D. Munculkan pop-up error palsu saat mereka klik batal.', correct: false, feedback: 'Salah! Membuat cacat fiktif antarmuka aplikasi.' }
            ] 
        },
        { 
            npc: { name: 'Data Scraper', role: 'Bot Operator', avatarColor: 'text-purple-500', bgColor: 'bg-purple-100' }, 
            dialog: `Unduh paksa jutaan karya seni digital milik kreator portofolio lokal untuk melatih AI *image generator* kita?`, 
            choices: [
                { text: 'A. Unduh semua, karena apa pun yang ada di internet adalah barang gratis.', correct: false, feedback: 'Salah! Pelanggaran massal hak kekayaan intelektual kreator.' },
                { text: 'B. Amankan *copyright*, ganti dengan menggunakan *dataset* yang dilisensi resmi.', correct: true, feedback: 'Sempurna! AI yang beretika dibayar dari keringat sah kreator konten.' },
                { text: 'C. Modifikasi sedikit gambar awal (Noise) agar AI tidak disomasi.', correct: false, feedback: 'Salah! Penipuan *bypass system* sistem perlindungan cipta.' },
                { text: 'D. Beli *dataset* hasil bajakan dari kompetitor murah.', correct: false, feedback: 'Salah! Mendanai ekosistem pelanggaran *data scraping* ilegal.' }
            ] 
        }
    ]
};