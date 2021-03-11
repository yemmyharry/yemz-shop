import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: 345,
        marginTop: '2rem',
        marginRight: '2rem'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent:{
        display: 'flex',
        justifyContent: 'space-between'

    }
}))
