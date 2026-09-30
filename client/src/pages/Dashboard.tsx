import { Navigate, useParams, Link } from 'react-router-dom'; import {motion,AnimatePresence} from 'framer-motion'; import {CheckCircle2,Eye,EyeOff,FileSearch,Map as MapIcon,Satellite,TriangleAlert,X} from 'lucide-react'; import {useTranslation} from 'react-i18next'; import {fixtures} from '../data'; import {StatusBadge} from '../components/Status'; import MapPanel from '../components/MapPanel'; import Timeline from '../components/Timeline'; import {Photo} from '../types'; import {useEffect, useState} from 'react';
export default function Dashboard(){const {id='WB-117'}=useParams();const foundFixture = fixtures[id];const fixture = foundFixture ?? fixtures['WB-117'];const {t}=useTranslation();const [selected,setSelected]=useState<Photo|null>(fixture.photos[0]??null);const [period,setPeriod]=useState(5);const [layers,setLayers]=useState({land:true,ndvi:true,water:true,photos:true});const toggle=(k:keyof typeof layers)=>setLayers(x=>({...x,[k]:!x[k]}));const stat=fixture.timeline[period].stats;useEffect(() => {
  setSelected(fixture.photos[0] ?? null);
}, [fixture.watershed.id]);
if (!foundFixture) return <Navigate to="/" replace />;
return (
  <div className="min-h-[calc(100vh-64px)]">
    <div className="mx-auto max-w-[1500px] px-4 py-5 lg:px-6">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[.18em] text-cyan">02 · {t('dashboard')}</div>
          <h1 className="mt-1 font-display text-2xl font-semibold">{fixture.watershed.name}</h1>
          <div className="mt-1 text-xs text-muted">{fixture.watershed.state} · {fixture.watershed.district} · <span className="font-mono">{fixture.watershed.area_ha} ha</span></div>
        </div>
        <div className="flex gap-2">
          <Link to={`/report/${fixture.watershed.id}`} className="focusable inline-flex min-h-10 items-center gap-2 border border-white/10 px-3 text-xs">
            <FileSearch size={14}/> {t('report')}
          </Link>
          <Link to="/feed" className="focusable inline-flex min-h-10 items-center gap-2 border border-white/10 px-3 text-xs">
            <Eye size={14}/> {t('feed')}
          </Link>
        </div>
      </div>
      <div className="grid min-h-[680px] gap-3 lg:grid-cols-[1.7fr_.7fr]">
        <div className="scan panel relative min-h-[500px] overflow-hidden">
          <MapPanel fixture={fixture} selectedPhoto={selected} onPhotoSelect={setSelected} period={period} layers={layers}/>
          <div className="absolute left-3 top-3 z-[500] flex max-w-[calc(100%-24px)] flex-wrap gap-1.5 rounded border border-white/10 bg-earth/90 p-2 backdrop-blur">
            <LayerButton label={t('landUse')} active={layers.land} onClick={()=>toggle('land')}/>
            <LayerButton label={t('ndvi')} active={layers.ndvi} onClick={()=>toggle('ndvi')}/>
            <LayerButton label={t('water')} active={layers.water} onClick={()=>toggle('water')}/>
            <LayerButton label={t('photos')} active={layers.photos} onClick={()=>toggle('photos')}/>
          </div>
          <div className="absolute bottom-3 left-3 z-[500] border border-white/10 bg-earth/90 px-3 py-2 font-mono text-[9px] text-muted">SAT PASS · 18 AUG 2026 · TILE 43QBC · T{period}</div>
          <div className="absolute right-3 top-3 z-[500] border border-cyan/20 bg-earth/90 px-3 py-2 font-mono text-[9px] text-cyan">LIVE FUSION · {Math.round((selected?.confidence??.84)*100)}%</div>
        </div>
        <aside className="panel overflow-auto p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-cyan">{t('fusion')}</div>
              <div className="mt-1 font-display text-lg font-semibold">Evidence cross-check</div>
            </div>
            <Satellite size={20} className="text-cyan"/>
          </div>{selected?<AnimatePresence mode="wait"><motion.div key={selected.id} initial={{opacity:0,x:10}} animate={{opacity:1,x:0}} className="pt-5">
            <div className="relative overflow-hidden rounded border border-white/10">
              <img src={selected.thumbnail} alt={`Field photo ${selected.id}`} className="h-44 w-full object-cover"/>
              <div className="absolute left-3 top-3 border border-white/20 bg-earth/85 px-2 py-1 font-mono text-[9px]">{selected.id}</div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="font-display text-lg font-semibold">{selected.classified_as}</div>
                <div className="font-mono text-[10px] text-muted">{selected.lat.toFixed(5)}, {selected.lng.toFixed(5)}</div>
              </div>
              <StatusBadge status={selected.status}/>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Metric label={t('confidence')} value={`${Math.round(selected.confidence*100)}%`}/>
              <Metric label="Pass" value="18 Aug 2026"/>
            </div>
            <div className="mt-5 h-12 border border-cyan/15 bg-cyan/5 relative overflow-hidden">
              <div className="absolute left-3 right-3 top-1/2 border-t border-dashed border-cyan/40"/>
              <div className="absolute left-1/3 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border border-cyan bg-earth"/>
              <div className="absolute right-8 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border border-amber bg-earth"/>
            </div>
            <div className="mt-5 border border-white/10 p-4">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">{t('satellite')}</div>
              <p className="mt-2 text-sm leading-6 text-[#c0c9bf]">{selected.satellite_reading}</p>
            </div>
            <div className="mt-5 flex items-center justify-center py-3">
              {selected.satellite_match?<div className="stamp text-[#7caa69]"><CheckCircle2 size={17}/>{t('verified')}</div>:<div className="stamp text-clay"><TriangleAlert size={17}/>{t('mismatch')}</div>}</div>
            <div className="mt-3 border-t border-white/10 pt-4">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">{t('source')}</div>
              <div className="mt-2 space-y-1 text-xs text-[#aeb8ae]">
                <div>Drishti · {selected.timestamp}</div>
                <div>Satellite · pass 18 Aug 2026 · tile 43QBC</div>
                <div>Match confidence · <span className="font-mono">{Math.round(selected.confidence*100)}%</span></div>
              </div>
            </div>
          </motion.div></AnimatePresence>:<div className="py-16 text-center text-sm text-muted"><TriangleAlert className="mx-auto mb-3 text-amber"/>No photo evidence exists for this watershed.</div>}</aside></div>
          <Timeline data={fixture.timeline} value={period} onChange={setPeriod}/>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <MiniStat label="Water extent" value={`${stat.water_ha.toFixed(1)} ha`} note="T0 baseline → current"/>
            <MiniStat label="NDVI" value={stat.ndvi.toFixed(2)} note="vegetation index"/>
            <MiniStat label="Plantation" value={`${stat.plantation.toFixed(1)}%`} note="land-use share"/>
          </div>
    </div>
  </div>
  );
}
function LayerButton({label,active,onClick}:{label:string;active:boolean;onClick:()=>void}){return <button aria-pressed={active} onClick={onClick} className={`focusable flex min-h-9 items-center gap-2 border px-2.5 text-[10px] ${active?'border-cyan/50 bg-cyan/10 text-cyan':'border-white/10 text-muted'}`}>{active?<Eye size={12}/>:<EyeOff size={12}/>} {label}</button>};function Metric({label,value}:{label:string;value:string}){return <div className="border border-white/10 p-3"><div className="text-[9px] uppercase tracking-widest text-muted">{label}</div><div className="mt-1 font-mono text-lg text-white">{value}</div></div>};function MiniStat({label,value,note}:{label:string;value:string;note:string}){return <div className="panel p-4"><div className="text-[10px] uppercase tracking-widest text-muted">{label}</div><div className="mt-2 font-mono text-xl text-cyan">{value}</div><div className="mt-1 text-xs text-muted">{note}</div></div>}
