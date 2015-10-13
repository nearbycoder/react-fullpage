import './demo.css';

import React    from 'react';
import ReactDOM from 'react-dom';

import {SectionsContainer, Section, Header, Footer} from '../index';

const app = document.querySelector('#app');

const Example = React.createClass({
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };
    
    return (
      <div>
        <Header>
          <a href="#sectionOne" className="opa">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
        </Header>
        <Footer>
          <a href="" className="opa">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="blanuta" verticalAlign="true" color="#69D2E7">Hello</Section>
          <Section color="#A7DBD8">Hello Boy</Section>
          <Section color="#E0E4CC">Hello Boy 2</Section>
        </SectionsContainer>
      </div>
    );
  }
});

ReactDOM.render(<Example/>, app);
