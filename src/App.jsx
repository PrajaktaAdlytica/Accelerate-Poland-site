import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpenText,
  Briefcase,
  Buildings,
  Check,
  CaretRight,
  Coins,
  Compass,
  Cpu,
  EnvelopeSimple,
  FacebookLogo,
  Flask,
  InstagramLogo,
  LinkedinLogo,
  List,
  HandCoins,
  MagnifyingGlass,
  Network,
  RocketLaunch,
  SquaresFour,
  UsersThree,
  X,
} from '@phosphor-icons/react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { label: 'Inicjatywa', href: '#inicjatywa', Icon: Compass },
  { label: 'Programy', href: '#programy', Icon: SquaresFour },
  { label: 'Akceleracja', href: '#akceleracja', Icon: RocketLaunch },
  { label: 'Granty', href: '#granty', Icon: HandCoins },
  { label: 'Partnerzy', href: '#partnerzy', Icon: UsersThree },
];

const footerNavigation = [...navigation, { label: 'Kontakt', href: '#kontakt', Icon: EnvelopeSimple }];

function resolveNavigationHref(href, standalone) {
  if (href === '#inicjatywa') return '/inicjatywa';
  if (href === '#programy') return '/programy';
  if (href === '#akceleracja') return '/akceleracja';
  if (href === '#partnerzy') return '/partnerzy';
  if (!standalone) return href;
  return `/${href}`;
}

const pillarDetails = [
  { name: 'Wiedza', description: 'Kompetencje i doświadczenie.', Icon: BookOpenText },
  { name: 'Technologia', description: 'Narzędzia i infrastruktura.', Icon: Cpu },
  { name: 'Biznes', description: 'Skalowanie i wdrożenia.', Icon: Briefcase },
  { name: 'Nauka', description: 'Badania i transfer wiedzy.', Icon: Flask },
  { name: 'Administracja', description: 'Sprawne instytucje publiczne.', Icon: Buildings },
  { name: 'Kapitał', description: 'Finansowanie rozwoju.', Icon: Coins },
];

const pillars = pillarDetails.map(({ name }) => name);

const programmes = [
  {
    index: '01',
    name: 'Local Content Hub',
    strapline: 'Wartość tworzona w Polsce.',
    copy: 'Miejsce dla projektów, inicjatyw i rozwiązań rozwijających wartość tworzoną w Polsce.',
    icon: '/assets/icons/programmes/01-local-content-hub.svg',
  },
  {
    index: '02',
    name: 'Innovation Nation',
    strapline: 'Współpraca i innowacje.',
    copy: 'Program wspierający rozwój innowacji, współpracy technologicznej i przedsiębiorczości.',
    icon: '/assets/icons/programmes/02-innovation-nation.svg',
  },
  {
    index: '03',
    name: 'Architekci Cyfrowego Jutra',
    strapline: 'Transformacja oparta na wiedzy.',
    copy: 'Program poświęcony cyfrowej transformacji i współpracy administracji, biznesu i nauki.',
    icon: '/assets/icons/programmes/03-architekci-cyfrowego-jutra.svg',
  },
  {
    index: '04',
    name: 'Startup Nation 5.0',
    strapline: 'Od pomysłu do skalowania.',
    copy: 'Program ukierunkowany na rozwój startupów, innowacyjnych przedsiębiorstw i projektów.',
    icon: '/assets/icons/programmes/04-startup-nation-5.svg',
  },
];

const stages = [
  {
    index: '01',
    short: 'Selekcja',
    title: 'Strategiczny nabór i selekcja w 48 godzin',
    body: 'Skoncentrowana ocena zespołu, trakcji i przewagi technologicznej. Każdy aplikujący otrzymuje decyzję Go/No-Go lub zaproszenie do rozmowy w ciągu 48 godzin roboczych.',
    detail: 'Proces rozpoczyna się od skoncentrowanej oceny potencjału zespołu, trakcji oraz technologicznej przewagi projektu. Każdy aplikujący otrzymuje decyzję „Go/No-Go” lub zaproszenie do rozmowy w ciągu 48 godzin roboczych. Równolegle oceniane jest dopasowanie projektu do obszaru inwestycyjnego oraz kompetencji uczestników konsorcjum.',
    outcome: 'Decyzja i dopasowanie',
    icon: '/assets/icons/v2v/01-nabor-i-selekcja.svg',
  },
  {
    index: '02',
    short: 'Deep Dive',
    title: 'Deep Dive i synteza finansowania',
    body: 'Pogłębiona analiza projektu z ekspertami branżowymi. Równolegle identyfikujemy właściwe granty europejskie i prywatne źródła finansowania.',
    detail: 'Po pozytywnej selekcji rozpoczyna się pogłębiona analiza projektu. Założyciele prezentują przedsięwzięcie ekspertom branżowym i strategicznym uczestnikom sieci. Jednocześnie analizowane są możliwości wykorzystania grantów europejskich oraz prywatnych źródeł finansowania bezzwrotnego.',
    outcome: 'Walidacja i finansowanie',
    icon: '/assets/icons/v2v/02-deep-dive.svg',
  },
  {
    index: '03',
    short: 'Sprint',
    title: 'Sprint realizacyjny',
    body: 'Praca nad kamieniami milowymi związanymi z wejściem na rynek: od walidacji i pilotażu po skalowanie komercyjne oraz gotowość instytucjonalną.',
    detail: 'Akceleracja koncentruje się na konkretnych kamieniach milowych związanych z rozwojem wartości przedsiębiorstwa i wejściem na rynek. Faza A obejmuje walidację rynku i integrację pilotażową. Faza B obejmuje skalowanie komercyjne i gotowość instytucjonalną.',
    outcome: 'Rynek i skalowanie',
    icon: '/assets/icons/v2v/03-sprint-realizacyjny.svg',
  },
  {
    index: '04',
    short: 'Bridge',
    title: 'Investment Bridge',
    body: 'Przygotowanie do dalszego rozwoju i pozyskania kapitału, w tym indywidualne spotkania z funduszami VC oraz sieciami aniołów biznesu.',
    detail: 'Ostatni etap procesu koncentruje się na przygotowaniu przedsiębiorstwa do dalszego rozwoju i pozyskania kapitału. Model przewiduje indywidualne spotkania z funduszami VC oraz sieciami aniołów biznesu. Odra Venture i partnerzy strategiczni mogą również uczestniczyć w rundach seed i bridge poprzez inwestycje prowadzące lub współinwestowanie, zgodnie z warunkami konkretnego przedsięwzięcia.',
    outcome: 'Gotowość inwestycyjna',
    icon: '/assets/icons/v2v/04-investment-bridge.svg',
  },
];

