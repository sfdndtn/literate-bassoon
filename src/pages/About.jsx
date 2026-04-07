import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const features = [
    {
      title: 'AI智能分析',
      description: '利用先进的AI技术，模拟专业面试官的视角，对用户的回答进行全面分析，识别核心问题和不足。'
    },
    {
      title: '专业改进建议',
      description: '根据分析结果，提供具体的改进方向和方法，帮助用户提升面试表现。'
    },
    {
      title: '高质量参考回答',
      description: '基于用户的面试题和目标岗位，生成针对性的高质量参考回答作为学习范例。'
    },
    {
      title: '智能追问预测',
      description: '基于用户的回答，预测面试官可能的后续追问，帮助用户提前准备。'
    },
    {
      title: '响应式设计',
      description: '适配不同设备，用户可以在电脑、平板和手机上使用工具。'
    },
    {
      title: '实时分析',
      description: '快速分析用户的回答，提供即时反馈，帮助用户及时调整。'
    }
  ]

  const technology = [
    {
      category: '前端',
      tools: ['React', 'React Router', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: '后端',
      tools: ['Express.js', 'Node.js', 'DeepSeek API', 'Axios']
    },
    {
      category: '开发工具',
      tools: ['Vite', 'Git', 'VS Code']
    }
  ]

  const howToUse = [
    {
      step: '1',
      title: '输入信息',
      description: '输入目标岗位、面试题和你的回答'
    },
    {
      step: '2',
      title: '分析回答',
      description: '点击分析按钮，系统将对您的回答进行智能分析'
    },
    {
      step: '3',
      title: '查看结果',
      description: '查看分析结果，包括核心问题、改进建议、预测追问和参考回答'
    },
    {
      step: '4',
      title: '学习改进',
      description: '根据分析结果，学习改进自己的面试回答'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">关于工具</h1>
            <p className="text-xl text-gray-600">了解面试分析工具的功能、技术和使用方法</p>
          </div>

          {/* 工具简介 */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <h2 className="section-title mb-6">工具简介</h2>
            <p className="text-gray-700 mb-6">
              面试分析工具是一款基于AI的智能面试辅助平台，旨在帮助求职者提升面试成功率。通过分析用户的面试回答，提供详细的改进建议和参考回答，帮助用户更好地准备面试。
            </p>
            <p className="text-gray-700 mb-6">
              工具利用先进的AI技术，模拟专业面试官的视角，对用户的回答进行全面分析，识别核心问题和不足，并提供具体的改进方向。同时，工具还能预测面试官可能的后续追问，帮助用户提前准备。
            </p>
            <p className="text-gray-700">
              无论您是即将参加面试的求职者，还是希望提升面试技巧的职场人士，面试分析工具都能为您提供有价值的帮助，让您在面试中更加自信和从容。
            </p>
          </div>

          {/* 核心功能 */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <h2 className="section-title mb-6">核心功能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 技术实现 */}
          <div className="bg-white rounded-2xl shadow-soft p-8 mb-12">
            <h2 className="section-title mb-6">技术实现</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technology.map((tech, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 使用方法 */}
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="section-title mb-6">使用方法</h2>
            <div className="space-y-8">
              {howToUse.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-xl">{step.step}</span>
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About