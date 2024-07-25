import {gql} from '@apollo/client';

export const GET_CONTENT = gql`
{contentCards(filter:{limit:20, keywords:"", types:[PODCAST]}){
  edges{
    ... on Podcast{
      name
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