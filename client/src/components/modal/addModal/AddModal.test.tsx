import { fireEvent, render } from "@testing-library/react";
import { App } from "../../../App";
import { Provider } from "react-redux";
import store from "../../../store/store";

test("Open Add new user modal on clicking add new user button", () => {
   const app = render(<Provider store={store}><App /></Provider>);
    const addUser = app.getByTestId('add_new_user_button')
    fireEvent.click(addUser)
    const linkElement = app.getByTestId("Add-user-modal-open");
    expect(linkElement).toBeInTheDocument();
  });