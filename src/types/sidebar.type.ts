export type MenuItem = {
    href: string;
    label: string;
    icon: React.ReactNode;
}

export interface SidebarProps {
    menuItems: MenuItem[];
}