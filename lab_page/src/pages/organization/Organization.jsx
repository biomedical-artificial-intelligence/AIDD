import React, { useState } from 'react'
import Node from './Node'
import organization from '../../assets/data/org.json'
import TeamTable from './TeamTable'
import './Organization.css'

// 노드별 데이터를 설정
const nodeData = {
  'BIO LAB': [
    { 부서: 'BIO LAB', 성명: '최지윤', 직급: '', 담당업무: '' },
    { 부서: 'BIO LAB', 성명: '심다미', 직급: '', 담당업무: '' },
    { 부서: 'BIO LAB', 성명: '조윤희', 직급: '', 담당업무: '' },
    { 부서: 'BIO LAB', 성명: '정혜인', 직급: '', 담당업무: '' },
  ],
  DEV: [
    { 부서: 'DEV', 성명: '김지수', 직급: '', 담당업무: '' },
    { 부서: 'DEV', 성명: '송인혁', 직급: '', 담당업무: '' },
    { 부서: 'DEV', 성명: '배근혜', 직급: '', 담당업무: '' },
  ],
}

const Organization = () => {
  const [selectedNode, setSelectedNode] = useState(null) // 선택된 노드 상태

  const handleNodeClick = (node) => {
    setSelectedNode(node.tradingName) // 선택된 노드의 이름을 상태로 설정
  }

  const selectedNodeData = selectedNode ? nodeData[selectedNode] : null

  return (
    <div className="total-container">
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
