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