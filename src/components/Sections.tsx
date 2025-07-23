'use client'
import { motion } from 'framer-motion'

const Sections = () => {
  const sections = [
    {
      title: '통합의학',
      description:
        '통합의학 카운슬링(Integrative Medicine Counseling)은 의학적 진단과 치료를 넘어, 환자의 심리사회적, 정서적, 생활환경적 요인을 통합적으로 탐색하여 보다 지속가능한 회복을 돕는 전문 상담 프로그램입니다.',
    },
    {
      title: '사이먼튼테라피',
      description:
        "사이먼튼 테라피(Simonton Therapy)는 암을 비롯한 만성 질환 환자들의 심리적 회복력과 삶의 질 향상을 목적으로 개발된 심신의학 기반의 심리교육 및 상담 프로그램입니다. 1970년대 방사선종양학자 Carl Simonton 박사에 의해 시작된 이 치료는, “환자의 태도와 감정이 치료 결과에 실질적 영향을 미친다”는 통합적 관점에 뿌리를 두고 있습니다.",
    },
    {
      title: '생활습관 의학',
      description:
        '생활습관의학(Lifestyle Medicine)은 과학적 근거에 기반하여, 비약물적 치료를 통해 만성질환의 예방 치료를 추구하는 의학의 한 분야입니다. 제2형 당뇨병, 고혈압, 고지혈증, 심혈관질환, 비만, 일부 암, 우울증, 수면장애 등에 적용될 수 있습니다.',
    },
    {
      title: '앵거프리',
      description:
        '앵거프리 21일 프로젝트는\n\n‘분노’라는 감정을 억제하지 않으면서 일상 속에서 심리적 유연성과 감정조절력을 키워나가는 자가 실천 프로그램입니다.\n\n1) 21일간 매일 1개의 감정 과제\n2) 고무밴드, 감정일기, 감각카드 등 도구 활용\n3) 감정인식 → 반응멈춤 → 가치기반 선택 훈련\n4) 수용전념치료(ACT) 이론에 기반합니다. ',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      className="container mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h1 className="text-2xl mb-6">
        <span className="text-red-600">통합의학적</span> 치료
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg hover:border-red-200 transition-all"
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
  )
}

export default Sections
