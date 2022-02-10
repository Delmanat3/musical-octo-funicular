
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
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

export const Carousel=()=>{

const [change,setChange]=React.useState({index:0})

handleChange=(event,value)=>{

    setChange({index:value});
}

handleChangeIndex=index=>{
    setChange({index,})
}
const [holdMe, setHoldMe] = React.useState([
    {
      i: "place",
    },
    {
      i: "place",
    },
  ]);
  React.useEffect(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      const newsContainer = GET_NEWS();
      console.log(newsContainer);

      myResolve(newsContainer);
      myReject(console.log("refetch for carousel"));
    });

    myPromise.then(
      function (value) {
        setHoldMe(value);
      },
      function (error) {
        console.error(error);
      }
    );
  }, []);
return(
<div>
 { ()`${ const index=change}`}
        <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
          <Tab label="tab n°1" />
          <Tab label="tab n°2" />
          <Tab label="tab n°3" />
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


)
}