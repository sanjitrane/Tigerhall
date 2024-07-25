import {gql, useQuery} from '@apollo/client';

export const GET_CONTENT = gql`
query getContent($keywords:String!){contentCards(filter:{limit:20, keywords:$keywords, types:[PODCAST]}){
  edges{
    ... on Podcast{
      name
      id
      length
      image{
        uri
      }
      categories {
        name
      }
      experts {
        firstName
        lastName
        title
        company
      }
    }
  }
}
}
`
