import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <a href="/"><img src="img/logo.png" alt="ロゴ"/></a>
                </nav>
            </header>
        );
    }
}

export default Header;