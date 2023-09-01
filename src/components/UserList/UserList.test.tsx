import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("데이터가 없으면 없어요가 표시된다.", async () => {
  render(<UserList />);

  const noDataText = await screen.findByText("lee");

  expect(noDataText).toBeInTheDocument();
});
