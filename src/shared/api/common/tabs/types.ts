export interface TabItem {
  name: string
  title: string
}

export interface TabsProps {
  tabs: TabItem[]
  activeTab: TabItem
}

export interface TabsEmits {
  (e: "update:changeTab", tab: TabItem): void
}
