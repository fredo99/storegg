import { Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/input";

export default{
    title: 'Components/Atoms/Input',
    component: Input,
} as Meta;

const Template = (props: InputProps) => <Input {...props} />

export const Default = Template.bind({});
Default.args = {
    label: "Nama Lengkap",
};