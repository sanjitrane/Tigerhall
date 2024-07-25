const colorPalette={
  grey:{
    100: 'rgba(244, 243, 240, 1)',
    400: 'rgba(222, 219, 212, 1)',
    500: 'rgba(42, 44, 46, 1)',
    700: 'rgba(121, 118, 112, 1)',
    800: 'rgba(77, 75, 70, 1)',
    900: 'rgba(56, 55, 51, 1)',
    1000: 'rgba(7, 7, 8, 1)',
  },
  black:'rgba(0, 0, 0, 1)',
  white: 'rgba(255, 255, 255, 1)',
  orange: {
    50:'rgba(255, 249, 246, 1)',
    600:'rgba(255, 89, 0, 1)'
  },
}

export const brandTheme={
  dark:{
    bg: colorPalette.grey[1000],
    color: colorPalette.grey[100],
    header:{
      bg: colorPalette.grey[1000],
      borderColor: colorPalette.grey[500],
    },
    search:{
      searchBorder: colorPalette.grey[700],
      searchBg: colorPalette.grey[900],
      searchIcon: colorPalette.white,
      placeholder: colorPalette.grey[700],
      textColor: colorPalette.white,
    },
    card:{
      bg:colorPalette.white,
      headerText:colorPalette.grey[700],
      titleText:colorPalette.black,
      authorText:colorPalette.grey[800],
      autorDesg: colorPalette.grey[700],
      tag: {
        bg: colorPalette.orange[50],
        textColor:  colorPalette.grey[900]
      },
      podcast:{
        bg:colorPalette.orange[600]
      },
      time:{
        bg: 'rgba(0, 0, 0, 0.7)',
        textColor: colorPalette.white
      },
      progressBar:{
        bg: colorPalette.grey[400],
        completed: colorPalette.orange[600]
      }
      
    }
  },
  light:{
    bg: colorPalette.grey[1000],
    color: colorPalette.grey[100],
    header:{
      bg: colorPalette.grey[1000],
      borderColor: colorPalette.grey[500],
    },
    search:{
      searchBorder: colorPalette.grey[700],
      searchBg: colorPalette.grey[900],
      searchIcon: colorPalette.white,
      placeholder: colorPalette.grey[700],
      textColor: colorPalette.white,
    },
    card:{
      bg:colorPalette.white,
      headerText:colorPalette.grey[700],
      titleText:colorPalette.black,
      authorText:colorPalette.grey[800],
      autorDesg: colorPalette.grey[700],
      tag: {
        bg: colorPalette.orange[50],
        textColor:  colorPalette.grey[900]
      },
      podcast:{
        bg:colorPalette.orange[600]
      },
      time:{
        bg: 'rgba(0, 0, 0, 0.7)',
        textColor: colorPalette.white
      },
      progressBar:{
        bg: colorPalette.grey[400],
        completed: colorPalette.orange[600]
      }
      
    }
  },
  
}