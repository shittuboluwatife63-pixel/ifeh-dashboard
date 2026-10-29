import { useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CirclePlay,
  Clock3,
  GraduationCap,
  Home,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Search,
  Settings,
  X,
} from 'lucide-react'
import './App.css'

const courses = [
  { id: 1, name: 'Introduction to Psychology', instructor: 'Dr. Olivia Rhye', category: 'Social science', progress: 72, next: 'Chapter 8: Memory and learning', image: 'photo-1532012197267-da84d127e765', color: 'lavender' },
  { id: 2, name: 'The Creative Studio', instructor: 'Marcus Chen', category: 'Design', progress: 48, next: 'Studio project: visual story', image: 'photo-1455390582262-044cdead277a', color: 'peach' },
  { id: 3, name: 'Foundations of Biology', instructor: 'Dr. Amina Yusuf', category: 'Science', progress: 86, next: 'Lab 05: cells under the microscope', image: 'photo-1530026405186-ed1f139313f8', color: 'mint' },
]

const navigation = [
  { label: 'Dashboard', icon: Home },
  { label: 'My courses', icon: BookOpen },
  { label: 'Schedule', icon: CalendarDays },
  { label: 'Messages', icon: MessageCircle, badge: '2' },
]

function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleCourses = courses.filter((course) =>
    `${course.name} ${course.instructor} ${course.category}`.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <a className="brand" href="#dashboard" aria-label="Campus home">
          <span className="brand-mark"><GraduationCap size={21} /></span>
          <span>campus<span className="brand-period">.</span></span>
        </a>
        <div className="school-label">LEARNING SPACE</div>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(({ label, icon: Icon, badge }) => (
            <button
              className={`nav-link ${activePage === label ? 'nav-link-active' : ''}`}
              key={label}
              onClick={() => { setActivePage(label); setMenuOpen(false) }}
              type="button"
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{label}</span>
              {badge && <span className="nav-badge">{badge}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-link" onClick={() => setActivePage('Settings')} type="button"><Settings size={18} strokeWidth={1.8} /><span>Settings</span></button>
          <div className="student-mini">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="" />
            <span className="mini-copy"><strong>Ifeh</strong><small>Student account</small></span>
            <MoreHorizontal size={18} aria-hidden="true" />
          </div>
        </div>
      </aside>

      {menuOpen && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setMenuOpen(false)} type="button" />}

      <main className="dashboard-main" id="dashboard">
        <header className="topbar">
          <button className="icon-button menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} type="button">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="breadcrumb">Student portal <ChevronRight size={14} /> <span>{activePage}</span></div>
          <div className="topbar-actions">
            <label className="search-box"><Search size={17} /><input aria-label="Search courses" onChange={(event) => setSearch(event.target.value)} placeholder="Search courses" value={search} /><kbd>/</kbd></label>
            <button className="icon-button notification-button" aria-label="Notifications" type="button"><Bell size={19} /><span className="notification-dot" /></button>
            <img className="topbar-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Ifeh" />
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div><p className="eyebrow">THURSDAY, OCTOBER 29, 2026 <span className="sun-mark">✳</span></p><h1>Good morning, Ifeh<span className="heading-period">.</span></h1><p className="welcome-subtitle">A little progress each day adds up to big results.</p></div>
            <button className="term-pill" type="button"><span className="term-dot" /> Fall semester <ChevronRight size={15} /></button>
          </section>

          <section className="profile-banner" aria-label="Student profile">
            <div className="profile-main">
              <div className="profile-photo-wrap"><img className="profile-photo" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=85" alt="Ifeh" /><span className="profile-online" title="Online" /></div>
              <div className="profile-copy"><div className="profile-name-row"><h2>Ifeh</h2><span className="verified"><Check size={12} /></span></div><p>Undergraduate · Class of 2027</p><div className="profile-tags"><span>Psychology</span><span className="tag-divider" /><span>Year 2</span><span className="tag-divider" /><span>ID 2048916</span></div></div>
            </div>
            <div className="profile-divider" />
            <div className="advisor-block"><span className="advisor-label">ACADEMIC ADVISOR</span><div className="advisor-person"><span className="advisor-avatar">JL</span><span><strong>Jamie Lee</strong><small>Arts &amp; Sciences</small></span><ArrowUpRight size={15} /></div></div>
            <button className="profile-more" aria-label="More profile options" type="button"><MoreHorizontal size={21} /></button>
          </section>

          <section className="overview-section" aria-labelledby="overview-title">
            <div className="section-heading"><div><p className="eyebrow">YOUR TERM AT A GLANCE</p><h2 id="overview-title">Overview</h2></div><button className="text-action" type="button">Full report <ArrowUpRight size={15} /></button></div>
            <div className="stats-grid">
              <article className="stat-card stat-card-primary"><div className="stat-top"><span className="stat-icon"><BookOpen size={17} /></span><span className="stat-caption">THIS SEMESTER</span></div><p className="stat-value">3<span> courses</span></p><div className="stat-foot"><span>9 credits enrolled</span><span className="stat-accent">Full time</span></div></article>
              <article className="stat-card"><div className="stat-top"><span className="stat-icon stat-icon-coral"><GraduationCap size={18} /></span><span className="stat-caption">CURRENT GPA</span></div><p className="stat-value">3.82<span> / 4.0</span></p><div className="stat-foot"><span>Dean's list standing</span><span className="trend-up">↗ 0.12</span></div></article>
              <article className="stat-card"><div className="stat-top"><span className="stat-icon stat-icon-yellow"><Check size={18} /></span><span className="stat-caption">ATTENDANCE</span></div><p className="stat-value">96<span>%</span></p><div className="stat-foot"><span>You're doing great</span><span className="attendance-dots"><i /><i /><i /><i /><i /><i /><i /></span></div></article>
              <article className="stat-card stat-card-deadline"><div className="stat-top"><span className="stat-icon stat-icon-pink"><Clock3 size={17} /></span><span className="stat-caption">NEXT DEADLINE</span></div><p className="stat-value stat-date">Oct 30<span> · 11:59 pm</span></p><div className="stat-foot"><span>Psychology reflection paper</span><span className="deadline-dot" /></div></article>
            </div>
          </section>

          <div className="lower-grid">
            <section className="courses-section" aria-labelledby="courses-title">
              <div className="section-heading course-heading"><div><p className="eyebrow">KEEP YOUR MOMENTUM</p><h2 id="courses-title">My courses <span className="course-count">03</span></h2></div><button className="text-action" onClick={() => setActivePage('My courses')} type="button">View all <ArrowUpRight size={15} /></button></div>
              <div className="course-list">
                {visibleCourses.length > 0 ? visibleCourses.map((course) => (
                  <article className="course-row" key={course.id}>
                    <div className={`course-cover cover-${course.color}`} style={{ backgroundImage: `url(https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=240&q=80)` }}><span>{course.category}</span></div>
                    <div className="course-info"><div className="course-title-line"><h3>{course.name}</h3><button className="course-menu" aria-label={`More options for ${course.name}`} type="button"><MoreHorizontal size={18} /></button></div><p className="course-instructor">{course.instructor}</p><div className="course-next"><CirclePlay size={14} /><span>{course.next}</span></div><div className="progress-line"><span style={{ width: `${course.progress}%` }} /></div><div className="progress-label"><span>Course progress</span><strong>{course.progress}%</strong></div></div>
                  </article>
                )) : <p className="empty-search">No courses match “{search}”. Try another search.</p>}
              </div>
            </section>

            <aside className="schedule-card" aria-labelledby="schedule-title">
              <div className="schedule-head"><div><p className="eyebrow">UP NEXT</p><h2 id="schedule-title">Your week</h2></div><button className="icon-button calendar-button" aria-label="Open calendar" type="button"><CalendarDays size={18} /></button></div>
              <div className="week-strip"><span className="week-day"><small>MON</small><strong>26</strong></span><span className="week-day"><small>TUE</small><strong>27</strong></span><span className="week-day"><small>WED</small><strong>28</strong></span><span className="week-day week-day-active"><small>THU</small><strong>29</strong><i /></span><span className="week-day"><small>FRI</small><strong>30</strong></span></div>
              <div className="schedule-divider"><span>Thursday, October 29</span><span>2 classes</span></div>
              <div className="event-item"><span className="event-time">09:30<small>AM</small></span><span className="event-marker event-marker-green" /><div className="event-detail"><strong>Introduction to Psychology</strong><span>Lecture hall · Room 204</span></div><span className="event-length">50 min</span></div>
              <div className="event-item"><span className="event-time">01:00<small>PM</small></span><span className="event-marker event-marker-orange" /><div className="event-detail"><strong>The Creative Studio</strong><span>Design building · Studio 3</span></div><span className="event-length">90 min</span></div>
              <button className="schedule-link" onClick={() => setActivePage('Schedule')} type="button">Open schedule <ArrowUpRight size={15} /></button>
            </aside>
          </div>
          <footer className="page-footer"><span>© 2026 Campus student portal</span><span>Need a hand? <a href="mailto:help@campus.example">Contact student support</a></span></footer>
        </div>
      </main>
    </div>
  )
}

export default App
