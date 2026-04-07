import React from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* 项目标题 */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800"
            >
              面试分析工具
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              基于AI的智能面试辅助平台，帮助求职者提升面试成功率，获得理想工作
            </motion.p>
          </div>

          {/* 项目标签 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            <span className="bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">AI</span>
            <span className="bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">产品设计</span>
            <span className="bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">用户体验</span>
            <span className="bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">前端开发</span>
            <span className="bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">后端开发</span>
          </motion.div>

          {/* 内容区域 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 backdrop-blur-sm bg-opacity-95">
            {/* 项目概览 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="overview"
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">项目概览</h2>
              <p className="text-gray-700 mb-6">
                面试分析工具是一款基于AI的智能面试辅助工具，旨在帮助用户提升面试成功率。通过分析用户的面试回答，提供详细的改进建议和参考回答，帮助用户更好地准备面试。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">项目目标</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>帮助用户分析面试回答的问题和不足</li>
                    <li>提供具体的改进建议，提升面试表现</li>
                    <li>生成高质量的参考回答，作为学习范例</li>
                    <li>预测面试官可能的后续追问，帮助用户提前准备</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">目标用户</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>即将参加面试的求职者</li>
                    <li>希望提升面试技巧的职场人士</li>
                    <li>需要模拟面试练习的学生</li>
                    <li>人力资源和招聘人员</li>
                  </ul>
                </motion.div>
              </div>
              <motion.div 
                whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h3 className="font-semibold text-lg mb-4">核心功能</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">面试回答分析</h4>
                      <p className="text-gray-600 text-sm">分析回答的逻辑性、完整性和专业性</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">改进建议</h4>
                      <p className="text-gray-600 text-sm">提供具体的改进方向和方法</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">参考回答</h4>
                      <p className="text-gray-600 text-sm">生成高质量的参考回答作为范例</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">预测追问</h4>
                      <p className="text-gray-600 text-sm">预测面试官可能的后续问题</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* 项目背景 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="background"
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">项目背景</h2>
              <p className="text-gray-700 mb-6">
                在当今竞争激烈的就业市场中，面试表现往往是决定求职成败的关键因素。然而，许多求职者在面试准备过程中面临着诸多挑战：
              </p>
              <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100 mb-6"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">市场背景</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li>据统计，超过70%的求职者在面试中因回答不当而失去机会</li>
                    <li>传统的面试准备方法（如背诵答案）效果有限，难以应对面试官的随机提问</li>
                    <li>缺乏专业的反馈和指导，无法了解自己的面试表现</li>
                    <li>AI技术的发展为智能面试辅助提供了可能</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">项目动机</h3>
                  <p className="text-gray-700 mb-4">
                    基于上述市场背景，我希望创建一款智能面试分析工具，帮助求职者：
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li>了解自己面试回答的优缺点</li>
                    <li>获得专业的改进建议</li>
                    <li>学习高质量的回答方式</li>
                    <li>提前准备可能的追问</li>
                  </ul>
                </motion.div>
            </motion.section>

            {/* 痛点分析 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="pain-point"
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">痛点分析</h2>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">痛点一：面试准备缺乏针对性</h3>
                      <p className="text-gray-700 mb-3">
                        许多求职者在面试前会进行准备，但往往缺乏针对性，不知道自己的回答存在哪些问题，也不知道如何改进。
                      </p>
                      <div className="bg-primary-50 p-3 rounded-lg">
                        <p className="text-gray-700 font-medium">
                          <strong>解决方案：</strong> 通过AI分析用户的回答，识别核心问题和不足，提供具体的改进建议。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">痛点二：缺乏专业反馈</h3>
                      <p className="text-gray-700 mb-3">
                        求职者通常只能通过自己的感觉来评估面试表现，缺乏专业人士的反馈和指导。
                      </p>
                      <div className="bg-primary-50 p-3 rounded-lg">
                        <p className="text-gray-700 font-medium">
                          <strong>解决方案：</strong> 利用AI技术，模拟专业面试官的视角，提供客观、专业的反馈。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">痛点三：难以预测面试官的问题</h3>
                      <p className="text-gray-700 mb-3">
                        面试官的问题往往具有随机性，求职者难以全面准备，容易在现场出现措手不及的情况。
                      </p>
                      <div className="bg-primary-50 p-3 rounded-lg">
                        <p className="text-gray-700 font-medium">
                          <strong>解决方案：</strong> 基于用户的回答，预测面试官可能的后续追问，帮助用户提前准备。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">痛点四：缺乏高质量的参考回答</h3>
                      <p className="text-gray-700 mb-3">
                        求职者在准备面试时，往往缺乏高质量的参考回答作为学习范例，难以了解什么是好的回答。
                      </p>
                      <div className="bg-primary-50 p-3 rounded-lg">
                        <p className="text-gray-700 font-medium">
                          <strong>解决方案：</strong> 基于用户的面试题和目标岗位，生成针对性的高质量参考回答。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* 竞品调研 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="competitor"
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">竞品调研</h2>
              <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100 mb-8"
                >
                  <h3 className="font-semibold text-lg mb-4">竞品对比</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-primary-50 to-primary-100">
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold">工具名称</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold">核心功能</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold">优势</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold">劣势</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-medium">面试分析工具</td>
                          <td className="border border-gray-200 px-4 py-3">面试回答分析、改进建议、参考回答、预测追问</td>
                          <td className="border border-gray-200 px-4 py-3">专注于面试场景，分析深度高，针对性强，界面简洁易用</td>
                          <td className="border border-gray-200 px-4 py-3">功能相对单一，仅专注于面试分析</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="border border-gray-200 px-4 py-3 font-medium">豆包</td>
                          <td className="border border-gray-200 px-4 py-3">通用AI聊天，可回答面试相关问题</td>
                          <td className="border border-gray-200 px-4 py-3">功能全面，可处理多种场景，知识覆盖面广</td>
                          <td className="border border-gray-200 px-4 py-3">面试分析深度不足，缺乏针对性，需要用户手动引导，界面不够专注</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100 mb-8"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">竞争优势</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li><strong>专注性</strong>：专门针对面试场景设计，深度分析面试回答的问题和不足</li>
                    <li><strong>针对性</strong>：基于目标岗位进行个性化分析，提供更符合岗位需求的建议</li>
                    <li><strong>全面性</strong>：提供核心问题、改进建议、参考回答和预测追问的完整分析</li>
                    <li><strong>易用性</strong>：简洁直观的用户界面，操作简单，分析结果清晰明了</li>
                    <li><strong>专业性</strong>：模拟专业面试官的视角，提供专业的面试反馈</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">与豆包的核心区别</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">场景专注度</h4>
                        <p className="text-gray-600">面试分析工具专门针对面试场景，深度优化了面试分析算法，而豆包是通用AI，面试分析只是其众多功能之一。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">分析深度</h4>
                        <p className="text-gray-600">面试分析工具提供更深入的面试分析，包括逻辑结构、表达清晰度、案例具体性等多个维度，而豆包的分析相对表面。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">个性化程度</h4>
                        <p className="text-gray-600">面试分析工具基于目标岗位进行个性化分析，提供更符合岗位需求的建议，而豆包的回答相对通用，缺乏针对性。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium">用户体验</h4>
                        <p className="text-gray-600">面试分析工具界面简洁直观，操作简单，分析结果清晰明了，而豆包需要用户手动引导，界面不够专注。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">5</span>
                      </div>
                      <div>
                        <h4 className="font-medium">功能完整性</h4>
                        <p className="text-gray-600">面试分析工具提供完整的面试分析流程，包括核心问题、改进建议、参考回答和预测追问，而豆包需要用户多次交互才能获得类似信息。</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
            </motion.section>

            {/* 产品设计 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="design"
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">产品设计</h2>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">设计理念</h3>
                  <p className="text-gray-700 mb-4">
                    以用户为中心，简洁直观，注重用户体验，让用户能够轻松地分析面试回答并获得有价值的反馈。
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">技术架构</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-3 text-primary-600">前端</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>React</li>
                        <li>React Router</li>
                        <li>Tailwind CSS</li>
                        <li>Framer Motion</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-3 text-primary-600">后端</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>DeepSeek API</li>
                        <li>Axios</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">用户流程</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">1</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">用户输入目标岗位、面试题和回答</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">2</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">系统通过DeepSeek API分析回答</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">3</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">系统生成分析结果，包括核心问题、改进建议、预测追问和参考回答</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">4</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">用户查看分析结果并学习改进</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">5</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">用户可以重新输入新的面试题和回答进行分析</p>
                      </div>
                    </li>
                  </ol>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">界面设计</h3>
                  <p className="text-gray-700 mb-4">
                    采用现代化的设计风格，简洁大方，重点突出分析结果。使用渐变色彩和微妙的动画效果，提升用户体验。
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* 项目成果 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="results"
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">项目成果</h2>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">功能实现</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li>面试回答分析功能，识别核心问题和不足</li>
                    <li>改进建议生成，提供具体的改进方向</li>
                    <li>参考回答生成，作为学习范例</li>
                    <li>预测追问功能，帮助用户提前准备</li>
                    <li>响应式设计，适配不同设备</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">技术成果</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li>成功集成DeepSeek API，实现智能分析</li>
                    <li>构建了完整的前后端架构</li>
                    <li>实现了响应式设计，提升用户体验</li>
                    <li>添加了动画效果，增强视觉体验</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">用户反馈</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary-500">
                      <p className="text-gray-700 italic">
                        "这款工具非常实用，帮助我发现了自己面试回答中的问题，提供的改进建议也很有针对性。"
                      </p>
                      <p className="text-gray-500 text-sm mt-2 font-medium">— 求职者 A</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary-500">
                      <p className="text-gray-700 italic">
                        "参考回答质量很高，给了我很多启发，让我知道如何更好地回答面试问题。"
                      </p>
                      <p className="text-gray-500 text-sm mt-2 font-medium">— 求职者 B</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* 功能演示 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="demo"
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">功能演示</h2>
              <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">面试分析工具演示视频</h3>
                  <p className="text-gray-700 mb-6">
                    观看以下视频，了解面试分析工具的核心功能和使用流程。
                  </p>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <video 
                      src="/demo.mp4" 
                      className="w-full h-full object-cover"
                      controls
                      poster=""
                    >
                      您的浏览器不支持视频播放。
                    </video>
                  </div>
                  <div className="mt-6 space-y-4">
                    <motion.div 
                      whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2 text-primary-600">视频内容概览</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>工具介绍和核心功能</li>
                        <li>如何输入目标岗位、面试题和回答</li>
                        <li>分析结果解读：核心问题、改进建议</li>
                        <li>参考回答和预测追问功能</li>
                        <li>实际使用案例演示</li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h4 className="font-medium mb-2 text-primary-600">使用步骤</h4>
                      <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>输入目标岗位（例如：前端开发工程师）</li>
                        <li>输入面试题（例如：请描述一个你做过的最具挑战性的项目）</li>
                        <li>输入你的回答</li>
                        <li>点击「分析回答」按钮</li>
                        <li>查看分析结果，包括核心问题、改进建议、预测追问和参考回答</li>
                      </ol>
                    </motion.div>
                  </div>
                </motion.div>
            </motion.section>

            {/* 关于工具 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="about"
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">关于工具</h2>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">工具简介</h3>
                  <p className="text-gray-700 mb-4">
                    面试分析工具是一款基于AI的智能面试辅助平台，旨在帮助求职者提升面试成功率。通过分析用户的面试回答，提供详细的改进建议和参考回答，帮助用户更好地准备面试。
                  </p>
                  <p className="text-gray-700">
                    工具利用先进的AI技术，模拟专业面试官的视角，对用户的回答进行全面分析，识别核心问题和不足，并提供具体的改进方向。同时，工具还能预测面试官可能的后续追问，帮助用户提前准备。
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">核心功能</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li>面试回答分析，识别核心问题和不足</li>
                    <li>提供具体的改进建议，帮助用户提升面试表现</li>
                    <li>生成高质量的参考回答，作为学习范例</li>
                    <li>预测面试官可能的后续追问，帮助用户提前准备</li>
                    <li>响应式设计，适配不同设备</li>
                  </ul>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">技术实现</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-3 text-primary-600">前端</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>React</li>
                        <li>React Router</li>
                        <li>Tailwind CSS</li>
                        <li>Framer Motion</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-3 text-primary-600">后端</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>DeepSeek API</li>
                        <li>Axios</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">使用方法</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">1</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">输入目标岗位：例如 "前端开发工程师"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">2</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">输入面试题：例如 "请描述一个你做过的最具挑战性的项目"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">3</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">输入你的回答：详细描述你的回答内容</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">4</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">点击「分析回答」按钮：系统会自动分析你的回答</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 font-semibold">5</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex-grow">
                        <p className="text-gray-700">查看分析结果：包括核心问题、改进建议、预测追问和参考回答</p>
                      </div>
                    </li>
                  </ol>
                </motion.div>
              </div>
            </motion.section>

            {/* 联系我们 */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              id="contact"
            >
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">联系信息</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">求职人</h4>
                        <p className="text-gray-600">杨杰</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">邮箱</h4>
                        <p className="text-gray-600">458898567@qq.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">电话</h4>
                        <p className="text-gray-600">18318416927</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-4">常见问题</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2 text-primary-600">Q: 面试分析工具如何工作？</h4>
                      <p className="text-gray-600">A: 面试分析工具利用AI技术，分析用户的面试回答，识别核心问题和不足，并提供具体的改进建议和参考回答。</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2 text-primary-600">Q: 分析结果需要多长时间？</h4>
                      <p className="text-gray-600">A: 分析结果通常在几秒钟内生成，具体时间取决于网络速度和回答长度。</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2 text-primary-600">Q: 工具支持哪些类型的面试？</h4>
                      <p className="text-gray-600">A: 工具支持各种类型的面试，包括技术面试、行为面试、案例面试等。</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2 text-primary-600">Q: 分析结果的准确性如何？</h4>
                      <p className="text-gray-600">A: 分析结果基于先进的AI技术，具有较高的准确性，但最终的面试表现还取决于用户的实际准备和临场发挥。</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Project