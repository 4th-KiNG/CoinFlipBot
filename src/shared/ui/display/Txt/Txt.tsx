import clsx from "clsx"
import { observer } from "mobx-react-lite"
import { ComponentProps, FC, PropsWithChildren } from "react"

import classes from './Txt.module.scss'

interface TxtProps extends PropsWithChildren, ComponentProps<'span'>{
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Txt: FC<TxtProps> = observer(({ children, size, className, ...otherProps }) => {
  return (
    <span
      className={clsx(className, classes.txt, {
        [classes._sm]: size === 'sm',
        [classes._md]: size === 'md',
        [classes._lg]: size === 'lg',
      })}
      {...otherProps}
    >
      {children}
    </span>
  )
})