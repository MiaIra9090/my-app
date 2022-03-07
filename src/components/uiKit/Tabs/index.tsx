import cn from 'classnames';

import css from './style.module.css';

interface Tab<T> {
  value: T;
  label: string;
  current: boolean;
}

export const sizes = ['small', 'normal'] as const;

interface Props<T> {
  tabs: Tab<T>[];
  setTab: (value: T) => void;
  className?: string;
  size?: typeof sizes[number];
}

export const Tabs = <T extends string>({ tabs, setTab, className, size }: Props<T>) => {
  return (
    <div className={cn(css.tabs, { [css.tabsSmall]: size === 'small' }, className)}>
      {tabs.map((tab) => (
        <button
          data-testid={`tab_button_${tab.value}`}
          type="button"
          key={tab.value}
          onClick={() => setTab(tab.value)}
          className={cn(css.tab, {
            [css.activeTab]: tab.current,
            [css.tabSmall]: size === 'small',
          })}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
