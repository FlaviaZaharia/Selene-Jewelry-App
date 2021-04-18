import React, {Component} from 'react';
import { UncontrolledCarousel }from 'reactstrap';
class AppContainer extends Component{

render(){
    const items = [
        {
          src: 'https://media.tiffany.com/is/image/tiffanydm/HighJewelry_LP_Hero_April_Desktop?$tile$&wid=2992',
          altText: 'Slide 1',
          caption: 'Slide 1',
          header: 'Slide 1 Header',
          key: '1'
        },
        {
          src: 'https://media4.s-nbcnews.com/i/newscms/2020_03/1528503/baublebar-today-main-200114-new_73a704c8c29626174fe184736d9edf2c.jpg',
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Slide 2 Header',
          key: '2'
        },
        {
          src: 'https://www.vividdiamonds.com/pub/media/wysiwyg/ves_mohawk/home/banner-2-no-text.jpg',
          altText: 'Slide 3',
          caption: 'Slide 3',
          header: 'Slide 3 Header',
          key: '3'
        }
      ];
    return(
        <div>
        <UncontrolledCarousel  className="AppContainer" items={items}/> 
          
        </div>
    );
}


}

export default AppContainer;