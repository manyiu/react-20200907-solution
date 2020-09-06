import React from "react";
import colors from "./colors";

const timeAgo = (previous) => {
  const current = +new Date();

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
};

const Details = ({ title, avatar, channel, views, created, yellow }) => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "60px repeat(2, 1fr)",
    gridTemplateRows: "auto",
    gridTemplateAreas: `"avatar title title"
                        "avatar channel channel"
                        "avatar views created"`,
    gridGap: "12px",
  };

  const imgStyle = {
    gridArea: "avatar",
    borderRadius: "50%",
    width: "100%",
  };

  const titleStyle = {
    gridArea: "title",
    color: colors.primary,
  };

  const channelStyle = {
    gridArea: "channel",
    color: colors.secondary,
  };

  const viewsStyle = {
    gridArea: "views",
    color: colors.secondary,
  };

  const createdStyle = {
    gridArea: "created",
    color: colors.secondary,
  };

  return (
    <div style={containerStyle}>
      <img src={avatar} style={imgStyle} alt={title} />
      <div style={titleStyle}>{title}</div>
      <div style={channelStyle}>
        {channel} {yellow ? "✔️" : "❌"}
      </div>
      <div style={viewsStyle}>{views} views</div>
      <div style={createdStyle}>{timeAgo(created)}</div>
    </div>
  );
};

export default Details;
