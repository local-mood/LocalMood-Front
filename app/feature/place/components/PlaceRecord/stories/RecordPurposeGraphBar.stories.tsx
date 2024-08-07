import type { Meta, StoryObj } from "@storybook/react";
import RecordPurposeGraphBar from "../molecules/PlaceRecordPurposeGraphBar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/Ui/Graph/GraphGage",
  component: RecordPurposeGraphBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof RecordPurposeGraphBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    type: "CAFE",
    evaluation: "시그니처 음료가 맛있어요",
    percentage: 67,
  },
};
