import React from 'react';
import {
    BlogIgemContent,
    BlogItem,
    BlogItemButton,
    BlogItemDate, BlogItemText,
    BlogItemTitle,
    ImageContainer
} from "./styled/BlogItem";

import NoImage from "../../static/noimage.png";

export const BlogListItem = (props) => {
    const {title, author, date ,description, featuredImage} = props.frontmatter;

    return (
        <BlogItem>
            <div className="wrapper">
                <ImageContainer className="image">
                    { featuredImage ? <img src={featuredImage.childImageSharp.sizes.src} alt={title}/> : <img src={NoImage} alt={title}/>}
                </ImageContainer>
                <BlogIgemContent>
                    <BlogItemDate>{date} <br/>
                        <small>  {author}</small>
                    </BlogItemDate>
                    <BlogItemTitle>{title}</BlogItemTitle>
                    <BlogItemText>
                        {description}
                    </BlogItemText>
                    <BlogItemButton href={props.fields.slug}>Czytaj więcej...</BlogItemButton>
                </BlogIgemContent>
            </div>
        </BlogItem>
    );
}
