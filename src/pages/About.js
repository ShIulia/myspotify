import React from "react";

class About extends React.Component {
  componentWillUnmount() {
    console.log(`About inside componentWillUnmount`);
  }
}

const AboutHeader = () => {
  return <div>About page</div>;
};

export default About;
