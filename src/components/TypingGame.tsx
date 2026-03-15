import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Trophy, Timer, Target, Keyboard } from 'lucide-react';
import { Lesson } from '../data/lessons';

export default function TypingGame({ lesson }: { lesson: Lesson }) {
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [wpm, setWpm] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const text = lesson.content;
  const isFinished = input.length >= text.length;

  useEffect(() => {
    setInput('');
    setStartTime(null);
    setEndTime(null);
    setMistakes(0);
    setWpm(0);
    if (inputRef.current) inputRef.current.focus();
  }, [lesson]);

  useEffect(() => {
    if (isFinished && !endTime) {
      setEndTime(Date.now());
    }
  }, [isFinished, endTime]);

  // Live WPM update
  useEffect(() => {
    if (startTime && !isFinished) {
      const interval = setInterval(() => {
        const minutes = (Date.now() - startTime) / 60000;
        const words = input.length / 5;
        setWpm(Math.round(words / minutes));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime, isFinished, input.length]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isFinished) return;
    const val = e.target.value;

    if (val.length < input.length) {
      setInput(val);
      return;
    }

    if (!startTime) setStartTime(Date.now());

    const newChar = val[val.length - 1];
    const expectedChar = text[input.length];

    if (newChar === expectedChar) {
      setInput(val);
    } else {
      setMistakes(m => m + 1);
    }
  };

  const calculateAccuracy = () => {
    const totalAttempts = input.length + mistakes;
    if (totalAttempts === 0) return 100;
    return Math.max(0, Math.round((input.length / totalAttempts) * 100));
  };

  const handleGameClick = () => {
    if (!isFinished && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const resetLesson = () => {
    setInput('');
    setStartTime(null);
    setEndTime(null);
    setMistakes(0);
    setWpm(0);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Lesson Info */}
      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 mb-6 flex items-center gap-4 shadow-lg shadow-blue-500/10">
        <div className="bg-blue-500/20 p-3 rounded-xl">
          <Keyboard className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-1">{lesson.title}</h2>
          <p className="text-blue-200/80 text-sm">{lesson.description}</p>
        </div>
      </div>

      {/* Stats Header */}
      <div className="flex flex-wrap items-center justify-between bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/10 shadow-xl">
        <div className="flex gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-white/50 mb-1">
              <Trophy className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">WPM</span>
            </div>
            <span className="text-3xl font-mono font-bold text-blue-400">{wpm}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-white/50 mb-1">
              <Target className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">ความแม่นยำ</span>
            </div>
            <span className="text-3xl font-mono font-bold text-emerald-400">{calculateAccuracy()}%</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-white/50 mb-1">
              <Timer className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">เวลา</span>
            </div>
            <span className="text-3xl font-mono font-bold text-white/80">
              {startTime ? Math.floor(((endTime || Date.now()) - startTime) / 1000) : 0}s
            </span>
          </div>
        </div>
        <button
          onClick={resetLesson}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10"
          title="เริ่มใหม่"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Game Area */}
      {!isFinished ? (
        <div
          onClick={handleGameClick}
          className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden cursor-text min-h-[300px] flex flex-col"
        >
          {!startTime && (
            <div className="absolute top-4 right-6 animate-pulse text-blue-400/70 text-sm font-medium">
              เริ่มพิมพ์เพื่อจับเวลา...
            </div>
          )}

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            className="absolute opacity-0 pointer-events-none"
            autoFocus
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
          />

          <div className="text-3xl md:text-4xl leading-relaxed font-medium text-white/30 select-none break-words tracking-wide font-mono">
            {text.split('').map((char, idx) => {
              let colorClass = '';
              let isCurrent = idx === input.length;

              if (idx < input.length) {
                colorClass = 'text-white'; // Correctly typed
              } else if (isCurrent) {
                colorClass = 'text-blue-400 bg-blue-400/20 rounded-md relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-blue-500 after:animate-pulse';
              }

              return (
                <span key={idx} className={`${colorClass} transition-colors duration-150 py-1`}>
                  {char}
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-black/40 backdrop-blur-md rounded-3xl p-12 border border-blue-500/30 shadow-2xl shadow-blue-500/10 text-center"
        >
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">ยอดเยี่ยมมาก!</h2>
          <p className="text-xl text-white/70 mb-8">คุณจบบทเรียนนี้แล้ว</p>

          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-10">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white/50 uppercase tracking-wider text-sm mb-2 font-semibold">ความเร็ว (WPM)</p>
              <p className="text-5xl font-bold text-blue-400">{wpm}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white/50 uppercase tracking-wider text-sm mb-2 font-semibold">ความแม่นยำ</p>
              <p className="text-5xl font-bold text-emerald-400">{calculateAccuracy()}%</p>
            </div>
          </div>

          <button
            onClick={resetLesson}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg flex items-center justify-center gap-3 mx-auto shadow-lg shadow-blue-500/25"
          >
            <RotateCcw className="w-6 h-6" />
            ฝึกบทเรียนนี้อีกครั้ง
          </button>
        </motion.div>
      )}
    </div>
  );
}
