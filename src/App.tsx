import { useState } from 'react';
import TypingGame from './components/TypingGame';
import { Keyboard, BookOpen } from 'lucide-react';
import { lessons } from './data/lessons';

export default function App() {
  const [language, setLanguage] = useState<'th' | 'en'>('th');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('th-home');

  const filteredLessons = lessons.filter(l => l.language === language);
  const currentLesson = lessons.find(l => l.id === selectedLessonId) || filteredLessons[0];

  return (
    <div className="min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black font-sans text-slate-100 selection:bg-pink-500/30">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Keyboard className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Typing Master Pro
            </h1>
          </div>
          <div className="flex bg-white/10 rounded-lg p-1">
            <button
              onClick={() => { setLanguage('th'); setSelectedLessonId('th-home'); }}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${language === 'th' ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white'}`}
            >
              ไทย
            </button>
            <button
              onClick={() => { setLanguage('en'); setSelectedLessonId('en-home'); }}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white'}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8 items-start">
          {/* Sidebar */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4 px-2 text-white/80">
              <BookOpen className="w-5 h-5" />
              <h2 className="font-semibold">เลือกบทเรียน</h2>
            </div>
            <div className="flex flex-col gap-2">
              {filteredLessons.map(lesson => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`text-left px-4 py-3 rounded-xl transition-all ${selectedLessonId === lesson.id ? 'bg-blue-500/20 border border-blue-500/50 text-blue-300' : 'hover:bg-white/10 text-white/70 border border-transparent'}`}
                >
                  <div className="font-medium text-sm">{lesson.title}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Game Area */}
          <div>
            <TypingGame lesson={currentLesson} />
          </div>
        </div>
      </main>
    </div>
  );
}
