import React, { Component } from "react";
import Link from "gatsby-link";
import Button from "../Button";
import styles from "./side-nav.module.scss";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.checkOffset = this.checkOffset.bind(this);
    this.updateOffSetLeft = this.updateOffSetLeft.bind(this);
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.state = {
      left: null,
      sideopen: false,
      windowWidth: 0
    };
  }
  componentDidMount() {
    setTimeout(this.updateOffSetLeft, 1);

    window.addEventListener("scroll", this.checkOffset);
    window.addEventListener("resize", this.updateOffSetLeft);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkOffset);
    window.removeEventListener("resize", this.updateOffSetLeft);
  }

  toggleSideNav() {
    this.setState({ sideopen: !this.state.sideopen });
  }

  updateOffSetLeft() {
    const { left } = this.outter.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    this.setState({ left, windowWidth });
  }

  checkOffset() {
    const { top, left } = this.outter.getBoundingClientRect();
    if (top < 0) {
      this.inner.classList.add(styles.fixed);
    } else {
      this.inner.classList.remove(styles.fixed);
    }
  }

  render() {
    const { nav, passedClassName, buttons } = this.props;
    const { left, sideopen, windowWidth } = this.state;
    console.log(buttons);
    return (
      <aside
        className={`${styles.sideNav} ${passedClassName}`}
        ref={el => (this.outter = el)}
      >
        <div
          className={styles.inner}
          ref={el => (this.inner = el)}
          style={{ left }}
        >
          <ul className={styles.nav}>
            {nav.map(({ node }) => (
              <li className={styles.item} key={node.id}>
                <Link
                  className={styles.link}
                  activeClassName={styles.active}
                  to={node.fields.slug}
                >
                  {node.frontmatter.lesson}
                </Link>
              </li>
            ))}
          </ul>
          {buttons ? (
            <div>
              <h3>Downloads</h3>
              <ul className={styles.btnList}>
                {Object.entries(buttons).map(([title, data]) => {
                  {
                    return data ? (
                      <li key={title}>
                        <Button>
                          <a href={data.file.publicURL}>
                            {title.replace(/\_/g, " ")}
                          </a>
                        </Button>
                      </li>
                    ) : null;
                  }
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </aside>
    );
  }
}

export default SideNav;
