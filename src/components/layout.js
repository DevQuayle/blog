import React from "react"
import {BlogSection} from "./styled/BlogSection";
import LogoImage from '../../static/logo.png';
import {Logo,LogoWrapper} from "./styled/Logo";

class Layout extends React.Component {
  render() {
    const {  children } = this.props

    return (
      <BlogSection>
          <LogoWrapper>
            <Logo src={LogoImage}></Logo>
          </LogoWrapper>
          <br/>
          <br/>
          <br/>
        <main>{children}</main>
        <footer></footer>
      </BlogSection>
    )
  }
}

export default Layout
