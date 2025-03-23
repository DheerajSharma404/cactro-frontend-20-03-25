// Define TypeScript interfaces
export interface NavbarItem {
  title: string;
  path: string;
  hasDropdown: boolean;
}

export interface CTAButton {
  title: string;
  path: string;
  variant: "outline" | "filled" | "text";
}

export const navbarItems: NavbarItem[] = [
  {
    title: "Product",
    path: "/product",
    hasDropdown: true,
  },
  {
    title: "Enterprise",
    path: "/enterprise",
    hasDropdown: false,
  },
  {
    title: "Resources",
    path: "/resources",
    hasDropdown: false,
  },
  {
    title: "Pricing",
    path: "/pricing",
    hasDropdown: false,
  },
];

export const ctaButtons: CTAButton[] = [
  {
    title: "Sign in",
    path: "/signin",
    variant: "text",
  },
  {
    title: "TALK TO SALES",
    path: "/contact-sales",
    variant: "outline",
  },
  {
    title: "TRY FOR FREE",
    path: "/try-free",
    variant: "filled",
  },
];
