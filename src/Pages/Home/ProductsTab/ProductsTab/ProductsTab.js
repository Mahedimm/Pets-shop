import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import Products from '../Produtcts/Products';
const ProductsTab = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <Container>
            <TabContext value={value} >
          
            <Tabs value={value} onChange={handleChange} sx={{ display: 'flex',justifyContent: 'center',px:50 }}>
                <Tab label="Featured" value='1' />
                <Tab label="Latest" value='2' />
                <Tab label="Bestseller" value='3' />
            </Tabs>
        
            <TabPanel value="1">
                <Products/>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
      </Container>
    );
};

export default ProductsTab;