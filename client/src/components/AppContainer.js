import React, {Component} from 'react';
import { UncontrolledCarousel }from 'reactstrap';
class AppContainer extends Component{

render(){
    const items = [
        {
          src: 'https://media.tiffany.com/is/image/tiffanydm/HighJewelry_LP_Hero_April_Desktop?$tile$&wid=2992',
          altText: 'Slide 1',
          caption: '',
          header: 'Perfect Diamonds',
          key: '1'
        },
        {
          src: 'https://media4.s-nbcnews.com/i/newscms/2020_03/1528503/baublebar-today-main-200114-new_73a704c8c29626174fe184736d9edf2c.jpg',
          altText: 'Slide 2',
          caption: '',
          header: 'Must-have Styles',
          key: '2'
        },
        {
          src: 'https://d2einedfuvjwol.cloudfront.net/homeslider/71b359/1-44.jpg',
          altText: 'Slide 3',
          caption: '',
          header: 'Sparkle Collection',
          key: '3'
        },
        {
          src:'https://images-aka.kay.com/kay/homepage/5.10/k_20210510_hp_MIGM_dsktp.jpg',
          altText:'Slide 4',
          caption:'',
          header:'',
          key:'4'
        }
      ];
    return(
        <div className="AppContainer">
        <UncontrolledCarousel   items={items}/> 
          
        </div>
    );
}


}

export default AppContainer;