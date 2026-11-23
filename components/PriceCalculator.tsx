"use client";

import { useState } from "react";

const DEVICE_PRICE = 2_000_000;
const MODEL_PRICE = 500_000;

const rupiah = (n: number) => "Rp" + n.toLocaleString("id-ID");

function Stepper({
  label,
  hint,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  const btn =
    "grid h-10 w-10 place-items-center rounded-full border border-leaf-200 text-xl text-leaf-100 transition hover:border-mango hover:text-mango disabled:opacity-30 disabled:hover:border-leaf-200 disabled:hover:text-leaf-100";
  return (
    <div className="flex items-center justify-between gap-4 border-b border-leaf-700 py-5">
      <div>
        <p className="font-semibold text-cream">{label}</p>
        <p className="text-sm text-leaf-200/80">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" className={btn} onClick={() => onChange(value - 1)} disabled={value <= min} aria-label={`Kurangi ${label}`}>
          −
        </button>
        <span className="w-8 text-center font-display text-2xl font-bold text-cream" aria-live="polite">
          {value}
        </span>
        <button type="button" className={btn} onClick={() => onChange(value + 1)} disabled={value >= max} aria-label={`Tambah ${label}`}>
          +
        </button>
      </div>
    </div>
  );
}

export default function PriceCalculator() {
  const [units, setUnits] = useState(2);
  const [models, setModels] = useState(2);

  const upfront = units * DEVICE_PRICE;
  const monthly = models * MODEL_PRICE;
  const firstYear = upfront + monthly * 12;

  return (
    <div className="rounded-3xl bg-leaf-900 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mango">Hitung sendiri</p>
      <Stepper label="Unit perangkat" hint="Satu unit per jalur konveyor" value={units} onChange={setUnits} min={1} max={20} />
      <Stepper label="Model buah" hint="Satu model per jenis buah" value={models} onChange={setModels} min={1} max={8} />

      <dl className="mt-6 grid grid-cols-2 gap-y-4 text-leaf-200">
        <dt>Bayar di awal</dt>
        <dd className="text-right font-semibold text-cream">{rupiah(upfront)}</dd>
        <dt>Per bulan</dt>
        <dd className="text-right font-semibold text-cream">{rupiah(monthly)}</dd>
        <dt className="border-t border-leaf-700 pt-4">Total tahun pertama</dt>
        <dd className="border-t border-leaf-700 pt-4 text-right font-display text-2xl font-bold text-mango">
          {rupiah(firstYear)}
        </dd>
      </dl>
      <p className="mt-5 text-sm leading-relaxed text-leaf-200/80">
        Langganan model bisa ditambah atau dihentikan kapan saja, mengikuti musim panen dan buah yang sedang Anda tangani.
      </p>
    </div>
  );
}
