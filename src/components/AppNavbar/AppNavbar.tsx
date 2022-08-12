import react from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { List, ListItem } from '@mui/material'
import { CustomNavbar } from '../../views/base/StyledNavbar'

export default function AppNavbar() {
  return (
    <>
      {/* <Wrapper/> */}
      <AppBar position='static' sx={{ pb: 2 }}>
        <Toolbar>
          <List style={{ display: 'flex' }}>
            <CustomNavbar>
              <ListItem
                sx={{
                  '&:hover': {
                    color: '#1D1446',
                    backgroundColor: '#61D1AE;',
                    borderRadius: '22px',
                  },
                }}
              >
                Home
              </ListItem>
              <ListItem>Payments</ListItem>
              <ListItem>Vendors</ListItem>
              <ListItem>Statements</ListItem>
            </CustomNavbar>
          </List>
        </Toolbar>
      </AppBar>
    </>
  )
}