const audiences = [
  {
    index: '01',
    name: 'Administracja publiczna i samorządy',
    strapline: 'Nowoczesne rozwiązania dla sprawniejszego państwa',
    copy: 'Dostęp do wiedzy, ekspertów i doświadczeń związanych z praktycznym wykorzystaniem nowych technologii.',
    icon: '/assets/icons/audiences/01-administracja.svg',
  },
  {
    index: '02',
    name: 'Przedsiębiorstwa',
    strapline: 'Technologia jako źródło przewagi konkurencyjnej',
    copy: 'Relacje z ekspertami i partnerami technologicznymi oraz wsparcie cyfryzacji procesów biznesowych.',
    icon: '/assets/icons/audiences/02-przedsiebiorstwa.svg',
  },
  {
    index: '03',
    name: 'Startupy',
    strapline: 'Od pomysłu do skalowalnego biznesu',
    copy: 'Uporządkowana ścieżka od oceny projektu, przez walidację rynkową, do rozmów inwestycyjnych.',
    icon: '/assets/icons/audiences/03-startupy.svg',
  },
  {
    index: '04',
    name: 'Nauka i ośrodki badawcze',
    strapline: 'Wiedza, która znajduje zastosowanie na rynku',
    copy: 'Przestrzeń do współpracy nauki z biznesem, transferu wiedzy i komercjalizacji badań.',
    icon: '/assets/icons/audiences/04-nauka-i-badania.svg',
  },
];

const grants = [
  { id: 'AP-001', title: 'Rozwój technologii cyfrowych', audience: 'Przedsiębiorstwa', area: 'Technologia', region: 'Polska', tag: 'Cyfryzacja' },
  { id: 'AP-002', title: 'Badania, rozwój i komercjalizacja', audience: 'Nauka i biznes', area: 'B+R', region: 'UE', tag: 'Badania' },
  { id: 'AP-003', title: 'Transformacja cyfrowa administracji', audience: 'Administracja', area: 'Usługi publiczne', region: 'Polska', tag: 'GovTech' },
  { id: 'AP-004', title: 'Akceleracja rozwiązań przemysłowych', audience: 'Startupy', area: 'Przemysł 4.0', region: 'Polska', tag: 'Akceleracja' },
  { id: 'AP-005', title: 'Skalowanie innowacyjnych produktów', audience: 'MŚP i startupy', area: 'Ekspansja', region: 'UE', tag: 'Skalowanie' },
];

function Brand({ inverse = false }) {
  return <img className={inverse ? 'brand brand--inverse' : 'brand'} src="/assets/accelerate-poland-logo.svg" alt="ACCELERATE POLAND" />;
}

function SectionLabel({ number, children, light = false }) {
  return <p className={light ? 'section-label section-label--light' : 'section-label'}><span>{number}</span>{children}</p>;
}

function ArrowLink({ href, children, inverse = false, className = '', straightRest = false }) {
  return (
    <a className={`arrow-link ${inverse ? 'arrow-link--inverse' : ''} ${className}`} href={href}>
      <span>{children}</span><span className="arrow-link__icon">{straightRest ? <ArrowRight weight="bold" /> : <ArrowUpRight weight="bold" />}<ArrowUpRight weight="bold" /></span>
    </a>
  );
}

