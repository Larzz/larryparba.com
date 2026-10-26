'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HalloweenLogo } from '@/components/site/halloween-logo'
import s from './workspace.module.css'
import { HALLOWEEN_ENABLED } from '@/lib/seasonal-theme'

const products = [
  { id: 'oak', name: 'The everyday oak chair', seller: 'Natural oak · woven seat', color: '#b58a59', type: 'Similar style', query: 'oak woven seat dining chair' },
  { id: 'walnut', name: 'Curved-back dining chair', seller: 'Walnut finish · paper cord', color: '#78513c', type: 'Similar style', query: 'walnut curved back paper cord chair' },
  { id: 'ash', name: 'Scandinavian accent chair', seller: 'Light ash · natural seat', color: '#d3b786', type: 'Similar style', query: 'ash Scandinavian woven seat chair' },
  { id: 'black', name: 'The modern spindle chair', seller: 'Black wood · woven seat', color: '#353b36', type: 'Similar style', query: 'black wood woven seat dining chair' },
]

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    search: <><circle cx='10.5' cy='10.5' r='6.5'/><path d='m16 16 5 5'/></>,
    upload: <><path d='M12 16V3m-5 5 5-5 5 5M4 15v5h16v-5'/></>,
    image: <><rect x='3' y='3' width='18' height='18' rx='3'/><circle cx='8' cy='8' r='1.5'/><path d='m3 17 6-6 4 4 3-3 5 5'/></>,
    bookmark: <path d='M6 3h12v18l-6-4-6 4z'/>,
    arrow: <path d='M5 12h14m-5-5 5 5-5 5'/>,
    globe: <><circle cx='12' cy='12' r='9'/><ellipse cx='12' cy='12' rx='4' ry='9'/><path d='M3 12h18'/></>,
    grid: <><rect x='3' y='3' width='7' height='7' rx='1'/><rect x='14' y='3' width='7' height='7' rx='1'/><rect x='3' y='14' width='7' height='7' rx='1'/><rect x='14' y='14' width='7' height='7' rx='1'/></>,
    check: <path d='m5 12 4 4L19 6'/>,
  }
  return <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>{paths[name] || paths.search}</svg>
}

function Chair({ color = '#b58a59' }: { color?: string }) {
  return <svg viewBox='0 0 300 280' role='img' aria-label='Illustration of a wooden dining chair with a woven seat'>
    <ellipse cx='153' cy='251' rx='88' ry='12' fill='#000' opacity='.06'/>
    <g stroke={color} strokeLinecap='round' strokeLinejoin='round'>
      <path d='m91 149-15 96m113-100 23 100M107 160l9 78m64-70-7 69' strokeWidth='11'/>
      <path d='M90 155 77 57m113 98 16-98' strokeWidth='10'/>
      <path d='M77 59Q140 8 206 58' fill='none' strokeWidth='19'/>
      <path d='M85 78q55-39 113 0' fill='none' strokeWidth='8'/>
      <path d='m140 55 3 91m-32-81 31 46 31-46' fill='none' strokeWidth='7'/>
      <path d='m85 149 54-18 60 18-53 26z' fill='#d8bd89' strokeWidth='9'/>
      <path d='m83 158 61 23 55-22' fill='none' strokeWidth='9'/>
      <path d='m82 206 33 12m61-7 27-11' strokeWidth='5'/>
    </g>
    <g stroke='#a38b5d' opacity='.5' strokeWidth='1'>{Array.from({ length: 12 }, (_, i) => <path key={i} d={`m${94 + i * 4} ${149 - i * 1.25} 49 19`}/>)}</g>
  </svg>
}

