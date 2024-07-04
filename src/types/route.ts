interface menuProps {
  path: string,
  name: string,
  component?: any | undefined,
  children?: any[],
  redirect?: string | boolean,
  meta: object,
  menuData?: any,
  hidden: boolean
}

interface menuValue {
  path: string,
  name: string,
  component: string,
  children?: any[],
  redirect?: string | boolean,
  meta: object,
  hidden: boolean,
  level: number
}

interface menuData {
  id: string,
  url: string,
  fileIcon: string,
  menuName: string,
  component: string,
  activeMenu: string,
  children: any[],
  meta: object,
}

export type { menuProps, menuValue, menuData }
