import React, { useState } from 'react';
import { 
    Heart, Star, Lock, MessageSquare, ShieldCheck, 
    Play, Map as MapIcon, UserCircle2, RefreshCcw, LayoutGrid, ArrowRight, CheckCircle2, XCircle
} from 'lucide-react';

// IMPORT DARI FOLDER DATA YANG BENAR
import { gameData } from "./data/index.js";

export default function App() {
    const [view, setView] = useState('landing'); 
    const [lives, setLives] = useState(5); 
    const [totalStars, setTotalStars] = useState(0);
    const [currentSector, setCurrentSector] = useState(null);
    const [currentLevel, setCurrentLevel] = useState(null);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [progress, setProgress] = useState({ s1: 1, s2: 1, s3: 1, s4: 1, s5: 1, s6: 1 });
    const [feedback, setFeedback] = useState(null);

    const [levelHistory, setLevelHistory] = useState([]); 
    const [redemptionUsed, setRedemptionUsed] = useState(false);
    const [redemptionQuestion, setRedemptionQuestion] = useState(null);

    const startGame = () => setView('map');
    const openSector = (sector) => { setCurrentSector(sector); setView('levelGrid'); };
    const backToMap = () => setView('map');
    const backToGrid = () => setView('levelGrid');

    const openLevel = (level, isUnlocked) => {
        if (!isUnlocked) return;
        setCurrentLevel(level);
        setCurrentQuestionIdx(0);
        setLives(5); 
        setLevelHistory([]); 
        setRedemptionUsed(false);
        setRedemptionQuestion(null);
        setView('dialog'); 
    };

    const finishLevel = () => {
        if (lives > 0 && currentLevel.id === progress[currentSector.id]) {
            setProgress(prev => ({ ...prev, [currentSector.id]: prev[currentSector.id] + 1 }));
        }
        setView('levelGrid');
    };

    const handleChoice = (choice) => {
        if (feedback) return; 
        setFeedback(choice);
        const currentQ = currentLevel.questions[currentQuestionIdx];
        const isCorrect = choice.correct;
        
        setTimeout(() => {
            setLevelHistory(prev => [
                ...prev,
                {
                    questionIdx: currentQuestionIdx,
                    dialog: currentQ.dialog,
                    npc: currentQ.npc,
                    choices: currentQ.choices,
                    selectedText: choice.text,
                    correct: isCorrect,
                    isRedeemed: false
                }
            ]);

            if (isCorrect) {
                setTotalStars(prev => prev + 20); 
            } else {
                setLives(prev => Math.max(0, prev - 1)); // Salah kurang 1 nyawa
            }

            if (currentQuestionIdx < currentLevel.questions.length - 1) {
                setCurrentQuestionIdx(prev => prev + 1);
                setView('dialog'); 
            } else {
                setView('summary');
            }
            setFeedback(null);
        }, 2200);
    };

    // LOGIKA PERBAIKAN: JIKA BENAR HANYA DAPAT SETENGAH NYAWA (0.5)
    const handleRedemptionChoice = (choice) => {
        if (feedback) return;
        setFeedback(choice);
        setTimeout(() => {
            if (choice.correct) {
                setTotalStars(prev => prev + 15); 
                setLives(prev => Math.min(5, prev + 0.5)); // <-- Diubah menjadi +0.5 Nyawa
                setLevelHistory(prev => prev.map(item => 
                    item.questionIdx === redemptionQuestion.questionIdx 
                        ? { ...item, correct: true, selectedText: choice.text, isRedeemed: true }
                        : item
                ));
            } else {
                setLives(prev => Math.max(0, prev - 1)); 
            }
            
            setRedemptionUsed(true);
            setRedemptionQuestion(null);
            setFeedback(null);
            setView('summary');
        }, 2200);
    };

    const TopBar = ({ backAction, backText }) => (
        <div className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50 shadow-sm">
            {backAction ? (
                <button onClick={backAction} className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-2 rounded-full font-bold flex items-center gap-2 transition-all border border-slate-600 shadow-sm">
                    {backText}
                </button>
            ) : <div />}
            <div className="flex gap-4 md:gap-6 items-center">
                
                {/* LOGIKA RENDERING VISUAL SETENGAH NYAWA */}
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => {
                        if (lives >= i) {
                            // Nyawa Penuh (Utuh)
                            return <Heart key={i} className="w-5 h-5 md:w-6 md:h-6 text-red-500 fill-red-500" />;
                        } else if (lives >= i - 0.5) {
                            // Setengah Nyawa (Visual Terpotong)
                            return (
                                <div key={i} className="relative w-5 h-5 md:w-6 md:h-6">
                                    <Heart className="absolute top-0 left-0 w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                                    <div className="absolute top-0 left-0 w-[50%] overflow-hidden h-full">
                                        <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-500 fill-red-500" />
                                    </div>
                                </div>
                            );
                        } else {
                            // Nyawa Kosong
                            return <Heart key={i} className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />;
                        }
                    })}
                </div>

                <div className="flex items-center gap-2 bg-slate-800 px-5 py-1.5 rounded-full border border-yellow-500/30 shadow-inner">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-xl font-black text-white">{totalStars}</span>
                </div>
            </div>
        </div>
    );

    const currentCorrectCount = levelHistory.filter(h => h.correct).length;
    const currentAccuracy = levelHistory.length > 0 ? Math.round((currentCorrectCount / levelHistory.length) * 100) : 0;
    const levelScore = levelHistory.reduce((acc, curr) => {
        if (!curr.correct) return acc;
        return curr.isRedeemed ? acc + 15 : acc + 20;
    }, 0);

    return (
        <div className="w-full min-h-screen font-sans select-none relative bg-[#0f172a] text-slate-200 flex flex-col">
            {view === 'landing' && (
                <div className="w-full flex-grow flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-[#0f172a] to-black"></div>
                    <div className="z-10 flex flex-col items-center animate-in zoom-in duration-700 mt-10">
                        <div className="bg-emerald-500 text-slate-900 font-bold px-5 py-1.5 rounded-full text-xs mb-8 flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.5)] tracking-widest uppercase">
                            <ShieldCheck className="w-4 h-4" /> Simulasi Keputusan Etis Profesional
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 text-center mb-4 tracking-tight">
                            Ethica: Pro Series
                        </h1>
                        <button onClick={startGame} className="mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-900 font-black text-xl py-4 px-12 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center gap-3">
                            <Play className="fill-slate-900 w-6 h-6" /> Mulai Simulasi
                        </button>
                    </div>
                </div>
            )}

            {view === 'map' && (
                <div className="w-full h-full flex flex-col relative pt-28 px-6 bg-slate-900 flex-grow">
                    <TopBar />
                    <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto flex-grow mt-6 md:mt-10">
                        <div className="flex items-center gap-3 mb-8">
                            <MapIcon className="w-10 h-10 text-emerald-400" />
                            <h2 className="text-4xl font-black text-white tracking-tight">Peta Sektor Profesi</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-10">
                            {gameData.sectors.map((sector) => (
                                <button key={sector.id} onClick={() => openSector(sector)} className="relative bg-slate-800/90 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center justify-center transition-all border border-slate-700 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 group">
                                    <div className="w-full h-40 mb-6 rounded-2xl overflow-hidden relative shadow-inner border border-white/10">
                                        <img src={sector.image} alt={sector.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-100 text-center">{sector.title}</h3>
                                    <p className="text-slate-400 text-xs font-medium text-center">{sector.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {view === 'levelGrid' && currentSector && (
                <div className="w-full h-full flex flex-col relative pt-28 px-6 bg-[#0f172a] flex-grow">
                    <TopBar backAction={backToMap} backText="← Peta Sektor" />
                    <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto flex-grow mt-6">
                        <div className="bg-slate-800 border border-slate-700 px-8 py-3 rounded-full mb-12 shadow-md">
                            <h2 className="text-2xl font-black text-emerald-400">{currentSector.title}</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
                            {currentSector.levels.map((level) => {
                                const isUnlocked = level.id <= progress[currentSector.id];
                                return (
                                    <button key={level.id} onClick={() => openLevel(level, isUnlocked)} className={`relative flex flex-col items-center justify-center h-44 rounded-2xl border-2 transition-all ${isUnlocked ? 'bg-slate-800 border-emerald-500/50 hover:bg-slate-700 hover:scale-105 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.3)]' : 'bg-slate-900/50 border-slate-800 opacity-60 cursor-not-allowed'}`}>
                                        {!isUnlocked && <Lock className="absolute top-4 right-4 text-slate-600 w-6 h-6" />}
                                        <div className={`text-5xl font-black mb-2 ${isUnlocked ? 'text-emerald-400' : 'text-slate-600'}`}>{level.id}</div>
                                        <span className={`text-sm font-bold tracking-widest ${isUnlocked ? 'text-slate-300' : 'text-slate-600'}`}>LEVEL {level.id}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {view === 'dialog' && currentLevel && (
                <div className="w-full flex-grow bg-slate-950 relative flex flex-col justify-end pb-8 px-4 md:px-20 z-50 pt-28">
                    <TopBar backAction={backToGrid} backText="← Keluar" />
                    <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700 overflow-y-auto max-h-[85vh]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 rounded-2xl ${currentLevel.questions[currentQuestionIdx].npc.bgColor} flex items-center justify-center`}>
                                <UserCircle2 className={`w-10 h-10 ${currentLevel.questions[currentQuestionIdx].npc.avatarColor}`} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{currentLevel.questions[currentQuestionIdx].npc.name}</h3>
                                <p className="text-cyan-400 font-medium text-sm">{currentLevel.questions[currentQuestionIdx].npc.role}</p>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 mb-6">
                            <p className="text-slate-200 text-lg whitespace-pre-wrap">{currentLevel.questions[currentQuestionIdx].dialog}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {!feedback ? (
                                currentLevel.questions[currentQuestionIdx].choices.map((choice, idx) => (
                                    <button key={idx} onClick={() => handleChoice(choice)} className="w-full text-left bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 p-4 rounded-xl min-h-[5rem]">
                                        {choice.text}
                                    </button>
                                ))
                            ) : (
                                <div className={`col-span-1 md:col-span-2 w-full p-6 rounded-xl border text-center font-bold text-lg ${feedback.correct ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                                    {feedback.feedback}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {view === 'redemption' && redemptionQuestion && (
                <div className="w-full flex-grow bg-slate-950 relative flex flex-col justify-end pb-8 px-4 md:px-20 z-50 pt-28">
                    <TopBar />
                    <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-3xl p-6 md:p-8 border-2 border-amber-500/50 overflow-y-auto max-h-[85vh]">
                        <div className="mb-6 flex gap-4 items-center">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                                <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-amber-400">Kesempatan Perbaikan 🌟</h3>
                                <p className="text-slate-400 text-sm">Jika benar: Memulihkan +0.5 Nyawa Karir & +15 Poin!</p>
                            </div>
                        </div>
                        <div className="bg-slate-800/70 rounded-2xl p-6 border border-slate-700 mb-6">
                            <p className="text-slate-200 text-lg whitespace-pre-wrap">{redemptionQuestion.dialog}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {!feedback ? (
                                redemptionQuestion.choices.map((choice, idx) => (
                                    <button key={idx} onClick={() => handleRedemptionChoice(choice)} className="w-full text-left bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 p-4 rounded-xl min-h-[5rem]">
                                        {choice.text}
                                    </button>
                                ))
                            ) : (
                                <div className={`col-span-1 md:col-span-2 w-full p-6 rounded-xl border text-center font-bold ${feedback.correct ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                                    {feedback.feedback}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {view === 'summary' && (
                <div className="flex-grow pt-28 px-4 md:px-6 max-w-4xl mx-auto w-full flex flex-col justify-center items-center pb-12">
                    <TopBar />
                    <div className="w-full bg-slate-900 border border-slate-700/60 p-6 md:p-10 rounded-3xl shadow-2xl">
                        <h1 className="text-4xl md:text-5xl font-black mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-emerald-300 to-cyan-400">
                            {lives > 0 ? "EVALUASI SELESAI!" : "INTEGRITAS HANCUR!"}
                        </h1>
                        <p className="text-slate-400 text-center mb-8">{lives > 0 ? "Bagus! Anda berhasil melalui tekanan ini." : "Nyawa karir Anda habis karena pelanggaran etika."}</p>

                        <div className="grid grid-cols-3 gap-3 w-full mb-8">
                            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl py-4 flex flex-col items-center">
                                <span className="text-3xl font-black text-yellow-400">+{levelScore}</span>
                                <span className="text-[10px] font-bold text-slate-400 mt-1">POIN</span>
                            </div>
                            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl py-4 flex flex-col items-center">
                                <span className={`text-3xl font-black ${currentAccuracy >= 60 ? 'text-emerald-400' : 'text-red-400'}`}>{currentAccuracy}%</span>
                                <span className="text-[10px] font-bold text-slate-400 mt-1">AKURASI</span>
                            </div>
                            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl py-4 flex flex-col items-center">
                                {/* Menampilkan angka nyawa termasuk koma jika 0.5 (misal 4.5 / 5) */}
                                <span className={`text-3xl font-black ${lives > 0 ? 'text-red-500' : 'text-slate-600'}`}>{lives} / 5</span>
                                <span className="text-[10px] font-bold text-slate-400 mt-1">NYAWA</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-full mb-8">
                            {levelHistory.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 gap-4">
                                    <div className="flex items-center gap-3">
                                        {item.correct ? <CheckCircle2 className="text-emerald-400 w-5 h-5 shrink-0" /> : <XCircle className="text-red-500 w-5 h-5 shrink-0" />}
                                        <div>
                                            <p className="text-slate-200 text-sm font-bold">Kasus {idx+1}</p>
                                            <p className="text-slate-400 text-xs">Pilihan: {item.selectedText}</p>
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex items-center">
                                        {item.correct ? (
                                            <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.isRedeemed ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'}`}>
                                                {item.isRedeemed ? '+0.5 Nyawa' : '+20 Poin'}
                                            </span>
                                        ) : (
                                            <div className="flex gap-2 items-center">
                                                <span className="text-[11px] font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">Salah</span>
                                                {!redemptionUsed && lives > 0 && (
                                                    <button onClick={() => { setRedemptionQuestion(item); setView('redemption'); }} className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-black text-xs px-3 py-1.5 rounded-lg">
                                                        Perbaiki
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
                            {lives > 0 ? (
                                <button onClick={finishLevel} className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 font-black py-4 rounded-xl flex justify-center items-center gap-2">
                                    Simpan & Lanjut <ArrowRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button onClick={() => openLevel(currentLevel, true)} className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-black py-4 rounded-xl flex justify-center items-center gap-2">
                                    <RefreshCcw className="w-5 h-5" /> Mengulang Level
                                </button>
                            )}
                            <button onClick={backToGrid} className="bg-slate-800 text-white border border-slate-600 font-bold py-3.5 rounded-xl flex justify-center items-center gap-2">
                                <LayoutGrid className="w-5 h-5" /> Kembali
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}