import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
    root: {
        background: '#C0EDF2',
        color: "#222222",
        position: "relative",
        borderRadius: 28,
        height: 36,
        border: 'solid 8px white',
        padding: '0 30px',
        fontFamily: "'Varela Round', sans-serif",
        fontSize: 20,
        whiteSpace: 'nowrap',
    },
};

function ClassNames(props) {
    const { classes, children, className, ...other } = props;

    return (
        <TextField className={clsx(classes.root, className)} {...other}>
            {children || 'class names'}
        </TextField>
    );
}

ClassNames.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);