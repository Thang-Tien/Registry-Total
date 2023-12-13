import Flex from "@/modules/ui/components/Flex";
import logo  from "./../../../../public/logo.png";
import Typography from "@/modules/ui/components/Text";
import Image from "next/image";

export default function AppIcon() {
  return <Flex.Row style={{ width: "inherit"}} gap="10px" alignItems="flex-end">
    <Image 
      src={logo.src}
      width={40}
      height={40}
      alt="Logo"
    />
    <Typography.Div content={"Registry VN"} fontWeight="bold" size="heading4" lineHeight="small" />
  </Flex.Row>;
}
