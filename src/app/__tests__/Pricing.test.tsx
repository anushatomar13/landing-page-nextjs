import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import Pricing from "../components/Pricing";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("framer-motion", () => {
  const MotionComponent = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => {
    const filteredProps = { ...props };

    delete filteredProps.initial;
    delete filteredProps.animate;
    delete filteredProps.exit;
    delete filteredProps.transition;
    delete filteredProps.whileInView;
    delete filteredProps.viewport;
    
    return <div {...filteredProps}>{children}</div>;
  };
  
  return {
    motion: {
      div: MotionComponent,
      h2: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => {
        // Filter out animation-specific props
        const filteredProps = { ...props };
        delete filteredProps.initial;
        delete filteredProps.animate;
        delete filteredProps.exit;
        delete filteredProps.transition;
        
        return <h2 {...filteredProps}>{children}</h2>;
      },
    },
  };
});

jest.mock("@/components/ui/card", () => ({
  Card: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  CardContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock("@/components/ui/button", () => ({
  Button: ({ 
    children, 
    className, 
    onClick 
  }: { 
    children: React.ReactNode; 
    className?: string; 
    onClick?: () => void 
  }) => (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  ),
}));

describe("<Pricing />", () => {
  it("redirects to checkout with correct query parameters when 'Buy Now' is clicked", async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<Pricing />);

    const buyNowButton = screen.getAllByText("Buy Now")[0];
    await userEvent.click(buyNowButton);

    expect(push).toHaveBeenCalledWith(
      expect.stringContaining("/checkout?name=Basic&price=₹4,999")
    );
  });
});