export default function SourcingWorkspace() {
  const [mode, setMode] = useState<'upload' | 'url'>('upload')
  const [preview, setPreview] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [example, setExample] = useState(true)
  const [country, setCountry] = useState('Philippines')
  const [quantity, setQuantity] = useState(1)
  const [buying, setBuying] = useState('Retail')
  const [saved, setSaved] = useState<string[]>([])
  const [view, setView] = useState('search')
  const [filter, setFilter] = useState('all')
  const [message, setMessage] = useState('')
  const [handoff, setHandoff] = useState(false)
  const [dragging, setDragging] = useState(false)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try { const ids: unknown = JSON.parse(localStorage.getItem('sourceful-saved') || '[]'); if (Array.isArray(ids)) setSaved(ids.filter((id): id is string => typeof id === 'string' && products.some(p => p.id === id))) } catch { /* Storage may be disabled. */ }
  }, [])
  useEffect(() => () => { if (preview.startsWith('blob:')) URL.revokeObjectURL(preview) }, [preview])

  function toggleSaved(id: string) {
    const next = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id]
    setSaved(next)
    try { localStorage.setItem('sourceful-saved', JSON.stringify(next)) } catch { setMessage('Saved for this visit. Your browser could not save the list for next time.') }
  }
  function upload(file?: File) {
    if (!file) return
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 10 * 1024 * 1024) { setMessage('Choose a JPG, PNG, or WebP image smaller than 10 MB.'); return }
    setPreview(URL.createObjectURL(file)); setExample(false); setHandoff(false); setMessage('Photo ready. It stays in your browser.'); setView('search')
  }
  function search() {
    setMessage(''); setView('search')
    if (mode === 'url') {
      try {
        const url = new URL(imageUrl)
        if (url.protocol !== 'https:' || url.username || url.password) throw new Error()
        setPreview(url.href); setExample(false); setHandoff(true)
      } catch { setMessage('Paste a complete, public HTTPS image URL.'); return }
    } else if (example) { setFilter('all'); setMessage('Showing example styles. These are illustrations, not live seller listings.') }
    else if (preview) setHandoff(true)
    else setMessage('Choose a product photo first.')
  }
  const visible = products.filter(p => (view !== 'saved' || saved.includes(p.id)) && filter !== 'exact')
  const lensUrl = mode === 'url' && handoff ? `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(preview)}` : 'https://lens.google.com/'

  return <div className={s.app} data-season={HALLOWEEN_ENABLED ? 'halloween' : undefined}>
    <aside className={s.sidebar}>
      <Link href='/product-sourcing' className={s.brand}><HalloweenLogo><span className={s.brandMark}>s<span>•</span></span></HalloweenLogo>sourceful<span className={s.brandDot}>.</span></Link>
      <p className={s.navLabel}>YOUR WORKSPACE</p>
      <nav aria-label='Sourcing workspace'>
        <button className={view === 'search' ? s.activeNav : ''} onClick={() => setView('search')}><Icon name='search'/>Find a product<Icon name='arrow' size={16}/></button>
        <button className={view === 'saved' ? s.activeNav : ''} onClick={() => { setView('saved'); setFilter('all') }}><Icon name='bookmark'/>Saved products<span className={s.count}>{saved.length}</span></button>
      </nav>
      <div className={s.sideNote}><span>Less searching.<br/>More finding.</span><p>Your next great find starts with a single photo.</p><span className={s.noteDecoration}>✳</span></div>
      <Link href='/' className={s.back}>← Back to Larry Parba</Link>
      <div className={s.profile}><span>LP</span><div>Personal workspace<small>Local preview</small></div></div>
    </aside>

    <div className={s.main}>
      <header className={s.topbar}><span>Workspace <span>/</span> <b>{view === 'saved' ? 'Saved products' : 'Find a product'}</b></span><a href='#how-it-works'>How it works <span>↗</span></a></header>
      <main className={s.content}>
        <div className={s.heading}><div><p className={s.eyebrow}><span/> A LITTLE INSPIRATION. A WORLD OF POSSIBILITIES.</p><h1>{view === 'saved' ? 'Good finds. All in one place.' : <>See it. Love it. <em>Find it.</em></>}</h1><p>{view === 'saved' ? 'Your saved example styles, ready to explore when you are.' : 'Turn a photo into your next great find. Start your search right here.'}</p></div><span className={s.beta}>EARLY PREVIEW</span></div>

        {view === 'search' && <section className={s.searchPanel} aria-label='Product search'>
          <div className={s.uploadColumn}>
            <div className={s.sectionTitle}><span className={s.step}>01</span><h2>Start with a photo</h2></div>
            <div className={s.tabs}><button aria-pressed={mode === 'upload'} onClick={() => { setMode('upload'); setHandoff(false) }}><Icon name='upload' size={16}/>Upload photo</button><button aria-pressed={mode === 'url'} onClick={() => { setMode('url'); setHandoff(false) }}>↗ Paste image link</button></div>
            {mode === 'upload' ? <div className={`${s.dropzone} ${dragging ? s.dragging : ''}`} onDragOver={e => { e.preventDefault(); setDragging(true) }} onDragLeave={() => setDragging(false)} onDrop={e => { e.preventDefault(); setDragging(false); upload(e.dataTransfer.files[0]) }}>
              {preview && !example ? <img className={s.uploadPreview} src={preview} alt='Your selected product'/> : <span className={s.uploadIcon}><Icon name='image' size={28}/><span>+</span></span>}
              <strong>{preview && !example ? 'Your photo is ready' : 'Drop your inspiration here'}</strong><span>or <button onClick={() => input.current?.click()}>browse files</button></span><small>JPG, PNG or WebP · Up to 10 MB</small>
              <input ref={input} hidden type='file' accept='image/jpeg,image/png,image/webp' onChange={e => { upload(e.target.files?.[0]); e.target.value = '' }}/>
            </div> : <div className={s.urlBox}><Icon name='image' size={28}/><label htmlFor='image-url'>Public image URL</label><input id='image-url' type='url' placeholder='https://example.com/chair.jpg' value={imageUrl} onChange={e => { setImageUrl(e.target.value); setHandoff(false) }}/><small>Use a direct link to a product image.</small></div>}
            <div className={s.exampleRow}><span>Just exploring?</span><button onClick={() => { setExample(true); setPreview(''); setHandoff(false); setMode('upload'); setFilter('all'); setMessage('Example chair selected.') }}><span className={s.tinyChair}><Chair/></span>Try an example <span>↗</span></button></div>
          </div>
          <div className={s.preferences}>
            <div className={s.sectionTitle}><span className={s.step}>02</span><h2>Make it your kind of find</h2><span className={s.optional}>Preferences</span></div>
            <label htmlFor='country'>Delivery country</label><div className={s.selectWrap}><Icon name='globe' size={18}/><select id='country' value={country} onChange={e => setCountry(e.target.value)}>{['Philippines', 'United States', 'United Kingdom', 'Australia', 'Canada', 'Singapore'].map(c => <option key={c}>{c}</option>)}</select></div>
            <div className={s.preferenceGrid}><div><label htmlFor='quantity'>Quantity</label><input id='quantity' type='number' min='1' max='10000' value={quantity} onChange={e => setQuantity(Math.max(1, Math.min(10000, Number(e.target.value) || 1)))}/></div><div><label htmlFor='buying'>Buying for</label><select id='buying' value={buying} onChange={e => setBuying(e.target.value)}><option>Retail</option><option>Wholesale</option></select></div></div>
            <button className={s.searchButton} onClick={search}><Icon name='search' size={18}/>{example && mode === 'upload' ? 'Explore example matches' : 'Find product matches'}<Icon name='arrow' size={18}/></button>
            <p className={s.privacy}>Photos stay on your device until you share them with a search provider.</p>
          </div>
        </section>}
        <div role='status' className={message ? s.message : s.srOnly}>{message}</div>

        {view === 'search' && !example ? <section className={s.handoff}><span className={s.eyebrow}>YOUR SEARCH</span><h2>{handoff ? 'Continue your visual search' : 'Your inspiration is ready.'}</h2><p>{handoff ? 'Live matching is not connected in this preview. Google Lens can help find matching images and seller pages.' : 'Choose “Find product matches” to continue with Google Lens.'}</p>{handoff && <><a className={s.externalButton} href={lensUrl} target='_blank' rel='noreferrer'>Open Google Lens ↗</a><p>{mode === 'upload' ? 'Upload the same photo in Google Lens to start searching.' : 'Opening this link shares your image URL with Google.'}</p><small>{country} · {quantity} {quantity === 1 ? 'item' : 'items'} · {buying}. Confirm delivery and quantity with the seller; these preferences are not applied by Lens.</small></>}</section> : <section className={s.results} aria-label='Example products'>
          <div className={s.resultsHeading}><div><div className={s.resultTitle}><h2>{view === 'saved' ? 'Your sourcing list' : 'A little inspiration to get started'}</h2><span className={s.exampleBadge}>Example results</span></div><p>Illustrative styles for a woven-seat chair. No live prices or verified matches.</p></div><Icon name='grid' size={19}/></div>
          <div className={s.filterBar}><div><button aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>All styles <span>{view === 'saved' ? saved.length : 4}</span></button><button aria-pressed={filter === 'similar'} onClick={() => setFilter('similar')}>Similar products</button><button aria-pressed={filter === 'exact'} onClick={() => setFilter('exact')}>Exact matches <span>0</span></button></div><span>Curated example</span></div>
          {visible.length ? <div className={s.productGrid}>{visible.map((product, index) => <article className={s.product} key={product.id}><div className={`${s.productImage} ${s[`tint${index}`]}`}><span className={s.matchBadge}>{product.type}</span><button className={s.saveButton} aria-label={`${saved.includes(product.id) ? 'Unsave' : 'Save'} ${product.name}`} aria-pressed={saved.includes(product.id)} onClick={() => toggleSaved(product.id)}><Icon name={saved.includes(product.id) ? 'check' : 'bookmark'} size={18}/></button><Chair color={product.color}/><span className={s.illustrationLabel}>STYLE ILLUSTRATION</span></div><div className={s.productInfo}><p>{product.seller}</p><h3>{product.name}</h3><div><strong>Explore this style</strong><span>Price unavailable</span></div><a href={`https://www.google.com/search?${new URLSearchParams({ tbm: 'shop', q: `${product.query} ${buying === 'Wholesale' ? 'wholesale' : ''} ${country}` })}`} target='_blank' rel='noreferrer'>Search shopping listings <span>↗</span></a></div></article>)}</div> : <div className={s.empty}><Icon name='bookmark' size={30}/><h3>{filter === 'exact' ? 'No verified exact matches' : 'Your next great find belongs here.'}</h3><p>{filter === 'exact' ? 'An exact match needs a confirmed brand or model. These examples only show similar styles.' : 'Save an example style using its bookmark button to start your list.'}</p></div>}
          <div className={s.matchNote}><span>i</span><p><strong>A similar look isn’t always the same product.</strong> Check the brand, dimensions, materials, and seller details before buying.</p></div>
        </section>}
        <section id='how-it-works' className={s.how}><div><span>01 / UPLOAD</span><h3>A photo is all it takes.</h3><p>Choose a clear image with one product in focus.</p></div><div><span>02 / DISCOVER</span><h3>Follow the possibilities.</h3><p>Use visual search to explore matching seller pages.</p></div><div><span>03 / MAKE IT YOURS</span><h3>Find your perfect fit.</h3><p>Check the details and buy directly from the seller.</p></div></section>
        <footer className={s.footer}><span>sourceful. <span>Find the things that feel like you.</span></span><span>Made for curious minds ↗</span></footer>
      </main>
    </div>
  </div>
}
