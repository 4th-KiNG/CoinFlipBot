import { Modal as BaseModal } from "@mui/material"
import clsx from 'clsx'
import { observer } from "mobx-react-lite"

import classes from './Modal.module.scss'

interface ModalProps {
  children: React.ReactElement;
  className?: string;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = observer(({
  children,
  className,
  onClose,
  isOpen,
}: ModalProps) => {
  return (
    <BaseModal
      disableScrollLock
      className={classes.modal}
      open={isOpen}
      onClose={onClose}
    >
      <div className={clsx(classes.modalInner, className)}>
        {children}
      </div>
    </BaseModal>
  )
})