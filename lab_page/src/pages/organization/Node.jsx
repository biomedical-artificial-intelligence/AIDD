import React from 'react'
import PropTypes from 'prop-types'
import { Tree, TreeNode } from 'react-organizational-chart'
import OrganizationChart from './OrganizationChart'

// Node 컴포넌트 정의 (트리 구조의 각 노드)
const Node = ({ o, onNodeClick }) => {
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'#bbc'}
      lineBorderRadius={'12px'}
      className="org-tree-root"
    >
      <TreeNode label={<OrganizationChart org={o} onNodeClick={onNodeClick} />}>
        {o.organizationChildRelationship &&
          o.organizationChildRelationship.map((child, index) => (
            <TreeNode
              key={index}
              label={
                <OrganizationChart org={child} onNodeClick={onNodeClick} />
              }
            />
          ))}
      </TreeNode>
    </Tree>
  )
}

// PropTypes 정의
Node.propTypes = {
  // o prop은 노드 데이터를 포함하는 객체
  o: PropTypes.shape({
    tradingName: PropTypes.string.isRequired, // 노드 이름
    organizationChildRelationship: PropTypes.arrayOf(
      PropTypes.shape({
        tradingName: PropTypes.string.isRequired, // 자식 노드의 이름
      })
    ).isRequired, // 자식 노드 배열 필수
  }).isRequired, // o prop은 필수
  onNodeClick: PropTypes.func.isRequired, // 노드 클릭 핸들러 함수 필수
}

export default Node
