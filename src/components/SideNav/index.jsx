import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./side-nav.module.scss";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.checkOffset = this.checkOffset.bind(this);
    this.updateOffSetLeft = this.updateOffSetLeft.bind(this);
    this.state = {
      left: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      const { left } = this.outter.getBoundingClientRect();
      this.setState({ left });
    }, 1);

    window.addEventListener("scroll", this.checkOffset);
    window.addEventListener("resize", this.updateOffSetLeft);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkOffset);
    window.removeEventListener("resize", this.updateOffSetLeft);
  }

  updateOffSetLeft() {
    const { left } = this.outter.getBoundingClientRect();
    this.setState({ left });
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
    const { nav } = this.props;
    const { left } = this.state;
    return (
      <aside className={styles.sideNav} ref={el => (this.outter = el)}>
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
                  to={node.fields.slugIndex || node.fields.slug}
                >
                  {node.frontmatter.lesson}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideNav;
