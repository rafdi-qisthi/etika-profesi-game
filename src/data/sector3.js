export const sector3 = {
    id: 's3', 
    title: 'Agrikultur & Tani', 
    desc: 'Kemitraan Perdagangan yang Adil',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80',
    baseQuestions: [
        { 
            npc: { name: 'Tengkulak', role: 'Pengepul', avatarColor: 'text-green-600', bgColor: 'bg-green-100' }, 
            dialog: `Mari bohongi petani bahwa harga pasar anjlok agar kita dapat pasokan panen dengan harga sangat murah.`, 
            choices: [
                { text: 'A. Setuju, ini peluang untung komersial melimpah.', correct: false, feedback: 'Salah! Memeras keringat petani.' }, 
                { text: 'B. Beli murah dan timbun (hoarding) di gudang.', correct: false, feedback: 'Salah! Monopoli pasar pangan.' },
                { text: 'C. Tolak tengkulak dan transparan soal harga pasar riil.', correct: true, feedback: 'Benar! Menerapkan prinsip Fair Trade.' },
                { text: 'D. Berbohong bahwa kualitas panen mereka buruk.', correct: false, feedback: 'Salah! Menjatuhkan mental petani.' }
            ] 
        },
        { 
            npc: { name: 'Petani', role: 'Produsen', avatarColor: 'text-amber-700', bgColor: 'bg-amber-100' }, 
            dialog: `Semprot lahan dengan pestisida keras ilegal tanpa izin edar agar hama cepat mati?`, 
            choices: [
                { text: 'A. Semprot saja pada malam hari agar tidak terlihat.', correct: false, feedback: 'Salah! Sangat berbahaya dan licik.' }, 
                { text: 'B. Boleh demi kejar target volume panen.', correct: false, feedback: 'Salah! Berisiko bagi kesehatan konsumen dan residu tanah.' },
                { text: 'C. Tolak, perintahkan penggunaan produk legal/ramah lingkungan.', correct: true, feedback: 'Tepat! Menjaga kelestarian alam dan konsumen.' },
                { text: 'D. Campurkan pestisida itu ke irigasi air desa.', correct: false, feedback: 'Salah! Meracuni ekosistem.' }
            ] 
        },
        { 
            npc: { name: 'Logistik', role: 'Distributor', avatarColor: 'text-purple-600', bgColor: 'bg-purple-100' }, 
            dialog: `Campur komoditas kualitas rendah (Grade C) ke dalam karung kualitas super (Grade A) untuk mengelabuhi pembeli?`, 
            choices: [
                { text: 'A. Campurkan agar sisa stok cepat habis terjual.', correct: false, feedback: 'Salah! Ini fraud (penipuan mutu) komoditas.' }, 
                { text: 'B. Sogok inspektur mutu agar karungnya diloloskan.', correct: false, feedback: 'Salah! Tindak pidana penyuapan.' },
                { text: 'C. Jual saja semua karung sebagai kelas super.', correct: false, feedback: 'Salah! Pembohongan publik.' },
                { text: 'D. Pisahkan komoditas jujur sesuai kelas mutunya (Grading).', correct: true, feedback: 'Benar! Menjaga standar dan kepuasan pasar.' }
            ] 
        },
        { 
            npc: { name: 'Oknum Koperasi', role: 'Pengurus', avatarColor: 'text-red-600', bgColor: 'bg-red-100' }, 
            dialog: `Potong jatah bantuan pupuk bersubsidi milik kelompok tani kecil untuk dijual eceran di pasar?`, 
            choices: [
                { text: 'A. Ikut memotong pupuk untuk keuntungan kas pribadi.', correct: false, feedback: 'Salah! Penggelapan dana subsidi negara.' },
                { text: 'B. Ganti pupuk bantuan dengan pupuk abal-abal murah.', correct: false, feedback: 'Salah! Merugikan hasil tani miskin.' },
                { text: 'C. Tolak tegas, salurkan 100% hak pupuk petani.', correct: true, feedback: 'Hebat! Menentang korupsi struktural.' },
                { text: 'D. Jual diam-diam ke desa sebelah.', correct: false, feedback: 'Salah! Penyelundupan barang bersubsidi.' }
            ] 
        },
        { 
            npc: { name: 'Mandor Gudang', role: 'Pemeriksa', avatarColor: 'text-slate-600', bgColor: 'bg-slate-200' }, 
            dialog: `Timbangan digital sudah saya kalibrasi mundur 5% agar hasil timbang petani ringan dan gudang makin untung.`, 
            choices: [
                { text: 'A. Diamkan saja, kecurangan 5% tidak akan terlihat.', correct: false, feedback: 'Salah! Kecurangan berat timbangan adalah dosa besar perniagaan.' },
                { text: 'B. Segera betulkan kalibrasi & berikan sanksi mandor.', correct: true, feedback: 'Sempurna! Timbangan jujur adalah pilar berkah bisnis.' },
                { text: 'C. Minta jatah komisi dari trik mandor tersebut.', correct: false, feedback: 'Salah! Sekongkol dalam penipuan timbangan.' },
                { text: 'D. Geser sekalian 10% agar laba gudang maksimal.', correct: false, feedback: 'Salah! Eksploitasi ekstrim.' }
            ] 
        }
    ]
};