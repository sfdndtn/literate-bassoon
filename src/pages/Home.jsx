import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const skills = [
    { name: '产品规划', level: 90 },
    { name: '用户研究', level: 85 },
    { name: '数据分析', level: 80 },
    { name: '原型设计', level: 95 },
    { name: '用户体验', level: 92 },
    { name: '项目管理', level: 88 },
  ]

  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                面试分析工具 <span className="text-accent-300">AI智能助手</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                基于AI的智能面试辅助工具，帮助您分析面试回答，提供专业改进建议，提升面试成功率
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/project#demo" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 transform hover:scale-105 transition-transform">
                  立即体验
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  AI驱动
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  专业分析
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  实时反馈
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  提升成功率
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 关于工具 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title text-center mb-12">产品思维与解决方案</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6">问题分析</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-medium mb-3">面试准备的痛点</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>缺乏专业的面试反馈和指导</li>
                      <li>难以识别自己回答中的问题</li>
                      <li>不知道如何改进面试表现</li>
                      <li>无法预测面试官的后续追问</li>
                      <li>缺乏高质量的参考回答</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-medium mb-3">市场需求分析</h4>
                    <p className="text-gray-700 mb-3">
                      据统计，超过70%的求职者在面试中因回答不当而失去机会。传统的面试准备方法效果有限，难以应对面试官的随机提问。
                    </p>
                    <p className="text-gray-700">
                      市场需要一款智能工具，能够提供专业的面试分析和改进建议，帮助求职者提升面试成功率。
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6">解决方案设计</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-medium mb-3">核心功能</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium">面试回答分析</h5>
                          <p className="text-gray-600 text-sm">分析回答的逻辑性、完整性和专业性</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium">改进建议</h5>
                          <p className="text-gray-600 text-sm">提供具体的改进方向和方法</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium">参考回答</h5>
                          <p className="text-gray-600 text-sm">生成高质量的参考回答作为范例</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium">预测追问</h5>
                          <p className="text-gray-600 text-sm">预测面试官可能的后续问题</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/project#demo" className="btn-primary w-full text-center">
                    立即体验
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 项目展示 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title text-center mb-12">产品展示</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 用户旅程图 */}
              <motion.div 
                className="card"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-4">用户旅程图</h3>
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">输入信息</h4>
                        <p className="text-gray-600 text-sm">用户输入目标岗位、面试题和回答</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">分析处理</h4>
                        <p className="text-gray-600 text-sm">系统通过AI分析回答内容</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">生成结果</h4>
                        <p className="text-gray-600 text-sm">系统生成核心问题、改进建议、参考回答和预测追问</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">学习改进</h4>
                        <p className="text-gray-600 text-sm">用户查看分析结果，学习改进面试技巧</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  清晰的用户旅程设计，确保用户能够轻松完成面试分析的全过程，获得有价值的反馈。
                </p>
              </motion.div>
              
              {/* 技术架构 */}
              <motion.div 
                className="card"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">技术架构</h3>
                <div className="bg-gray-100 rounded-lg p-6 mb-4">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium mb-2">前端</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Framer Motion</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">React Router</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium mb-2">后端</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Express.js</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">DeepSeek API</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Axios</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-medium mb-2">开发工具</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Vite</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Git</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">VS Code</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  现代化的技术架构，确保系统的稳定性、性能和可扩展性。
                </p>
              </motion.div>
            </div>
            <div className="text-center mt-12">
              <Link to="/project#demo" className="btn-primary transform hover:scale-105 transition-transform">
                立即体验
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 核心功能 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title text-center mb-12">核心功能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">面试回答分析</h3>
                <p className="text-gray-600 text-center mb-4">
                  分析回答的逻辑性、完整性和专业性，识别核心问题和不足。
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">功能价值</h4>
                  <p className="text-gray-600 text-sm">
                    帮助用户客观了解自己的面试表现，识别需要改进的地方，避免在实际面试中犯同样的错误。
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">改进建议</h3>
                <p className="text-gray-600 text-center mb-4">
                  提供具体的改进方向和方法，帮助用户提升面试表现。
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">功能价值</h4>
                  <p className="text-gray-600 text-sm">
                    为用户提供可操作的改进建议，帮助用户有针对性地提升面试技巧，提高面试成功率。
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">参考回答</h3>
                <p className="text-gray-600 text-center mb-4">
                  生成高质量的参考回答作为范例，帮助用户学习如何更好地回答面试问题。
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">功能价值</h4>
                  <p className="text-gray-600 text-sm">
                    为用户提供高质量的参考回答，帮助用户学习如何构建逻辑清晰、内容充实的面试回答。
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">预测追问</h3>
                <p className="text-gray-600 text-center mb-4">
                  基于用户的回答，预测面试官可能的后续追问，帮助用户提前准备。
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">功能价值</h4>
                  <p className="text-gray-600 text-sm">
                    帮助用户提前准备可能的追问，避免在面试中因措手不及而影响表现。
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                准备好提升您的面试表现了吗？
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl mb-10">
                立即体验AI面试分析工具，让您的面试更有信心，提高成功率
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/project#demo" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 transform hover:scale-105 transition-transform">
                  立即体验
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <div className="text-3xl font-bold">70%</div>
                  <div className="text-sm">面试成功率提升</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm">用户满意度</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm">用户使用</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home