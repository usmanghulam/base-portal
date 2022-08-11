import Box from '@mui/material/Box'
import { BaseDesign } from '../../../theme/BaseDesign/BaseDesign'

/**
 * Login Wrapper style
 */

export const Wrapper = () => {
  const { colors } = BaseDesign
  return (
    <Box
      sx={{
        position: 'fixed',
        backgroundColor: `${colors.primaryColor}`,
        width: '100%',
        height: '100%',
        color: 'rgba(255, 255, 255, 0.9)',
      }}
    ></Box>
  )
}
