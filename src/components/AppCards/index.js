import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'

const AppCards = (props) => {
const {data: { confirmed, recovered, deaths, lastUpdate }} = props;
    if (!confirmed) {
        return <Typography style={{textAlign: "center"}} variant="h5" component="h3">Loading</Typography>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Infected
                    </Typography>
                        <Typography gutterBottom color="textSecondary" component="h6" variant="h6" >
                            <CountUp className={styles.infected} start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            Number of active cases of COVID-19
                    </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Recovered
                    </Typography>
                        <Typography gutterBottom color="textSecondary" component="h6" variant="h6" >
                            <CountUp className={styles.recovered} start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Number of recoveries of COVID-19
                    </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Deaths
                    </Typography>
                        <Typography gutterBottom color="textSecondary" component="h6" variant="h6" >
                            <CountUp className={styles.deaths} start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            Number of deaths of COVID-19
                    </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default AppCards
