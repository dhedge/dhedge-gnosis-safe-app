import { FC } from "react"
import { Button } from "@gnosis.pm/safe-react-components"

interface IProps {
  handleCancel: () => void;
  handleConfirm: () => void;
  confirmDisabled?: boolean;
  confirmText?: string
}

export const ConfirmCancelButtons: FC<IProps> = ({ handleCancel, handleConfirm, confirmDisabled = false, confirmText = "Confirm" }) => {
  return (
    <div className={`confirm-button-container`}>
        <div className="mg-r-small">
            <Button
                size = "md"
                color = "secondary"
                onClick = {handleCancel}
            >
                Cancel
            </Button>
        </div>
        <Button
            size = "md"
            color = "primary"
            disabled = {confirmDisabled}
            onClick = {handleConfirm}
        >
            {confirmText}
        </Button>
    </div>
  )
}