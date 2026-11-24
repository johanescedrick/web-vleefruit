import Image from "next/image";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import ConveyorArt from "@/components/ConveyorArt";
import PriceCalculator from "@/components/PriceCalculator";

function Ghost({ text }: { text: string }) {
  const row = Array.from({ length: 6 }, () => text).join(" ");
  return (
    <div aria-hidden="true" className="pointer-events-none overflow-hidden select-none">
      <div className="ghost-marquee">
        <span className="ghost-text pr-8 text-[64px] sm:text-[110px]">{row}</span>
        <span className="ghost-text pr-8 text-[64px] sm:text-[110px]">{row}</span>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, ghost }: { eyebrow: string; title: string; ghost: string }) {
  return (
    <div>
      <p className="mx-auto max-w-6xl px-4 text-sm font-semibold uppercase tracking-[0.14em] text-mango sm:px-6">
        {eyebrow}
      </p>
      <div className="mt-2">
        <Ghost text={ghost} />
      </div>
      <div className="relative mx-auto -mt-9 max-w-6xl px-4 sm:-mt-16 sm:px-6">
        <h2 className="max-w-2xl text-balance font-display text-[34px] font-bold leading-[1.08] tracking-tight text-leaf-900 sm:text-[56px]">
          {title}
        </h2>
      </div>
    </div>
  );
}

const problems = [
  ["Lambat saat panen raya", "Setiap buah dicek satu per satu. Volume naik, pekerja tetap, antrean dan lembur menumpuk."],
  ["Tiap orang punya standar sendiri", "Matang menurut pekerja A belum tentu matang menurut pekerja B, apalagi setelah delapan jam kerja."],
  ["Busuk awal lolos", "Gejala busuk dan cacat kecil sulit terlihat mata saat ribuan buah lewat. Satu buah bisa merusak satu batch."],
  ["Tidak ada catatan", "Hasil sortir tidak direkam, jadi tidak ada jejak kualitas per batch atau per pemasok."],
  ["Mesin impor terlalu mahal", "Optical sorter industri butuh investasi dan biaya perawatan yang hanya masuk akal untuk perusahaan besar."],
];

const steps = [
  {
    n: "01",
    t: "Perangkat di atas konveyor",
    d: "Kamera memotret setiap buah yang lewat. Modul pemroses mengirim gambar ke model, lalu aktuator mendorong buah ke jalur terima atau tolak.",
  },
  {
    n: "02",
    t: "Model AI per jenis buah",
    d: "Pola busuk pisang berbeda dengan apel, jadi tiap buah punya model sendiri. Model diperbarui berkala dengan data baru dari lapangan.",
  },
  {
    n: "03",
    t: "Dashboard web",
    d: "Semua hasil sortir masuk ke dashboard secara real-time: rasio terima/tolak, ringkasan per batch dan pemasok, tren kualitas, dan ekspor laporan.",
  },
];

const detections = [
  ["Jenis buah", "Dikenali otomatis sebelum dinilai."],
  ["Kematangan", "Mentah, matang, atau terlalu matang."],
  ["Busuk", "Termasuk gejala awal yang belum kentara."],
  ["Cacat fisik", "Memar, luka, dan lecet di kulit."],
  ["Ukuran", "Estimasi ukuran untuk penentuan grade."],
];

const compareRows: [string, string, string, string, string][] = [
  ["Investasi awal", "Rendah", "Rendah", "Sedang", "Sangat tinggi"],
  ["Biaya rutin", "Langganan per model", "Upah pekerja", "Perawatan", "Perawatan & lisensi"],
  ["Cek kematangan & busuk", "Ya, model AI", "Ya, subjektif", "Tidak", "Ya"],
  ["Deteksi cacat", "Ya, model AI", "Terbatas", "Tidak", "Ya"],
  ["Grading ukuran", "Ya", "Perkiraan", "Ya", "Ya"],
  ["Data & dashboard", "Real-time, web", "Tidak ada", "Minim", "Ada, perlu konfigurasi"],
  ["Cocok untuk usaha menengah", "Ya", "Ya", "Sedang", "Kurang"],
];

