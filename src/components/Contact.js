import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PhoneAndroidRoundedIcon from '@material-ui/icons/PhoneAndroidRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        'background-image': 'radial-gradient(circle, white,lightblue)'
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    'm-t-10': {
        'margin-top': '100px'
    }
}));

function Contact() {
    const classes = useStyles();
    return (
        <div className={classes['m-t-10']}>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            9:30 am          </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>

                        <TimelineDot color="primary" >
                            <AccountCircleRoundedIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Name
            </Typography>
                            <Typography>Lohitha Goddati</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">

                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <PhoneAndroidRoundedIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Contact
            </Typography>
                            <Typography>9492305380</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <AlternateEmailRoundedIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Gmail
            </Typography>
                            <Typography>lohithagoddati@gmail.com</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <MessageRoundedIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                City
            </Typography>
                            <Typography>Hyderabad</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )


}
export default Contact;