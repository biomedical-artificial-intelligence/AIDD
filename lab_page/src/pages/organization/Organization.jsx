import React, { useState } from 'react'
import Node from './Node'
import organization from '../../assets/data/org.json'
import TeamTable from './TeamTable'
import './Organization.css'
import { Helmet } from 'react-helmet-async';

// 노드별 데이터를 설정
const nodeData = {
  'Data': [
    {부서: 'Data', 성명: '조윤희', 담당업무: "1. Patient's Data Collection 2. Whole RNA seq. 3. Data Analysis"},
    {부서: 'Data', 성명: '이수진', 담당업무: "1. Patient's Data Collection 2. Whole RNA seq. 3. Data Analysis"},
  ],
  'Development': [
    { 부서: 'Development', 성명: '김지수', 담당업무: '1. PPI simulation system development 2. HPC management 3. Prediction Modeling 4. system and algorithm development' },
    { 부서: 'Development', 성명: '배근혜', 담당업무: '1. PPI simulation system development 2. HPC management 3. Prediction Modeling 4. system and algorithm development' },
  ],
  'in Silico': [
    { 부서: 'in Silico', 성명: '송인혁', 담당업무: '1. Small molecule screening 2. Molecular dynamics 3. in silico criteria test 4. lead optimization' },
  ],
  'in Vitro': [
    { 부서: 'in Vitro', 성명: '최지윤', 담당업무: '1. ELISA affinity test 2. in vitro cell test 3. ADMET test' },
    { 부서: 'in Vitro', 성명: '정혜인', 담당업무: '1. ELISA affinity test 2. in vitro cell test 3. ADMET test' },
  ],
  'in Vivo': [
    { 부서: 'in Vivo', 성명: '심다미', 담당업무: '1. Mouse OSA model 2. Mouse arthritis model 3. Pathology' },
  ]
}

const Organization = () => {
  const [selectedNode, setSelectedNode] = useState(null) // 선택된 노드 상태

  // console.log('Loaded organization data:', organization)

  const handleNodeClick = (node) => {
    setSelectedNode(node.tradingName) // 선택된 노드의 이름을 상태로 설정
  }

  const selectedNodeData = selectedNode ? nodeData[selectedNode] : null

  return (
    <div className="total-container">
      <Helmet>
        <title>Organization - SilicoWorks Lab</title>
        <meta name="description" content="Organization information for SilicoWorks Lab" />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD-dev/organization" />
      </Helmet>
      <div className="page">
        <h1 className="page-title">Organization</h1>
      </div>
      <div className="main-container">
        <div className="chart-container">
          <Node o={organization} onNodeClick={handleNodeClick} />
        </div>
        {selectedNodeData && selectedNodeData.length > 0 && (
          <div className="table-container">
            {/* 선택된 노드에 대한 데이터를 표로 렌더링 */}
            <TeamTable data={selectedNodeData} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Organization
