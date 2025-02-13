import {
  IconNews,
} from '@tabler/icons-vue';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  {
    title: 'Test',
    icon: IconNews,
    to: 'news',
  }
];

export default sidebarItem;
