import { sector1 } from './sector1.js';
import { sector2 } from './sector2.js';
import { sector3 } from './sector3.js';
import { sector4 } from './sector4.js';
import { sector5 } from './sector5.js';
import { sector6 } from './sector6.js';

// Konteks yang membuat pertanyaan terasa makin sulit di setiap level
const difficultyContexts = [
    "Tantangan Dasar: ",
    "Tekanan Sosial: Mayoritas rekan kerja Anda merasa ini hal yang wajar dan mendesak Anda untuk ikut. ",
    "Tekanan Atasan: Manajer Anda memerintahkan praktik ini dan mengancam karir Anda jika Anda menolak. ",
    "Area Abu-abu Hukum: Ada celah regulasi yang secara teknis membolehkan praktik ini tanpa sanksi jelas. ",
    "Krisis Ekstrem: Perusahaan di ambang kebangkrutan. Jika Anda tidak melakukan ini, puluhan orang akan di-PHK. "
];

// Fungsi untuk menyulap baseQuestions menjadi 5 Level progresif
const generateProgressiveLevels = (sector) => {
    return {
        ...sector,
        levels: Array.from({ length: 5 }, (_, lIdx) => ({
            id: lIdx + 1,
            questions: sector.baseQuestions.map((q) => ({
                npc: q.npc,
                dialog: `[LEVEL ${lIdx + 1}] ${difficultyContexts[lIdx]}\n\nKasus: "${q.dialog}"`,
                choices: q.choices
            }))
        }))
    };
};

export const gameData = {
    sectors: [
        generateProgressiveLevels(sector1),
        generateProgressiveLevels(sector2),
        generateProgressiveLevels(sector3),
        generateProgressiveLevels(sector4),
        generateProgressiveLevels(sector5),
        generateProgressiveLevels(sector6)
    ]
};