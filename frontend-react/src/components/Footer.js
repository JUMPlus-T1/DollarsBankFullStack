import React from 'react';
import styled from 'styled-components';

const Stylez = styled.div`
    .footer {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: cbd9f4;
		color: black;
		text-align: center;
		
	 }
`;

class Footer extends React.Component {
    render() {
        return (
			<Stylez>
            <footer class="page-footer font-small blue" className="footer">
				<div class="footer-copyright text-center py-3">© 2020 Copyright: DollarsBank
				</div>
			</footer>
			</Stylez>
        )
    }
}

export default Footer;