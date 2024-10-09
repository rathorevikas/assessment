import { fireEvent, render, waitFor } from "@testing-library/react";
import { App } from "../../../App";
import { Provider } from "react-redux";
import store from "../../../store/store";

test("Delete User confirmation dialog is opening", async () => {
   const app = render(<Provider store={store}><App /></Provider>);
    await waitFor(()=> expect( app.getAllByTestId('DeleteIcon')) )
    const deleteButton = app.getByTestId('DeleteIcon')
    fireEvent.click(deleteButton)
    const linkElement = app.getByTestId("Delete-modal-open");
    expect(linkElement).toBeInTheDocument();
  });