import { FileDown, Map, ShieldCheck, Table2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { fixtures } from '../data';
import { useTranslation } from 'react-i18next';

export default function Report() {
  const { id = 'WB-042' } = useParams();
  const foundFixture = fixtures[id];
  const f = foundFixture ?? fixtures['WB-042'];
  const { t } = useTranslation();
  if (!foundFixture) return <Navigate to="/" replace />;

  const chart = f.layers.land_use.map(x => ({ name: x.class.split(' ')[0], value: x.pct }));
  const downloadReport = () => {
    const report = {
      generated_at: new Date().toISOString(),
      watershed: f.watershed,
      layers: f.layers,
      photos: f.photos,
      timeline: f.timeline,
      alerts: f.alerts,
      prototype_notice: 'Sample fixture data; not an official government report.',
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `bhunetra-${f.watershed.id.toLowerCase()}-report.json`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  return (
    <div className="paper min-h-[calc(100vh-64px)]">
      <div className="mx-auto max-w-[1100px] px-5 py-10 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b-2 border-ink/20 pb-7 md:flex-row">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[.18em] text-loam">BHUNETRA AI · SURVEY SHEET 01</div>
            <h1 className="mt-2 font-display text-4xl font-semibold">Watershed verification report</h1>
            <p className="mt-2 text-sm text-ink/65">{f.watershed.name} · {f.watershed.district}, {f.watershed.state}</p>
          </div>
          <div className="flex items-start gap-2">
            <button onClick={downloadReport} className="focusable flex min-h-11 items-center gap-2 border border-ink/20 px-4 text-sm">
              <FileDown size={16} /> {t('download')}
            </button>
            <div className="stamp text-moss">
              <ShieldCheck size={15} /> Prototype
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ink/50">Area</div>
            <div className="mt-1 font-mono text-2xl">{f.watershed.area_ha} ha</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ink/50">Current water</div>
            <div className="mt-1 font-mono text-2xl">{f.timeline[5].stats.water_ha.toFixed(1)} ha</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ink/50">NDVI</div>
            <div className="mt-1 font-mono text-2xl">{f.timeline[5].stats.ndvi.toFixed(2)}</div>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-[1.25fr_.75fr]">
          <figure className="overflow-hidden border border-ink/15">
            <div className="flex h-72 items-center justify-center bg-[#d6d4c5] contours">
              <Map size={60} className="text-loam/60" />
              <span className="ml-3 font-mono text-xs text-ink/60">THEMATIC MAP EXPORT · [verify]</span>
            </div>
            <figcaption className="flex flex-wrap gap-x-4 gap-y-1 border-t border-ink/10 p-3 text-[10px] text-ink/60">
              <span>Source photos: {f.photos.length ? f.photos.map(p => p.id).join(', ') : 'none uploaded'}</span>
              <span>Satellite pass: 18 Aug 2026 [verify]</span>
            </figcaption>
          </figure>
          <div className="border border-ink/15 p-4">
            <div className="flex items-center gap-2 font-display font-semibold">
              <Table2 size={16} /> Land-use composition
            </div>
            <div className="mt-4 h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chart} margin={{ left: -20, right: 8 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#1B2420' }} />
                  <YAxis tick={{ fontSize: 10, fill: '#1B2420' }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#56684A" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <section className="mt-8">
          <h2 className="font-display text-xl font-semibold">Change record · T0 → T5</h2>
          <div className="mt-3 overflow-x-auto border border-ink/15">
            <table className="w-full min-w-[650px] text-sm">
              <thead className="bg-ink/5 text-left text-[10px] uppercase tracking-widest">
                <tr>
                  <th className="p-3">Period</th>
                  <th className="p-3">Water (ha)</th>
                  <th className="p-3">NDVI</th>
                  <th className="p-3">Agriculture %</th>
                  <th className="p-3">Plantation %</th>
                </tr>
              </thead>
              <tbody>{f.timeline.map(x => (
                <tr key={x.period} className="border-t border-ink/10">
                  <td className="p-3 font-mono">{x.period}</td>
                  <td className="p-3 font-mono">{x.stats.water_ha.toFixed(1)}</td>
                  <td className="p-3 font-mono">{x.stats.ndvi.toFixed(2)}</td>
                  <td className="p-3 font-mono">{x.stats.agri.toFixed(1)}</td>
                  <td className="p-3 font-mono">{x.stats.plantation.toFixed(1)}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </section>
        <div className="mt-8 border-l-4 border-loam bg-[#e2decb] p-4 text-xs leading-5 text-ink/70">
          <strong>Traceability note.</strong> This report is generated from prototype fixture data. Figures without a confirmed source are marked [verify]. This is not an official DoLR document.
        </div>
        <Link to={`/dashboard/${id}`} className="focusable mt-7 inline-flex text-sm text-loam">← Return to orbital console</Link>
      </div>
    </div>
  );
}
