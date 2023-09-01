import type { Meta, StoryObj } from "@storybook/react";

import UserList from "./UserList";
import userHandlers from "../../mocks/handlers/userHandler";

const meta = {
  title: "Example/UserList",
  component: UserList,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [userHandlers.getUsers],
    },
  },
};

export const Empty: Story = {
  args: {},
  parameters: {
    msw: {
      handlers: [userHandlers.getUsers],
    },
  },
};
