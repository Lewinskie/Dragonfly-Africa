import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva("button", {
  variants: {
    intent: {
      default: [
        "bg-gray-500",
        "text-white",
        // "border-transparent",
        "hover:bg-gray-600",
        "shadow-lg",
      ],
      primary: [
        "bg-primary-500",
        "text-white",
        "text-base",
        "font-serif",
        // "border-transparent",
        "hover:bg-primary-400",
        // "hover:shadow-primary-50",
        "active:bg-primary-700",
      ],
      secondary: [
        "bg-secondary-500",
        "text-white",
        // "border-gray-400",
        "hover:bg-secondary-600",
        "hover:shadow-primary-lg",
      ],
      tertiary: [
        "bg-white",
        "text-gray-800",
        // "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-2", "px-3"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-3", "px-6"],
    },
  },
  compoundVariants: [
    // Default Buttons
    { intent: "default", size: "small", class: "uppercase" },
    { intent: "default", size: "medium", class: "uppercase" },
    { intent: "default", size: "large", class: "uppercase" },
    // Primary Buttons
    { intent: "primary", size: "small", class: "uppercase" },
    { intent: "primary", size: "medium", class: "uppercase" },
    { intent: "primary", size: "large", class: "uppercase" },
    // Secondary Buttons
    { intent: "secondary", size: "small", class: "uppercase" },
    { intent: "secondary", size: "medium", class: "uppercase" },
    { intent: "secondary", size: "large", class: "uppercase" },
  ],
  defaultVariants: [
    {
      intent: "primary",
      size: "medium",
    },
  ],
});

// export default function Button({ className, intent, size, ...props }) {
//   return <button className={button({ intent, size, className })} {...props} />;
// }

// export const Button = ({ className, intent, size, ...props }) => {
//   return (
//     <button className={buttonStyles({ intent, size, className })} {...props} />
//   );
// };

export const buttonStylesMerged = (variants) => {
  const classes = buttonStyles(variants);
  return twMerge(classes);
};

export const Button = ({ className, intent, size, ...props }) => {
  return (
    <button
      className={buttonStylesMerged({ intent, size, className })}
      {...props}
    />
  );
};
