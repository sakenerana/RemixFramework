import { Button, Dropdown, MenuProps } from "antd";
import { FcExport } from "react-icons/fc";

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

export default function PrintDropdownComponent() {
  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <Button icon={<FcExport />}>Export</Button>
    </Dropdown>
  );
}
