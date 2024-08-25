import { Popover, Select, Group, ActionIcon } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';
import { useState } from 'react';
import './LanguageSwitcher.css';

export interface AvailableLanguages {
    language: 'en' | 'de' | 'pl'
}

const LanguageSwitcher = ({ onLanguageChange }: { onLanguageChange: (value: AvailableLanguages['language']) => void }) => {
    const [opened, setOpened] = useState(false);
    const getLanguage = localStorage.getItem('language') || 'en';
    const [language, setLanguage] = useState<AvailableLanguages['language']>(getLanguage as AvailableLanguages['language']);
  
    const languages = [
      { value: 'en', label: 'English' },
      { value: 'de', label: 'Deutsch' },
      { value: 'pl', label: 'Polski' },
    ];
  
    const handleLanguageChange = (value: AvailableLanguages['language']) => {
      setLanguage(value);
      localStorage.setItem('language', value);
      onLanguageChange(value);
      setOpened(false);
    };
  
    return (
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        width={200}
        position="bottom"
        withArrow
      >
        <Popover.Target>
        <ActionIcon onClick={() => setOpened((o) => !o)} style={{ cursor: 'pointer' }}>
          <IconLanguage style={{ width: '16px', height: '16px' }} stroke={1.5} />
        </ActionIcon>
      </Popover.Target>

      <Popover.Dropdown unstyled>
        <Select
          value={language}
          onChange={(value) => handleLanguageChange(value as AvailableLanguages['language'])}
          data={languages}
          placeholder="Select language"
          styles={() => ({
            item: {
              '&[data-selected]': {
                backgroundColor: 'var(--brand-orange)',
              },
              '&[data-selected]:hover': {
                backgroundColor: 'var(--brand-orange)',
              },
            },
          })}
        />
      </Popover.Dropdown>
      </Popover>
    );
  };
  
  export default LanguageSwitcher;