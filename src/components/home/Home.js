import React from 'react';
import '../../styles/Home.css';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default (props) => {
    return (
        <React.Fragment>
            <Container>

                <Grid container spacing={3}>
                    <Grid item xs={8}>
                    <h2>Articles</h2>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => {
                                return (
                                    <div>
                                        <a href="">
                                            <h3>
                                                Why Do React Hooks Rely on Call Order?
                                                </h3>
                                            <p>
                                                Hit request for all api at server which 
                                                used to render when we load refresh the page. Make a store from this data and send down to client side.
                                            </p>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={4}>
                        <div className="advertisement">
                            <span>adv</span>
                        </div>
                        <div className="advertisement">
                            <span>adv</span>
                        </div>
                        <div className="advertisement">
                            <span>adv</span>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment >
    )
}