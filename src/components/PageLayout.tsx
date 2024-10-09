import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageUILayout({ children, title }: Props) {
  const t = useTranslations("PageLayout");

  return (
    <div className="relative flex justify-center">
      <LocaleSwitcher />
      <div className="cvContainer">{children}</div>
    </div>
  );
}
