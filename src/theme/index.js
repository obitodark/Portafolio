// import { createTheme } from '@mui/material';
import { amber, grey } from '@mui/material/colors';
import { textTransform } from '@mui/system';
// import { useContext } from 'react';
// import { ColorModeContextProvider } from '../context/ColorModeContext';

// const {colorMode}=useContext(ColorModeContextProvider)

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for light mode
                  primary: {
                      main: '#654EC4',
                      contrastText: '#ffffff'
                  },
                  background: {
                      default: '#EEEEEE'
                  },
                  divider: '#000000',
                  text: {
                      primary: grey[900],
                      secondary: grey[800]
                  },

                  components: {
                      //   Name of the component
                      MuiButton: {
                          styleOverrides: {
                              root: {
                                  fontWeight: 900,
                                  borderRadius: '12px'
                              },
                              colorPrimary: '#F8CB14'
                          }
                      }
                      //   MuiAppBar: {
                      //       styleOverrides: {
                      //           root: {
                      //               color: '#000000'
                      //           }
                      //       }
                      //   }
                      //   MuiListItemButton: {
                      //       styleOverrides: {
                      //           root: {
                      //               color: '#49F1C1',
                      //               paddingTop: '10px',
                      //               paddingBottom: '10px',
                      //               '&.Mui-selected': {
                      //                   color: '#69EEC8 ',
                      //                   backgroundColor: '#BDF5E5',
                      //                   '&:hover': {
                      //                       backgroundColor: '#BDF5E5'
                      //                   },
                      //                   '& .MuiListItemIcon-root': {
                      //                       color: '#69EEC8 '
                      //                   }
                      //               },
                      //               '&:hover': {
                      //                   backgroundColor: '#BDF5E5',
                      //                   color: '#69EEC8 ',
                      //                   '& .MuiListItemIcon-root': {
                      //                       color: '#69EEC8 '
                      //                   }
                      //               }
                      //           }
                      //       }
                      //   }
                  }
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: '#E7FE55',
                      contrastText: '#0F0F0F'
                  },

                  //   divider: deepOrange[700],
                  background: {
                      default: '#0F0F0F'
                      //   paper: deepOrange[900]
                  },
                  text: {
                      primary: '#fff',
                      secondary: grey[500]
                  },
                  components: {
                      MuiAppBar: {
                          root: {
                              colorPrimary: {
                                  backgroundColor: 'red'
                              }
                          }
                      }
                      //   MuiListItemButton: {
                      //       styleOverrides: {
                      //           root: {
                      //               color: '#49F1C1',
                      //               paddingTop: '10px',
                      //               paddingBottom: '10px',
                      //               '&.Mui-selected': {
                      //                   color: '#69EEC8 ',
                      //                   backgroundColor: '#BDF5E5',
                      //                   '&:hover': {
                      //                       backgroundColor: '#BDF5E5'
                      //                   },
                      //                   '& .MuiListItemIcon-root': {
                      //                       color: '#69EEC8 '
                      //                   }
                      //               },
                      //               '&:hover': {
                      //                   backgroundColor: '#BDF5E5',
                      //                   color: '#69EEC8 ',
                      //                   '& .MuiListItemIcon-root': {
                      //                       color: '#69EEC8 '
                      //                   }
                      //               }
                      //           }
                      //       }
                      //   }
                  }
              })
    }
});

const themes = {
    getDesignTokens
};
export default themes;
