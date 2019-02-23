import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default () => (
    <Layout>
        <div className="four-oh-four">
            <h1>Ooops!</h1>
            <h2>You have lost your way</h2>
            <p>Please use any of the links above or <Link to={`/`} className="bold">go home</Link>.</p>
        </div>
    </Layout>
)