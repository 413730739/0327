import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "前端網頁開發(html/css/js)", percent: 90 },
  { name: "後端網頁 (laravel)", percent: 80 },
  { name: "平面設計", percent: 85 },
  { name: "插畫", percent: 75 },
  { name: "品牌視覺規劃 (CIS)", percent: 80 },
  { name: "介面/網頁設計 (UI/UX)", percent: 85 },
  { name: "AutoCAD製圖/程式開發(Lisp)", percent: 70 },
  { name: "3D建模彩現", percent: 75 },
  { name: "設計企劃/專案管理", percent: 80 },
];

const PROGRAM_SKILLS = [
  { name: "C++", score: 80 },
  { name: "VB.net", score: 70 },
  { name: "AutoLisp", score: 60 },
  { name: "Verilog", score: 50 },
  { name: "Python", score: 85 },
  { name: "Html/Css/Js", score: 95 },
  { name: "Pug/Sass", score: 90 },
];

const EXPERIENCE = [
  {
    year: "2014",
    items: [
      "康師傅 活動用體感切醬料包遊戲 程式開發",
      "交大電機 高中生專區 網頁設計 / 開發",
      "長庚醫院 聲熱石墨希 腦瘤治療新契機3D 動畫",
    ],
  },
  {
    year: "2015",
    items: [
      "RemyMartin & Selinko 智慧酒瓶認證 UI/UX",
      "Dyverse Studio 歧響音樂 互動官網 設計 / 開發",
    ],
  },
  {
    year: "2016",
    items: [
      "Complex Festival 複雜生活節互動官網 設計 / 開發",
      "花旗聯合勸募官網 設計 / 開發",
      "世界健康大會官網 設計 / 開發",
      "雜學校展覽 網頁開發",
      "開設動畫互動網頁程式入門線上課程",
    ],
  },
  {
    year: "2017",
    items: [
      "台北聲音地景計畫官網 設計 / 開發",
      "工研院綠能所 節電官網 設計/開發",
      "睿軒 / 睿田生技公司官網開發",
      "D-school 台大創新設計學院網站 設計 / 開發",
      "開設動畫互動網頁特效入門線上課程",
    ],
  },
];

const CONTESTS = [
  "宏碁數位創作獎第五屆首獎",
  "宏碁數位創作獎第六屆首獎",
  "宏碁數位創作獎第七屆首獎暨評審團大獎",
  "宏碁數位創作獎第八屆優勝",
  "宏碁數位創作獎第九屆首獎暨評審團大獎",
  "智慧鐵人競賽高職組首獎",
  "梅竹黑客松 微軟組首獎",
  "經濟部智慧城市黒客松 實踐組首獎",
];

function SkillCircle({ name, percent }: { name: string; percent: number; key?: any }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-2 bg-white border border-gray-200 rounded-lg text-center h-full"
    >
      <div className="relative w-20 h-20 mb-2">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#ddd"
            strokeWidth="10"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#0081a7"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (circumference * percent) / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#0081a7]">
          {percent}%
        </div>
      </div>
      <span className="text-[11px] leading-tight text-gray-700 line-clamp-2">
        {name}
      </span>
    </motion.div>
  );
}

function ProgramBar({ name, score }: { name: string; score: number; key?: any }) {
  return (
    <li className="flex items-center justify-between mb-3 gap-4">
      <span className="text-sm font-medium text-gray-700 w-24 shrink-0">
        {name}
      </span>
      <div className="flex-1 h-5 bg-[#fdfcdc] rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full rounded-full flex items-center justify-end px-2"
          style={{
            backgroundColor:
              score >= 80 ? "#28a745" : score >= 60 ? "#ffc107" : "#dc3545",
          }}
        >
          <span className="text-[10px] text-white font-bold">{score}%</span>
        </motion.div>
      </div>
    </li>
  );
}

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 flex justify-center items-start">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="resume w-full max-w-6xl bg-white shadow-2xl flex flex-col md:flex-row rounded-xl overflow-hidden"
      >
        {/* Left Section */}
        <div className="left w-full md:w-1/2 bg-[#fed9b7] p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-[#0081a7] mb-2">吳哲宇</h1>
            <h4 className="text-lg font-medium text-[#00afb9] mb-4">
              動畫互動網頁特效入門 | 墨雨設計
            </h4>
            <hr className="border-t border-[#0081a7]/30 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-8">
              動畫互動網頁程式入門講師、墨雨設計 Monoame Design
              負責人、設計與網頁全端雙棲的工程師，為了有趣的想法赴湯蹈火。
            </p>

            <div className="flex gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center gap-2 bg-[#0081a7] text-white px-6 py-2 rounded-lg hover:bg-[#006d8c] transition-colors"
              >
                <ExternalLink size={18} /> 作品集
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center gap-2 bg-[#00afb9] text-white px-6 py-2 rounded-lg hover:bg-[#0096a0] transition-colors"
              >
                <Github size={18} /> Github
              </motion.a>
            </div>

            <div className="block mb-12">
              <h4 className="text-sm uppercase tracking-widest text-[#00afb9] mb-1">
                Skills
              </h4>
              <h2 className="text-2xl font-bold text-[#0081a7] mb-6">
                專業技能
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SKILLS.map((skill, index) => (
                  <SkillCircle key={index} name={skill.name} percent={skill.percent} />
                ))}
              </div>
            </div>

            <div className="block">
              <h4 className="text-sm uppercase tracking-widest text-[#00afb9] mb-1">
                Programming Skill
              </h4>
              <h2 className="text-2xl font-bold text-[#0081a7] mb-6">
                程式技能
              </h2>
              <ul className="listProgram">
                {PROGRAM_SKILLS.map((skill, index) => (
                  <ProgramBar key={index} name={skill.name} score={skill.score} />
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="right w-full md:w-1/2 bg-[#ffcc9f] p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="block mb-12">
              <h4 className="text-sm uppercase tracking-widest text-[#00afb9] mb-1">
                Experience / Works
              </h4>
              <h2 className="text-2xl font-bold text-[#0081a7] mb-8">
                經歷與作品
              </h2>
              <div className="space-y-8">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 relative"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-[#f07167] z-10" />
                      {index !== EXPERIENCE.length - 1 && (
                        <div className="w-1 h-full bg-[#f07167]/30 absolute top-4" />
                      )}
                    </div>
                    <div className="pb-4">
                      <span className="text-xl font-bold text-[#994a2a] block mb-3">
                        {exp.year}
                      </span>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {exp.items.map((item, i) => (
                          <li key={i} className="pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="block">
              <h4 className="text-sm uppercase tracking-widest text-[#00afb9] mb-1">
                Contests
              </h4>
              <h2 className="text-2xl font-bold text-[#0081a7] mb-6">
                比賽經歷
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 list-disc list-inside text-gray-700">
                {CONTESTS.map((contest, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-sm"
                  >
                    {contest}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}



