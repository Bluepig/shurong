import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';
import foodIcon from '../../assets/icons/food-icon.svg';
import entertainmentIcon from '../../assets/icons/entertainment-icon.svg';
import serviceIcon from '../../assets/icons/service-icon.svg';
import marketIcon from '../../assets/icons/market-icon.svg';
import clothesIcon from '../../assets/icons/clothes-icon.svg';
import allFormatsIcon from '../../assets/icons/all-formats-icon.svg';

import 'react-accessible-accordion/dist/minimal-example.css';
class FormatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onTitleClick = e => {
    this.props.onFatherClick(e.target.getAttribute('data-type'));
  };

  render() {
    return (
      <div className='format-list-wrapper'>
        <Accordion>
          <AccordionItem expanded={true}>
            <AccordionItemTitle>
              <h3 data-type='full' onClick={this.onTitleClick}>
                <img src={allFormatsIcon} alt='allFormatsIcon' />
                各业态对比
              </h3>
            </AccordionItemTitle>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3 onClick={this.onTitleClick} data-type='food'>
                <img src={foodIcon} alt='food-icon' />
                餐饮
              </h3>
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
              <h3 onClick={this.onTitleClick} data-type='entertainment'>
                <img src={entertainmentIcon} alt='entertainment-icon' />
                休闲娱乐
              </h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>fingermates</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3 onClick={this.onTitleClick} data-type='market'>
                <img src={marketIcon} alt='market-icon' />
                超市
              </h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>盒马鲜生</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3 onClick={this.onTitleClick} data-type='service'>
                <img src={serviceIcon} alt='service-icon' />
                配套服务
              </h3>
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
              <h3 onClick={this.onTitleClick} data-type='clothes'>
                <img src={clothesIcon} alt='clothes-icon' />
                零售
              </h3>
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
