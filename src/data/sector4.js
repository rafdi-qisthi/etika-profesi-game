export const sector4 = {
    id: 's4', 
    title: 'Layanan Kesehatan', 
    desc: 'Integritas Medis & Sumpah Profesi',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80',
    baseQuestions: [
        { 
            npc: { name: 'Rekan Medis', role: 'Perawat', avatarColor: 'text-emerald-500', bgColor: 'bg-emerald-100' }, 
            dialog: `Ada rekam medis figur publik terkenal yang dirawat. Boleh saya memfotonya untuk di-share ke grup keluarga?`, 
            choices: [
                { text: 'A. Boleh, asal dijanjikan tidak disebar ke media sosial publik.', correct: false, feedback: 'Salah! Sekadar menyebar ke keluarga tetap melanggar privasi.' },
                { text: 'B. Tolak keras, jaga kerahasiaan diagnosis pasien mutlak.', correct: true, feedback: 'Benar! Kerahasiaan pasien adalah prinsip abadi kode etik medis.' },
                { text: 'C. Jual fotonya ke oknum wartawan gosip.', correct: false, feedback: 'Salah! Membocorkan data medis demi uang adalah kejahatan.' },
                { text: 'D. Simpan fotonya di HP pribadi Anda.', correct: false, feedback: 'Salah! Tidak ada hak menyimpan rekam medis pribadi.' }
            ] 
        },
        { 
            npc: { name: 'Sales Obat', role: 'Distributor Farmasi', avatarColor: 'text-blue-500', bgColor: 'bg-blue-100' }, 
            dialog: `Tolong selalu resepkan suplemen mahal merek kami ke pasien. Kami akan beri fasilitas wisata ke luar negeri.`, 
            choices: [
                { text: 'A. Tolak tawarannya, resepkan obat sesuai pedoman klinis.', correct: true, feedback: 'Tepat! Mengutamakan efektivitas kesembuhan, bukan komisi perusahaan.' },
                { text: 'B. Terima karena lumayan untuk fasilitas rekreasi.', correct: false, feedback: 'Salah! Gratifikasi farmasi membebani pasien dengan biaya obat mahal.' },
                { text: 'C. Minta komisi dalam bentuk uang tunai langsung.', correct: false, feedback: 'Salah! Bentuk suap langsung yang merusak integritas profesi.' },
                { text: 'D. Berikan obat itu ke pasien kaya saja.', correct: false, feedback: 'Salah! Membedakan pelayanan berdasarkan status ekonomi.' }
            ] 
        },
        { 
            npc: { name: 'Wali Pasien', role: 'Keluarga VIP', avatarColor: 'text-amber-500', bgColor: 'bg-amber-100' }, 
            dialog: `Ini ada uang tanda terima kasih. Tolong dahulukan jadwal operasi bedah anak saya melewati pasien IGD.`, 
            choices: [
                { text: 'A. Terima uangnya dan manipulasi jadwal operasinya.', correct: false, feedback: 'Salah! Mengancam nyawa pasien kritis yang lebih membutuhkan.' },
                { text: 'B. Operasi anak tersebut diam-diam malam ini.', correct: false, feedback: 'Salah! Melanggar prosedur standar rumah sakit.' },
                { text: 'C. Tolak gratifikasi, patuhi protokol triase medis kedaruratan.', correct: true, feedback: 'Benar! Keadilan pelayanan nyawa tidak ditentukan oleh materi.' },
                { text: 'D. Minta jumlah pelicin ditambahkan 2x lipat.', correct: false, feedback: 'Salah! Pemerasan dalam kondisi rentan.' }
            ] 
        },
        { 
            npc: { name: 'Kerabat', role: 'Teman Akrab', avatarColor: 'text-purple-500', bgColor: 'bg-purple-100' }, 
            dialog: `Tolong terbitkan surat keterangan sakit klinis fiktif untukku agar bisa mengklaim cuti berbayar kantor.`, 
            choices: [
                { text: 'A. Menolak tegas karena ia sehat dan menyalahi wewenang medis.', correct: true, feedback: 'Tepat! Kejujuran dan profesionalisme jauh di atas pertemanan.' },
                { text: 'B. Buatkan saja atas nama pertemanan masa lalu.', correct: false, feedback: 'Salah! Pemalsuan surat keterangan medis menodai sumpah dokter.' },
                { text: 'C. Minta bayaran jasa periksa walau tidak diperiksa.', correct: false, feedback: 'Salah! Penyalahgunaan profesi finansial.' },
                { text: 'D. Suruh staf magang yang menandatanganinya.', correct: false, feedback: 'Salah! Cuci tangan dari tanggung jawab hukum.' }
            ] 
        },
        { 
            npc: { name: 'Atasan Klinis', role: 'Kepala Rumah Sakit', avatarColor: 'text-red-500', bgColor: 'bg-red-100' }, 
            dialog: `Tim kita salah beri dosis sehingga pasien kritis. Ubah data rekam medis agar RS terbebas dari malpraktik.`, 
            choices: [
                { text: 'A. Kambinghitamkan pasien atas kesalahan sendiri.', correct: false, feedback: 'Salah! Menghindari tanggung jawab klinis.' },
                { text: 'B. Hapus riwayat rekam medis tersebut dari server.', correct: false, feedback: 'Salah! Merusak barang bukti pelayanan medis.' },
                { text: 'C. Ubah laporan demi menjaga citra rumah sakit.', correct: false, feedback: 'Salah! Pemalsuan rekam medis adalah kejahatan serius.' },
                { text: 'D. Laporkan insiden sebenarnya sebagai laporan keselamatan.', correct: true, feedback: 'Sempurna! Kejujuran transparansi mencegah kesalahan serupa terulang.' }
            ] 
        }
    ]
};