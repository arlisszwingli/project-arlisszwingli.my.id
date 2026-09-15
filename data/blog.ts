export const blogPosts = [
  {
    slug: "first-post-myopentrip",
    title: "One Platform, Every Journey",
    excerpt: "Refleksi singkat tentang membangun cara yang lebih aman untuk menjelajah, satu jalur pada satu waktu.",
    content: `Halo semua, ini adalah artikel pertamaku di blog ini.

              Yaa bisa dibilang ini juga adalah sebuah wadah bagiku sendiri untuk bercerita atau curhat hehe. Ini menjadi artikel perkenalan sekaligus cerita tentang perjalanan saya ikut dalam membangun platform MyOpentrip.

              7 Juni 2026 saya Wisuda dari Universitas Advent Indonesia Bandung dengan membawa gelar S.kom (Sarjana Komputer).

              Sebagai seorang fresh graduate Sistem Informasi yang punya kecintaan besar terhadap alam dan dunia wisata, khususnya hiking/pendakian gunung. Beberapa waktu terakhir, saya melihat tren hiking dan opentrip semakin populer di kalangan anak muda gen Z. Sayangnya, di balik euforia ini, masih banyak keresahan soal keamanan opentrip mulai dari penyedia yang kurang jelas track record-nya, minimnya informasi wisata yang akurat, sampai sulitnya akses transportasi menuju lokasi.

              Dari situ, muncul keinginan untuk membuat sesuatu yang bisa membantu para pendaki dan pecinta alam merasa lebih aman dan nyaman saat merencanakan perjalanan. Bersama abang saya yang berprofesi sebagai Web Developer dan dengan kebetulan ternyata abang saya juga sedang mendevelop sebuah platform yang saya pikirkan selama ini. Saya pun di ajak untuk mencoba mencari klien/calon pengguna, kami mulai membangun sebuah wadah/platform yang menghadirkan:

              🧭 Opentrip — dengan informasi penyedia trip yang lebih transparan

              🏞️ Pengalaman wisata (experience) — cerita dan review dari para pendaki

              ℹ️ Info wisata — data seputar destinasi, jalur, dan persiapan pendakian

              🚗 Sewa kendaraan — memudahkan akses transportasi ke lokasi wisata

              💬 Forum — ruang diskusi antar pendaki untuk berbagi tips, bertanya, dan saling terhubung

  

Sebagai fresh graduate yang butuh pengalaman dan harus berjuang di dalam karir, ini menjadi salah satu langkah awal saya untuk menggabungkan passion di bidang teknologi (Sistem Informasi) dengan kecintaan saya terhadap alam. Semoga platform ini bisa menjadi wadah yang bermanfaat bagi teman-teman pecinta alam di luar sana, agar setiap perjalanan bisa lebih aman, terencana, dan berkesan.



Untuk platformnya juga sudah mulai kelihatan yang bisa dilihat di https://myopentrip.com/

tentunya untuk website ini belum sempurna, masih pengembangan terlebih di pembayaran langsung di website tanpa harus beralih ke WhatsApp terlebih dahulu. Semoga wadah ini bisa menjadi wadah yang bermanfaat bagi teman-teman pecinta alam di luar sana, agar setiap perjalanan bisa lebih aman, terencana, dan berkesan.



Terima kasih untuk siapa pun yang sudah mendukung proses ini. Mari terus berkarya!`,
    date: "2026-09-12",
    image: "/images/blogIMG/myopentrip.png",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}
