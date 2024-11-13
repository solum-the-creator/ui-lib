import classNames from "classnames";
import styles from "./button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
};

const Button = ({
  variant = "primary",
  fullWidth = false,
  size = "medium",
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        {
          [styles["button--fullWidth"]]: fullWidth,
          [styles["button--disabled"]]: disabled,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
