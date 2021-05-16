import AppManageOrders from "../AppManageOrders";
import { fireEvent, render, screen, wait,cleanup,waitFor, act } from "@testing-library/react";
import mockedAxios from 'axios'
const mockData={mockData:[
{
    _id:"456789",
    userId:"23456789",
    name:"wertyujh",
    number:"nonono",
    address:"blala",
    city:"ahbjdf",
    country:"ro",
    payment:"sfdggth",
    cardNr:"1234567",
    shipping:"DHL",
    products:[{
        _id:"1234567u",
        product:"12345789",
        name:"Amelia",
        category:"Rings",
        material:"Gold",
        price:234,
        qauntity:18,
        image:"img.png",
        qty:7
    }],
    total:1150,
    transport:0,
    status:"Shipped"
}
]
}

afterEach(cleanup);


test("Get and render Orders",()=>{
    mockedAxios.get.mockResolvedValueOnce(mockData);
   render(<AppManageOrders/>);
});

