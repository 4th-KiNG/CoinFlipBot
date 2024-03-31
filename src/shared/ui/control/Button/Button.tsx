import clsx from "clsx"
import * as React from "react"
import { forwardRef, useState } from "react"

import classes from "./Button.module.scss"
import { ButtonSpinner } from './ButtonSpinner'

export type ButtonVariant = "primary" | 'secondary'
interface BaseButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant
  text?: string
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'ton';
  backgroundImage?: string
  hoverBackgroundImage?: string
}

export interface RegularButtonProps
  extends BaseButtonProps,
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  as: "button";
}

export interface AnchorButtonProps
  extends BaseButtonProps,
  React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  href: string;
}

export interface LinkButtonProps extends BaseButtonProps {
  as: "link";
  to: string;
}


export type ButtonProps =
  RegularButtonProps |
  AnchorButtonProps |
  LinkButtonProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    text,
    variant = "primary",
    isDisabled,
    isLoading,
    size,
    backgroundImage,
    hoverBackgroundImage,
    ...other
  } = props

  const [isHover, setIsHover] = useState<boolean>(false)

  const buttonClasses = clsx(classes.button, className, {
    [classes._primary]: variant === "primary",
    [classes._secondary]: variant === "secondary",
    [classes._xsm]: size === "xsm",
    [classes._sm]: size === "sm",
    [classes._md]: size === "md",
    [classes._lg]: size === "lg",
    [classes._ton]: size === "ton",
  })

  if (other.as === "button") {
    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...other}
        disabled={isDisabled}
        onMouseEnter={() => {
          console.log('HOVER')
          setIsHover(true)
        }}
        onMouseLeave={() => {
          console.log('LEAVE')
          setIsHover(false)
        }}
      >
        <p className={classes.button_text}>{text}</p>
        <img
          src={(isHover && hoverBackgroundImage) ? hoverBackgroundImage : backgroundImage}
        />
        {children}
        <ButtonSpinner isLoading={isLoading} />
      </button>
    )
  }

  if (other.as === "a") {
    return (
      <a className={buttonClasses} {...other}>
        {children}
        <ButtonSpinner isLoading={isLoading} />
      </a>
    )
  }


  throw new Error("Button as prop must be one of: button, a, link")
})