const segments = [
  ["Distributor & pengepul", "Menerima buah dari banyak petani tiap hari dan perlu sortir cepat sebelum kirim ke pasar atau ritel."],
  ["Packing house & pemasok ritel modern", "Harus memenuhi standar pembeli dan menyertakan laporan kualitas yang terdokumentasi."],
  ["Industri pengolahan buah", "Butuh bahan baku dengan tingkat kematangan tertentu, memisahkan yang terlalu matang dan busuk."],
  ["Kebun hortikultura ≥ 0,5 ha", "Grading hasil panen sendiri supaya bisa dijual dengan harga lebih baik."],
];

const team = [
  ["Villyan Sutanto", "CEO", "Visi, strategi bisnis, kemitraan", "/team/villyan.webp"],
  ["Marco Linardi", "CTO", "Deep learning, computer vision, IoT", "/team/marco.webp"],
  ["Johanes Cedrick Wijaya", "COO", "Produksi perangkat, instalasi, purna jual", "/team/johanes.webp"],
  ["Shana Grace Sitompul", "CMO", "Riset pasar, kampanye, relasi pelanggan", "/team/shana.webp"],
  ["Cecilia Aileen Setiawan", "CFO", "Perencanaan keuangan, profitabilitas langganan", "/team/cecilia.webp"],
];

const faqs = [
  [
    "Buah apa saja yang bisa disortir?",
    "Setiap jenis buah memakai model AI tersendiri. Anda berlangganan model sesuai buah yang ditangani, dan bisa menambah model baru saat musimnya tiba.",
  ],
  [
    "Apakah langganan bisa dihentikan di luar musim?",
    "Bisa. Langganan dihitung per model per bulan, jadi model untuk buah yang sedang tidak panen bisa dihentikan dan diaktifkan lagi nanti.",
  ],
  [
    "Apa yang termasuk dalam langganan Rp500.000?",
    "Akses dashboard web, pembaruan model secara berkala, dan penggunaan model untuk satu jenis buah.",
  ],
  [
    "Perlu koneksi internet?",
    "Ya. Perangkat menyinkronkan hasil sortir ke dashboard lewat internet supaya data kualitas bisa dipantau dari mana saja.",
  ],
];

