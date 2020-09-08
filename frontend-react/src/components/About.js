import React from 'react';

class About extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            account: localStorage.getItem('accountProfile')
        }
    }

    render() {
        return (
            <div>
                <h1>So you don't have to worry much, okay?</h1>
            </div>
        )
    }
}

export default About;