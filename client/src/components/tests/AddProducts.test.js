import AppAddForm from '../AppAddForm';
import { fireEvent, render, screen,cleanup, waitFor } from "@testing-library/react";
import * as ReactDOM from "react-dom"
import { ExpansionPanelActions } from '@material-ui/core';

test("renders the corect content",()=>{
   const {getByText,getByLabelText}=render (<AppAddForm/>)
   getByText("Save new product");
   getByLabelText("Name");
   getByText("Material:");
   getByText("Category:");
   getByText("Quantity:");
   getByText("Price:");
   getByText("Image:")
})




test("Add Form",()=>{
   render(<AppAddForm/>);
   expect(screen.getByRole("textbox",{name: "Name" })).toBeInTheDocument();
   expect(screen.getByRole("option",{name:"Rings"})).toBeInTheDocument();
   expect(screen.getByRole("option",{name:"Earrings"})).toBeInTheDocument();
   expect(screen.getByRole("option",{name:"Necklaces"})).toBeInTheDocument();
   expect(screen.getByRole("option",{name:"Watches"})).toBeInTheDocument();
   expect(screen.getByRole("option",{name:"Bracelets"})).toBeInTheDocument();
   expect(screen.getByRole("option",{name:"Silver"})).toBeInTheDocument();
   expect(screen.getByRole("option",{name:"Gold"})).toBeInTheDocument();
   expect(screen.getByRole("option",{name:"Stainless steel"})).toBeInTheDocument();
   expect(screen.getByRole("spinbutton",{name:"Price:"})).toBeInTheDocument();
   expect(screen.getByRole("spinbutton",{name:"Quantity:"})).toBeInTheDocument();
   expect(screen.getByRole("img",{name:""})).toBeInTheDocument();
   expect(screen.getByRole("button",{name:"Save new product"})).toBeInTheDocument();


})


test("Valid form",()=>{
render(<AppAddForm/>);
fireEvent.input(screen.getByRole("textbox", { name: "Name" }), {target: { value: "Gloria" } });
fireEvent.input(screen.getByRole("spinbutton", { name: "Price:" }), {target: { value: 234 } });
fireEvent.input(screen.getByRole("spinbutton", { name: "Quantity:" }), {target: { value: 65 } });
fireEvent.input(screen.getByRole("img", { name: "" }), {target: { value: img.png } });

})