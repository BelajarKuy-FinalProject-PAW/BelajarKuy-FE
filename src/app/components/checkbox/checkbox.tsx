import React from "react"
import { MdCheckBoxOutlineBlank } from "react-icons/md";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", label, id, ...props }, ref) => {
    const baseClasses =
      "h-4 w-4 rounded border border-gray-300 bg-white transition-colors peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-focus:ring-2 peer-focus:ring-orange-500/20"
    const combinedClasses = `${baseClasses} ${className}`.trim()

    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input type="checkbox" className="sr-only peer" id={id} ref={ref} {...props} />
          <div className={combinedClasses}>
            <MdCheckBoxOutlineBlank className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
        </div>
        {label && (
          <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">
            {label}
          </label>
        )}
      </div>
    )
  },
)

Checkbox.displayName = "Checkbox"

export default Checkbox