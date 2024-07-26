import { brandTheme } from "./theme/theme"

export type CategoryType = {
  name: string
  __typename: string
}

export type ExpertType = {
  firstName: string
  lastName:string
  title: string
  company:string
}

export type ImageType = {
  uri: string,
  __typename: string
}

export type EdgeType = {
  name:string
  id: string
  length:number
  categories: CategoryType[]
  experts: ExpertType[]
  image?: ImageType
}
export type DataProps = {
  contentCards: EdgeType[]
}

//--- Context type

export type ContextChildrenType = {
  children: React.ReactNode
}

export type SearchContextType = {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>> 
  searchResults: any[]
  searchLoading:boolean
  searchError:null
  handleSearch:(query:string)=>void,
}

export type ThemeMode = "dark" | "light"

export type ThemeContextType = {
  brandTheme: typeof brandTheme
  mode: ThemeMode
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>
}