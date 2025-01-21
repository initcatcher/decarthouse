"use client";
import { motion } from "framer-motion";

const Notice = () => {
  const notices = [
    {
      date: "2024.09.10",
      content: "공지내용1이 있습니다. 공지내용1이 있습니다.",
    },
    {
      date: "2023.01.31",
      content: "공지내용1이 있습니다. 공지내용1이 있습니다.",
    },
    {
      date: "2023.02.17",
      content: "공지내용1이 있습니다. 공지내용1이 있습니다.",
    },
    {
      date: "2023.02.16",
      content: "공지내용1이 있습니다. 공지내용1이 있습니다.",
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
      <h1 className="text-2xl mb-6">공지</h1>
      <div className="space-y-4">
        {notices.map((notice, index) => (
          <motion.div
            key={index}
            className="border-b pb-4"
            variants={itemVariants}
          >
            <p className="text-sm text-gray-500">{notice.date}</p>
            <p className="text-base text-gray-800 mt-2">{notice.content}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Notice;
