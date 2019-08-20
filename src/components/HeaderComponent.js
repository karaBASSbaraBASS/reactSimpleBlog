import _ from 'lodash'
import React from "react";
import Link from "./Link";
import logo from '../assets/img/data-random-squares.svg';
import {
    Grid,
    Header,
    Container,
    Image,
    Menu,
    Visibility,
    Button,
    Icon
} from 'semantic-ui-react'
const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}
const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}
const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
} 
const fixedOverlayStyle = {
    ...overlayStyle,
    position: 'fixed',
    top: '80px',
    zIndex: 10,
} 
const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
}
const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '800px',
}
const LeftImage = () => (
    <Image
      floated='left'
      size='medium'
      src='/images/wireframe/square-image.png'
      style={{ margin: '2em 2em 2em -4em' }}
    />
)
  
const RightImage = () => (
    <Image
      floated='right'
      size='medium'
      src='/images/wireframe/square-image.png'
      style={{ margin: '2em -4em 2em 2em' }}
    />
)

class HeaderComponent extends React.Component {

    state = {
        menuFixed: false,
        overlayFixed: false,
    }
    
    handleOverlayRef = (c) => {
        const { overlayRect } = this.state
    
        if (!overlayRect) {
            this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
        }
    }
    
    stickOverlay = () => this.setState({ overlayFixed: true })
    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickOverlay = () => this.setState({ overlayFixed: false })
    unStickTopMenu = () => this.setState({ menuFixed: false })
    
    render() {

        const { menuFixed, overlayFixed, overlayRect } = this.state

        return (
            <>
                <Container text style={{ marginTop: '2em' }}>
                    <Header as='h1'>Welcome to simple blog!</Header>
                    <Header as='p'>
                        This example was created in less than one day.
                    </Header>
                </Container>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text className="menuWrapper">
                            <Grid.Row floated='left' width={5} className="menuColumn">
                                <Menu.Item>
                                    <Image size='mini' src={logo} />
                                </Menu.Item>
                                <Menu.Item header>
                                    <Link link={'/'} text={'Simple blog'} />
                                </Menu.Item>
                            </Grid.Row>
                            <Grid.Row floated='right' width={5} className="menuColumn">
                                <Menu.Item>
                                    <Button floated='right' primary>
                                        Create post
                                        <Icon name='chevron right' />
                                    </Button>
                                </Menu.Item>
                            </Grid.Row>
                        </Container>
                    </Menu>
                </Visibility>
            </>
        )
    }
}


export default HeaderComponent;