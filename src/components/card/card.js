import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 120,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <div style={{display:"flex"}} >
            {props.listCards.map(item => {
                return <Card className={classes.root} style={{marginRight:"10px"}} className="color-card">

                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={item.imagen}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h4">
                                {item.title}
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               {item.description}
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
        </Button>
                        <Button size="small" color="primary">
                            Learn More
        </Button>
                    </CardActions>
                </Card>
            })}

        </div>
    );
}