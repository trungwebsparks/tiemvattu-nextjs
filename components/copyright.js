import Link from 'next/link'
import Typography from '@material-ui/core/Typography'

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link target="_blank" href="https://tiemvattu.com">
          <a>tiemvattu.com</a>
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }