import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import { GET_NEWS } from '../../utils/API/backendless';
const styles = {
  tabs: {
    background: '#fff',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};


  // const [holdMe, setHoldMe] = React.useState([
  //   {
  //     i: "place",
  //   },
  //   {
  //     i: "place",
  //   },
  // ]);
  // React.useEffect(() => {

  // }, []);
export class Carousel extends React.Component {
  state = {
    index: 0,
    ggg:null || [{
      "snippet": "Helium, a wireless network powered by cryptocurrency, hints at the practical promise of decentralized services.",
      "created": 1644440934000,
      "words": 1520,
      "section": "Technology",
      "abstract": "Helium, a wireless network powered by cryptocurrency, hints at the practical promise of decentralized services.",
      "type": "News",
      "ownerId": "85E22B28-6D61-4765-9DE4-9B2D6B7EF3F9",
      "url": "https://www.nytimes.com/2022/02/06/technology/helium-cryptocurrency-uses.html",
      "lead_paragraph": "One of the most frequent questions asked by crypto skeptics is: What can you actually do with crypto, besides financial speculation and crimes?",
      "___class": "News",
      "updated": null,
      "headline": "Maybe There’s a Use for Crypto After All",
      "objectId": "1444B8EE-5AE2-4A82-8ED9-C7266F3C7E49"
  }]
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
componentDidMount(){
    let myPromise = new Promise(function (myResolve, myReject) {
      const newsContainer = GET_NEWS();
      console.log(newsContainer);

      myResolve(newsContainer);
      myReject(console.log("refetch for carousel"));
    });

    myPromise.then(
      function (value) {
        this.setState({
          ggg:value
        })   
},
      function (error) {
        console.error(error);
      }
    );
    
    

}
  // handleChange = (event, value) => {
  //   this.setState({
  //     index: value,
  //   });
  // };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;
const{ggg}=this.state;
    return (
      <div>
        <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
          {ggg.map((item)=>(
        <>
          <Tab label={`${item.words}`} />
          </>
          ))}
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
            <Select value={10} autoWidth={false}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
        </SwipeableViews>
      </div>
    );
  }
}

