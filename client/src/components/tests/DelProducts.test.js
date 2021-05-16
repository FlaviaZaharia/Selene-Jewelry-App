import AppDeleteForm from '../AppDeleteForm'
import { fireEvent, render, screen,cleanup, waitFor } from "@testing-library/react";


const MockId={id:"60996bfbc11b5a29487bdc39"};
afterEach(cleanup);
test("Render component",async()=>{
    mockedAxios.delete.mockResolvedValueOnce(MockId);
    render(<AppDeleteForm/>);
    const IdInputEl = screen.getByPlaceholderText("Enter id");
    const submitBtnEl = screen.getByRole("button",{name:"Delete"});
    const onClickCallback = jest.fn();
    expect(IdInputEl.value).toBe("");
    expect(submitBtnEl).toBeInTheDocument("Delete");
    fireEvent.change(IdInputEl,{
        target:{value:MockId},
    });
    await waitFor(()=>fireEvent.click(submitBtnEl));
    expect(IdInputEl).toBeInTheDocument("");
    
});