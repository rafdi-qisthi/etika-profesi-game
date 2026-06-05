export const sector5 = {
    id: 's5', 
    title: 'Keamanan Siber & Privasi', 
    desc: 'IT Sektor - Kedaulatan Data',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80',
    baseQuestions: [
        { 
            npc: { name: 'Hacker', role: 'Eksternal', avatarColor: 'text-red-500', bgColor: 'bg-red-100' }, 
            dialog: `Saya menemukan celah zero-day di sistem perusahaan. Mau dibeli di pasar gelap atau dilaporkan resmi?`, 
            choices: [
                { text: 'A. Biarkan pintu celahnya terbuka untuk nanti dieksploitasi.', correct: false, feedback: 'Salah! Pembiaran keamanan (Negligence).' },
                { text: 'B. Jual vulnerability itu ke forum underground demi uang.', correct: false, feedback: 'Salah! Praktik black-hat yang memfasilitasi serangan siber.' },
                { text: 'C. Laporkan lewat program Bug Bounty resmi perusahaan.', correct: true, feedback: 'Benar! Tindakan white-hat hacker menjaga keamanan sistem.' },
                { text: 'D. Retas balik server hacker tersebut (Hack Back).', correct: false, feedback: 'Salah! Aksi main hakim sendiri di ranah siber ilegal.' }
            ] 
        },
        { 
            npc: { name: 'Manajer Produk', role: 'Internal', avatarColor: 'text-indigo-500', bgColor: 'bg-indigo-100' }, 
            dialog: `Kita pasang tracker tersembunyi untuk merekam aktivitas ketikan pengguna demi riset AI?`, 
            choices: [
                { text: 'A. Beli data pelacakan dari broker pihak ketiga.', correct: false, feedback: 'Salah! Mencuci pelanggaran privasi via broker.' },
                { text: 'B. Pasang secara diam-diam agar data yang disedot banyak.', correct: false, feedback: 'Salah! Pemasangan Spyware terselubung.' },
                { text: 'C. Sembunyikan klausal pelacakan di T&C 100 halaman.', correct: false, feedback: 'Salah! Transparansi semu (Dark UX).' },
                { text: 'D. Wajib sediakan opsi persetujuan terbuka (Opt-In).', correct: true, feedback: 'Tepat! Kebebasan hak privasi pengguna mutlak (GDPR/PDP).' }
            ] 
        },
        { 
            npc: { name: 'Analis Data', role: 'Rekan Kerja', avatarColor: 'text-amber-600', bgColor: 'bg-amber-100' }, 
            dialog: `Ada data anonim. Jika direlasikan dengan API asing, kita bisa tahu pemilik identitas aslinya. Eksploitasi?`, 
            choices: [
                { text: 'A. Retas data eksternal untuk digabungkan secara maksimal.', correct: false, feedback: 'Salah! Kejahatan intrusi data ganda.' },
                { text: 'B. Lakukan *profiling* untuk target segmentasi iklan agresif.', correct: false, feedback: 'Salah! Melanggar kepatuhan regulasi data base.' },
                { text: 'C. Jangan, itu melanggar larangan Re-Identifikasi data anonim.', correct: true, feedback: 'Benar! Menjaga prinsip fundamental anonimisasi data sensitif.' },
                { text: 'D. Jual algoritma pencocokan identitas itu.', correct: false, feedback: 'Salah! Mengkomersilkan pelanggaran privasi.' }
            ] 
        },
        { 
            npc: { name: 'Direktur IT', role: 'Atasan', avatarColor: 'text-purple-600', bgColor: 'bg-purple-100' }, 
            dialog: `Server kita terkena ransomware! Bayar tebusan cryptocurrency ke penjahat siber agar data cepat kembali?`, 
            choices: [
                { text: 'A. Negosiasi harga tebusan agar bayar lebih murah.', correct: false, feedback: 'Salah! Tetap membiayai sindikat.' },
                { text: 'B. Bayar segera tebusannya demi efisiensi operasional IT.', correct: false, feedback: 'Salah! Mendanai kelangsungan kriminalitas siber internasional.' },
                { text: 'C. Biarkan data hilang dan rahasiakan dari klien.', correct: false, feedback: 'Salah! Pelanggaran kewajiban notifikasi kebocoran.' },
                { text: 'D. Tolak, isolasi sistem terdampak, dan pulihkan dari *backup*.', correct: true, feedback: 'Hebat! Mengikuti prosedur tanggap insiden siber yang benar.' }
            ] 
        },
        { 
            npc: { name: 'Staf Magang', role: 'Bawahan', avatarColor: 'text-slate-600', bgColor: 'bg-slate-200' }, 
            dialog: `Kak, agar coding cepat, kredensial password database production saya taruh di file *plaintext* kode ya?`, 
            choices: [
                { text: 'A. Catat passwordnya di kertas lalu buang filenya.', correct: false, feedback: 'Salah! Tetap rentan dari celah non-digital.' },
                { text: 'B. Segera enkripsi dan simpan di *Secrets Manager* terpusat.', correct: true, feedback: 'Sempurna! Standar manajemen *credential* wajib menggunakan *vault*.' },
                { text: 'C. Boleh, asal filenya disimpan di folder lokal laptopmu.', correct: false, feedback: 'Salah! Kecerobohan *hardcoding* fatal memicu kebocoran masif.' },
                { text: 'D. Upload ke GitHub repo public asal ganti nama.', correct: false, feedback: 'Salah! *Leak* kredensial paling sering terjadi dari ini.' }
            ] 
        }
    ]
};