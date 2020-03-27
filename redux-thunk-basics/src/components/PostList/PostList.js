import React from 'react';
import * as Actions from '../../store/Actions/index';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import userHeader from '../userHeader/userHeader';

const styles = {
    root: {
        width: '100%',
        backgroundColor: 'white',
    },
    inline: {
        display: 'inline',
    }
}

class PostList extends React.Component {
    componentDidMount(){
        this.props.dispatch(Actions.fetchPosts())
    }

    render(){
        const { classes } = this.props;
        const PostList = this.props.posts.map(post => {
            return (
                <List className={classes.root}>
                    <ListItem alignItems='flex-start' key={post.id}>
                        <ListItemText
                            secondary={
                                <React.Fragment>
                                    <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                    >
                                    {post.title}
                                    </Typography>
                                    <br />
                                    {post.body}
                                    <userHeader userId={post.userId} />
                                </React.Fragment>
                             }
                        />
                    </ListItem>
                    <Divider />
                </List>
            )
            
        })
        return(
            <div>{PostList}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default withStyles(styles)(connect(mapStateToProps)(PostList));