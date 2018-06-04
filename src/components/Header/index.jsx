import React, { Component } from "react";
import Link from "gatsby-link";

import ExtendLayout from "../ExtendLayout";
import Logo from "../Logo";
import Burger from "../Burger";
import Nav from "../Nav";
import styles from "./header.module.scss";

// fa - google - drive

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

  toggleAtive = () => {
    this.setState({ active: !this.state.active });
  };

  closeNav = () => {
    this.setState({ active: false });
  };

  render() {
    const { classFiles, paths, lessonList } = this.props;
    const { active } = this.state;
    return (
      <ExtendLayout passedClassName={styles.bgcolor}>
        <header className={styles.header}>
          <div className={styles.headerMobile}>
            <Link to="/" style={{ display: "block", lineHeight: 1 }}>
              <Logo width={115} height={35} color="white" />
            </Link>
            <Burger active={active} toggleAtive={this.toggleAtive} />
          </div>
          <Nav
            paths={paths}
            classFiles={classFiles}
            active={active}
            toggleAtive={this.toggleAtive}
            lessonList={lessonList}
          />
        </header>
      </ExtendLayout>
    );
  }
}

export default Header;
