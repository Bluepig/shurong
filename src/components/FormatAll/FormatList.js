import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/minimal-example.css';
import 
class FormatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='format-list-wrapper'>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <span>餐饮</span>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <span>休闲娱乐</span>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <span>超市</span>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <span>配套服务</span>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <span>零售</span>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default FormatList;