function Header({ open, setOpen, hidden, active, standalone = false }) {
  return (
    <header className={`site-header ${hidden ? 'site-header--hidden' : ''} ${open ? 'site-header--open' : ''}`}>
      <a href={standalone ? '/#top' : '#top'} className="brand-link" aria-label="ACCELERATE POLAND — strona główna" onClick={() => setOpen(false)}><Brand /></a>
      <nav className="desktop-nav" aria-label="Główna nawigacja">
        {navigation.map(({ label, href, Icon }) => (
          <a className={active === href.slice(1) ? 'is-active' : ''} href={resolveNavigationHref(href, standalone)} key={href}>
            {Icon && <span className="desktop-nav__icon" aria-hidden="true"><Icon weight="regular" /></span>}
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button type="button" className="language-switch" aria-label="Zmień język"><strong>PL</strong><span>/</span><span>EN</span></button>
        <a className="header-contact" href={standalone ? '/#kontakt' : '#kontakt'}><span>Kontakt</span><ArrowUpRight weight="bold" /></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}>{open ? <X weight="bold" /> : <List weight="bold" />}</button>
      </div>
      <div className="mobile-menu" id="mobile-menu" aria-hidden={!open}>
        <div className="mobile-menu__meta"><span>PL / EN</span><span>MENU — 2026</span></div>
        <nav aria-label="Mobilna nawigacja">
          {navigation.map((item, index) => <a href={resolveNavigationHref(item.href, standalone)} key={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowRight /></a>)}
          <a href={standalone ? '/#kontakt' : '#kontakt'} onClick={() => setOpen(false)}><span>06</span>Kontakt<ArrowRight /></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-kicker" data-hero="kicker"><span>PL</span> Inicjatywa na rzecz cyfrowego rozwoju Polski</p>
        <div className="hero-title">
          <h1 aria-label="Projektujemy cyfrową przyszłość Polski.">
            <span className="line-mask"><span className="title-line" data-hero="title">Projektujemy</span></span>
            <span className="line-mask"><span className="title-line" data-hero="title">cyfrową przyszłość</span></span>
            <span className="line-mask"><span className="title-line accent" data-hero="title">Polski.</span></span>
          </h1>
        </div>
        <p className="hero-intro" data-hero="intro">Łączymy administrację publiczną, biznes, naukę, startupy, technologie i kapitał, aby przyspieszać rozwój cyfrowy i gospodarczy Polski.</p>
        <div className="hero-ctas" data-hero="intro">
          <a className="primary-cta" href="#inicjatywa"><span>Poznaj inicjatywę</span><ArrowRight weight="bold" /></a>
          <a className="secondary-cta" href="#programy"><span>Zobacz programy</span><ArrowRight weight="bold" /></a>
        </div>
        <div className="hero-ticker" data-hero="intro">{pillars.map((pillar) => <span key={pillar}>{pillar}</span>)}</div>
      </div>

      <div className="hero-mosaic" data-hero="mosaic" aria-label="Najważniejsze obszary działania ACCELERATE POLAND">
        <a className="mosaic-card mosaic-card--map" href="#inicjatywa">
          <img src="/assets/map/poland-regions-master.svg" alt="Mapa Polski z podziałem na województwa" />
          <div className="mosaic-card__copy"><span>01 / ZASIĘG</span><strong>Cała Polska</strong><small>Jedna platforma współpracy</small></div>
          <span className="mosaic-card__action">Poznaj obszar <ArrowUpRight /></span>
        </a>
        <a className="mosaic-card mosaic-card--photo" href="#partnerzy">
          <img src="/assets/photos/01-warsaw-business.jpg" alt="Plac Europejski w Warszawie" />
          <div className="mosaic-card__copy mosaic-card__copy--photo"><span>02 / WARSZAWA</span><strong>Rozwój bez granic</strong></div>
        </a>
        <a className="mosaic-card mosaic-card--metric" href="#partnerzy">
          <Network weight="thin" aria-hidden="true" />
          <div className="mosaic-card__copy"><span>03 / EKOSYSTEM</span><strong>60+</strong><small>firm technologicznych</small></div>
          <span className="mosaic-card__action">Zobacz ekosystem <ArrowUpRight /></span>
        </a>
        <a className="mosaic-card mosaic-card--programmes" href="#programy">
          <img src="/assets/icons/programmes/02-innovation-nation.svg" alt="" aria-hidden="true" />
          <div className="mosaic-card__copy"><span>04 / PROGRAMY</span><strong>4 programy</strong><small>Jeden kierunek rozwoju</small></div>
          <span className="mosaic-card__action">Zobacz programy <ArrowUpRight /></span>
        </a>
      </div>
      <a className="scroll-cue" href="#inicjatywa" aria-label="Przejdź do następnej sekcji"><span>Przewiń</span><ArrowDown /></a>
    </section>
  );
}

function PillarNetwork() {
  return (
    <div className="pillar-network" data-reveal="draw" aria-label="Sześć filarów inicjatywy">
      <div className="pillar-network__hub"><span>ACCELERATE</span><strong>POLAND</strong></div>
      {pillarDetails.map(({ name, Icon }, index) => (
        <div className={`pillar pillar--${index + 1}`} key={name}>
          <span className="pillar__index">0{index + 1}</span>
          <div className="pillar__identity"><Icon weight="regular" aria-hidden="true" /><strong>{name}</strong></div>
        </div>
      ))}
    </div>
  );
}

function PillarDirectory() {
  return (
    <div className="pillar-directory">
      <div className="pillar-directory__heading"><span>SYSTEM WSPÓŁPRACY</span><h3>Sześć filarów.<br /><em>Jeden kierunek.</em></h3></div>
      <div className="pillar-directory__grid">
        {pillarDetails.map(({ name, description, Icon }, index) => (
          <article key={name}>
            <div><span>0{index + 1}</span><Icon weight="regular" aria-hidden="true" /></div>
            <h4>{name}</h4>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Initiative() {
  return (
    <section className="initiative section" id="inicjatywa">
      <div className="initiative-heading" data-reveal="left">
        <SectionLabel number="01">Nasza wizja</SectionLabel>
        <h2>Technologia,<br />która tworzy<br /><em>realną wartość.</em></h2>
      </div>
      <div className="initiative-copy" data-reveal="up">
        <p className="lead">Polska cyfrowa przyszłości potrzebuje nie tylko dostępu do technologii, lecz także kompetencji, współpracy i zdolności do jej skutecznego wykorzystania.</p>
        <p>ACCELERATE POLAND tworzy warunki do współpracy pomiędzy podmiotami, które dysponują różnymi elementami tego potencjału. Ich połączenie pozwala odpowiadać na rzeczywiste wyzwania i zwiększać konkurencyjność polskiej gospodarki.</p>
        <ArrowLink href="#programy">Zobacz programy</ArrowLink>
      </div>
      <PillarNetwork />
      <div className="initiative-evidence" data-reveal="up">
        <figure><img src="/assets/photos/03-katowice-hackathon.jpg" alt="Uczestnicy hackathonu technologicznego w Katowicach" /><figcaption><span>Katowice / Technologia</span><strong>Współpraca, która prowadzi do działania.</strong></figcaption></figure>
        <PillarDirectory />
      </div>
    </section>
  );
}

function InitiativePage() {
  const operatingPrinciples = [
    { index: '01', title: 'Budujemy kompetencje', copy: 'Rozwijamy wiedzę potrzebną do świadomego i skutecznego wykorzystania nowych technologii.', Icon: BookOpenText },
    { index: '02', title: 'Łączymy środowiska', copy: 'Tworzymy relacje pomiędzy administracją, biznesem, nauką, startupami i partnerami technologicznymi.', Icon: Network },
    { index: '03', title: 'Przechodzimy do działania', copy: 'Pomagamy zamieniać wiedzę o technologii w praktyczne wdrożenia odpowiadające na realne potrzeby.', Icon: RocketLaunch },
  ];

  return (
    <>
      <section className="initiative-page-hero" id="top">
        <div className="initiative-page-hero__copy">
          <SectionLabel number="01">Inicjatywa</SectionLabel>
          <p className="initiative-page-hero__kicker" data-hero="kicker">OGÓLNOPOLSKA PLATFORMA WSPÓŁPRACY</p>
          <h1 aria-label="Cyfrowy rozwój Polski wymaga współpracy i realnego działania.">
            <span className="line-mask"><span className="title-line" data-hero="title">Cyfrowy rozwój</span></span>
            <span className="line-mask"><span className="title-line" data-hero="title">Polski wymaga</span></span>
            <span className="line-mask"><span className="title-line" data-hero="title">współpracy i</span></span>
            <span className="line-mask"><span className="title-line accent" data-hero="title">realnego działania.</span></span>
          </h1>
          <p className="initiative-page-hero__intro" data-hero="intro">ACCELERATE POLAND to ogólnopolska inicjatywa na rzecz cyfrowego rozwoju Polski, tworząca przestrzeń współpracy pomiędzy administracją publiczną, przedsiębiorstwami, środowiskiem naukowym, startupami oraz partnerami technologicznymi i gospodarczymi.</p>
          <a className="primary-cta" href="#misja" data-hero="intro"><span>Poznaj inicjatywę</span><ArrowDown weight="bold" /></a>
        </div>
        <div className="initiative-page-hero__visual" data-hero="mosaic">
          <span className="initiative-page-hero__visual-label">POLSKA / 2026</span>
          <img src="/assets/map/poland-regions-master.svg" alt="Mapa Polski z podziałem na województwa" />
          <div className="initiative-page-hero__visual-copy"><span>ZASIĘG</span><strong>Cała Polska</strong><p>Jedna platforma. Sześć filarów. Wspólny kierunek.</p></div>
          <div className="initiative-page-hero__coordinates"><span>49°00′–54°50′N</span><span>14°07′–24°09′E</span></div>
        </div>
      </section>

      <section className="initiative-page-mission section" id="misja">
        <div data-reveal="left"><SectionLabel number="02">Misja</SectionLabel><h2>Od wiedzy<br />do <em>wdrożenia.</em></h2></div>
        <div className="initiative-page-mission__copy" data-reveal="right">
          <p className="lead">Celem inicjatywy jest wspieranie wykorzystania nowych technologii — w szczególności sztucznej inteligencji i rozwiązań cyfrowych — w sposób odpowiadający na rzeczywiste potrzeby polskiej gospodarki, administracji i społeczeństwa.</p>
          <p>ACCELERATE POLAND koncentruje się na budowaniu kompetencji, relacji i możliwości, które pozwalają przechodzić od wiedzy o nowych technologiach do ich praktycznego wykorzystania.</p>
          <div className="initiative-page-mission__statement"><span>CEL STRATEGICZNY</span><strong>Technologia, która tworzy realną wartość dla Polski.</strong></div>
        </div>
      </section>

      <section className="initiative-page-pillars section" id="filary">
        <div className="initiative-page-section-heading" data-reveal="up"><div><SectionLabel number="03">System współpracy</SectionLabel><h2>Sześć filarów.<br /><em>Jeden system.</em></h2></div><p>Łączymy wiedzę, technologię, biznes, naukę, administrację i kapitał, aby zwiększać zdolność Polski do skutecznego wykorzystywania innowacji.</p></div>
        <PillarNetwork />
      </section>

      <section className="initiative-page-method section" id="dzialanie">
        <div className="initiative-page-section-heading" data-reveal="up"><div><SectionLabel number="04">Jak działamy</SectionLabel><h2>Współpraca,<br />która prowadzi<br /><em>do działania.</em></h2></div><p>Model inicjatywy porządkuje drogę od kompetencji i relacji do praktycznego zastosowania technologii.</p></div>
        <div className="initiative-page-method__grid">
          {operatingPrinciples.map(({ index, title, copy, Icon }, itemIndex) => <article key={title} data-reveal={itemIndex % 2 ? 'right' : 'left'}><div><span>{index}</span><Icon weight="regular" aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="initiative-page-reach section" id="polska">
        <div className="initiative-page-reach__heading" data-reveal="left"><SectionLabel number="05">Ogólnopolski zasięg</SectionLabel><h2>Polska jako<br /><em>wspólny kontekst.</em></h2><p>Regionalne działania są częścią ogólnopolskiej misji — od administracji i nauki po przemysł, technologie oraz przedsiębiorczość.</p></div>
        <div className="initiative-page-reach__mosaic" data-reveal="right">
          <figure className="initiative-page-reach__photo initiative-page-reach__photo--main"><img src="/assets/photos/01-warsaw-business.jpg" alt="Nowoczesne otoczenie biznesowe w Warszawie" /><figcaption><span>WARSZAWA</span><strong>Biznes i administracja</strong></figcaption></figure>
          <figure className="initiative-page-reach__photo"><img src="/assets/photos/03-katowice-hackathon.jpg" alt="Uczestnicy wydarzenia technologicznego w Katowicach" /><figcaption><span>KATOWICE</span><strong>Technologia i współpraca</strong></figcaption></figure>
          <figure className="initiative-page-reach__photo"><img src="/assets/photos/05-pesa-production.jpg" alt="Nowoczesna produkcja przemysłowa w Polsce" /><figcaption><span>POLSKA</span><strong>Przemysł i wdrożenia</strong></figcaption></figure>
        </div>
      </section>

      <section className="initiative-page-cta section" id="dalej">
        <div data-reveal="left"><SectionLabel number="06" light>Następny krok</SectionLabel><h2>Dołącz do cyfrowego<br />rozwoju <em>Polski.</em></h2></div>
        <div className="initiative-page-cta__actions" data-reveal="right"><p>Poznaj programy operacyjne ACCELERATE POLAND albo znajdź możliwości finansowania dla swojego projektu.</p><div><a className="primary-cta" href="/#programy"><span>Zobacz programy</span><ArrowRight weight="bold" /></a><a className="secondary-cta" href="/#granty"><span>Wybierz granty</span><ArrowRight weight="bold" /></a></div></div>
      </section>
    </>
  );
}

function Programmes() {
  return (
    <section className="programmes section" id="programy">
      <div className="section-heading" data-reveal="up">
        <div><SectionLabel number="02">Programy operacyjne</SectionLabel><h2>Cztery programy.<br /><em>Jeden kierunek.</em></h2></div>
        <p>ACCELERATE POLAND realizuje swoją misję poprzez cztery równorzędne programy odpowiadające na potrzeby polskiej gospodarki, innowacji i transformacji cyfrowej.</p>
      </div>
      <div className="programme-grid">
        {programmes.map((programme, index) => (
          <article className="programme-card" key={programme.name} data-reveal="up" style={{ '--delay': `${index * 0.08}s` }}>
            <div className="programme-card__top"><span>{programme.index}</span><ArrowUpRight weight="bold" /></div>
            <img src={programme.icon} alt="" aria-hidden="true" />
            <div className="programme-card__rest"><h3>{programme.name}</h3><p>{programme.strapline}</p></div>
            <div className="programme-card__panel"><p>{programme.copy}</p><ArrowLink href="#kontakt" inverse>Poznaj program</ArrowLink></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProgrammesPage() {
  const programmeSystem = [
    { index: '01', title: 'Wartość w Polsce', copy: 'Projekty, inicjatywy i rozwiązania rozwijające wartość tworzoną w Polsce.' },
    { index: '02', title: 'Innowacje i współpraca', copy: 'Rozwój innowacji, współpracy technologicznej i przedsiębiorczości.' },
    { index: '03', title: 'Transformacja cyfrowa', copy: 'Współpraca administracji, biznesu i nauki wokół cyfrowej zmiany.' },
    { index: '04', title: 'Rozwój startupów', copy: 'Wsparcie startupów, innowacyjnych przedsiębiorstw i ambitnych projektów.' },
  ];

  return (
    <>
      <section className="programmes-page-hero" id="top">
        <div className="programmes-page-hero__copy">
          <SectionLabel number="01">Programy operacyjne</SectionLabel>
          <p className="programmes-page-hero__kicker" data-hero="kicker">CZTERY RÓWNORZĘDNE PROGRAMY</p>
          <h1 aria-label="Cztery programy. Jeden kierunek rozwoju.">
            <span className="line-mask"><span className="title-line" data-hero="title">Cztery programy.</span></span>
            <span className="line-mask"><span className="title-line accent" data-hero="title">Jeden kierunek</span></span>
            <span className="line-mask"><span className="title-line" data-hero="title">rozwoju.</span></span>
          </h1>
          <p className="programmes-page-hero__intro" data-hero="intro">ACCELERATE POLAND realizuje swoją misję poprzez cztery programy operacyjne odpowiadające na różne potrzeby polskiej gospodarki, przedsiębiorczości, innowacji i transformacji cyfrowej.</p>
          <a className="primary-cta" href="#katalog" data-hero="intro"><span>Poznaj programy</span><ArrowDown weight="bold" /></a>
        </div>
        <div className="programmes-page-hero__visual" data-hero="mosaic" aria-label="Cztery programy ACCELERATE POLAND">
          {programmes.map((programme) => (
            <a href={`#program-${programme.index}`} key={programme.name}>
              <span>{programme.index}</span>
              <img src={programme.icon} alt="" aria-hidden="true" />
              <strong>{programme.name}</strong>
              <ArrowUpRight weight="bold" aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="programmes-page-catalog section" id="katalog">
        <div className="programmes-page-section-heading" data-reveal="up">
          <div><SectionLabel number="02">Katalog programów</SectionLabel><h2>Różne potrzeby.<br /><em>Wspólna misja.</em></h2></div>
          <p>Każdy program ma równorzędne miejsce w systemie ACCELERATE POLAND i odpowiada na inny obszar rozwoju cyfrowego oraz gospodarczego.</p>
        </div>
        <div className="programmes-page-list">
          {programmes.map((programme, index) => (
            <article id={`program-${programme.index}`} key={programme.name} data-reveal={index % 2 ? 'right' : 'left'}>
              <div className="programmes-page-list__meta"><span>{programme.index} / 04</span><span>PROGRAM OPERACYJNY</span></div>
              <div className="programmes-page-list__identity"><img src={programme.icon} alt="" aria-hidden="true" /><h3>{programme.name}</h3></div>
              <div className="programmes-page-list__copy"><strong>{programme.strapline}</strong><p>{programme.copy}</p><ArrowLink href="/#kontakt" straightRest>Zapytaj o program</ArrowLink></div>
              <ArrowUpRight className="programmes-page-list__arrow" weight="bold" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="programmes-page-system section" id="system">
        <div className="programmes-page-system__intro" data-reveal="left"><SectionLabel number="03">Wspólna architektura</SectionLabel><h2>Jeden system.<br /><em>Cztery perspektywy.</em></h2><p>Programy tworzą spójny mechanizm wspierający rozwój wartości, innowacji, transformacji cyfrowej i przedsiębiorczości.</p></div>
        <div className="programmes-page-system__grid" data-reveal="right">
          {programmeSystem.map((item) => <article key={item.index}><span>{item.index}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="programmes-page-cta section" id="dalej">
        <div data-reveal="left"><SectionLabel number="04" light>Następny krok</SectionLabel><h2>Znajdź program<br />dla swojej <em>ambicji.</em></h2></div>
        <div className="programmes-page-cta__actions" data-reveal="right"><p>Porozmawiaj z zespołem ACCELERATE POLAND o programie najlepiej dopasowanym do Twojej organizacji lub projektu.</p><div><a className="primary-cta" href="/#kontakt"><span>Skontaktuj się</span><ArrowRight weight="bold" /></a><a className="secondary-cta" href="/#granty"><span>Wybierz granty</span><ArrowRight weight="bold" /></a></div></div>
      </section>
    </>
  );
}

function AccelerationPage() {
  const [activeStage, setActiveStage] = useState(0);
  const detailRef = useRef(null);
  const stage = stages[activeStage];

  useEffect(() => {
    if (!detailRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(detailRef.current.querySelectorAll('[data-acceleration-stage]'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .58, stagger: .07, ease: 'power3.out' });
  }, [activeStage]);

  return (
    <>
      <section className="acceleration-page-hero" id="top">
        <div className="acceleration-page-hero__copy">
          <SectionLabel number="01">Akceleracja</SectionLabel>
          <p className="acceleration-page-hero__kicker" data-hero="kicker">V2V / FROM VISION TO VENTURE</p>
          <h1 aria-label="Od wizji do gotowości inwestycyjnej.">
            <span className="line-mask"><span className="title-line" data-hero="title">Od wizji do</span></span>
            <span className="line-mask"><span className="title-line" data-hero="title">gotowości</span></span>
            <span className="line-mask"><span className="title-line accent" data-hero="title">inwestycyjnej.</span></span>
          </h1>
          <p className="acceleration-page-hero__intro" data-hero="intro">V2V to model akceleracji zaprojektowany przez Odra Venture z myślą o sprawnym przeprowadzaniu ambitnych przedsięwzięć od etapu zgłoszenia poprzez walidację, rozwój komercyjny i przygotowanie do pozyskania kapitału.</p>
          <a className="primary-cta" href="#metodyka" data-hero="intro"><span>Poznaj model V2V</span><ArrowDown weight="bold" /></a>
        </div>
        <div className="acceleration-page-hero__visual" data-hero="mosaic" aria-label="Cztery etapy modelu V2V">
          <div className="acceleration-page-hero__mark"><strong>V2V</strong><span>FROM VISION<br />TO VENTURE</span></div>
          <div className="acceleration-page-hero__rail">
            {stages.map((item, index) => (
              <a href="#metodyka" key={item.index} onClick={() => setActiveStage(index)}>
                <span>{item.index}</span>
                <img src={item.icon} alt="" aria-hidden="true" />
                <strong>{item.short}</strong>
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="acceleration-page-hero__caption">CZTERY ETAPY / JEDNA DROGA DO GOTOWOŚCI INWESTYCYJNEJ</p>
        </div>
      </section>

      <section className="acceleration-page-foundation section" id="model">
        <div className="acceleration-page-foundation__copy" data-reveal="left">
          <SectionLabel number="02">Model V2V</SectionLabel>
          <h2>Mniej barier.<br /><em>Więcej działania.</em></h2>
          <p>Model ogranicza zbędne bariery procesowe i koncentruje się na działaniach, które mogą skracać drogę przedsiębiorstwa do rynku, skalowania i gotowości inwestycyjnej.</p>
          <div className="acceleration-page-foundation__outcomes">
            <span>RYNEK</span><span>SKALOWANIE</span><span>GOTOWOŚĆ INWESTYCYJNA</span>
          </div>
        </div>
        <figure className="acceleration-page-foundation__photo" data-reveal="right">
          <img src="/assets/photos/03-katowice-hackathon.jpg" alt="Uczestnicy warsztatu technologicznego w Katowicach pracujący przy laptopach" />
          <figcaption><span>KATOWICE / TECHNOLOGIA</span><strong>Praca skoncentrowana na konkretnych kamieniach milowych.</strong></figcaption>
        </figure>
      </section>

      <section className="acceleration-page-method section" id="metodyka">
        <div className="acceleration-page-method__heading" data-reveal="up">
          <div><SectionLabel number="03">Metodyka akceleracji</SectionLabel><h2>Cztery etapy.<br /><em>Jeden proces.</em></h2></div>
          <p>Wybierz etap, aby zobaczyć jego rolę w przejściu od pierwszej oceny projektu do gotowości inwestycyjnej.</p>
        </div>
        <div className="acceleration-page-method__system">
          <div className="acceleration-page-method__tabs" role="tablist" aria-label="Etapy modelu V2V" data-reveal="left">
            {stages.map((item, index) => (
              <button type="button" role="tab" aria-selected={activeStage === index} className={activeStage === index ? 'is-active' : ''} onClick={() => setActiveStage(index)} key={item.index}>
                <span>{item.index} / 04</span><img src={item.icon} alt="" aria-hidden="true" /><strong>{item.title}</strong><ArrowRight weight="bold" aria-hidden="true" />
              </button>
            ))}
          </div>
          <article className="acceleration-page-method__detail" role="tabpanel" ref={detailRef} data-reveal="right">
            <div className="acceleration-page-method__detail-meta" data-acceleration-stage><span>ETAP {stage.index}</span><span>{stage.outcome}</span></div>
            <img src={stage.icon} alt="" aria-hidden="true" data-acceleration-stage />
            <h3 data-acceleration-stage>{stage.title}</h3>
            <p data-acceleration-stage>{stage.detail}</p>
            <div className="acceleration-page-method__nav" data-acceleration-stage>
              <button type="button" aria-label="Poprzedni etap" onClick={() => setActiveStage((activeStage + stages.length - 1) % stages.length)}><ArrowRight /></button>
              <span>{String(activeStage + 1).padStart(2, '0')} / 04</span>
              <button type="button" aria-label="Następny etap" onClick={() => setActiveStage((activeStage + 1) % stages.length)}><ArrowRight /></button>
            </div>
          </article>
        </div>
      </section>

      <section className="acceleration-page-path section" id="droga">
        <div data-reveal="left"><SectionLabel number="04">Przebieg procesu</SectionLabel><h2>Od zgłoszenia<br />do <em>kapitału.</em></h2></div>
        <div className="acceleration-page-path__rail" data-reveal="right">
          {stages.map((item) => <article key={item.index}><span>{item.index}</span><img src={item.icon} alt="" aria-hidden="true" /><h3>{item.short}</h3><p>{item.outcome}</p></article>)}
        </div>
      </section>

      <section className="acceleration-page-cta section" id="dalej">
        <div data-reveal="left"><SectionLabel number="05" light>Następny krok</SectionLabel><h2>Znajdź wsparcie<br />dla swojego <em>projektu.</em></h2></div>
        <div className="acceleration-page-cta__actions" data-reveal="right"><p>Przejdź do katalogu grantów i wybierz możliwość wsparcia dopasowaną do etapu rozwoju Twojego przedsięwzięcia.</p><div><a className="primary-cta" href="/#granty"><span>Wybierz grant na akcelerację</span><ArrowRight weight="bold" /></a><a className="secondary-cta" href="/#kontakt"><span>Skontaktuj się</span><ArrowRight weight="bold" /></a></div></div>
      </section>
    </>
  );
}

function Acceleration() {
  const [activeStage, setActiveStage] = useState(0);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!panelRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(panelRef.current.querySelectorAll('[data-stage-animate]'), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: 'power3.out' });
  }, [activeStage]);

  const stage = stages[activeStage];
  return (
    <section className="acceleration section" id="akceleracja">
      <div className="acceleration-intro" data-reveal="left">
        <SectionLabel number="03" light>Akceleracja</SectionLabel>
        <p className="v2v-mark"><span>V2V</span> / FROM VISION TO VENTURE</p>
        <h2>Od wizji do<br />gotowości<br /><em>inwestycyjnej.</em></h2>
        <p>Model ogranicza zbędne bariery procesowe i koncentruje się na działaniach, które skracają drogę przedsiębiorstwa do rynku, skalowania i kapitału.</p>
        <ArrowLink href="#granty" inverse>Wybierz grant na akcelerację</ArrowLink>
      </div>
      <div className="stage-system" data-reveal="up">
        <div className="stage-tabs" role="tablist" aria-label="Etapy modelu V2V">
          {stages.map((item, index) => <button key={item.index} type="button" role="tab" aria-selected={activeStage === index} className={activeStage === index ? 'is-active' : ''} onClick={() => setActiveStage(index)}><span>{item.index}</span><strong>{item.short}</strong></button>)}
        </div>
        <div className="stage-panel" role="tabpanel" ref={panelRef}>
          <div className="stage-panel__icon" data-stage-animate><img src={stage.icon} alt="" aria-hidden="true" /><span>ETAP {stage.index} / 04</span></div>
          <div className="stage-panel__content">
            <p className="stage-eyebrow" data-stage-animate>{stage.outcome}</p>
            <h3 data-stage-animate>{stage.title}</h3>
            <p data-stage-animate>{stage.body}</p>
          </div>
          <div className="stage-panel__nav" data-stage-animate>
            <button type="button" onClick={() => setActiveStage((activeStage + stages.length - 1) % stages.length)} aria-label="Poprzedni etap"><ArrowRight /></button>
            <span>{String(activeStage + 1).padStart(2, '0')} / 04</span>
            <button type="button" onClick={() => setActiveStage((activeStage + 1) % stages.length)} aria-label="Następny etap"><ArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="audiences section" id="dla-kogo">
      <div className="audiences-heading" data-reveal="up"><SectionLabel number="04">Dla kogo?</SectionLabel><h2>Ekosystem, który<br /><em>łączy potencjał.</em></h2></div>
      <div className="audience-grid">
        {audiences.map((audience, index) => (
          <article className="audience-card" key={audience.name} data-reveal={index % 2 ? 'right' : 'left'}>
            <div className="audience-card__index">{audience.index}</div>
            <img src={audience.icon} alt="" aria-hidden="true" />
            <div><h3>{audience.name}</h3><strong>{audience.strapline}</strong><p>{audience.copy}</p></div>
            <ArrowLink href="#kontakt">Poznaj możliwości</ArrowLink>
          </article>
        ))}
      </div>
    </section>
  );
}

function Grants() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Wszystkie');
  const filters = ['Wszystkie', 'Technologia', 'B+R', 'Usługi publiczne', 'Przemysł 4.0'];
  const filtered = useMemo(() => grants.filter((grant) => {
    const matchesFilter = filter === 'Wszystkie' || grant.area === filter;
    const haystack = `${grant.title} ${grant.audience} ${grant.area} ${grant.region} ${grant.tag}`.toLowerCase();
    return matchesFilter && haystack.includes(query.trim().toLowerCase());
  }), [filter, query]);

  return (
    <section className="grants section" id="granty">
      <div className="grants-photo" data-reveal="left">
        <img src="/assets/photos/02-university-research.jpg" alt="Młoda badaczka w laboratorium Uniwersytetu Warszawskiego" />
        <div className="grants-photo__label"><span>Warszawa / Nauka / B+R</span><strong>Od potencjału do finansowania.</strong></div>
      </div>
      <div className="grants-content" data-reveal="right">
        <SectionLabel number="05">Granty</SectionLabel>
        <div className="grants-title"><h2>Znajdź możliwości<br /><em>wsparcia.</em></h2><span className="prototype-badge">KATALOG DEMONSTRACYJNY</span></div>
        <p>Dostęp do właściwie dobranych źródeł finansowania może ułatwiać realizację projektów technologicznych, działalność badawczo-rozwojową oraz skalowanie przedsiębiorstw.</p>
        <label className="grant-search"><MagnifyingGlass weight="bold" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Wyszukaj grant, technologię lub odbiorcę" /><kbd>⌘ K</kbd></label>
        <div className="grant-filters" role="group" aria-label="Filtry grantów">{filters.map((item) => <button type="button" className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="grant-results" aria-live="polite">
          <div className="grant-results__head"><span>{filtered.length} wyników</span><span>Aktualizacja bazy / CMS</span></div>
          {filtered.map((grant) => <a className="grant-row" href="#kontakt" key={grant.id}><span className="grant-id">{grant.id}</span><div><strong>{grant.title}</strong><small>{grant.audience} · {grant.region}</small></div><span className="grant-tag">{grant.tag}</span><ArrowUpRight weight="bold" /></a>)}
          {!filtered.length && <div className="no-results"><span>Brak wyników</span><p>Spróbuj szerszej frazy lub wybierz inny obszar.</p></div>}
        </div>
        <p className="grants-note">Docelowy katalog zostanie połączony z bazą danych / CMS zgodnie z rozwiązaniem wykorzystanym w OdraVenture.</p>
      </div>
    </section>
  );
}

function Partners() {
  const countRef = useRef(null);
  const categories = [
    ['01', 'Technologiczni', 'Firmy technologiczne i dostawcy zaawansowanych rozwiązań cyfrowych.'],
    ['02', 'Merytoryczni', 'Inkubatory, akceleratory i organizacje wspierające innowacje.'],
    ['03', 'Gospodarczy', 'Izby gospodarcze, organizacje biznesowe i instytucje współpracy.'],
    ['04', 'Medialni', 'Instytucje wspierające ogólnopolski i międzynarodowy zasięg inicjatywy.'],
  ];

  useEffect(() => {
    const counterElement = countRef.current;
    if (!counterElement) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      counterElement.textContent = '60';
      return undefined;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: 60,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: counterElement,
        start: 'top 88%',
        once: true,
      },
      onUpdate: () => {
        counterElement.textContent = String(Math.round(counter.value));
      },
      onComplete: () => {
        counterElement.textContent = '60';
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="partners section" id="partnerzy">
      <div className="partners-heading" data-reveal="left"><SectionLabel number="06">Partnerzy</SectionLabel><h2>Ekosystem<br /><em>współpracy.</em></h2><p>Łączymy polskie przedsiębiorstwa i instytucje z międzynarodowymi firmami technologicznymi, organizacjami gospodarczymi, inkubatorami i akceleratorami.</p></div>
      <div className="partners-number" data-reveal="up"><strong aria-label="Ponad 60 międzynarodowych firm technologicznych"><span className="partners-number__value" ref={countRef} aria-hidden="true">0</span><span className="partners-number__plus" aria-hidden="true">+</span></strong><p>międzynarodowych firm technologicznych w rozwijanym ekosystemie</p></div>
      <div className="partner-categories">
        {categories.map(([index, title, copy], itemIndex) => <article key={title} data-reveal="up" style={{ '--delay': `${itemIndex * 0.06}s` }}><span>{index}</span><h3>{title}</h3><p>{copy}</p><CaretRight weight="bold" /></article>)}
      </div>
      <div className="partner-strip" data-reveal="draw"><span>TECHNOLOGIA</span><span>BIZNES</span><span>NAUKA</span><span>ADMINISTRACJA</span><span>KAPITAŁ</span></div>
    </section>
  );
}

function PartnersPage() {
  const countRef = useRef(null);
  const categories = [
    { index: '01', title: 'Technologiczni', copy: 'Firmy technologiczne i dostawcy zaawansowanych rozwiązań cyfrowych.', Icon: Cpu },
    { index: '02', title: 'Merytoryczni', copy: 'Inkubatory, akceleratory i organizacje wspierające innowacje i przedsiębiorczość.', Icon: Network },
    { index: '03', title: 'Gospodarczy', copy: 'Izby gospodarcze, organizacje biznesowe i instytucje wspierające współpracę międzynarodową.', Icon: Briefcase },
    { index: '04', title: 'Medialni', copy: 'Instytucje medialne wspierające ogólnopolski oraz międzynarodowy zasięg inicjatywy.', Icon: EnvelopeSimple },
  ];

  useEffect(() => {
    const element = countRef.current;
    if (!element) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.textContent = '60';
      return undefined;
    }
    const counter = { value: 0 };
    const tween = gsap.to(counter, { value: 60, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true }, onUpdate: () => { element.textContent = String(Math.round(counter.value)); }, onComplete: () => { element.textContent = '60'; } });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <>
      <section className="partners-page-hero" id="top">
        <div className="partners-page-hero__copy">
          <SectionLabel number="01">Partnerzy</SectionLabel>
          <p className="partners-page-hero__kicker" data-hero="kicker">EKOSYSTEM WSPÓŁPRACY</p>
          <h1 aria-label="Ekosystem partnerów.">
            <span className="line-mask"><span className="title-line" data-hero="title">Ekosystem</span></span>
            <span className="line-mask"><span className="title-line accent" data-hero="title">partnerów.</span></span>
          </h1>
          <p className="partners-page-hero__intro" data-hero="intro">ACCELERATE POLAND rozwija współpracę pomiędzy polskimi przedsiębiorstwami i instytucjami a międzynarodowymi firmami technologicznymi, organizacjami gospodarczymi, inkubatorami i akceleratorami.</p>
          <a className="primary-cta" href="#kategorie" data-hero="intro"><span>Poznaj ekosystem</span><ArrowDown weight="bold" /></a>
        </div>
        <div className="partners-page-hero__visual" data-hero="mosaic" aria-label="Sieć czterech kategorii partnerów ACCELERATE POLAND">
          <div className="partners-page-hero__network">
            {categories.map(({ index, title, Icon }) => <article key={index}><span>{index}</span><Icon weight="regular" aria-hidden="true" /><strong>{title}</strong></article>)}
            <div className="partners-page-hero__hub"><span>ACCELERATE</span><strong>POLAND</strong><small>PARTNER NETWORK</small></div>
          </div>
          <p className="partners-page-hero__caption"><span>POLSKA</span><span>×</span><span>ŚWIAT</span></p>
        </div>
      </section>

      <section className="partners-page-intro section" id="ekosystem">
        <figure className="partners-page-intro__photo" data-reveal="left">
          <img src="/assets/photos/06-gdansk-business.jpg" alt="Nowoczesne środowisko biznesowe w Gdańsku" />
          <figcaption><span>GDAŃSK / BIZNES</span><strong>Współpraca pomiędzy polskim potencjałem a międzynarodową technologią.</strong></figcaption>
        </figure>
        <div className="partners-page-intro__copy" data-reveal="right">
          <SectionLabel number="02">Wspólna platforma</SectionLabel>
          <h2>Połączenia, które<br /><em>tworzą możliwości.</em></h2>
          <p>Ekosystem łączy wiedzę, technologię, doświadczenie biznesowe, zasięg oraz zdolność do rozwijania innowacyjnych przedsięwzięć.</p>
          <div className="partners-page-intro__stat"><strong aria-label="Ponad 60 międzynarodowych firm technologicznych"><span ref={countRef} aria-hidden="true">0</span><small aria-hidden="true">+</small></strong><p>międzynarodowych firm technologicznych wskazywanych w rozwijanym ekosystemie</p></div>
        </div>
      </section>

      <section className="partners-page-categories section" id="kategorie">
        <div className="partners-page-categories__heading" data-reveal="up">
          <div><SectionLabel number="03">Kategorie partnerów</SectionLabel><h2>Cztery role.<br /><em>Jeden ekosystem.</em></h2></div>
          <p>Każda kategoria wnosi do inicjatywy inny rodzaj kompetencji, relacji i możliwości współpracy.</p>
        </div>
        <div className="partners-page-categories__grid">
          {categories.map(({ index, title, copy, Icon }, itemIndex) => (
            <article key={index} data-reveal="up" style={{ '--delay': `${itemIndex * .06}s` }}>
              <div><span>{index} / 04</span><Icon weight="regular" aria-hidden="true" /></div>
              <h3>Partnerzy<br />{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight weight="bold" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="partners-page-reach section" id="zasieg">
        <div className="partners-page-reach__copy" data-reveal="left">
          <SectionLabel number="04">Zasięg technologiczny</SectionLabel>
          <h2>Międzynarodowe<br /><em>połączenia.</em></h2>
          <p>W materiałach wskazywany jest ekosystem obejmujący ponad 60 międzynarodowych firm technologicznych, a także partnerów merytorycznych i organizacje gospodarcze.</p>
        </div>
        <div className="partners-page-reach__field" data-reveal="right">
          <span>GOOGLE</span><span>AWS</span><span>MICROSOFT</span><span>IBM</span><span>ANTHROPIC</span><span>NVIDIA</span>
          <div><Network weight="thin" aria-hidden="true" /><p>Technologia · wiedza · biznes · zasięg</p></div>
        </div>
      </section>

      <section className="partners-page-cta section" id="dalej">
        <div data-reveal="left"><SectionLabel number="05" light>Współpraca</SectionLabel><h2>Dołącz do<br />ekosystemu <em>partnerów.</em></h2></div>
        <div className="partners-page-cta__actions" data-reveal="right"><p>Porozmawiaj z zespołem ACCELERATE POLAND o możliwościach współpracy technologicznej, merytorycznej, gospodarczej lub medialnej.</p><div><a className="primary-cta" href="/#kontakt"><span>Skontaktuj się</span><ArrowRight weight="bold" /></a><a className="secondary-cta" href="/inicjatywa"><span>Poznaj inicjatywę</span><ArrowRight weight="bold" /></a></div></div>
      </section>
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return (
    <section className="contact section" id="kontakt">
      <div className="contact-copy" data-reveal="left">
        <SectionLabel number="07" light>Kontakt</SectionLabel>
        <h2>Współtwórz cyfrowy<br />rozwój <em>Polski.</em></h2>
        <p>Zapraszamy przedstawicieli administracji publicznej, przedsiębiorstw, startupów, nauki, inwestorów i partnerów technologicznych.</p>
        <a href="mailto:kontakt@acceleratepoland.pl">kontakt@acceleratepoland.pl <ArrowUpRight weight="bold" /></a>
      </div>
      <form className="contact-form" onSubmit={submit} data-reveal="right">
        <div className="form-row"><label>Imię i nazwisko<input required name="name" autoComplete="name" /></label><label>Organizacja<input required name="company" autoComplete="organization" /></label></div>
        <div className="form-row"><label>E-mail<input required type="email" name="email" autoComplete="email" /></label><label>Interesuje mnie<select name="interest" defaultValue=""><option value="" disabled>Wybierz obszar</option><option>Programy</option><option>Akceleracja V2V</option><option>Granty</option><option>Partnerstwo</option></select></label></div>
        <label>Wiadomość<textarea required name="message" rows="4" /></label>
        <label className="consent"><input required type="checkbox" /><span>Wyrażam zgodę na kontakt w sprawie współpracy z ACCELERATE POLAND.</span></label>
        <button className="submit-button" type="submit"><span>{sent ? 'Wiadomość zapisana' : 'Wyślij wiadomość'}</span>{sent ? <Check weight="bold" /> : <ArrowRight weight="bold" />}</button>
        {sent && <p className="form-success" role="status">Dziękujemy. Formularz demonstracyjny działa poprawnie; integracja wysyłki zostanie podłączona na etapie produkcyjnym.</p>}
      </form>
    </section>
  );
}

function Footer({ standalone = false }) {
  return (
    <footer>
      <div className="footer-main"><div><Brand inverse /><p>Inicjatywa na rzecz cyfrowego rozwoju Polski</p></div><div className="footer-statement">Łączymy ludzi, organizacje, technologię, wiedzę i kapitał, aby tworzyć warunki dla szybszego rozwoju Polski.</div></div>
      <div className="footer-links">
        <div className="footer-nav">{footerNavigation.map(({ label, href, Icon }) => <a href={resolveNavigationHref(href, standalone)} key={href}><span className="footer-nav__icon" aria-hidden="true"><Icon weight="regular" /></span><span>{label}</span></a>)}</div>
        <div className="socials"><a href="https://www.linkedin.com" aria-label="LinkedIn"><LinkedinLogo weight="fill" /></a><a href="https://www.facebook.com" aria-label="Facebook"><FacebookLogo weight="fill" /></a><a href="https://www.instagram.com" aria-label="Instagram"><InstagramLogo /></a></div>
      </div>
      <div className="footer-legal"><span>© 2026 ACCELERATE POLAND</span><span>Polityka prywatności</span><span>Projekt w przygotowaniu</span></div>
    </footer>
  );
}

export function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isInitiativePage = pathname === '/inicjatywa';
  const isProgrammesPage = pathname === '/programy';
  const isAccelerationPage = pathname === '/akceleracja';
  const isPartnersPage = pathname === '/partnerzy';
  const isStandalonePage = isInitiativePage || isProgrammesPage || isAccelerationPage || isPartnersPage;
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('inicjatywa');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add('js-ready');

    if (reduced) {
      gsap.set('[data-hero], [data-reveal], main > section', { clearProps: 'all', opacity: 1, x: 0, y: 0 });
    } else {
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
      lenis.on('scroll', ScrollTrigger.update);
      const ticker = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      const hero = gsap.timeline({ defaults: { ease: 'power4.out' } });
      hero.fromTo('[data-hero="kicker"]', { x: -26, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, 0.15)
        .fromTo('[data-hero="title"]', { yPercent: 112, rotateX: -18 }, { yPercent: 0, rotateX: 0, duration: 0.85, stagger: 0.09 }, 0.22)
        .fromTo('[data-hero="intro"]', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.08 }, 0.52)
        .fromTo('[data-hero="mosaic"]', { x: 34, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, 0.28);

      const pageSections = gsap.utils.toArray('main > section:not(.hero):not(.initiative-page-hero):not(.programmes-page-hero):not(.acceleration-page-hero):not(.partners-page-hero)');
      pageSections.forEach((section, index) => {
        const offset = (window.innerWidth <= 680 ? 38 : 76) * (index % 2 === 0 ? -1 : 1);
        const revealSection = () => gsap.fromTo(section, { x: offset, opacity: 0 }, { x: 0, opacity: 1, duration: 0.92, ease: 'power3.out', overwrite: true, force3D: true });
        const resetSection = () => gsap.set(section, { x: offset, opacity: 0 });

        resetSection();
        ScrollTrigger.create({
          trigger: section,
          start: 'top 90%',
          end: 'bottom 10%',
          onEnter: revealSection,
          onEnterBack: revealSection,
          onLeave: resetSection,
          onLeaveBack: resetSection,
        });
      });

      const revealItems = gsap.utils.toArray('[data-reveal]');
      revealItems.forEach((element) => {
        const direction = element.dataset.reveal;
        const from = direction === 'left' ? { x: -34, opacity: 0 } : direction === 'right' ? { x: 34, opacity: 0 } : direction === 'draw' ? { clipPath: 'inset(0 100% 0 0)', opacity: 1 } : { y: 34, opacity: 0 };
        const to = direction === 'draw' ? { clipPath: 'inset(0 0% 0 0)', duration: 1.05 } : { x: 0, y: 0, opacity: 1, duration: 0.78 };
        gsap.fromTo(element, from, { ...to, delay: Number.parseFloat(element.style.getPropertyValue('--delay')) || 0, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      });

      ScrollTrigger.create({
        start: 120,
        end: 'max',
        onUpdate: (self) => setHeaderHidden(self.direction === 1 && self.scroll() > 180),
      });

      return () => {
        lenis.destroy();
        gsap.ticker.remove(ticker);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        document.documentElement.classList.remove('js-ready');
      };
    }
  }, []);

  useEffect(() => {
    document.title = isInitiativePage ? 'Inicjatywa | ACCELERATE POLAND' : isProgrammesPage ? 'Programy | ACCELERATE POLAND' : isAccelerationPage ? 'Akceleracja — V2V | ACCELERATE POLAND' : isPartnersPage ? 'Partnerzy | ACCELERATE POLAND' : 'ACCELERATE POLAND';
    const sections = isStandalonePage ? [] : [...document.querySelectorAll('main section[id]')];
    if (isInitiativePage) setActiveSection('inicjatywa');
    if (isProgrammesPage) setActiveSection('programy');
    if (isAccelerationPage) setActiveSection('akceleracja');
    if (isPartnersPage) setActiveSection('partnerzy');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 1.1);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [isInitiativePage, isProgrammesPage, isAccelerationPage, isPartnersPage, isStandalonePage]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <div className="route-loader" aria-hidden="true"><Brand /><span /></div>
      <Header open={menuOpen} setOpen={setMenuOpen} hidden={headerHidden && !menuOpen} active={activeSection} standalone={isStandalonePage} />
      <main>{isInitiativePage ? <InitiativePage /> : isProgrammesPage ? <ProgrammesPage /> : isAccelerationPage ? <AccelerationPage /> : isPartnersPage ? <PartnersPage /> : <><Hero /><Initiative /><Programmes /><Acceleration /><Audiences /><Grants /><Partners /><Contact /></>}</main>
      <Footer standalone={isStandalonePage} />
      <a className={`back-to-top ${showTop ? 'is-visible' : ''}`} href="#top" aria-label="Powrót na górę"><ArrowUp weight="bold" /></a>
    </div>
  );
}
