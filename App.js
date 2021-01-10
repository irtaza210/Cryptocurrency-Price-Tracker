import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Button from '@material-ui/core/Button'
import SearchBar from "material-ui-search-bar";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TextField from '@material-ui/core/TextField';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const Coin = ({
    coinname,
    coinprice,
    coinsymbol,
    coinmarketcap,
    coinvolume,
    coinimage,
    coinpriceChange
  }) => {
    return (
      <div className='coin-container'>
        <div className='xaxis'>
          <div className='type'>
            <img src={coinimage}/>
            <h1>{coinname}</h1>
            <p className='short'>{coinsymbol}</p>
          </div>
          <div className='details'>
            <p className='price'>${coinprice}</p>
            <p className='volume'>${coinvolume.toLocaleString()}</p>

            {coinpriceChange < 0 ? (
              <p className='change red'>{coinpriceChange.toFixed(2)}%</p>
            ) : (
              <p className='change green'>{coinpriceChange.toFixed(2)}%</p>
            )}

            <p className='marketvalue'>
              Mkt Cap: ${coinmarketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };


  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      Charts: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
        <a href = "https://www.coindesk.com">
          {['CRYPTOCURRENCY CHARTS'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>
        <List>
        <a href = "https://www.coindesk.com/price/bitcoin">
          {['BITCOIN CHART'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>
        <List>
        <a href = "https://www.coindesk.com/price/ethereum">
          {['ETHEREUM CHART'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>
        <List>
        <a href = "https://www.coindesk.com/price/xrp">
          {['XRP CHART'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>
        <List>
        <a href = "https://www.coindesk.com/price/stellar">
          {['STELLAR CHART'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>
        <List>
        <a href = "https://www.coindesk.com/price/tether">
          {['TETHER CHART'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>
        <List>
        <a href = "https://www.coindesk.com/price/chainlink">
          {['CHAINLINK CHART'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>
        <List>
        <a href = "https://www.coindesk.com/price/litecoin">
          {['LITECOIN CHART'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>
        <List>
        <a href = "https://www.coindesk.com/price/cardano">
          {['CARDANO CHART'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <MonetizationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </a>
        </List>

        </div>
      );



  return (
    <div className='everything'>
      <div className='searchtime'>
        <h1 className='title'>Cryptocurrency Price Tracker</h1>
        <div className = "searchbar">
        <form>

          <TextField id="outlined-basic" color = "secondary" label="Search" variant="outlined"

            className='searching'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />

        </form>
        </div>
        <br></br>
        <a href = "https://www.coinbase.com"> <Button variant = "contained" color = "secondary">Buy/Sell Cryptocurrency </Button> </a>
      </div>
      <div>

        {['Charts'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button id = "leftbutton" color = "primary" onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>



      {filteredCoins.map(coin => {
        return (

          <Coin
            coinkey={coin.id}
            coinname={coin.name}
            coinprice={coin.current_price}
            coinsymbol={coin.symbol}
            coinmarketcap={coin.total_volume}
            coinvolume={coin.market_cap}
            coinimage={coin.image}
            coinpriceChange={coin.price_change_percentage_24h}
          />

        );
      })}
    </div>

  );
}

export default App;
