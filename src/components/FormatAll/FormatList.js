import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

import foodIcon from '../../assets/icons/food-icon.png';
import entertainmentIcon from '../../assets/icons/entertainment-icon.png';
import serviceIcon from '../../assets/icons/service-icon.png';
import marketIcon from '../../assets/icons/market-icon.png';
import clothesIcon from '../../assets/icons/clothes-icon.png';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/minimal-example.css';
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
              <h3>餐饮</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>礼客食荟</li>
                <li>汉堡王</li>
                <li>川西坝子</li>
                <li>稻香</li>
                <li>海立阁</li>
                <li>福团餐厅</li>
                <li>木仔记</li>
                <li>梅园村酒家</li>
                <li>星巴克</li>
                <li>1767创意餐厅</li>
                <li>果蔬共和</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3>休闲娱乐</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>fingermates</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3>超市</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>盒马鲜生</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3>配套服务</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>梵创造型</li>
                <li>桐苑养发</li>
                <li>星和医疗美容</li>
                <li>咕噜咕噜</li>
                <li>乐乐派</li>
                <li>美吉姆</li>
                <li>企鹅英语</li>
                <li>亚马逊</li>
                <li>抓娃娃机</li>
                <li>悦上齿科</li>
                <li>极光影院</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3>零售</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>汉森家居</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default FormatList;
