import React, { useState } from 'react';
import { TabContainer, TabButton, TabContent, NotificationBadge } from './style';

interface TabProps {
  tabs: {
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    notification?: number;
  }[];
  shape?: 'capsule' | 'rectangle';
  alignment?: 'left' | 'center' | 'right';
}

const Tab: React.FC<TabProps> = ({ tabs, shape = 'rectangle', alignment = 'left' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleTabClick = (index: number) => {
    if (index !== activeIndex && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setAnimating(false);
      }, 10);
    }
  };

  const justifyContentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };

  return (
    <div>
      <TabContainer justifyContent={justifyContentMap[alignment]}>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={index === activeIndex}
            onClick={() => handleTabClick(index)}
            shape={shape}
          >
            {tab.icon && <span style={{ marginRight: '8px' }}>{tab.icon}</span>}
            {tab.label}
            {tab.notification !== undefined && (
              <NotificationBadge active={index === activeIndex}>
                {tab.notification}
              </NotificationBadge>
            )}
          </TabButton>
        ))}
      </TabContainer>
      <TabContent isActive={!animating}>
        {tabs[activeIndex].content}
      </TabContent>
    </div>
  );
};

export default Tab;