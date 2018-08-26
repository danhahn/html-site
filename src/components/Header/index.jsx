import React, { Component } from "react";
import Link from "gatsby-link";

import ExtendLayout from "../ExtendLayout";
import Logo from "../Logo";
import Burger from "../Burger";
import Nav from "../Nav";

import styled from "styled-components";
import { colors as c } from "../../scss/colors";

const StyledHeader = styled.header`
  display: grid;
  align-items: center;
  @media all and (max-width: 1199px) {
    padding: 0 1em;
  }
  @media all and (min-width: 769px) {
    grid-template-columns: auto 1fr;
    grid-gap: 1em;
  }
  @media all and (max-width: 768px) {
  }
`;

const Mobile = styled.div`
  @media all and (max-width: 768px) {
    padding: 1em 0;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`;

const A = styled(Link)`
  color: ${c.primary};
`;

class Header extends Component {
  static defaultProps = {
    classFiles: null,
    paths: []
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.closeNav);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.closeNav);
  }

  toggleActive = (state) => {
    if(!state) {
      return this.setState({ active: false });
    }
    this.setState({ active: !this.state.active });
  };

  closeNav = () => {
    this.setState({ active: false });
  };

  render() {
    const { classFiles, paths, lessonList, dateInfo } = this.props;
    const { active } = this.state;
    return (
      <ExtendLayout bgcolor={c.darker}>
        <StyledHeader>
          <Mobile>
            <A
              to="/"
              style={{ display: "block", lineHeight: 1 }}
              onClick={() => this.toggleActive(false)}
            >
              <Logo width={115} height={35} color={c.white} />
            </A>
            <Burger active={active} toggleActive={this.toggleActive} />
          </Mobile>
          <Nav
            paths={paths}
            classFiles={classFiles}
            active={active}
            toggleActive={this.toggleActive}
            lessonList={lessonList}
            dateInfo={dateInfo}
          />
        </StyledHeader>
      </ExtendLayout>
    );
  }
}

export default Header;
