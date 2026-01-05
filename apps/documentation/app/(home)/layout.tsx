import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "$/configs/layout.config";

export default function Layout({ children }: LayoutProps<"/">) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