export default function Home() {
  return (
    <>
      <div className="bg-leaf-900 px-4 py-2.5 text-center text-sm text-leaf-100">
        Mau lihat langsung di gudang Anda?{" "}
        <a href="#kontak" className="ml-1 inline-block rounded-full bg-cream px-3 py-0.5 font-semibold text-leaf-900 hover:bg-mango hover:text-white">
          Minta demo
        </a>
      </div>

      <Navbar />

      <main id="top">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.05fr_1fr] md:pt-20">
          <div>
            <h1 className="font-display text-[44px] font-extrabold leading-[0.98] tracking-tight text-leaf-900 min-[400px]:text-[50px] sm:text-[72px] lg:text-[80px]">
              Sortir buah,
              <br />
              <span className="text-mango">tanpa</span> tebak&#8209;tebakan.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              VleeFruit dipasang di jalur konveyor Anda. Kamera dan model AI menilai setiap buah, memisahkan yang layak
              dari yang busuk atau cacat, dan mencatat semuanya di dashboard.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#kontak" className="rounded-full bg-leaf-800 px-6 py-3.5 font-semibold text-cream transition hover:bg-leaf-950">
                Jadwalkan demo
              </a>
              <a href="#harga" className="group inline-flex items-center gap-2 px-3 py-3.5 font-semibold text-leaf-800">
                Lihat harga
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-6">
              <div>
                <dt className="text-sm text-muted">Perangkat</dt>
                <dd className="font-display text-3xl font-bold text-leaf-900">Rp2 jt<span className="text-base font-medium text-muted">/unit</span></dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Model AI</dt>
                <dd className="font-display text-3xl font-bold text-leaf-900">Rp500 rb<span className="text-base font-medium text-muted">/bln</span></dd>
              </div>
            </dl>
          </div>
          <div className="rounded-[28px] bg-leaf-100 p-4 sm:p-8">
            <ConveyorArt />
          </div>
        </section>

        {/* PROBLEM */}
        <section className="bg-paper py-20">
          <SectionTitle eyebrow="Kenapa VleeFruit" title="Sortir manual sudah tidak cukup." ghost="sortir manual" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.4fr]">
            <p className="text-lg leading-relaxed text-muted">
              Indonesia salah satu produsen buah tropis terbesar di dunia, tapi sebagian besar penyortiran masih
              mengandalkan mata dan pengalaman pekerja. Sementara itu, pasar modern dan ekspor meminta kualitas yang
              seragam dan terdokumentasi.
            </p>
            <ol className="divide-y divide-line border-y border-line">
              {problems.map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-2 py-5">
                  <span className="font-display text-lg font-bold text-mango">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-leaf-900">{t}</h3>
                    <p className="mt-1 text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="cara-kerja" className="scroll-mt-20 py-20">
          <SectionTitle eyebrow="Cara kerja" title="Tiga lapis yang saling terhubung." ghost="cara kerja" />
          <div className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden rounded-3xl bg-line px-0 sm:mx-6 md:grid-cols-3 lg:mx-auto">
            {steps.map((s) => (
              <article key={s.n} className="bg-cream p-7 sm:p-9">
                <span className="font-display text-6xl font-extrabold text-leaf-200">{s.n}</span>
                <h3 className="mt-6 font-display text-2xl font-bold text-leaf-900">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROTOTYPE */}
        <section id="prototipe" className="scroll-mt-20 bg-paper py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr]">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-leaf-100">
                <Image
                  src="/prototype.webp"
                  alt="Prototipe VleeFruit: tiang kamera di atas jalur luncur buah, servo, dan sekat wadah terima dan tolak"
                  fill
                  sizes="(min-width: 768px) 640px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">Prototipe pertama, dirakit dari papan corrugated.</figcaption>
            </figure>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mango">Prototipe</p>
              <h2 className="mt-2 text-balance font-display text-[34px] font-bold leading-[1.08] tracking-tight text-leaf-900 sm:text-5xl">
                Bukan cuma konsep, alatnya sudah ada.
              </h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {[
                  ["Tiang kamera", "Kamera dipasang di atas jalur supaya setiap buah terpotret dari sudut yang sama."],
                  ["Jalur luncur", "Buah bergerak satu per satu melewati area foto."],
                  ["Servo penyortir", "Setelah model memberi hasil, servo menggerakkan sekat ke jalur terima atau tolak."],
                ].map(([t, d]) => (
                  <li key={t} className="py-4">
                    <p className="font-semibold text-leaf-900">{t}</p>
                    <p className="mt-1 leading-relaxed text-muted">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DETECTIONS */}
        <section id="deteksi" className="scroll-mt-20 bg-leaf-900 py-20 text-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mango">Yang dinilai model</p>
              <h2 className="mt-2 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-[52px]">
                Lima hal, untuk setiap buah yang lewat.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-leaf-200">
                Hasilnya dipakai langsung oleh aktuator untuk memisahkan buah, dan disimpan sebagai data kualitas per
                batch.
              </p>
            </div>
            <ul>
              {detections.map(([t, d]) => (
                <li key={t} className="flex flex-col gap-1 border-b border-leaf-700 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="shrink-0 font-display text-2xl font-bold">{t}</span>
                  <span className="text-leaf-200 sm:text-right">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DASHBOARD */}
        <section id="dashboard" className="scroll-mt-20 py-20">
          <SectionTitle eyebrow="Dashboard" title="Kualitas yang bisa dibuka lagi kapan saja." ghost="dashboard" />
          <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
            <div className="overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_30px_60px_-30px_rgba(22,58,39,0.25)]">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-line px-5 py-3 text-sm">
                <span className="font-semibold text-leaf-900">Batch #0412 · Pisang Cavendish</span>
                <span className="flex items-center gap-2 text-muted">
                  <span className="h-2 w-2 rounded-full bg-leaf-500" /> Perangkat VF-01 aktif
                </span>
              </div>
              <div className="grid gap-px bg-line md:grid-cols-[1fr_1.6fr]">
                <div className="grid grid-cols-2 gap-px bg-line">
                  {[
                    ["Diterima", "3.184", "text-leaf-700"],
                    ["Ditolak", "216", "text-berry"],
                    ["Grade A", "61%", "text-leaf-900"],
                    ["Busuk awal", "38", "text-mango"],
                  ].map(([k, v, c]) => (
                    <div key={k} className="bg-paper p-5">
                      <p className="text-sm text-muted">{k}</p>
                      <p className={`mt-1 font-display text-3xl font-bold ${c}`}>{v}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-paper p-5">
                  <p className="text-sm text-muted">Rasio tolak per jam</p>
                  <div className="mt-4 flex h-36 items-end gap-2">
                    {[8, 6, 7, 5, 9, 12, 6, 5, 4, 6, 5, 4].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-leaf-200 hover:bg-mango" style={{ height: `${h * 8}%` }} title={`${h}%`} />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted">
                    <span>07.00</span>
                    <span>12.00</span>
                    <span>18.00</span>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="text-muted">
                    <tr className="border-t border-line">
                      <th className="px-5 py-3 font-medium">Pemasok</th>
                      <th className="px-5 py-3 font-medium">Buah masuk</th>
                      <th className="px-5 py-3 font-medium">Ditolak</th>
                      <th className="px-5 py-3 font-medium">Penyebab utama</th>
                    </tr>
                  </thead>
                  <tbody className="text-leaf-900">
                    {[
                      ["Kebun Pak Darto", "1.240", "3,1%", "Memar"],
                      ["KUD Sumber Rejeki", "1.420", "9,4%", "Terlalu matang"],
                      ["Tani Makmur", "740", "6,2%", "Busuk awal"],
                    ].map((r) => (
                      <tr key={r[0]} className="border-t border-line">
                        {r.map((c, i) => (
                          <td key={i} className="px-5 py-3">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted">Contoh tampilan. Angka dan nama pemasok hanya ilustrasi.</p>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="bg-paper py-20">
          <SectionTitle eyebrow="Perbandingan" title="Kemampuan mesin impor, harga yang masuk akal." ghost="perbandingan" />
          <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
            <div className="overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[720px] text-left text-[15px]">
                <thead>
                  <tr className="text-muted">
                    <th className="p-4 font-medium" />
                    <th className="bg-leaf-800 p-4 font-display text-lg font-bold text-cream">VleeFruit</th>
                    <th className="p-4 font-medium">Sortir manual</th>
                    <th className="p-4 font-medium">Sorter mekanis</th>
                    <th className="p-4 font-medium">Optical sorter impor</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map(([aspect, ...cells]) => (
                    <tr key={aspect} className="border-t border-line">
                      <th className="p-4 font-semibold text-leaf-900">{aspect}</th>
                      {cells.map((c, i) => (
                        <td key={i} className={i === 0 ? "bg-leaf-100 p-4 font-semibold text-leaf-900" : "p-4 text-muted"}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="harga" className="scroll-mt-20 py-20">
          <SectionTitle eyebrow="Harga" title="Beli alatnya sekali, langganan sesuai buahnya." ghost="harga" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 [&>*]:min-w-0">
            <div className="space-y-8">
              <div className="border-l-4 border-mango pl-5">
                <p className="text-muted">Perangkat sortir IoT</p>
                <p className="font-display text-[40px] sm:text-5xl font-bold text-leaf-900">Rp2.000.000</p>
                <p className="mt-1 text-muted">sekali bayar, per unit</p>
              </div>
              <div className="border-l-4 border-leaf-500 pl-5">
                <p className="text-muted">Langganan model AI</p>
                <p className="font-display text-[40px] sm:text-5xl font-bold text-leaf-900">Rp500.000</p>
                <p className="mt-1 text-muted">per jenis buah, per bulan. Sudah termasuk dashboard dan pembaruan model.</p>
              </div>
              <p className="max-w-md leading-relaxed text-muted">
                Contoh: distributor apel dan pisang dengan dua perangkat membayar Rp4.000.000 di awal, lalu Rp1.000.000
                per bulan untuk dua model.
              </p>
            </div>
            <PriceCalculator />
          </div>
        </section>

        {/* SEGMENTS */}
        <section className="bg-leaf-100 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mango">Untuk siapa</p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-leaf-900 sm:text-[52px]">
              Dibuat untuk usaha yang memegang banyak buah setiap hari.
            </h2>
            <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {segments.map(([t, d]) => (
                <div key={t} className="border-t-2 border-leaf-800 pt-4">
                  <h3 className="font-display text-xl font-bold text-leaf-900">{t}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="tim" className="scroll-mt-20 py-20">
          <SectionTitle eyebrow="Tim" title="Orang-orang di balik VleeFruit." ghost="tim kami" />
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-4 sm:grid-cols-3 sm:gap-x-6 sm:px-6 lg:grid-cols-5">
            {team.map(([name, role, focus, photo]) => (
              <figure key={name} className="min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-leaf-200">
                  <Image
                    src={photo}
                    alt={`Foto ${name}`}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-cream px-2.5 py-0.5 text-xs font-bold text-leaf-900">
                    {role}
                  </span>
                </div>
                <figcaption className="mt-3">
                  <p className="font-semibold leading-snug text-leaf-900">{name}</p>
                  <p className="mt-1 text-sm leading-snug text-muted">{focus}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-6xl px-4 text-sm text-muted sm:px-6">
            Kelompok 2, BINUS University. Dibimbing oleh Satrio Matin Utomo, S.T., M.A.B.
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-paper py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.5fr]">
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-leaf-900 sm:text-[52px]">
              Yang sering ditanyakan.
            </h2>
            <div className="divide-y divide-line border-y border-line">
              {faqs.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-leaf-900">
                    {q}
                    <span className="text-2xl text-mango transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="kontak" className="scroll-mt-20 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-mango px-6 py-14 text-center sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-leaf-950 sm:text-6xl">
              Bawa satu batch buah, kami tunjukkan hasil sortirnya.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-leaf-950/80">
              Tim kami bisa datang ke gudang Anda untuk demo di jalur konveyor yang sudah ada.
            </p>
            <a
              href="mailto:vleefruit@gmail.com?subject=Jadwal%20demo%20VleeFruit"
              className="mt-8 inline-block rounded-full bg-leaf-900 px-8 py-4 font-semibold text-cream transition hover:bg-leaf-950"
            >
              Hubungi kami
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-forest px-4 pb-10 pt-14 text-leaf-200 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo variant="footer" />
            <p className="mt-4 leading-relaxed">
              Alat sortir buah berbasis IoT, computer vision, dan dashboard web untuk industri hortikultura Indonesia.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div className="space-y-2">
              <p className="font-semibold text-cream">Produk</p>
              <a href="#cara-kerja" className="block hover:text-mango">Cara kerja</a>
              <a href="#dashboard" className="block hover:text-mango">Dashboard</a>
              <a href="#harga" className="block hover:text-mango">Harga</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-cream">Kontak</p>
              <a href="mailto:vleefruit@gmail.com" className="block hover:text-mango">vleefruit@gmail.com</a>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl border-t border-leaf-800 pt-6 text-sm text-leaf-200/70">
          © 2026 VleeFruit · Proyek kewirausahaan Kelompok 2, BINUS University
        </p>
      </footer>
    </>
  );
}
