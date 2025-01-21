"use client";
import { motion } from "framer-motion";

const Sections = () => {
  const sections = [
    {
      title: "당뇨병",
      description:
        "1형 당뇨병 / 2형 당뇨병 / 당 대사 이상\n\n인슐린 주사나 약물치료를 비롯해 식사·운동·수면 등의 요인 서포트, 관리 영양사에 의한 영양 상담 등을 조합해, 환자님의 생활 습관이나 검사의 수치에 맞춘 치료를 실시합니다.",
    },
    {
      title: "생활습관병",
      description:
        "지질 이상증 / 고혈압 / 통풍 / 지방간\n\n편향된 식사·운동 부족·음주·흡연·스트레스 등으로 일어나는 다양한 병변의 증상을 치료합니다. 혈압이나 콜레스테롤치 등 각종 진단의 결과가 신경이 쓰이는 분도 상담해 주세요.",
    },
    {
      title: "내분비 · 갑상선",
      description:
        "각종 갑상선 질환 / 갑상선 기능 이상으로 인한 불편\n\n바세도우병 등의 갑상선 기능 항진증, 하시모토병 등의 갑상선 기능 저하증, 갑상선종대·중독 증 등의 전문 진료를 실시하고 있습니다. 또한, 갑상선 호르몬의 이상에 관련되는 불편의 치료에도 노력하고 있습니다.",
    },
    {
      title: "수면 무호흡 증후군",
      description:
        "코골이 / 기상시 두통 / 야간 각성\n\n수면의 질을 검사하여 증후군도에 맞춘 치료를 실시합니다. 적으로 확인합니다.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="container mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h1 className="text-2xl mb-6">통합의학적 치료</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
            variants={itemVariants}
          >
            <h2 className="text-xl mb-2">{section.title}</h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {section.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sections;
