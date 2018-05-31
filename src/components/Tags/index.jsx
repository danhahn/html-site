import React from "react";
import styles from "./tag-list.module.css";
import classNames from "classnames/bind";
import Icon from "react-fontawesome";

const TagList = ({ tags: { data, label, icon } }) => {
  const cx = classNames.bind(styles);
  const typeClasses = cx({ type: true, [label]: label });
  return (
    <div className={styles.TagList}>
      <div className={typeClasses}>
        <Icon name={icon.slice(6)} />
      </div>
      <ul className={styles.list}>
        {data.map((item, i) => (
          <li key={`${item}-${i}`} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <div className="Tags">
      {tags.html ? <TagList tags={tags.html} /> : null}
      {tags.css ? <TagList tags={tags.css} /> : null}
      {tags.attribute ? <TagList tags={tags.attribute} /> : null}
    </div>
  );
};

Tags.defaultProps = {
  tags: {
    html: {
      icon: "html5",
      data: [
        "html",
        "head",
        "title",
        "body",
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "br",
        "blockquote",
        "ol",
        "ul",
        "li",
        "div",
        "section",
        "article",
        "header",
        "footer"
      ],
      label: "html"
    },
    css: {
      data: ["color"],
      label: "css",
      icon: "css3"
    },
    attribute: {
      data: ["href", "class", "id"],
      label: "attribute",
      icon: "quote-right"
    }
  }
};

export default Tags;
